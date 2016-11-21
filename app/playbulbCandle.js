(function() {
  'use strict';

  const CANDLE_SERVICE_UUID = 0xFF02;
  const CANDLE_DEVICE_NAME_UUID = 0xFFFF;

  class PlaybulbCandle {
    constructor() {
      this.device = null;
    }
    connect() {
      let options = {filters:[{services:[ CANDLE_SERVICE_UUID ]}]};
      return navigator.bluetooth.requestDevice(options)
        .then(device => {
          this.device = device;
          return this.device.gatt.connect();
        });
    }

    getDeviceName() {
      return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
      .then(service => service.getCharacteristic(CANDLE_DEVICE_NAME_UUID))
      .then(characteristic => characteristic.readValue())
      .then(data => {
        let decoder = new TextDecoder('utf-8');
        return decoder.decode(data);
      });
    }


  }

  window.playbulbCandle = new PlaybulbCandle();

})();

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
        });
    }

    getDeviceName() {

    }


  }

  window.playbulbCandle = new PlaybulbCandle();

})();

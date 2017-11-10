const { Timer, Clock } = require('../client/clockLogic')

jest.useFakeTimers();

describe('clockLogic', () => {
  describe('Timer', () => {
    it('adds a call back to the callbacks array when timer.addCallback is called', () => {
      let timer = new Timer();
      let func = () => { return "that's a function" };
      timer.addCallback(func);

      expect(timer.callbacks).toEqual(expect.arrayContaining([func]));
    });

    it('calls functions in callbacks once every second', () => {
      let timer = new Timer();
      let func = jest.fn();
      timer.addCallback(func);
      
      jest.runTimersToTime(2000);

      expect(func.mock.calls.length).toBe(2);
    });
  });
  describe('Clock', () => {
    it('calls renderClock once every second', () => {
      let func = jest.fn();
      Clock.prototype.renderClock = func;
      let clock = new Clock();

      jest.runTimersToTime(2000);

      expect(func.mock.calls.length).toBe(2);
    })
  })
});
import Tamagotchi from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let fuzzy = new Tamagotchi("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setFood();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

});

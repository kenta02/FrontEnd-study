"use strict";

class Car{
  constructor(fuel){
    this.fuel = fuel;
  }
  run(distance){
    this.fuel = this.fuel - distance;
    console.log(`走行距離${distance},現在の燃料は${this.fuel}`);

  }
}

class Trunk extends Car{
  (distance){
    // トラックは燃費が悪いので距離の２倍燃料を消費するようにする
    this.fuel =this.fuel - distance *2;
      console.log(`走行距離${distance},現在の燃料は${this.fuel}`);
  }
}
// 燃料６０積んだ車を作る
const car = new Car(60);

const trunk = new Trunk(60);

car.run(5);
trunk.run(5);

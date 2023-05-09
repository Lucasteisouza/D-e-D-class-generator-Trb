import Monster from './Monster';

class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 100;
  } 
}

export default Dragon;
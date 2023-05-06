import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addCreatedRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addCreatedRacesInstances(): void {
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}
export default Halfling;
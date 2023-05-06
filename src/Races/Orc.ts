import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addCreatedRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addCreatedRacesInstances(): void {
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}
export default Orc;
import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addCreatedRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addCreatedRacesInstances(): void {
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}
export default Dwarf;
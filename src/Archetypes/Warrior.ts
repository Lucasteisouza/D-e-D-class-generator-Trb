import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances(): void {
    Warrior._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;
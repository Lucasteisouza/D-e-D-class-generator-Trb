import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances(): void {
    Mage._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}

export default Mage;
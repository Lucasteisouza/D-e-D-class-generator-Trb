import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _challenger: SimpleFighter[];

  constructor(player: Fighter, enemy: SimpleFighter[]) {
    super(player);
    this._challenger = enemy;
  }

  fight(): number {
    for (let i = 0; i < this._challenger.length; i += 1) {
      while (this.player.lifePoints !== -1
        && this._challenger[i].lifePoints !== -1) {
        this.fightRound(i);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fightRound(i: number): void {
    this.player.attack(this._challenger[i]);
    if (this._challenger[i].lifePoints !== -1) {
      this._challenger[i].attack(this.player);
    }
  }
}

// const PVP1 = new PVP(new Character('Bananao'), new Character('Bananinha'));
// console.log(PVP1.fight());

export default PVE;
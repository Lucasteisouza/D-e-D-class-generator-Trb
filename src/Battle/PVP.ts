// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _challenger: Fighter;

  constructor(player: Fighter, character2: Fighter) {
    super(player);
    this._challenger = character2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1
      && this._challenger.lifePoints !== -1) {
      this.fightRound();
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fightRound(): void {
    this.player.attack(this._challenger);
    if (this._challenger.lifePoints !== -1) {
      this._challenger.attack(this.player);
    }
  }
}

// const PVP1 = new PVP(new Character('Bananao'), new Character('Bananinha'));
// console.log(PVP1.fight());

export default PVP;
import { Prize } from "./prize.js";

export class RaffleLogic {
  constructor(
    private participants: string[],
    private prizes: Prize[],
  ) {}

  // Hauptmethode, die den Ablauf steuert
  public runRaffle(): Map<string, string> {
    const winners = new Map<string, string>();
    const shuffledParticipants = this.shuffleParticipants(this.participants);
    this.assignPrizes(shuffledParticipants, winners);
    return winners;
  }

  // Teilnehmer mischen
  private shuffleParticipants(participants: string[]): string[] {
    const shuffled = [];
    while (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const selectedParticipant = participants[randomIndex];
      shuffled.push(selectedParticipant);
      participants.splice(randomIndex, 1);
    }
    return shuffled;
  }

  // Preise zuweisen
  private assignPrizes(participants: string[], winners: Map<string, string>): void {
    while (this.prizes.length > 0 && participants.length > 0) {
      const currentPrize = this.prizes[0];
      const currentWinner = participants.shift();
      winners.set(currentWinner, currentPrize.prizeName);

      if (currentPrize.prizeQuantity > 1) {
        currentPrize.prizeQuantity--;
      } else {
        this.prizes.shift();
      }
    }
  }
}
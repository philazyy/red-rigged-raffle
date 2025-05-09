import { RaffleLogic } from "./raffle-logic.js";
import { Prize } from "./prize.js";

describe("RaffleLogic", () => {
  it("should assign all prizes correctly", () => {
    const participants = [
      "@Participant1",
      "@Participant2",
      "@Participant3",
      "@Participant4",
      "@Participant5",
    ];
    const prizes = [
      new Prize("Prize1", 1),
      new Prize("Prize2", 2),
      new Prize("Prize3", 1),
    ];

    const raffleLogic = new RaffleLogic(participants, prizes);
    const winners = raffleLogic.runRaffle();

    // Prüfen, ob die Anzahl der verlosten Preise korrekt ist
    const totalPrizes = prizes.reduce((sum, prize) => sum + prize.prizeQuantity, 0);
    expect(winners.size).toBe(totalPrizes); // Sollte fehlschlagen, wenn die Logik fehlerhaft ist
  });
});
import { GewinnbarerHase } from "./gewinnbarer-hase";
//     _    _                          _                  _           _   _
//    / \  | |__  ___ _ __   ___  __ _| | _____ _ __   __| | ___ _ __| | | | __ _ ___  ___
//   / _ \ | '_ \/ __| '_ \ / _ \/ _` | |/ / _ \ '_ \ / _` |/ _ \ '__| |_| |/ _` / __|/ _ \
//  / ___ \| |_) \__ \ | | |  __/ (_| |   <  __/ | | | (_| |  __/ |  |  _  | (_| \__ \  __/
// /_/   \_\_.__/|___/_| |_|\___|\__,_|_|\_\___|_| |_|\__,_|\___|_|  |_| |_|\__,_|___/\___|
export class AbsneakenderHase {
  constructor(
    private brokieMokies: string[],
    private gewinnbareHasen: GewinnbarerHase[],
  ) {}

  //  _____________________________
  // < Finger weg von meinem Code! >
  //  -----------------------------
  //       \                    / \  //\
  //        \    |\___/|      /   \//  \\
  //             /0  0  \__  /    //  | \ \
  //            /     /  \/_/    //   |  \  \
  //            @_^_@'/   \/_   //    |   \   \
  //            //_^_/     \/_ //     |    \    \
  //         ( //) |        \///      |     \     \
  //       ( / /) _|_ /   )  //       |      \     _\
  //     ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  //   (( / / )) ,-{        _      `-.|.-~-.           .~         `.
  //  (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
  //  (( /// ))      `.   {            }                   /      \  \
  //   (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
  //              ///.----..>        \             _ -~             `.  ^-`  ^-_
  //                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
  //
  public absneaken(): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.brokieMokies.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = zufälligerHase % this.brokieMokies.length;
      mokieBrokies.push(this.brokieMokies[rangierterHase]); // Ich push die Brokies auf die Mokies, yeah!
      this.brokieMokies.splice(rangierterHase, 1);
    }
    while (this.gewinnbareHasen.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = this.gewinnbareHasen[0];
      const gewinnenderHase = mokieBrokies[0];
      richieMichies[gewinnenderHase] = gewonnenerHase.hase;
      mokieBrokies.splice(0, 1);
      if (gewonnenerHase.zahlenmässigerHase > 0) {
        this.gewinnbareHasen.splice(0, 1);
      } else {
        this.gewinnbareHasen[0].zahlenmässigerHase--;
      }
    }
    return richieMichies;
  }
}

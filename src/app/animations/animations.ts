import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

//// FADE IN ANIMATION ////
export const fadeAnimation = trigger("showHide", [
  state(
    "show",
    style({
      // What do we want to do with the class when it shows?
      opacity: 1,
    })
  ),
  state(
    "hide",
    style({
      // .. and when it has to hide?
      opacity: 0,
    })
  ),
  // animate(time - delay - fadein/out-type)
  transition("show => *", [animate("0.6s ease")]),
  transition("* => show", [animate("3s {{delay}}s ease")], {
    // set default delay
    params: { delay: "0" },
  }),
]);

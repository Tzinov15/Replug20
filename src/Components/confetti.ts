import confetti from "canvas-confetti";

interface ConfettiProps extends confetti.Options {
  /**
   * The number of seconds to be launching confetti
   */
  duration?: number;
  colors: string[];
}

const isDesktop = window.matchMedia("(min-width: 1024px").matches;
export const fireConfetti: (props: ConfettiProps) => void = ({
  duration = 1,
  spread = 360,
  particleCount = 10,
  ...rest
}) => {
  const end = Date.now() + duration * 1000;

  (function frame() {
    confetti({
      particleCount,
      angle: 60,
      spread: spread,
      startVelocity: 30,
      zIndex: 60000,
      gravity: 0.3,
      origin: { x: isDesktop ? 0.4 : 0, y: 0 },
      ...rest,
    });
    confetti({
      particleCount,
      angle: 120,
      spread: spread,
      startVelocity: 30,
      zIndex: 60000,
      gravity: 0.3,
      origin: { x: 1, y: 0.5 },
      ...rest,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const blastConfetti: (props: ConfettiProps) => void = ({
  duration = 1,
  spread = 360,
  particleCount = 10,
  ...rest
}) => {
  const end = Date.now() + duration * 1000;

  (function frame() {
    confetti({
      particleCount,
      angle: 60,
      spread: spread,
      startVelocity: 30,
      gravity: 0.3,
      zIndex: 60000,
      origin: { x: isDesktop ? 0.4 : 0, y: 0 },
      ...rest,
    });
    confetti({
      particleCount,
      angle: 120,
      spread: spread,
      startVelocity: 30,
      zIndex: 60000,
      gravity: 0.3,
      origin: { x: 1, y: 0.5 },
      ...rest,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

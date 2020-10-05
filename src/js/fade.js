import Highway from '@dogstudio/highway';
import Tween, { Power4 } from 'gsap';

class Fade extends Highway.Transition {
    out({ from, done }) {
        Tween.fromTo(from, 0.2,
            {
                opacity: 1,
            },
            {
                opacity: 0,
                ease: Power4.easeNone,
                onComplete: done
            }
        );
    }
    in({ from, to, done }) {
        window.scrollTo(0, 0);
        from.remove();
        Tween.fromTo(to, 0.2,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: Power4.easeNone,
                onComplete: done
            }
        );
    }
}

export default Fade;
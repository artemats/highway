import Highway from '@dogstudio/highway';
import Tween, { Circ } from 'gsap';

let image = null;

class Zoom extends Highway.Transition {
    out({ from, trigger, done }) {
        console.log('custom out - ', trigger);
        document.querySelector('.hero').classList.add('not-transitions');
        const title = trigger.querySelector('.hero-box-title');
        document.querySelectorAll('.hero-box').forEach((box) => {
            Tween.to(box, 0.6, { width: 0, ease: Circ.easeOut });
        });
        Tween.to(trigger, 0.6,
            {
                width: window.innerWidth,
                ease: Circ.easeOut,
                onComplete: done
            });
        Tween.to(title, 0.1,
            {
                // y: 100,
                opacity: 0,
                ease: Circ.easeOut
            });
    }
    in({ from, to, done }) {
        // console.log('custom in - ', to);
        const title = to.querySelector('.hero-box-title');
        Tween.fromTo(title, 0.6,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.3,
                onComplete: done,
            });
        from.remove();
    }
 }

export default Zoom;
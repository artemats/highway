import Highway from '@dogstudio/highway';
import Fade from './fade';
import Zoom from './zoom';
import '../libs/smoothscroll';
import '../sass/styles.scss';

const H = new Highway.Core({
    transitions: {
        default: Fade,
        contextual: {
            zoom: Zoom
        }
    }
});
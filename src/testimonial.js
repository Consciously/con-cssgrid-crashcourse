// import './styles/main.scss';
import './styles/testimonial.css';
import quotationSrc from './assets/bg-pattern-quotation.svg';
import danielImgSrc from './assets/image-daniel.jpg';
import jeanetteImgSrc from './assets/image-jeanette.jpg';
import jonathanImgSrc from './assets/image-jonathan.jpg';
import kiraImgSrc from './assets/image-kira.jpg';
import patrickImgSrc from './assets/image-patrick.jpg';

const danielImg = document.getElementById('daniel');
const jeanetteImg = document.getElementById('jeanette');
const jonathanImg = document.getElementById('jonathan');
const kiraImg = document.getElementById('kira');
const patrickImg = document.getElementById('patrick');
const purpleCard = document.getElementById('quotation');

danielImg.src = danielImgSrc;
jeanetteImg.src = jeanetteImgSrc;
jonathanImg.src = jonathanImgSrc;
kiraImg.src = kiraImgSrc;
patrickImg.src = patrickImgSrc;

purpleCard.style.backgroundImage = `url(${quotationSrc})`;

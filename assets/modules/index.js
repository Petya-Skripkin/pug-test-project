import { tns } from 'tiny-slider';

var slider = tns({
  loop: false,
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: true,
  navContainer: ".slider-dots",
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400
});


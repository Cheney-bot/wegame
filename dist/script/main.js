import './jquery-1.8.3.js';
import './swiper-bundle.min.js';
import './swiper.animate1.0.3.min.js';
import './utils.js';
import {find} from './findipt.js';
import {shop} from './car--position.js';
import {banner} from './index-banner.js';
import {redian} from './index-redian.js';
import {rank} from './index-rank.js';
import {update} from './index-update.js';

(function(){
    find();
    shop();
    banner();
    redian();
    rank();
    update();
})()
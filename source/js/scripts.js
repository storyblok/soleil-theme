// Write your ES6 javascript code here
// Babel is preconfigured but you can also change to Typescript or others

import promis from 'promis'
import map from './components/map'
import navi from './components/navi'
import form from './components/form'
import colorbox from './components/colorbox'

if (document.querySelectorAll('.slideshow').length > 0) {
  var slideshows = document.querySelectorAll('.slideshow')

  for (var i = 0; i < slideshows.length; i++) {
    lory(slideshows[i], {
      enableMouseEvents: true,
      infinite: true
    })
  }
}

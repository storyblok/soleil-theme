import utils from '../libs/utils'

let mapLoaded = false

let map = {
  init() {
    window.addEventListener('scroll', () => { this.handleScroll() })
  },

  handleScroll() {
    let posY = window.pageYOffset || document.documentElement.scrollTop

    if (posY > 170 && !mapLoaded) {
      mapLoaded = true
      utils.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCWsDyDvoj0Rt2rcE9VeKULWxp7l04z6qg&libraries=geometry')
        .then(() => { this.mountMap('.map__inner') })
    }
  },

  mountMap(mapDiv) {
    let styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    let styledMap = new google.maps.StyledMapType(
      styles,
      {name: 'Styled Map'}
    )
    let mapElement = document.querySelector(mapDiv)
    let lat = mapElement.getAttribute('data-map-lat')
    let lng = mapElement.getAttribute('data-map-lng')

    let mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(lat, lng),
      disableDefaultUI: true,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    }

    let gmap = new google.maps.Map(
      mapElement,
      mapOptions
    )

    //Associate the styled map with the MapTypeId and set it to display.
    gmap.mapTypes.set('map_style', styledMap)
    gmap.setMapTypeId('map_style')
  }
}

map.init()

export default map

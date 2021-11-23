/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

let mapAPI = document.getElementById('mapLocation')
let mapDis = document.getElementById('map-api')

function changeDistination(mapAPI){          

    switch (mapAPI.value) {
      case 'holo':  {
        mapDis.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1421.61633586264!2d20.09660028290308!3d32.06404117677741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13831bd3809f0b87%3A0xe13743afa3092e22!2z2YHZitmG2YrYs9mK2Kcg2KfZhNir2LHZitinINin2YTZhdin2LPZitipINmE2YTYp9ir2KfYqw!5e0!3m2!1sen!2sly!4v1635317612703!5m2!1sen!2sly";
        break;
      }
      case 'home': {
        mapDis.src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7164.441979950991!2d20.08344529811864!3d32.064747241755754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13831c789d7cd627%3A0xa520a9778548872d!2sLibyan%20International%20Medical%20University!5e0!3m2!1sen!2sly!4v1635323108624!5m2!1sen!2sly";
        break;
      }
      case 'other': {
        mapDis.src = "location";
        break;
      }
      case 'another': {
        mapDis.src = "location";
        break;
      }
    }
  }

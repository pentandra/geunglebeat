/* Author:

*/


$(document).ready(function() {

  if ($.fn.sharrre) {
    $('#share').sharrre({

      share: {
        googlePlus: true,
        facebook: true,
        twitter: true,
        linkedin: true
      },

      buttons: {
        googlePlus: { size: 'tall' },
        facebook: { layout: 'box_count' },
        twitter: { count: 'vertical', via: 'geungle', related: 'PentandraInc:The Makers of Geungle' },
        linkedin: { counter: 'top' }
      },

      urlCurl: '',

      enableHover: false,
      enableCounter: false,
      enableTracking: true
      
    });

  }

  $('a[rel="external"]').click(function() {
    window.open( $(this).attr('href') );
    return false;
  });
  
});




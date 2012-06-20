/* Author:

*/


$(document).ready(function() {

  if ($.fn.sharrre) {
    $('#share').sharrre({

      share: {
        googlePlus: true,
        facebook: true,
        twitter: true
      },

      buttons: {
        googlePlus: { size: 'tall' },
        facebook: { layout: 'box_count' },
        twitter: { count: 'vertical', via: 'PentandraInc' }
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




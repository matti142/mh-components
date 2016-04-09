const $ = jQuery;

//scrollTop: jQuery(el).offset().top - 32 //32px wpadminbar height
module.exports = function (el) {
  if (el) {
    let offset = $(el).offset();
    if (offset && offset.top >= 0) {
      $('html, body').animate({
        scrollTop: offset.top
      }, 1000);
    }
  }
};

/*var main = function() {

jQuery(document).ready(function() {
    jQuery('.drop-down').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});
  
};

$(document).ready(main);*/

new Vue({
    el: '.menu',
    data: {
      show: true
    }
})

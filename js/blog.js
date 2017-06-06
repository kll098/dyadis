/*jshint
browser:true,
devel:true,
jquery:true
*/

   var navigationFn = {
    goToSection: function(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 0);
    }
}
   
var main = function () {
  'use strict';
  
   $('.pagination li').on("click", function (){
       
        $('.pagination li').removeClass("active");
        $(this).closest('li').addClass("active");
        
        var data = $(this).closest('li').data('content');

var data = $(this).data('content');
   
            var contentClass = $("." + data); 
        $('.page span').addClass("hidden");
        contentClass.removeClass("hidden");
       
    
       navigationFn.goToSection('.container');
       
   });
   };
        $("document").ready(main);

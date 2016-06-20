/*jQuery(function($){
    var $container = $('.grid');
  //  $container.imagesLoaded(function () {
      //  $('img').imagefill();
        $('.grid').masonry({
              // options
            itemSelector: ".grid-item",
            columnWidth: 50,
            //stamp: ".some-class",

            //percentPosition: true,
            //gutter: 10,// margin
            //originLeft: false, // блоки справа на лево
            //originTop: false, //  блоки с низу в верх
            });
    //    });
           // $('.grid-item').imagefill(); 

           
    });*/

$(window).ready(function(){
  var $container = $(".masonry-container");
    $container.imagesLoaded(function () {      
      $container.masonry({
       columnWidth: ".grid-item",
        itemSelector: ".grid-item",
    }); 
    $(".grid-item").imagefill({throttle:1000/60});   
  }).progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
   console.log( 'image is ' + result + ' for ' + image.img.src );
});    
 
}); 
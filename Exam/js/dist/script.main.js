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
 
}); ;function searchGoogle(){
    var value = document.getElementById('searchTextId').value;
    console.log(value);  
   // $.getJSON('http://api.riffsy.com/v1/search?tag=' + value + '&limit=10',
        $.getJSON('http://api.pixplorer.co.uk/image?word=' + value + '&amount=7&size=tb',
        //$.getJSON('http://api.pixplorer.co.uk/image?&amount=5&size=tb',

    function(data){
        
        console.log('data.images.length', data.images.length);
        console.log('data', data);
        $('<div class="grid-item"></div>').appendTo("#grid");
       $child = $('#grid').children('div');
       console.log('$child', $child);
        $.each(data.images, function(i, images){
          $($child[i]).empty(); 
          //$("<img/>").attr({src: images.imageurl, height: "200px"}).appendTo($child[i]);  
          $("<img/>").attr({src: images.imageurl}).appendTo($child[i]);                
          $($child[i]).append('<p class="titleRes">' + images.word + '</p>');
          if ( i == 6 ) return false;
        });    
    });   
};



// нажатие enter
$(window).keypress(function(event){   
    switch (event.keyCode) {
    case 13:       
        searchGoogle();
    break;      
    };
});

// нажатие кнопки мыши
$(document).ready(function() {
    $("#submitId").click(function(){
    searchGoogle();
    });
});

$(document).ready(function() {
    searchGoogle();
});
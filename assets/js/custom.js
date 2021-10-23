function readingTime(content,words_length) {
  if(words_length != undefined) {
    const wpm = 225;
    const time = Math.ceil(words_length / wpm);
    return time;
  }
  const text = content;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
$(document).ready(function(){
  setTimeout(function() {
    var max_height = 0;
    var images = $("#carouselExampleFade").find("img");
    for(var i = 0; i < images.length; i++) {
      var image_height = $(images[i]).height();
      if(max_height < image_height) {
        max_height = image_height;
      }
    }
    for(var i = 0; i < images.length; i++) {
      $(images[i]).height(max_height);
    }
  },2000);

  $('.hello-test').owlCarousel({
    autoplay:true,          
    loop:true,
    dots:false,
    margin:15,
    slideBy:1,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      },
      1000:{
        items:5,
      }
    }
  });

  $('.carousel-sponsors').owlCarousel({
    autoplay:true,          
    loop:true,
    dots:false,
    margin:15,
    slideBy:1,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      },
      1000:{
        items:5,
      }
    }
  });
});

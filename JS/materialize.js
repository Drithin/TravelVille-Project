$(document).ready(function(){
  $('ul.right li').on('click', function(){
      var clicked = $(this);
      $('ul.right li').each(function(){
          if($(this).hasClass('active')){
              $(this).removeClass('active');
          }
      });
      $(this).addClass('active');
  });
});

$(document).ready(function(){
  $('ul.sidenav li').on('click', function(){
      var clicked = $(this);
      $('ul.sidenav li').each(function(){
          if($(this).hasClass('active')){
              $(this).removeClass('active');
          }
      });
      $(this).addClass('active');
  });
});



$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
      height:600,
      indicators: false
    });
  });

 

  

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Sydney": null,
        "San Francisco": null,
        "London": null,
        "Prague": null,
        "Paris":null
      },
    });
  });

  $('.materialboxed').materialbox();

  $(document).ready(function(){
    $('.scrollspy').scrollSpy({
        activeClass: 'active'
    });
  });
        
        
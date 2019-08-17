$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
      height:600,
      indicators: false
    });
  });

  //  $('.sidenav').sidenav();

  

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
        
        
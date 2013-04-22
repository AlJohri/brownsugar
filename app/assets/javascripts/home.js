function blah() { orbitHeight = $("#featured").css("height"); $("importantinfo").css("height, orbitHeight"); }
$(window).load(function() { setTimeout(blah,3000) });
$(window).resize(function() { blah(); });

// fucks up orbit
//$('#featured, #importantinfo').syncHeight({ 'updateOnResize': false});

// $(window).load(function() {
//    $('#featuredContent').orbit({ fluid: '3x1' });
// });
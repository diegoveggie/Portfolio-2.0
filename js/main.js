$(document).ready(function(){




//----- Dragging elements ------//

$( function() {
    $( "#draggable" ).draggable();
  } );


 $( function() {
    $( ".draggable2" ).draggable();
  } );


  $( function() {
    $( ".draggable4" ).draggable();
  } );






//---- Projects' links show image on:hover as background-------//



               $("#monocle").hover(
                  function () {
                      $('body').css("background", 'url(images/monocle.jpg) no-repeat fixed center' );
                  }, 
                  function () {
                      $('body').css("background", "#f5f5dc");
                  }
                );


                $("#stutterheim").hover(
                  function () {
                      $('body').css("background", 'url(images/stutterheim2.png) no-repeat fixed center' );
                  }, 
                  function () {
                      $('body').css("background", "");
                  }
                );



                $("#dagmar").hover(
                  function () {
                      $('body').css("background", 'url(images/houseofdagmar.png) no-repeat fixed center' );
                  }, 
                  function () {
                      $('body').css("background", "#f5f5dc");
                  }
                );


                $("#reschia").hover(
                  function () {
                      $('body').css("background", 'url(images/reschia-shoes.png) no-repeat fixed center' );
                  }, 
                  function () {
                      $('body').css("background", "#f5f5dc");
                  }
                );


                $("#freya").hover(
                  function () {
                      $('body').css("background", 'url(images/tigerschiold.png) no-repeat fixed center' );
                  }, 
                  function () {
                      $('body').css("background", "#f5f5dc");
                  }
                );


//------ Testing saving dragged elements as new design -------//
/**

var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})
$("#draggable").draggable({
    containment: "#containment-wrapper",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})
$(".draggable2").draggable({
    containment: "#containment-wrapper",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});


var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})
$(".draggable4").draggable({
    containment: "#containment-wrapper",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
*/

});
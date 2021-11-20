$(document).ready(function () {
  /// ========== toggle ========== 
  var toggleStatus = false

  $('.navbar-toggler').click(function(e){

    toggleStatus = !toggleStatus

    if(toggleStatus){
      $('.navbar-toggler .bar1').addClass('change')
      $('.navbar-toggler .bar2').addClass('change')
      $('.navbar-toggler .bar3').addClass('change')
    }
    else{
      $('.navbar-toggler .bar1').removeClass('change')
      $('.navbar-toggler .bar2').removeClass('change')
      $('.navbar-toggler .bar3').removeClass('change')
    }
  })

  // ========== smooth scroll ==========



});

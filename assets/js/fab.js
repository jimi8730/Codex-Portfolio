// Floating Action Button
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('#zoomBtn').click(function() {
  $('.zoom-btn-sm').toggleClass('scale-out');
  if (!$('.zoom-card').hasClass('scale-out')) {
    $('.zoom-card').toggleClass('scale-out');
  }
});

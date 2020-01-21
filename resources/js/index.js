$(document).ready(function(){
function updateTextArea() {
  var allVals = [];
   $('.taglist :checked').each(function(i) {
       allVals.push($(this).val());
     });
   $('#addReason').on('click', function() {
       var reason = $("#reason").val();
       allVals.push(reason);
       $('#finalnote').val(allVals);
   })
     $('#finalnote').val(allVals).attr(allVals.length);
     updateTextArea();
   }
   $(function() {
      $('.taglist input').click(updateTextArea);
    });
});

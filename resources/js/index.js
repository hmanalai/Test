$(document).ready(function(){
function updateTextArea() {
  var allVals = [];
   $('.taglist :checked').each(function(i) {
       allVals.push($(this).val());
       var reason = $("#reason").val();
     });
   // $('#addReason').on('click', function() {
   //     var reason = $("#reason").val();
   //     allVals.push(reason);
   //     $('#finalnote').val(allVals);
   // })
   $('#finalnote').val(allVals);
     updateTextArea();
   }
   $(function() {
      $('.taglist input').click(updateTextArea);
    });
});

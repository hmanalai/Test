$(document).ready(function(){
  var list = [];
  $("input[type='checkbox']").change(function(){
    if(this.checked){
       list.push($(this).val());
    }
    else{
      if ((index = list.indexOf($(this).val())) !== -1) {
           list.splice(index, 1);
      }
    }
  })

$('.write').change(function(){
  list.push($(this).val());
})

$("#add_button").click(function(){
    $('#myTextArea').html(list);
   })
})

function updateTextArea() {
    var text = "";
    $('input[type=checkbox]:checked').each( function() {
        text += $(this).val() + " ";
    });
    $('input[type=text]').each( function() {
        text += $(this).val() + " ";
    });
    $('#myTextArea1').val( text );
}

$('input[type=checkbox]').change(function () {
    updateTextArea();
});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        let height = $('#inputHeight').val();
        let width = $('#inputWidth').val();
        makeGrid(height, width);
    });
    
    function makeGrid(height, width){
        $('tr').remove();
        for (let row = 1; row <= height; row++) {
            $('#pixelCanvas').append('<tr></tr>');
            for (let column = 1; column <= width; column++) {
                $('tr').filter(':last').append('<td></td>');
            }
        }
        $('td').click(function addColor() {
        let color = $('#colorPicker').val();
            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            }else {
                $(this).attr('style',  'background-color:' + color);
            }
        });
    }
  
});
function tick(){
    $('#ticker li:first').fadeOut( 200, 
        function () {
            $(this).appendTo($('#ticker')).css('display', 'none'); 
        $('#ticker li:first').fadeIn(200, function() {
          $(this).css('display', 'inherit');
        });
            //$('#ticker li:first').css('display', 'inherit');
        }
    );
}
setInterval(function(){ tick () }, 1900);
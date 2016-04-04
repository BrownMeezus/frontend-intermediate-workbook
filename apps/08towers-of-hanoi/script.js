'use strict';
$(document).ready(function () {
    // Put app logic here
    var block = null;
    

    $('[data-stack]').click(function () {
        if (block !== null) {
            if (parseInt(block.attr('data-block')) < parseInt($(this).children().last().attr('data-block')) || $(this).children().length == 0) {
                $(this).append(block);
                block = null;
                checkForWin();

            }
      	}
        else {
            block = $(this).children().last().detach();
        }

    });
    function checkForWin() {
            if ($('[data-stack="2"]').children().length == 4 || $('[data-stack="3"]').children().length == 4) {
                $('#announce-game-won').text('You won!');
                return true;
            } 
            	return false;
    };
});

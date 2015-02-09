
$(document).ready(function () {
    createDivGrid(16);
    changeColorOnHover();
    $('#newGrid').click(function() {
        $('table').remove();
        var width = prompt("new width?");
        createDivGrid(width);
        changeColorOnHover();
    });
});

function createDivGrid(size) {
    $('<table />').appendTo('body');
    for (var i = 0; i < size; i++) {
        $('<tr />', {
            'id' : 'tr' + i
        }).appendTo('table');
        for (var j = 0; j < size; j++) {
            $('<td />', {
                'id' : 'td' + j
            }).appendTo('#tr' + i);
            $('<div />', {
                 'class' : 'divGrid',
                 'id'    : 'div(' + i + ',' + j + ')'
             }).appendTo('#tr' + i + ' > ' + '#td' + j + ':last-child');
        }
    }
}


function changeColorOnHover() {
    $('.divGrid').hover( function() {}, function() {
        $(this).css('background-color', 'red');
    });
}

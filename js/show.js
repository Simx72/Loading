var val = 0;
var end = parseInt(query('end'));
var color = (query('color') != "") ? query('color') : 'primary';

$(function() {
    $('#loader').addClass('bg-' + color);
    var int = setInterval(() => {
        if (val < end) {
            $('#loader').attr('aria-valuenow', (val).toString());
            $('#loader').css('width', val + '%');
            val++;
        } else {

            clearInterval(int);
            clearInterval(int2);
            $('#loader').attr('aria-valuenow', (val).toString());
            $('#loader').css('width', val + '%');
            if (end < 100) {
                $('#loader').toggleClass('bg-danger'), 000
                $('#p').html('<b class="text-danger" >Failed to load! <button class="btn btn-info btn-sm" onclick="window.location.href = \'/\'">return</button></b>');
                $('#loader').popover({
                    html: true,
                    placement: 'right',
                    content: `<b class="text-danger">failed to load at ${end}% </b>`,
                    trigger: 'manual'
                }).popover('show')
            } else if (end == 100) {
                $('#loader').toggleClass('bg-success')
                $('#p').html('<b class="text-success" >Succesfully loaded! <button class="btn btn-info btn-sm" onclick="window.location.href = \'/\'">return</button></b>');
                $('#loader').popover({
                    html: true,
                    placement: 'right',
                    content: '<b class="text-success">100% loaded </b>',
                    trigger: 'manual'
                }).popover('show')
            }
        }
    }, 80);

    var int2 = setInterval(() => {
        $('.susp').each(function(index, element) {
            switch ($(this).html()) {
                case '&nbsp;&nbsp;&nbsp;':
                    $(this).html('.&nbsp;&nbsp;')
                    break;

                case '.&nbsp;&nbsp;':
                    $(this).html('..&nbsp;')
                    break;

                case '..&nbsp;':
                    $(this).html('...')
                    break;

                case '...':
                    $(this).html('&nbsp;..')
                    break;

                case '&nbsp;..':
                    $(this).html('&nbsp;&nbsp;.')
                    break;

                case '&nbsp;&nbsp;.':
                    $(this).html('&nbsp;&nbsp;&nbsp;')
                    break;

                default:
                    $(this).html('&nbsp;&nbsp;&nbsp;')
                    break;
            }

        });
    }, 500);

});
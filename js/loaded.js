var val = 0;

$(function() {

    var int = setInterval(() => {
        if (val < 100) {
            $('#loader').attr('aria-valuenow', (val).toString());
            $('#loader').css('width', val + '%');
            val++;
        } else {
            clearInterval(int);
            clearInterval(int2);
            $('#loader').attr('aria-valuenow', (val).toString());
            $('#loader').css('width', val + '%');
            setTimeout(() => $('#loader').toggleClass('bg-success'), 500);
            $('#p').html('<b class="text-success" >Succesfully loaded! <button class="btn btn-info btn-sm" onclick="window.location.href = \'/\'">return</button></b>');
            $('#loader').popover({
                html: true,
                placement: 'bottom',
                content: '<b class="text-success">100% loaded </b>',
                trigger: 'manual'
            }).popover('show')
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
$('#loader').after('<div class="dragger btn btn-warning" style="height:100%; width: 20px; position: relative; right: 10px;"  data-toggle="tooltip" title="Arrastrame" data-placement="right" data-animation="false" ></div>')
var range = (val, min, max) => {
    if (val > max) return max;
    if (val < min) return min;
    return val
}

var end = 50;
var color = 'primary';

$('#link-g')
    .attr('href', `/show.html?end=${end}&color=${color}`)
    .text(`http://${location.host}/show.html?end=${end}&color=${color}`)

// end

// on load
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('.btn.btn-primary').addClass('active');
})

var isDragging = false;
$(".dragger")
    .mousedown(function() {
        isDragging = true;
    })

// end

$(document)
    .mouseup(function() {
        isDragging = false;
    })
    .mousemove(function(e) {
        if (isDragging) {
            let pos = (e.clientX - parseFloat($('.container').css('margin-left'))) / ($('.progress').width()) * 100
            end = range(parseInt(pos) - 1, 0, 100);
            $("#loader").css('width', end + '%')
            $("#loader").attr('aria-valuenow', end)
            $('#link-g')
                .attr('href', `/show.html?end=${end}&color=${color}`)
                .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
        }
    })

// end

$('.btn.btn-change-color').click(function(e) {
    $('.btn.btn-change-color').removeClass('active')
    $(this).addClass('active')

    if ($(this).hasClass('btn-success')) {
        $('#loader').removeClass('bg-primary bg-secondary bg-info bg-danger bg-warning').addClass('bg-success')
        color = 'success';
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }
    if ($(this).hasClass('btn-primary')) {
        $('#loader').removeClass('bg-secondary bg-info bg-success bg-danger bg-warning').addClass('bg-primary')
        color = "primary";
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }
    if ($(this).hasClass('btn-secondary')) {
        $('#loader').removeClass('bg-primary bg-info bg-success bg-danger bg-warning').addClass('bg-secondary')
        color = 'secondary';
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }
    if ($(this).hasClass('btn-info')) {
        $('#loader').removeClass('bg-primary bg-secondary bg-success bg-danger bg-warning').addClass('bg-info')
        color = 'info'
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }
    if ($(this).hasClass('btn-danger')) {
        $('#loader').removeClass('bg-primary bg-secondary bg-info bg-success bg-warning').addClass('bg-danger')
        color = 'danger'
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }
    if ($(this).hasClass('btn-warning')) {
        $('#loader').removeClass('bg-primary bg-secondary bg-info bg-success bg-danger').addClass('bg-warning')
        color = 'warning'
        $('#link-g')
            .attr('href', `/show.html?end=${end}&color=${color}`)
            .text(`http://${location.host}/show.html?end=${end}&color=${color}`)
    }

});
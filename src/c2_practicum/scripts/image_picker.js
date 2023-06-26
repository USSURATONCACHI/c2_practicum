$('.preview-photos-list img').click(function(event) {
    $('#main-photo-container img').attr('src', event.target.src);
});

function onHover(x, y){
    const image = $('#main-photo-container img');
    const bgSize = 1200;
    const imageSize = image.width();
    const scale = bgSize / imageSize;

    const container = $('.zoomed-image-container');

    const posX = -x * scale + container.width() / 2;
    const posY = -y * scale + container.height() / 2;
    container.css('background-position', `${posX}px ${posY}px`);
    container.css('background-image', `url(${image.attr('src')})`);

    const overlay = $('#main-photo-container .overlay');
    overlay.css('width', `${image.width() * container.width() / bgSize}px`);
    overlay.css('height', `${image.height() * container.height() / (image.height() * scale)}px`);

    overlay.css('left', `${x - overlay.width() / 2}px`);
    overlay.css('top', `${y - overlay.height() / 2}px`);
}

$('#main-photo-container img').on('mousemove', event => onHover(event.offsetX, event.offsetY));


$('#main-photo-container .overlay').on('mousemove', event => {
    const overlay = $('#main-photo-container .overlay');
    let pos = overlay.position();
    onHover(event.offsetX + pos.left, event.offsetY + pos.top);
});

function onMouseEnterLeave() {
    let hover = $('#main-photo-container img').is(":hover") || 
        $('#main-photo-container .overlay').is(':hover');

    if (!hover) {
        $('.zoomed-image-container').css('display', 'none');
        $('#main-photo-container .overlay').css('display', 'none');
    } else {
        $('.zoomed-image-container').css('display', 'inline-block');
        $('#main-photo-container .overlay').css('display', 'inline-block');
    }
}

$('#main-photo-container img').on('mouseleave', onMouseEnterLeave);
$('#main-photo-container img').on('mouseenter', onMouseEnterLeave);
$('#main-photo-container .overlay').on('mouseleave', onMouseEnterLeave);
$('#main-photo-container .overlay').on('mouseenter', onMouseEnterLeave);
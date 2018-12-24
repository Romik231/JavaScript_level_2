let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
//let slideInterval = 3000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {
    //let switchInterval = setInterval(nextSlide, slideInterval);

    /*$('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });*/

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper li').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper li').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'

        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper li').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'

        });
        slideNow--;
    }
}

//Drag and Drop

$( function() {
    $( ".slide-img" ).draggable();
    $( ".basket" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "div .slide-img" )
                .html( "Dropped!" );
        }
    });
} );
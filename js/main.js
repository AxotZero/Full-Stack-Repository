$(document).ready(function() {

//View select
$(function() {
    $("select").selectBox();
});


//Carousel 
$(function() {
    $("#slider").carouFredSel({
        prev: '.slidprev',
        next: '.slidnext',
        responsive	: true,
        pagination  : '#myController',
        scroll: 1,
	items		: {
		visible		: 1,
		width		: 870,
		height		: "46%"
	},
        swipe: {
            onMouse: true,
            onTouch: true
	}
    }); 
    $('#list_product').carouFredSel({
        prev: '#prev_c1',
        next: '#next_c1',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#list_product2').carouFredSel({
        prev: '#prev_c2',
        next: '#next_c2',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#list_banners').carouFredSel({
        prev: '#ban_prev',
        next: '#ban_next',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#thumblist').carouFredSel({
        prev: '#img_prev',
        next: '#img_next',
        scroll: 1,
        auto: false,
        circular: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $(window).resize();
});

//Zoomer
$(function() { 
   $('.jqzoom').jqzoom({
        zoomType: is_touch_device() ? 'innerzoom' : 'standard',
        lens:true,
        preloadImages: true,
        alwaysOn:false
    });
});

//Tab
$(function() {
    $('#wrapper_tab a').click(function() {
        if ($(this).attr('class') != $('#wrapper_tab').attr('class') ) {
            $('#wrapper_tab').attr('class',$(this).attr('class'));
        }
        return false;
    });
});

//Primary menu(media < 984)
$(function(){        
    $('.primary .menu-select').toggle(function(){
        $('.primary > ul').slideDown('slow');
	$(this).addClass('minus');}
    , function(){
	$('.primary > ul').slideUp('slow');
	$(this).removeClass('minus');
    });
    
    $('.primary .parent > a').toggle(function(){
        $(this).next('ul.sub').slideDown('slow');
	$(this).parent('.parent').addClass('minus');}
    , function(){
	$(this).next('ul.sub').slideUp('slow');
	$(this).parent('.parent').removeClass('minus');
    });
});

$(function(){
    $(".phone_top").click(function(){
        if ($(window).width() <= 410) {
            var show = $(".phone_top span").width() == 0;
            $(".phone_top span").animate({
                width: show ? "120px" : "0px"
            }, 500);
            $(".valuta").animate({
                marginRight: show ? "-120px" : "0px"
            }, 500);
        }
    });
});

function is_touch_device() {  
    try {  
        document.createEvent("TouchEvent");  
        return true;  
    } catch (e) {  
        return false;  
    }  
}

});
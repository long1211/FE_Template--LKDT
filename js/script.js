$(document).ready(function(){
	$('#slide').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

$('#slider_brand').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});

$('#_slider_brand').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
function activeTab(obj)
    {
        $('.deal li').removeClass('active');

        $(obj).addClass('active');

        var id = $(obj).find('a').attr('href');
 
        $('.tab-item').hide();
 
        $(id) .show();
    }
 
    // Sự kiện click đổi tab
    $('.deal li').click(function(){
        activeTab(this);
        return false;
    });
    activeTab($('.deal li:first-child'));
    
});
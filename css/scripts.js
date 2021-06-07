var dem_menu = 1;
var nav_menu = '.header .banner .nav-menu';
var choose_dot_menu = '.main-dot-mobile';
var choose_dot_feat = '.feat-dot-mobile';
var feat_row1 = '.featured-items .main-feat .row1';
var feat_row2 = '.featured-items .main-feat .row2';
var main_row1 = ['.main .img-main .row1 .img1','.main .img-main .row1 .img2', '.main .img-main .row1 .img3'];
var main_row2 = ['.main .img-main .row2 .img1','.main .img-main .row2 .img2', '.main .img-main .row2 .img3'];
var main_dot_mb = ['.main .img-main .main-dot-mobile .dot1','.main .img-main .main-dot-mobile .dot2','.main .img-main .main-dot-mobile .dot3'];
var feat_dot_mb = ['.featured-items .feat-dot-mobile .dot1', '.featured-items .feat-dot-mobile .dot2', '.featured-items .feat-dot-mobile .dot3', '.featured-items .feat-dot-mobile .dot4'];
var blog_mb = ['.blog .main-blog .row .col1', '.blog .main-blog .row .col2', '.blog .main-blog .row .col3'];
var blog_dot_mb = ['.blog .content .main-blog .blog-dot .dot1','.blog .content .main-blog .blog-dot .dot2', '.blog .content .main-blog .blog-dot .dot3'];
$(document).ready(
	function(){
        $('.img-hover').addClass('hidden');
        $('.btn-hover').addClass('hidden');
        $('.cart').addClass('hidden');
        $('.logo_banner').css('display', 'none');
        $('.nav-menu-moblie-under-425').addClass('disnone');
        $('.header .banner .nav-menu').css('display','none');
        $('.main .img-main .main-dot-mobile .dot1').addClass('choose-dot-main');
        $('.main .img-main .main-dot-mobile .dot2').addClass('unchoose-dot-main');
        $('.featured-items .feat-dot-mobile .dot1').addClass('choose-dot-feat');
        $('.featured-items .feat-dot-mobile .dot2').addClass('unchoose-dot-feat');
        $(blog_dot_mb[1]).addClass('unchoose-dot-blog');
        $(blog_dot_mb[0]).addClass('choose-dot-blog');
        $(blog_dot_mb[2]).addClass('unchoose-dot-blog');
        $('.close_menu').css('display','none');
        $('.main-dot-mobile').css('display','none');
        $('.feat-dot-mobile').css('display','none');
        $('.blog .content .main-blog .blog-dot').css('display','none');
        $(blog_dot_mb).css('display','none');
        feat_hover();
        show_cart();
        show_menu();
        close_menu();
		$(window).on('resize', function(){
			var width = $(this).width();
            console.log(width);
            if(width<=1024){
                close_menu_mobile();
                $('.logo_banner').css('display', 'inline-block');
                $('.i-menu').click(function(e){
                    if(dem_menu%2==0){
                        $(nav_menu).addClass("close");
                        $('.close_menu').css('display','inline-block');
                        $('.close_menu').css('z-index','10000');
                    }
                });
            }else{
                $('.close_menu').css('display', 'none');
                $('.logo_banner').css('display', 'none');
                $('.i-menu').click(function(e){
                    if(dem_menu%2==0){
                        $(nav_menu).addClass("close");
                        $('.close_menu').css('display', 'none');
                        $('.close_menu').css('z-index','0');
                    }
                });
            }
            if(width>512&&width<=768){
                $('.main-dot-mobile').css('display','flex');
                $('.feat-dot-mobile').css('display','flex');
                $('.blog .content .main-blog .blog-dot').css('display','flex');
                $(blog_mb[0]).addClass('blog-col-mobile');
                $(blog_mb[1]).css('display','none');
                $(blog_mb[2]).css('display','none');
                loading_feat_768();
                choose_main();
                choose_feat();
                choose_blog();
            }else{
                $(blog_mb[0]).css('display','inline-block');
                $(blog_mb[1]).css('display','inline-block');
                $(blog_mb[2]).css('display','inline-block');
            }
            if(width<428){
                $('.header .banner .nav-menu').css('display','none');
                $('.nav-menu-moblie-under-425').addClass('disnone');
                $('.main-dot-mobile').css('display','flex');
                $('.feat-dot-mobile').css('display','flex');
                $('.under-banner').addClass('clearfix');
                // $('.nav-menu-moblie-under-425').removeClass('disnone');
                $(main_dot_mb[0]).addClass('choose-dot-main');
                $(main_dot_mb[1]).addClass('unchoose-dot-main');
                $(main_dot_mb[2]).addClass('unchoose-dot-main');
                $(main_row1[0]).css('display', 'inline-block');
                $(main_row2[0]).css('display', 'inline-block');
                $(main_row1[1]).css('display', 'none');
                $(main_row2[1]).css('display', 'none');
                $(main_row1[2]).css('display', 'none');
                $(main_row2[2]).css('display', 'none');
                show_menu_mobile_under_425();
                close_menu_mobile_under_425();
                choose_main_mobile_under_425();
                loading_feat_425();
                choose_feat_mobile_under_425();
                loading_blog_425();
                choose_blog_mobile_under_425();
            }else{
                $('.nav-menu-moblie-under-425').addClass('disnone');
                $('.nav-menu-moblie-under-425').removeClass('disin');
                // $('.header .banner .nav-menu').css('display','flex');
                $('.under-banner').removeClass('clearfix');
            }
		})      
    }
);
function feat_hover(){
    $('.main-feat .row1 .col1').hover(function(){
        $('.row1 .col1 .img-hover').toggleClass('visible');
        $('.row1 .col1 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row1 .col2').hover(function(){
        $('.row1 .col2 .img-hover').toggleClass('visible');
        $('.row1 .col2 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row1 .col3').hover(function(){
        $('.row1 .col3 .img-hover').toggleClass('visible');
        $('.row1 .col3 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row1 .col4').hover(function(){
        $('.row1 .col4 .img-hover').toggleClass('visible');
        $('.row1 .col4 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row2 .col1').hover(function(){
        $('.row2 .col1 .img-hover').toggleClass('visible');
        $('.row2 .col1 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row2 .col2').hover(function(){
        $('.row2 .col2 .img-hover').toggleClass('visible');
        $('.row2 .col2 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row2 .col3').hover(function(){
        $('.row2 .col3 .img-hover').toggleClass('visible');
        $('.row2 .col3 .btn-hover').toggleClass('visible');
    });
    $('.main-feat .row2 .col4').hover(function(){
        $('.row2 .col4 .img-hover').toggleClass('visible');
        $('.row2 .col4 .btn-hover').toggleClass('visible');
    });
}
function show_cart(){
    $('.icon-cart').click(function(e){
        e.preventDefault();
        $('.cart').toggleClass('visible');
    });
    $('.p-cart').click(function(e){
        e.preventDefault();
        $('.cart').toggleClass('visible');
    });
}
function loading_feat_768(){
    $(feat_row1+' .col1').css('display', 'inline-block');
    $(feat_row2+' .col1').css('display', 'inline-block');
    $(feat_row1+' .col2').css('display', 'inline-block');
    $(feat_row2+' .col2').css('display', 'inline-block');
    $(feat_row1+' .col3').css('display', 'none');
    $(feat_row2+' .col3').css('display', 'none');
    $(feat_row1+' .col4').css('display', 'none');
    $(feat_row2+' .col4').css('display', 'none'); 
}
function show_menu(){  
    $('.i-menu').click(function(e){
        e.preventDefault();
        dem_menu++;
        $(nav_menu).slideToggle(200); 
        if(dem_menu%2==0){
            $('.i-menu').css('display','none');
            $('.i-close').css('display','inline-block');
        }
    });
}
function close_menu(){
    $('.i-close').click(function(e){
        e.preventDefault();
        dem_menu++;
        $(nav_menu).slideToggle(200); 
        if(dem_menu%2!=0){
            // $(nav_menu).addClass("close_menu");
            $('.i-menu').css('display','inline-block');
            $('.i-close').css('display','none');
        }
    });   
}
function close_menu_mobile(){
    $('.close_menu').click(function(e){
        if($(nav_menu).hasClass('close')){
            dem_menu++;
            $(nav_menu).slideToggle(200);
            $('.i-menu').css('display','inline-block');
            $('.i-close').css('display','none');
            $(nav_menu).removeClass('close');
            $('.close_menu').css('z-index','0');
            $('.close_menu').css('display','none');
        } 
    })
}
function choose_main(){
    $(choose_dot_menu+' .dot1').click(function(){
        if(!($(choose_dot_menu+' .dot1').hasClass('choose-dot-main'))){
            $(choose_dot_menu+' .dot1').addClass('choose-dot-main');
            $(choose_dot_menu+' .dot1').removeClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').removeClass('choose-dot-main');
            $(main_row1[0]).css('display', 'inline-block');
            $(main_row1[2]).css('display', 'inline-block');
            $(main_row2[0]).css('display', 'inline-block');
            $(main_row2[1]).css('display', 'inline-block');
            $(main_row1[1]).css('display', 'none');
            $(main_row2[2]).css('display', 'none');
        }
    });
    $(choose_dot_menu+' .dot2').click(function(){
        if(!($(choose_dot_menu+' .dot2').hasClass('choose-dot-main'))){
            $(choose_dot_menu+' .dot2').addClass('choose-dot-main');
            $(choose_dot_menu+' .dot2').removeClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot1').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot1').removeClass('choose-dot-main');
            $(main_row1[0]).css('display', 'none');
            $(main_row1[2]).css('display', 'none');
            $(main_row2[0]).css('display', 'none');
            $(main_row2[1]).css('display', 'none');
            $(main_row1[1]).css('display', 'inline-block');
            $(main_row2[2]).css('display', 'inline-block');
        }
    });
}
function choose_feat(){
    $(choose_dot_feat+' .dot1').click(function(){
        if(!($(choose_dot_feat+' .dot1').hasClass('choose-dot-feat'))){
            $(choose_dot_feat+' .dot1').addClass('choose-dot-feat');
            $(choose_dot_feat+' .dot1').removeClass('unchoose-dot-feat');
            $(choose_dot_feat+' .dot2').addClass('unchoose-dot-feat');
            $(choose_dot_feat+' .dot2').removeClass('choose-dot-feat');
            $(feat_row1+' .col1').css('display', 'inline-block');
            $(feat_row1+' .col2').css('display', 'inline-block');
            $(feat_row2+' .col1').css('display', 'inline-block');
            $(feat_row2+' .col2').css('display', 'inline-block');
            $(feat_row1+' .col3').css('display', 'none');
            $(feat_row1+' .col4').css('display', 'none');
            $(feat_row2+' .col3').css('display', 'none');
            $(feat_row2+' .col4').css('display', 'none');
        }
    });
    $(choose_dot_feat+' .dot2').click(function(){
        if(!($(choose_dot_feat+' .dot2').hasClass('choose-dot-feat'))){
            $(choose_dot_feat+' .dot2').addClass('choose-dot-feat');
            $(choose_dot_feat+' .dot2').removeClass('unchoose-dot-feat');
            $(choose_dot_feat+' .dot1').addClass('unchoose-dot-feat');
            $(choose_dot_feat+' .dot1').removeClass('choose-dot-feat');
            $(feat_row1+' .col3').css('display', 'inline-block');
            $(feat_row1+' .col4').css('display', 'inline-block');
            $(feat_row2+' .col3').css('display', 'inline-block');
            $(feat_row2+' .col4').css('display', 'inline-block');
            $(feat_row1+' .col1').css('display', 'none');
            $(feat_row1+' .col2').css('display', 'none');
            $(feat_row2+' .col1').css('display', 'none');
            $(feat_row2+' .col2').css('display', 'none');
        }
    });

}
function choose_blog(){
    $(blog_dot_mb[0]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).removeClass('choose-dot-blog');
            $(blog_dot_mb[2]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[2]).removeClass('choose-dot-blog');
            $(blog_mb[0]).css('display', 'inline-block');
            $(blog_mb[1]).css('display', 'none');
            $(blog_mb[2]).css('display', 'none');
        }
    });
    $(blog_dot_mb[1]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).removeClass('choose-dot-blog');
            $(blog_dot_mb[2]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[2]).removeClass('choose-dot-blog');
            $(blog_mb[1]).css('display', 'inline-block');
            $(blog_mb[0]).css('display', 'none');
            $(blog_mb[2]).css('display', 'none');
        }
    });
    $(blog_dot_mb[2]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).removeClass('choose-dot-blog');
            $(blog_dot_mb[0]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).removeClass('choose-dot-blog');
            $(blog_mb[2]).css('display', 'inline-block');
            $(blog_mb[1]).css('display', 'none');
            $(blog_mb[0]).css('display', 'none');
        }
    });
}
var dem_menu_mobile_under_425 = 1;
function show_menu_mobile_under_425(){  
    $('.i-menu').click(function(e){
        e.preventDefault();
        dem_menu_mobile_under_425++;
        if(dem_menu_mobile_under_425%2==0){
            $('.i-menu').css('display','none');
            $('.i-close').css('display','inline-block');
            $('.nav-menu-moblie-under-425').removeClass('disnone');
            $('.header .banner').css('width','70%');
            $('.header .banner').css('float','left');  
            $('.nav-menu-moblie-under-425').addClass('nav-menu-mb-under-425');
            $('.header .banner .nav-menu').css('display','none');
        }
    });
}
function close_menu_mobile_under_425(){
    $('.close_menu').click(function(e){
        if($('.nav-menu-moblie-under-425').hasClass('nav-menu-mb-under-425')){
            dem_menu_mobile_under_425++;
            // $(nav_menu).slideToggle(200);
            $('.i-menu').css('display','inline-block');
            $('.i-close').css('display','none');
            $('.nav-menu-moblie-under-425').removeClass('nav-menu-mb-under-425');
            $('.nav-menu-moblie-under-425').addClass('disnone');
            $('.header .banner .nav-menu').css('display','none');
            $('.close_menu').css('z-index','0');
            $('.close_menu').css('display','none');
            $('.header .banner').css('width','100%');
        } 
    })
}
function choose_main_mobile_under_425(){
    $(main_dot_mb[0]).click(function(){
        if(!($(this).hasClass('choose-dot-main'))){
            $(this).addClass('choose-dot-main');
            $(this).removeClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').removeClass('choose-dot-main');
            $(choose_dot_menu+' .dot3').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot3').removeClass('choose-dot-main');
            $(main_row1[0]).css('display', 'inline-block');
            $(main_row2[0]).css('display', 'inline-block');
            $(main_row1[1]).css('display', 'none');
            $(main_row2[1]).css('display', 'none');
            $(main_row1[2]).css('display', 'none');
            $(main_row2[2]).css('display', 'none');
        }
    });
    $(main_dot_mb[1]).click(function(){
        if(!($(this).hasClass('choose-dot-main'))){
            $(this).addClass('choose-dot-main');
            $(this).removeClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot1').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot1').removeClass('choose-dot-main');
            $(choose_dot_menu+' .dot3').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot3').removeClass('choose-dot-main');
            $(main_row1[1]).css('display', 'inline-block');
            $(main_row2[1]).css('display', 'inline-block');
            $(main_row1[0]).css('display', 'none');
            $(main_row2[0]).css('display', 'none');
            $(main_row1[2]).css('display', 'none');
            $(main_row2[2]).css('display', 'none');
        }
    });
    $(main_dot_mb[2]).click(function(){
        if(!($(this).hasClass('choose-dot-main'))){
            $(this).addClass('choose-dot-main');
            $(this).removeClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot2').removeClass('choose-dot-main');
            $(choose_dot_menu+' .dot1').addClass('unchoose-dot-main');
            $(choose_dot_menu+' .dot1').removeClass('choose-dot-main');
            $(main_row1[2]).css('display', 'inline-block');
            $(main_row2[2]).css('display', 'inline-block');
            $(main_row1[1]).css('display', 'none');
            $(main_row2[1]).css('display', 'none');
            $(main_row1[0]).css('display', 'none');
            $(main_row2[0]).css('display', 'none');
        }
    });
}
function loading_feat_425(){
    $(feat_dot_mb[2]).addClass('unchoose-dot-feat');
    $(feat_dot_mb[3]).addClass('unchoose-dot-feat');
    $(feat_row1+' .col1').css('display', 'inline-block');
    $(feat_row2+' .col1').css('display', 'inline-block');
    $(feat_row1+' .col2').css('display', 'none');
    $(feat_row2+' .col2').css('display', 'none');
    $(feat_row1+' .col3').css('display', 'none');
    $(feat_row2+' .col3').css('display', 'none');
    $(feat_row1+' .col4').css('display', 'none');
    $(feat_row2+' .col4').css('display', 'none'); 
}
function choose_feat_mobile_under_425(){
    $(feat_dot_mb[0]).click(function(){
        if(!($(this).hasClass('choose-dot-feat'))){
            $(this).addClass('choose-dot-feat');
            $(this).removeClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).removeClass('choose-dot-feat');
            $(feat_dot_mb[2]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[2]).removeClass('choose-dot-feat');
            $(feat_dot_mb[3]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[3]).removeClass('choose-dot-feat');
            $(feat_row1+' .col1').css('display', 'inline-block');
            $(feat_row2+' .col1').css('display', 'inline-block');
            $(feat_row1+' .col2').css('display', 'none');
            $(feat_row2+' .col2').css('display', 'none');
            $(feat_row1+' .col3').css('display', 'none');
            $(feat_row2+' .col3').css('display', 'none');
            $(feat_row1+' .col4').css('display', 'none');
            $(feat_row2+' .col4').css('display', 'none');            
        }
    });
    $(feat_dot_mb[1]).click(function(){
        if(!($(this).hasClass('choose-dot-feat'))){
            $(this).addClass('choose-dot-feat');
            $(this).removeClass('unchoose-dot-feat');
            $(feat_dot_mb[0]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[0]).removeClass('choose-dot-feat');
            $(feat_dot_mb[2]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[2]).removeClass('choose-dot-feat');
            $(feat_dot_mb[3]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[3]).removeClass('choose-dot-feat');;
            $(feat_row1+' .col2').css('display', 'inline-block');
            $(feat_row2+' .col2').css('display', 'inline-block');
            $(feat_row1+' .col1').css('display', 'none');
            $(feat_row2+' .col1').css('display', 'none');
            $(feat_row1+' .col3').css('display', 'none');
            $(feat_row2+' .col3').css('display', 'none');
            $(feat_row1+' .col4').css('display', 'none');
            $(feat_row2+' .col4').css('display', 'none');            
        }
    });
    $(feat_dot_mb[2]).click(function(){
        if(!($(this).hasClass('choose-dot-feat'))){
            $(this).addClass('choose-dot-feat');
            $(this).removeClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).removeClass('choose-dot-feat');
            $(feat_dot_mb[0]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[0]).removeClass('choose-dot-feat');
            $(feat_dot_mb[3]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[3]).removeClass('choose-dot-feat');
            $(feat_row1+' .col3').css('display', 'inline-block');
            $(feat_row2+' .col3').css('display', 'inline-block');
            $(feat_row1+' .col2').css('display', 'none');
            $(feat_row2+' .col2').css('display', 'none');
            $(feat_row1+' .col1').css('display', 'none');
            $(feat_row2+' .col1').css('display', 'none');
            $(feat_row1+' .col4').css('display', 'none');
            $(feat_row2+' .col4').css('display', 'none');            
        }
    });
    $(feat_dot_mb[3]).click(function(){
        if(!($(this).hasClass('choose-dot-feat'))){
            $(this).addClass('choose-dot-feat');
            $(this).removeClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[1]).removeClass('choose-dot-feat');
            $(feat_dot_mb[2]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[2]).removeClass('choose-dot-feat');
            $(feat_dot_mb[0]).addClass('unchoose-dot-feat');
            $(feat_dot_mb[0]).removeClass('choose-dot-feat');
            $(feat_row1+' .col4').css('display', 'inline-block');
            $(feat_row2+' .col4').css('display', 'inline-block');
            $(feat_row1+' .col2').css('display', 'none');
            $(feat_row2+' .col2').css('display', 'none');
            $(feat_row1+' .col3').css('display', 'none');
            $(feat_row2+' .col3').css('display', 'none');
            $(feat_row1+' .col1').css('display', 'none');
            $(feat_row2+' .col1').css('display', 'none');            
        }
    });

}
function loading_blog_425(){
    $('.main-blog .blog-dot').css('display', 'flex');
    $(blog_mb[1]).css('display','none');
    $(blog_mb[2]).css('display','none');  
    $(blog_dot_mb[0]).addClass('choose-dot-feat');
    $(blog_dot_mb[1]).addClass('unchoose-dot-feat');
    $(blog_dot_mb[2]).addClass('unchoose-dot-feat');

}
function choose_blog_mobile_under_425(){
    $(blog_dot_mb[0]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).removeClass('choose-dot-blog');
            $(blog_dot_mb[2]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[2]).removeClass('choose-dot-blog');
            $(blog_mb[0]).css('display', 'inline-block');
            $(blog_mb[1]).css('display', 'none');
            $(blog_mb[2]).css('display', 'none');
        }
    });
    $(blog_dot_mb[1]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).removeClass('choose-dot-blog');
            $(blog_dot_mb[2]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[2]).removeClass('choose-dot-blog');
            $(blog_mb[1]).css('display', 'inline-block');
            $(blog_mb[0]).css('display', 'none');
            $(blog_mb[2]).css('display', 'none');
        }
    });
    $(blog_dot_mb[2]).click(function(){
        if(!($(this).hasClass('choose-dot-blog'))){
            $(this).addClass('choose-dot-blog');
            $(this).removeClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[1]).removeClass('choose-dot-blog');
            $(blog_dot_mb[0]).addClass('unchoose-dot-blog');
            $(blog_dot_mb[0]).removeClass('choose-dot-blog');
            $(blog_mb[2]).css('display', 'inline-block');
            $(blog_mb[1]).css('display', 'none');
            $(blog_mb[0]).css('display', 'none');
        }
    });
}

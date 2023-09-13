$(function(){
	// Основной слайдер на главной
	$('.search_house .slider').owlCarousel({
		loop: true,
	    margin: 0,
	    dots: false,
	    nav: true,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    responsive : {
		    1270 : {
		        items: 2
		    },
		    0 : {
		        items: 1
		    }
		}
	})


	// Слайдер в тексте
	$('.text_block .img_slider').owlCarousel({
		loop: true,
	    margin: 0,
	    dots: false,
	    nav: true,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    items: 1,
	    autoplay: true,
		autoplayTimeout: 5000
	})


	// Галерея
	$('.text_block .gallery .slider').owlCarousel({
		loop: true,
	    dots: false,
	    nav: true,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    responsive : {
		    1024 : {
		        items: 4,
	    		margin: 19
		    },
		    768 : {
		        items: 3,
	    		margin: 15
		    },
		    0 : {
		        items: 2,
	    		margin: 15
		    }
		}
	})


	// Ищут дом
	$('.pets .slider').owlCarousel({
		loop: true,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    dotsSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
		    1024 : {
		        items: 4,
	    		margin: 15
		    },
		    768 : {
		        items: 3,
	    		margin: 15
		    },
		    0 : {
		        items: 2,
	    		margin: 15
		    }
		},
	    onInitialized: function(event){
			let photoH = $(event.target).find('.photo').outerHeight()

	    	$(event.target).find('.owl-prev, .owl-next').css('top', photoH / 2)
	    },
	    onResized: function(event){
			let photoH = $(event.target).find('.photo').outerHeight()

	    	$(event.target).find('.owl-prev, .owl-next').css('top', photoH / 2)
	    }
	})


	// Кнопка 'Вверх'
	$('.buttonUp a').click(function(e) {
		e.preventDefault()

		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800)
	})


	// Кастомный select
 	$('select').niceSelect()


 	// Увеличение картинки
	$('.fancy_img').fancybox({
		transitionEffect : 'slide',
		animationEffect : 'fade',
		i18n : {
			'en' : {
				CLOSE : 'Закрыть'
			}
		}
	})


	// Карточка животного
	$animal_info = $('.animal_info .images .big .slider').owlCarousel({
		loop: false,
	    nav: false,
	    dots: false,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1,
	    margin: 7,
	    onTranslate: function(event){
	    	$('.animal_info .images .thumbs .slide a').removeClass('active')
	    	$('.animal_info .images .thumbs .slide:eq('+ event.item.index +') a').addClass('active')
	    }
	})

	$('.animal_info .images .thumbs .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    dotsSpeed: 500,
	    smartSpeed: 500,
	    margin: 7,
	    responsive : {
		    480 : {
		        items: 3
		    },
		    0 : {
		        items: 2
		    }
		}
	})

	$('.animal_info .images .thumbs .slide a').click(function(e) {
		e.preventDefault()

		$('.animal_info .images .thumbs .slide a').removeClass('active')

	    $animal_info.trigger('to.owl.carousel', $(this).attr('data-slide-index'))

	    $(this).addClass('active')
	})


	// Выбор файла
	$('.form input[type=file]').change(function(){
		$(this).next().find('.path').addClass('active').text( $(this).val() )
	})


	// Аккордион
    $('.accordion .item .name').click(function(e){
    	e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().slideUp(300)
		} else{
			$('.accordion .item .name').removeClass('active')
			$('.accordion .item .data').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
    })


	// Моб. меню
    $('.mob_menu_link').click(function(e){
    	e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active')
        	$('header .menu').fadeOut(200)
		} else{
			$(this).addClass('active')
			$('header .menu').fadeIn(300)
		}
    })
})


$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(this).scrollTop() > $(window).innerHeight() ){
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}
})


$(window).load(function(){
	// Выравнивание статей в сетке
	setArticlesHeight()
})


$(window).resize(function(){
	// Выравнивание статей в сетке
	setArticlesHeight()
})


function setArticlesHeight(){
	$('.articles .grid .item .name').height('auto')
	$('.articles .grid .item .desc').height('auto')

	if( $(window).width() > 1270 ) {
		$('.articles .grid').each(function(){
			articleHeight( $(this).find('.item'), $(this).data('in-line'))
		})
	}

	if( $(window).width() > 1023 && $(window).width() < 1269 ) {
		$('.articles .grid').each(function(){
			articleHeight( $(this).find('.item'), $(this).data('in-line1269'))
		})
	}

	if( $(window).width() > 767 && $(window).width() < 1024 ) {
		$('.articles .grid').each(function(){
			articleHeight( $(this).find('.item'), $(this).data('in-line1023'))
		})
	}

	if( $(window).width() > 479 && $(window).width() < 768 ) {
		$('.articles .grid').each(function(){
			articleHeight( $(this).find('.item'), $(this).data('in-line767'))
		})
	}

	if( $(window).width() < 480 ) {
		$('.articles .grid').each(function(){
			articleHeight( $(this).find('.item'), $(this).data('in-line479'))
		})
	}
}


function articleHeight(selector, step){
	var start = 0
	var finish = parseInt(step)

	var articles = selector

	for( var i = 0; i < articles.length; i++ ){
		var obj = articles.slice(start, finish).find('.name')
		var obj2 = articles.slice(start, finish).find('.desc')

		setHeight( obj )
		setHeight( obj2 )

		start = start+step
		finish = finish+step
	}
}


function setHeight(className){
    var maxheight = 0
    $(className).each(function() {
        if($(this).innerHeight() > maxheight) {
        	maxheight = $(this).innerHeight()
        }
    })
    $(className).innerHeight(maxheight)
}
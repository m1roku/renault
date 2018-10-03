function initYandexMap()
{
	ymaps.ready(function ()
	{
		/*if ($('html').hasClass('mobile'))
		{
			var _ball_bg = 'img/m.map.balloon.png';
			var _ball_Offset = [-300,-150];
			var _ball_Size = [600,150];
			
		}
		else*/
/*		{
			var _ball_bg = 'img/map.balloon.png';
			var _ball_Offset = [-10,-85];
			var _ball_Size = [148,92];
		}*/

		var _ball_bg = 'img/map.balloon.png';
		var _ball_Offset = [-20,-42];
		var _ball_Size = [33,46];

	
	    	var myMap1 = new ymaps.Map('map1',
		{
			center: [55.899756, 37.421318],
			zoom: 17,
			controls: ['zoomControl']
		},
		{
			searchControlProvider: 'yandex#search'
		});

		//baloon 1
	    var myPlacemark1 = new ymaps.Placemark( [55.899756, 37.421318],
		{
			balloonContent:"г. Химки, Ленинградское ш., вл.18",
			hintContent: "г. Химки, Ленинградское ш., вл.18"
	        }, {
		//	balloonLayout: "default#imageWithContent",
		//	balloonImageHref: _ball_bg,
		//	balloonImageOffset: _ball_Offset,
		//	balloonImageSize: _ball_Size,
			iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: _ball_bg,
            // Размеры метки.
            iconImageSize: _ball_Size,
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: _ball_Offset
		});
		myMap1.geoObjects.add(myPlacemark1);
		//myPlacemark1.balloon.open();




	});//end_ ready
}//end_ func


function initFancy()
{

	$(".fancybox-gallery").fancybox(
	{
		theme : 'light',
		helpers : { thumbs : true },
		openEffect  : 'fade',
		closeEffect : 'fade',
		nextEffect  : 'fade',
		prevEffect  : 'fade',
		'showNavArrows' :   true
	});

	$(".popup").click( function()
	{
		var _name = _id = $(this).attr('_name');
		var _form_title = $(this).attr('_title');
		var _form_comment = $(this).attr('_comment');
		var _form_id = $(this).attr('href');
		$(_form_id+" form").attr('name',_name);
		$(_form_id+" form").attr('id',_id);
		$(_form_id+" form").attr('data-callkeeper_name',_form_title);
		$(_form_id+" .form_title").html(_form_title);
		$(_form_id+" form").attr('data-title',_form_title);

		var _form_type_model_name = $(this).data('form_type_model_name');
		var _form_name = $(this).data('form_name');
		$(_form_id+" form").attr('data-form_type_model_name',_form_type_model_name);
		$(_form_id+" form").attr('data-form_name',_form_name);

		

		
		var _select_val = $(this).attr('_select_val');

		$.fancybox( 
		{
			padding: 0,
			content: $(_form_id).html(),
			modal: true,
			scrolling: "no",
			margin: 5,
			/*closeBtn: false,*/
			afterShow: function()
			{
				$(".popup_container input[name=comment]").val(_form_comment);
			
				//$("input[name=phone]").inputmask("+7(999) 999-99-99");
				
				_init_inputmask();
				
				if ( typeof(_select_val)!="undefined" ) $('.popup_container select').val( _select_val );
			}
		} );
		$(_form_id+" form").attr('name','');
		$(_form_id+" form").attr('id','');
		$(_form_id+" form input[name=comment]").val("");
		return false;
	} );
	
	
/*	$(".popup2").click( function()
	{
		var _name = _id = $(this).attr('_name');
		var _form_title = $(this).attr('_title');
		var _form_comment = $(this).attr('_comment');
		$(".form_popup2 form").attr('name',_name);
		$(".form_popup2 form").attr('id',_id);
		$(".form_popup2 form").attr('data-callkeeper_name',_form_title);
	//	$(".form_popup2 .form_title").text(_form_title);
		$(".form_popup2 form").data('title',_form_title);
		
		

		
		var _select_val = $(this).attr('_select_val');

		$.fancybox( 
		{
			padding: 0,
			content: $(".form_popup2").html(),
			modal: true,
			scrolling: "no",
			margin: 5,
			closeBtn: false,
			afterShow: function()
			{
				$(".popup_container input[name=comment]").val(_form_comment);
			
				$("input[name=phone]").inputmask("+7(999) 999-99-99");
				if ( typeof(_select_val)!="undefined" ) $('.popup_container select').val( _select_val );
			}
		} );
		$(".form_popup2 form").attr('name','');
		$(".form_popup2 form").attr('id','');
		$(".form_popup2 form input[name=comment]").val("");
		return false;
	} );*/

	$(".popup2").click( function()
	{
		var _name = _id = $(this).attr('_name');
		var _form_title = $(this).attr('_title');
		var _form_comment = $(this).attr('_comment');
		var _form_id = $(this).attr('href');
		$(_form_id+" form").attr('name',_name);
		$(_form_id+" form").attr('id',_id);
		$(_form_id+" form").attr('data-callkeeper_name',_form_title);
		$(_form_id+" .form_title").text(_form_title);
		$(_form_id+" form").data('title',_form_title);

		var _form_type_model_name = $(this).data('form_type_model_name');
		var _form_name = $(this).data('form_name');
		$(_form_id+" form").attr('data-form_type_model_name',_form_type_model_name);
		$(_form_id+" form").attr('data-form_name',_form_name);

		var _select_val = $(this).attr('_select_val');

		$.fancybox( 
		{
			padding: 0,
			content: $(_form_id).html(),
			modal: true,
			scrolling: "no",
			margin: 5,
			/*closeBtn: false,*/
			afterShow: function()
			{
				$(".popup_container2 input[name=comment]").val(_form_comment);
			
				$("input[name=phone]").inputmask("+7(999) 999-99-99");
				if ( typeof(_select_val)!="undefined" ) $('.popup_container2 select').val( _select_val );
			}
		} );
		$(_form_id+" form").attr('name','');
		$(_form_id+" form").attr('id','');
		$(_form_id+" form input[name=comment]").val("");
		return false;
	} );


}//end_ func


function _init_inputmask()
{
	var _option = 
	{
			onKeyValidation: function (key, result) {
				
				var _text = $(this).val();
				var _first_char = _text.substr(0,1);
				var _two_chars = _text.substr(0,2);
				
				switch (_first_char)
				{
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "9":
						$(this).inputmask("8(999) 999-99-99",_option);
					return;
					break;
				}

				switch (_two_chars)
				{
					case "+8":
						$(this).inputmask("9(999) 999-99-99",_option);
					return;
					break;
				}

				
				switch (key)
				{
					case 43:
					case 229:
						if (_text == "")
						{
							 $(this).inputmask("+9(999) 999-99-99",_option);
							return;
						}
					break;
				
				}
			}
	}
	$("input[name=phone]").inputmask("9(999) 999-99-99",_option);

}


function initForm()
{
	//$("input[name=phone]").inputmask("+7(999) 999-99-99");

	_init_inputmask();
	
	$( "body" ).on( "submit", "form", function()
	{
		var l_form_object = $(this);
		$("input,textarea,select",this).closest(".form-group").removeClass("has-danger");
		var l_err = false;
		$(".nacc",this).each( function()
		{
			if ( $(this)[0].tagName=="SELECT" || $(this)[0].tagName=="INPUT" )
			{
				if ( $.trim($(this).val())=="" )
				{
					l_err = true;
					$(this).closest(".form-group").addClass("has-danger");
				}//end_ if
			}//end_ if
		} );

		if ( l_err==true )
		{
			alert("В одном или нескольких полях введены неверные данные");
			return false;
		}//end_ if

		_form_title = $(this).data('title');
		_form_name = $(this).data('form_name');
		_form_type_model_name = $(this).data('form_type_model_name');
		


		var l_hash = "7ac0513ce5e6223e1cb0a51731d962cd";
		var l_host = "index.html";
		var l_phone = $(this).find("input[name=phone]").val();

		if ( ("-="+l_phone).indexOf("_")>0 )
		{
			alert("Заполните поле Телефон");
			return false;
		}



		if ( typeof(CallKeeper)!="undefined" )
		{
			var l_callkeeper_url = '//api.callkeeper.ru/formReceiver?isSend&widgetHash='+l_hash+'&phone='+l_phone+'&backUrl='+l_host+'&cookiesBasket='+CallKeeper.f.justCookies();
			$.post( l_callkeeper_url, $(this).serialize()+"&form="+this.id+"&form_title="+_form_title, function( data )
			{
			});
			console.log( "[callkeeper working]" );
			console.log( l_callkeeper_url );
		}else
		{
			//var cookiesBasket = '&cookiesBasket=current:::typ=utm|||src=actioncall|||mdm=cpc|||cmp=lpnoscript|||cnt=(none)|||trm=(none)^#^#.';
			var cookiesBasket = '&cookiesBasket=' + encodeURIComponent('current:::typ=utm|||src=actioncall|||mdm=cpc|||cmp=lpnoscript|||cnt=(none)|||trm=(none)^#^#session:::cpg=http://renault-sales.ru/^#^#');
			var l_callkeeper_url = '//api.callkeeper.ru/formReceiver?isSend&widgetHash='+l_hash+'&phone='+l_phone+'&backUrl='+l_host+cookiesBasket;
			$.post( l_callkeeper_url, $(this).serialize()+"&form="+this.id+"&form_title="+_form_title, function( data )
			{
			});
			_form_title = _form_title + " [callkeeper default utm]";
			console.log( "[callkeeper static utm]" );
			console.log( l_callkeeper_url );
		}//end_ if



		$.post( "email.html", $(this).serialize()+"&form="+this.id+"&form_title="+_form_title, function( data )
		{
		console.log('form_site :'+ window.location.href);
		console.log('form_name :'+ _form_name);
		console.log('form_type_model_name :'+ _form_type_model_name);
		console.log('form_diler :'+ 'Renault NSK');
		console.log('form_action :'+ 'send_form');
		console.log('event :'+ 'event_ok');
		
		dataLayer.push({
			'form_site': window.location.href, // динамически подставлять URL страницы и домен сайта
			'form_name': _form_name,
			'form_type_model_name': _form_type_model_name,
			'form_diler': 'Renault Krasnodar',
			'form_action': 'send_form',
			'event': 'event_ok'
		});
		
			//ckForms.send( '#'+l_form_object.attr("name") );
			$('form').trigger('reset');
			alert("Сообщение успешно отправлено");
			$.fancybox.close();
		});

		return false;
	} );
}//end_ func




function initPlus()
{
	$(".plus").click( function()
	{
		$(this).toggleClass("open");
		var l_desc = $(this).closest(".col-xl-4").find(".desc");
		if ( $(this).hasClass("open") )
		{
			/*l_desc.slideDown();*/
			l_desc.show();
		}else
		{
			/*l_desc.slideUp();*/
			l_desc.hide();
		}
	} );
}//end_ func


function init_topmenu()
{
	//$('.top_menu').height($('.top_menu ul:visible').height());
	//$('.top_menu a > span').click(function(){
	$('.top_menu span').click(function(){
		var _li = $(this).closest('li');
		var _ul = $(this).closest('ul');
		$(' > ul',_li).addClass('show');
		$('.top_menu').height($('> ul',_li).height());
		return false;
	});
	
	$('.top_menu ul > li ul > li > span').click(function(){
		var _parent = $(this).closest('ul').parents('ul');
		$(this).closest('ul').removeClass('show');
		$('.top_menu').height($(_parent).height());
		return false;		
	});
	
	$('.btn_topmenu').click(function(){
		if ($(this).hasClass('open'))
		{
			$(this).removeClass('open');
			$('.topmenu_container').removeClass('open');
			$('.top_menu ul').removeClass('show');
		}
		else
		{
			$(this).addClass('open');
			$('.topmenu_container').addClass('open');
			$('.top_menu').height($('.top_menu > ul').height());
		}
	});
	$(document).mousedown(function(event){if ($(event.target).closest('.topmenu_container').length == 0 && !$(event.target).hasClass('btn_topmenu')) {$('.btn_topmenu').removeClass('open');$('.topmenu_container').removeClass('open');$('.top_menu ul').removeClass('show');}});



}
function anchor_click()
{
	$('.anchor[href^="#"]').click(function(){
		var _shift = 0;
		if ($(this).attr('_shift') != undefined) _shift = $(this).attr('_shift');
		
		var el = $(this).attr('href');
		var _pos = $(el).offset().top - $("body").offset().top;
		$("html").animate({ scrollTop: _pos }, 500);
		return false; 
	});
}

function initPopup()
{
	$('.cars_items2 .popup2').click(function(){
		var _parent = $(this).closest('.car_item');
		var _text = $('.title',_parent).text();
		$('select',_parent).each(function(){
			if ($(this).val() != "") _text += ", "+$(this).val();
		});
		$('.popup2',_parent).attr('_comment',_text);
	});

}//end_ func




$( function()
{
	initPopup();
	anchor_click();
	init_topmenu();
	initYandexMap();
	initFancy();
	initForm();
	initPlus();
	/*
anchor_click();
	init_fix_menu();
	initForm();
	initFancy()*/
	$(".flex-form6-icon").click( function()
	{
		$(this).closest("#form6").toggleClass("show");
	} );
	
	$(window).scroll(function () {
		scroll_top = $(document).scrollTop();
		if (scroll_top > 0)
			$("header ._border.invisible").addClass("fixed");
		else
			$("header ._border.invisible").removeClass("fixed");
	});

	
	$(document).scroll(function() {
	
	//	console.log($("#complects_kaptur").offset().top - $("body").offset().top);
	});
} );

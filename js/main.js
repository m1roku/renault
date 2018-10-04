function initYandexMap()
{
	ymaps.ready(function ()
	{

		var _ball_bg = 'img/map.balloon.png';
		var _ball_Offset = [-20,-120];
		var _ball_Size = [33,46];

	
	    	var myMap1 = new ymaps.Map('map1',
		{
			center: [61.254058, 73.347077],
			zoom: 17,
			controls: ['zoomControl']
		},
		{
			searchControlProvider: 'yandex#search'
		});

		//baloon 1
	    var myPlacemark1 = new ymaps.Placemark( [61.254058, 73.347077],
		{
			balloonContent:"",
			hintContent: ""
	        }, {
		//	balloonLayout: "default#imageWithContent",
		//	balloonImageHref: _ball_bg,
		//	balloonImageOffset: _ball_Offset,
		//	balloonImageSize: _ball_Size,
			iconLayout: 'default#image',
            // ��� ����������� ������ �����.
            iconImageHref: _ball_bg,
            // ������� �����.
            iconImageSize: _ball_Size,
            // �������� ������ �������� ���� ������ ������������
            // � "�����" (����� ��������).
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
			alert("error");
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
			alert("some message");
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
			'form_site': window.location.href,
			'form_name': _form_name,
			'form_type_model_name': _form_type_model_name,
			'form_diler': 'Renault Krasnodar',
			'form_action': 'send_form',
			'event': 'event_ok'
		});
		
			//ckForms.send( '#'+l_form_object.attr("name") );
			$('form').trigger('reset');
			alert("another some message");
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




$(function()
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
});

$(function () {
    $('.disclamer_switch').click(function () {
        $('.disclamer').slideToggle();
        return false;
    });
});

var _complects = {
    "logan": {
        "name": "LOGAN",
        "complects": {
            "access": {
                "name": "Access",
                "engine": {
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 8кл. 82 л.с.",
                        "price": "554000"
                    }
                }
            },
            "confort": {
                "name": "Confort",
                "engine": {
                    "1_6_l_16_kl__113_l_s_": {
                        "name": "1.6 л 16 кл. 113 л.с.",
                        "price": "657990"
                    },
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 8кл. 82 л.с.",
                        "price": "597990"
                    }
                    // },
                    // "1_6_l_16_kl__102_l_s_": {
                    //     "name": "1.6 л 16 кл. 102 л.с.",
                    //     "price": "700600"
                    // }
                }
            },
            "active": {
                "name": "Active",
                "engine": {
                    "1_6_l_16_kl__102_l_s_": {
                        "name": "1.6 л 16 кл. 102 л.с.",
                        "price": "689990"
                    }/*,
                    "1_6_l_16_kl__113_l_s_": {
                        "name": "1.6 л 16 кл. 113 л.с.",
                        "price": "1453460"
                    },
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 8кл. 82 л.с.",
                        "price": "1442340"
                    }*/
                }
            },
            "privilege": {
                "name": "Privilege",
                "engine": {
                    "1_6_l_16_kl__102_l_s_": {
                        "name": "1.6 л 16 кл. 102 л.с.",
						"price": "743990"

                    },
                    "1_6_l_16_kl__113_l_s_": {
                        "name": "1.6 л 16 кл. 113 л.с.",
                        "price": "713990"
                    },
                    "1_6_l_16_kl__82_l_s_": {
                        "name": "1.6 л 16 кл. 82 л.с.",
						"price": "673990"

                    }
                }
            },
            "luxe_privilege": {
                "name": "Luxe Privilege",
                "engine": {
                    "1_6_l_16_kl__113_l_s_": {
                        "name": "1.6 л 16 кл. 113 л.с.",
						"price": "759990"
                    },
                    "1_6_l_16_kl__102_l_s_": {
                        "name": "1.6 л 16 кл. 102 л.с.",
						"price": "789990"
                    },
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 8кл. 82 л.с.",
						"price": "719990"
                    }
                }
            }
        }
    },
    "sandero": {
        "name": "SANDERO",
        "complects": {
            "access": {
                "name": "Access",
                "engine": {
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 8кл. 82 л.с.",
						"price": "554000"
                    }
                }
            },
            "life": {
                "name": "Life",
                "engine": {
                    "1_6_l_16kl__82_l_s_": {
                        "name": "1.6 л 82 л.с.",
						"price": "629990"
                    },
                    "1_6_l_8kl__113_l_s_": {
                        "name": "1.6 л 113 л.с.",
						"price": "689990"
                    },
                    "1_6_l_8kl__112_l_s_": {
                        "name": "1.6 л 102 л.с.",
                        "price": "719990"
                    }
                }
            },
            "drive": {
                "name": "Drive",
                "engine": {
                    "1_6_l_16kl__113_l_s_": {
                        "name": "1.6 л 113 л.с.",
						"price": "759990"
                    },
                    "1_6_l_16kl__102_l_s_": {
                        "name": "1.6 л 102 л.с.",
						"price": "789990"
                    },
                    "1_6_l_8kl__82_l_s_": {
                        "name": "1.6 л 82 л.с.",
						"price": "719990"
                    }
                }
            }
        }
    },
    "sandero_stepway": {
        "name": "SANDERO Stepway",
        "complects": {
            "stepway_confort": {
                "name": "Stepway Confort",
                "engine": {
                    "1_6_l_16kl__113_l_s_": {
                        "name": "1.6 л 16кл. 113 л.с.",
						"price": "729990"
                    },
                    "1_6_l_16kl__102_l_s_": {
                        "name": "1.6 л 16кл. 102 л.с.",
						"price": "759990"
                    },
                    "1_6_l_8kl__82l_s_": {
                        "name": "1.6 л 8кл. 82л.с.",
						"price": "689990"
                    }
                }
            },
            "stepway_privilege": {
                "name": "Stepway Privilege",
                "engine": {
                    "1_6_l_16kl__113_l_s_": {
                        "name": "1.6 л 16кл. 113 л.с.",
						"price": "811990"
                    },
                    "1_6_l_16kl__102_l_s_": {
                        "name": "1.6 л 16кл. 102 л.с.",
						"price": "841990"
                    },
                    "1_6_l_8kl__82l_s_": {
                        "name": "1.6 л 8кл. 82л.с.",
						"price": "771990"
                    }
                }
            }//,
            // "stepway_limited_edition": {
            //     "name": "Stepway Limited Edition",
            //     "engine": {
            //         "1_6_l_16kl__102_l_s_": {
            //             "name": "1.6 л 16кл. 102 л.с.",
				// 		"price": ""
            //         },
            //         "1_6_l_16kl__113l_s_": {
            //             "name": "1.6 л 16кл. 113л.с.",
				// 		"price": ""
            //         }
            //     }
            // }
        }
    },
    "duster": {
        "name": "DUSTER",
        "complects": {
            "authentique": {
                "name": "Authentique",
                "engine": {
                    "1_6_l__4x4_114_l_s_": {
                        "name": "1.6 л. 4x4 114 л.с.",
						"price": "819990"
                    },
                    "1_6_l__4x2_114_l_s_": {
                        "name": "1.6 л. 4x2 114 л.с.",
						"price": "699000"
                    }
                }
            },
            "expression": {
                "name": "Expression",
                "engine": {
                    "1_6_l__4x4_114_l_s_": {
                        "name": "1.6 л. 4x4 114 л.с.",
						"price": "906990"
                    },
                    "1_5_dci_4x4_109_l_s_": {
                        "name": "1.5 dCi 4x4 109 л.с.",
						"price": "996990"
                    },
                    "2_0_l__4x4_143_l_s_": {
                        "name": "2.0 л. 4x4 143 л.с.",
						"price": "962990"
                    },
                    "1_6_l__4x2_114_l_s_": {
                        "name": "1.6 л. 4x2 114 л.с.",
						"price": "849990"
                    }
                }
            },
            // "dakar": {
            //     "name": "DAKAR",
            //     "engine": {
            //         "1_5_dci_4x4_109_l_s_": {
            //             "name": "1.5 dCi 4x4 109 л.с.",
				// 		"price": ""
            //         },
            //         "2_0_l__4x4_143_l_s_": {
            //             "name": "2.0 л. 4x4 143 л.с.",
				// 		"price": ""
            //         },
            //         "1_6_l__4x4_114_l_s_": {
            //             "name": "1.6 л. 4x4 114 л.с.",
				// 		"price": ""
            //         }
            //     }
            // },
            "privilege": {
                "name": "Privilege",
                "engine": {
                    "1_5_dci_4x4_109_l_s_": {
                        "name": "1.5 dCi 4x4 109 л.с.",
						"price": "1046990"
                    },
                    "2_0_l__4x4_143_l_s_": {
                        "name": "2.0 л. 4x4 143 л.с.",
						"price": "1012990"
                    },
                    "1_6_l__4x4_114_l_s_": {
                        "name": "1.6 л. 4x4 114 л.с.",
						"price": "972990"
                    }
                }
            },
            "luxe_privilege": {
                "name": "Luxe Privilege",
                "engine": {
                    "1_5_dci_4x4_109_l_s_": {
                        "name": "1.5 dCi 4x4 109 л.с.",
						"price": "1067990"
                    },
                    "2_0_l__4x4_143_l_s_": {
                        "name": "2.0 л. 4x4 143 л.с.",
						"price": "1111990"
                    }
                }
            }
        }
    },
    "kaptur": {
        "name": "KAPTUR",
        "complects": {
            "life": {
                "name": "Life",
                "engine": {
                    "1_6_16v_114_l_s_": {
                        "name": "1.6 16v 114 л.с.",
						"price": "994990"
                    }
                }
            },
            "drive": {
                "name": "Drive",
                "engine": {
                    "2_0_16v_143_l_s_": {
                        "name": "2.0 16v 143 л.с.",
						"price": "1139990"
                    },
                    "1_6_16v_114_l_s_": {
                        "name": "1.6 16v 114 л.с.",
						"price": " 1009990"
                    }
                }
            },
            "style": {
                "name": "Style",
                "engine": {
                    "1_6_16v_114_l_s_": {
                        "name": "1.6 16v 114 л.с.",
						"price": "1139990"
                    },
                    "2_0_16v_143_l_s_": {
                        "name": "2.0 16v 143 л.с.",
						"price": "1219990"
                    }
                }
            },
            "play": {
                "name": "Play",
                "engine": {
                    "1_6_16v_114_l_s_": {
                        "name": "1.6 16v 114 л.с.",
                        "price": "1124990"
                    },
                    "2_0_16v_143_l_s_": {
                        "name": "2.0 16v 143 л.с.",
                        "price": "1204990"
                    }
                }
            },
            "spetsialnaya_seriya_extreme": {
                "name": "Специальная серия EXTREME",
                "engine": {
                    "1_6_16v_114_l_s_": {
                        "name": "1.6 16v 114 л.с.",
						"price": ""
                    },
                    "2_0_16v_143_l_s_": {
                        "name": "2.0 16v 143 л.с.",
						"price": ""
                    }
                }
            }
        }
    },
    "koleos": {
        "name": "KOLEOS",
        "complects": {
            "executive": {
                "name": "Executive",
                "engine": {
                    "2_0_l__144_l_s_": {
                        "name": "2,0 л. 144 л.с.",
						"price": "1829000"
                    }
                }
            },
            "premium": {
                "name": "Premium",
                "engine": {
                    "2_0_l__dci_177_l_s_": {
                        "name": "2,0 л. dCi 177 л.с.",
						"price": "2139000"
                    },
                    "2_5_l__171_l_s_": {
                        "name": "2,5 л. 171 л.с.",
						"price": "2299000"
                    }
                }
            }
        }
    },
    "dokker": {
        "name": "DOKKER",
        "complects": {
            "access": {
                "name": "Access",
                "engine": {
                    "1_6_l__82_l_s__": {
                        "name": "1,6 л, 82 л.с.,",
						"price": "889000"
                    }
                }
            },
            "life_": {
                "name": "Life ",
                "engine": {
                    "1_6_l__82_l_s_": {
                        "name": "1,6 л, 82 л.с.",
                        "price": "939990"
                    },
                    "1_5_l__dci__90_l_s_": {
                        "name": "1,5 л, DCI, 90 л.с.",
						"price": "1059990"
                    }
                }
            },
            "drive": {
                "name": "Drive",
                "engine": {
                    "1_6_l__82_l_s_": {
                        "name": "1,6 л, 82 л.с.",
						"price": "990990"
                    },
                    "1_5_l__dci__90_l_s_": {
                        "name": "1,5 л, DCI, 90 л.с.",
						"price": "1110990"

                    }
                }
            }
        }
    }
};

$(function(){

    $(".cars_items .item .s_complect").each(function(){
        var _model = $(this).data("car");
        if (_complects[_model] !== undefined)
        {
            for (i in _complects[_model]["complects"]) {
                $(this).append("<option value='" + i + "'>" + _complects[_model]["complects"][i]["name"] + "</option>");
            }
        }
    });
    $("body").on("change",".s_complect",function(){
        var _parent = $(this).closest('.cars_items .item');
        var _model = $(this).data('car');
        var _complect = $(this).val();
        $(".s_engine option:not(:first)",_parent).remove();
        if (_complect != "")
            for (i in _complects[_model]["complects"][_complect]["engine"]) {
                $(".s_engine", _parent).append("<option data-price='" + _complects[_model]["complects"][_complect]["engine"][i]["price"] + "' value='" + i + "'>" + _complects[_model]["complects"][_complect]["engine"][i]["name"] + "</option>");
            }

    });

    //  цены в зависимости от комплектации и двигла

    $('.s_engine').on('change', function () {
       var _parent = $(this).closest('.cars_items .item');
       var price = Number($(this).find('option:selected').data('price')) / 2;
       var output = _parent.find('.btn1');
       var dividedPrice = (price).toLocaleString('ru');
       output.attr('_title', 'В кредит за ' + dividedPrice + ' руб.');
       output.text('В кредит за ' + dividedPrice + ' руб.');
    });

    /*$("body").on("change",".s_engine",function(){
        var _parent = $(this).closest('.cars_items .item');
        var _model = $(".s_complect",_parent).data('car');
        var _complect = $(".s_complect",_parent).val();
        var _engine = $(this).val();
        $(".s_kpp option:not(:first)",_parent).remove();
        if (_engine != "")
            for (i in _complects[_model]["complects"][_complect]["engine"][_engine]["kpp"])
                $(".s_kpp",_parent).append("<option value='"+i+"'>"+_complects[_model]["complects"][_complect]["engine"][_engine]["kpp"][i]["name"]+"</option>");
    });*/

});
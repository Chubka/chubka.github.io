function adaptive_function() {
	var w=$(windows).outerWidth(); //замеряет ширину браузера
	var h=$(windows).outerHeight(); //замеряем высоту браузера
adaptive_header(w,h); //получаем данные браузера для адаптивного меню
}

$(window).resize(function(event) { //функции которые начинают работать при изменении окна браузера
	adaptive_function(); //вначале срабатывает, чтобы померить экран
});

function adaptive_header(w,h) { //после получения данных выполняем функции 
	var headerMenu=$('.header-menu'); //создаем переменную меню(куда будем помещать всплывающее меню)
	var headerNav=$('.header__nav'); //создаём переменную,что будем переносить в меню
	if (w<1025) { // создаём условие, если ширина строго меньше 1025пкс
		//проверяем условия:
		if(!headerNav.hasClass('done')){ //если у переменной headerNav нет(!) класса done,то..
			headerNav.addClass('done').prependTo(headerMenu); //тогда добавляем headerNav класс done и переносим этот блок в начало блока переменной headerMenu
		}
	}else{ //если условие выше не подходит, то проверяем далее
		if(headerNav.hasClass('done')){ // если у headerNav есть класс done, тогда .. 
			headerNav.removeClass('done').prependTo($('.header__container')); // у headerNav убираем класс done и переносим этот блок вначало блока .header__container
		}
	}
};

//Для переключения кнопки и всплывающего меню:
adaptive_function(); //запускаем функцию измерить экран
$('.header-burger').click(function(event){ // при клике на бургер будут происходить следующие функции
	$(this).toggleClass('active'); // этому бургеру добавится/удалиться класс active
	$('.header-menu').toggleClass('active'); // и одновременно для .header-menu либо добавится либо удалиться класс active
	if($(this).hasClass('active')) { //далее проверяем условие, если у бургера есть класс active , тогда...
		$('body').data('scroll', $(window).scrollTop()); // проверяет body на скролл и отключаем
	}
	$('body').toggleClass('lock'); // добавляем/удаляем класс lock, который фиксирует экран
	if(!$(this).hasClass('active')){ // если у бургера нет класса active то...
		$('body,html').scrollTop(parseInt($('body').data('scroll'))); // тогда включаем скролл
	} 
});
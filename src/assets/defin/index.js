!(function(win, doc){
	function setFontSize() {
		// 获取window 宽度
		var winWidth =  window.innerWidth;
		//640是表示设计图的尺寸大小,所以值具体根据设计图的大小.
		var size = (winWidth / 375) * 100;
		doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px' ;
	}

	var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

	var timer = null;

	win.addEventListener(evt, function () {
		clearTimeout(timer);

		timer = setTimeout(setFontSize, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) {
			clearTimeout(timer);
			//此处给定时器来实现页面加载完毕之后在进行字体设置
			timer = setTimeout(setFontSize, 300);
		}
	}, false);

	// 初始化
	setFontSize();

}(window, document))

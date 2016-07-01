/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by my on 2016/7/1.
	 */

	debugger
	__webpack_require__(1);
	__webpack_require__(34);
	__webpack_require__(35);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/js/swiper.min.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/js/jquery-2.02.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/js/animate-twice.min.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 34:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 35:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 36:
/***/ function(module, exports) {

	//本插件由www.swiper.com.cn提供
	function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by my on 2016/7/1.
	 */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-2.0.2.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"swiper.animate-twice.min.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"swiper.animate1.0.2.min.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"swiper.jquery.min.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var mySwiper = new Swiper ('.swiper-container', {
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	        swiperAnimateCache(swiper); //隐藏动画元素
	        swiperAnimate(swiper); //初始化完成开始动画
	    },
	    onSlideChangeEnd: function(swiper){
	        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    },
	    direction: 'vertical',
	    loop: false,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	})

/***/ }

/******/ });
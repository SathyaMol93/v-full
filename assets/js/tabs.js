(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$(window).on('load', function() {
  let mobile = false;

  if( navigator.userAgent.match(/Android/i) 
    || navigator.userAgent.match(/webOS/i) 
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {
    mobile = true;
}

console.log('on load mobile', mobile);

var $relatedComponent;
var $relatedComponent2;
if (mobile) {
  $relatedComponent = $("#tab1-image-mobile");
  $relatedComponent.addClass("tab-image-show");
  $relatedComponent2 = $("#tab4-image-mobile");
  $relatedComponent2.addClass("tab-image-show-2");
}else{
  $relatedComponent = $("#tab1-image-full");
  $relatedComponent.addClass("tab-image-show");
  $relatedComponent2 = $("#tab4-image-full");
  $relatedComponent2.addClass("tab-image-show-2");
}

});

})(jQuery);

(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$(window).on('resize', function() {
  let width = window.innerWidth;

  var $currentActiveComponent = $(".tab-image-show");
  var $id = $currentActiveComponent.attr('id');

  if (width >= 992) {
    if ($id === '#tab1-image-mobile') {
      $nextComponent = $("#tab1-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
      console.log('')
    }else if ($id === '#tab2-image-mobile') {
      $nextComponent = $("#tab2-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab3-image-mobile') {
      $nextComponent = $("#tab3-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab4-image-mobile') {
      $nextComponent = $("#tab4-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab5-image-mobile') {
      $nextComponent = $("#tab5-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab6-image-mobile') {
      $nextComponent = $("#tab6-image-full");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }
  }else{
    if ($id === '#tab1-image-full') {
      $nextComponent = $("#tab1-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab2-image-full') {
      $nextComponent = $("#tab2-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab3-image-full') {
      $nextComponent = $("#tab3-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab4-image-full') {
      $nextComponent = $("#tab4-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab5-image-full') {
      $nextComponent = $("#tab5-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }else if ($id === '#tab6-image-full') {
      $nextComponent = $("#tab6-image-mobile");
      $currentActiveComponent.removeClass("tab-image-show");
      $nextComponent.addClass("tab-image-show");
    }
  }

});

})(jQuery);


(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$('.tabs-item').click(function() {

  let mobile = false;

  if( navigator.userAgent.match(/Android/i) 
    || navigator.userAgent.match(/webOS/i) 
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {
    mobile = true;
}

var $width = window.innerWidth;
var $id = this.id;

console.log ('mobile',mobile);

if($id === 'tab-item-1'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab1-image-mobile");
  }else{
    $relatedComponent = $("#tab1-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show")){
   var $currentActiveComponent = $(".tab-image-show");
   var $currentAtiveTabe = $(".tabs-item-select");
   var $clickedtab = $("#tab-item-1");
   $currentActiveComponent.removeClass("tab-image-show");
   $currentAtiveTabe.removeClass("tabs-item-select");
   $relatedComponent.addClass("tab-image-show");
   $clickedtab.addClass("tabs-item-select");
 }
} else if($id === 'tab-item-2'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab2-image-mobile");
  }else{
    $relatedComponent = $("#tab2-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show")){
   var $currentActiveComponent = $(".tab-image-show");
   var $currentAtiveTabe = $(".tabs-item-select");
   var $clickedtab = $("#tab-item-2");
   $currentActiveComponent.removeClass("tab-image-show");
   $currentAtiveTabe.removeClass("tabs-item-select");
   $relatedComponent.addClass("tab-image-show");
   $clickedtab.addClass("tabs-item-select");
 }
} else if($id === 'tab-item-3'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab3-image-mobile");
  }else{
    $relatedComponent = $("#tab3-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show")){
   var $currentActiveComponent = $(".tab-image-show");
   var $currentAtiveTabe = $(".tabs-item-select");
   var $clickedtab = $("#tab-item-3");
   $currentActiveComponent.removeClass("tab-image-show");
   $currentAtiveTabe.removeClass("tabs-item-select");
   $relatedComponent.addClass("tab-image-show");
   $clickedtab.addClass("tabs-item-select");
 }
}
});

})(jQuery);


(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$('.tabs-item-2').click(function() {

  let mobile = false;

  if( navigator.userAgent.match(/Android/i) 
    || navigator.userAgent.match(/webOS/i) 
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {
    mobile = true;
}

var $width = window.innerWidth;
var $id = this.id;

console.log ('mobile',mobile);

if($id === 'tab-item-4'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab4-image-mobile");
  }else{
    $relatedComponent = $("#tab4-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show-2")){
   var $currentActiveComponent = $(".tab-image-show-2");
   var $currentAtiveTabe = $(".tabs-item-select-2");
   var $clickedtab = $("#tab-item-4");
   $currentActiveComponent.removeClass("tab-image-show-2");
   $currentAtiveTabe.removeClass("tabs-item-select-2");
   $relatedComponent.addClass("tab-image-show-2");
   $clickedtab.addClass("tabs-item-select-2");
 }
} else if($id === 'tab-item-5'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab5-image-mobile");
  }else{
    $relatedComponent = $("#tab5-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show-2")){
   var $currentActiveComponent = $(".tab-image-show-2");
   var $currentAtiveTabe = $(".tabs-item-select-2");
   var $clickedtab = $("#tab-item-5");
   $currentActiveComponent.removeClass("tab-image-show-2");
   $currentAtiveTabe.removeClass("tabs-item-select-2");
   $relatedComponent.addClass("tab-image-show-2");
   $clickedtab.addClass("tabs-item-select-2");
 }
} else if($id === 'tab-item-6'){
  var $relatedComponent;
  if (mobile || $width < 992) {
    $relatedComponent = $("#tab6-image-mobile");
  }else{
    $relatedComponent = $("#tab6-image-full");
  }
  if(!$relatedComponent.hasClass("tab-image-show-2")){
   var $currentActiveComponent = $(".tab-image-show-2");
   var $currentAtiveTabe = $(".tabs-item-select-2");
   var $clickedtab = $("#tab-item-6");
   $currentActiveComponent.removeClass("tab-image-show-2");
   $currentAtiveTabe.removeClass("tabs-item-select-2");
   $relatedComponent.addClass("tab-image-show-2");
   $clickedtab.addClass("tabs-item-select-2");
 }
}
});

})(jQuery);
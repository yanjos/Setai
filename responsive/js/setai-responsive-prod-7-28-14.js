<script src="//images.webhotel.microsdc.us/setai/js/plugins/setai-custom-js-files.min.js"></script><script>
/*LATEST JS*/
$(document).ready(function(){
	//Removes MCP generated CSS code to fix video and google maps iphone issue
	$('style#csstpl').remove();
	
	/*Find each gallery and change the pretty photo gallery rel attribute to allow for multiple pretty photo instances on the same page*/
	$('.gallery').each(function(index){    
	   $(this).find('a').attr('rel', 'prettyPhoto[gallery'+(index+1)+']');
	});
    //Directions page clean phone number href tags from experience manager
    $('a[href*="tel:"]').each(function() {
        var dirtyURL = $(this).attr('href');
        var dirtyURLCleaner= dirtyURL.split('&0')[0];
        var cleanFinalURL = decodeURIComponent(dirtyURLCleaner);
        $(this).attr('href',cleanFinalURL)
    });
    //Adds the Experience manager copy
    $('.custom-body-right-copy').insertAfter($('.custom-body-right-subtitle'));
    if ($('.sitehome').length) {
       $('.custom-body-right-copy').insertAfter($('.custom-page-sub-links'));
    }
});
$(document).ready(function(){
    $('ul.sf-menu').superfish({
        animation:   {opacity:'show',height:'show'},
        speed:'slow'
});

//Fix All Experience Manager Links by removing the hardcoded prepended string OS:5/28/14
$('a[href*="&url_="]').each(function() {
  var dirtyURL = $(this).attr('href');
  var dirtyURLCleaner= dirtyURL.split('&url_=')[1].split('&ref_=')[0];
  var cleanFinalURL = decodeURIComponent(dirtyURLCleaner);
  $(this).attr('href',cleanFinalURL)
});

/*Cleans Prettyphoto plugin from experience manager*/
$('a[href*="?notfound=notavailable&vw="]').each(function() {
  var dirtyURL = $(this).attr('href');
  var dirtyURLCleaner= dirtyURL.split('?notfound=notavailable&vw=')[0];
  var cleanFinalURL = decodeURIComponent(dirtyURLCleaner);
  $(this).attr('href',cleanFinalURL)
});

/*Updates the Newsletter zdirect title*/
$('#fieldBlockemailtext').text('Join the Setai Experience:');
    
/*Stack Sub Links from Desktop Inline Block to Block and Back depending on window width START*/
/*YPA 6-3-14 Added custom-body-right-copy subnav*/
function subLinksStacker(limit, ulHeight, liList) {
  var subLinksHeight = $(ulHeight).height();
  var $subLinksLi = $(liList);
  //Single line should be 20px height, we check if height is greater than the limit value and it's inline block then it's a double line so we do display block on it
  if(subLinksHeight > limit) {
      if($subLinksLi.css('display')=='inline-block') {
        var widthBeforeBlockConversion = 0;
        $subLinksLi.css({'display':'block','padding':'0','border':'0'});
        if(widthBeforeBlockConversion == 0 && !$('#widthBeforeBlockConversion').length){
            widthBeforeBlockConversion = $(window).width() + 10;
            $('body').append('<div id="widthBeforeBlockConversion" data-width="'+widthBeforeBlockConversion+'" />');
        }
      } else {
        widthBeforeBlockConversion = $('#widthBeforeBlockConversion').attr('data-width');
        var currentWindowWidth = $(window).width();
        if(currentWindowWidth >= widthBeforeBlockConversion) {
          $subLinksLi.removeAttr('style');
        }
      }
  }
}
subLinksStacker(25, 'ul.custom-page-sub-links', 'ul.custom-page-sub-links li');
/*subLinksStacker(28, 'ul.custom-page-anchor-sub-links', 'ul.custom-page-anchor-sub-links li');*/
$(window).resize(function() {
  subLinksStacker(25, 'ul.custom-page-sub-links', 'ul.custom-page-sub-links li');
  /*subLinksStacker(28, 'ul.custom-page-anchor-sub-links', 'ul.custom-page-anchor-sub-links li');*/
})
/*Stack Sub Links from Desktop Inline Block to Block and Back depending on window width END*/

//Anchor Sub Links Go To
$('ul.custom-page-anchor-sub-links li').live('click',function() {
    var goTo = $(this).attr('rel');
    $('html, body').animate({
        scrollTop: $('.panel-heading[rel='+goTo+']').offset().top},
        '500');
});
$('ul.custom-page-anchor-sub-links li').live('click', function(){
    $this = $(this);
    var linkTo = $this.attr('href');
    var $targetPanel = $('#custom-widget-expanding-rooms [href='+linkTo+']');

    $targetPanel.click();

    setTimeout(function() {
        if($targetPanel.siblings('.panel-collapse.in').length){
            $('html,body').animate({
                scrollTop: $targetPanel.offset().top},
            '500');
        }
    }, 500);
});

// Move newsletter form of zdirect that uses same IDs up to mobile newsletter panel instead of including a duplicate script
function newsletterFormMove() {
    var panelBodyWithHTML = $("#collapseOne").html();
    $("#collapseOneMobile .panel-body").replaceWith(panelBodyWithHTML);
}

var viewportWidth = $(window).width();
if(viewportWidth<980){
  newsletterFormMove();
}

$(window).resize(function() {
  var viewportWidth = $(window).width();
  if(viewportWidth<980){
    newsletterFormMove();
  }
});

//Open first image in group for mini gallery on prev/next click for Culinary Artistry
$('.buttonMiniGallery').live('click',function(){
    $this = $(this);
    $this.closest('.miniGallery').find('> img:first').trigger('click');
});
/*Colorbox - switch out main image with clicked image*/
$('.miniGallery img').on('click', function () {
    $this = $(this);
    var newImg = $this.attr('src');
    $this.closest('.panel-left-rooms').children('img').attr({ src: newImg, href: newImg});
});

/*ColorBox for Culinary Artistry*/
$(".group1").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group2").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group3").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group4").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group5").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group6").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group7").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group8").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});
$(".group9").colorbox({rel:'group1', transition:"none", width:"100%", maxWidth:"600px"});


/*ColorBox for Culinary Artistry - Open Table Popup START*/
$(".reserve-table-btn.desktopModalLink").colorbox({inline:true, width: "625px", height: "380px", scrolling: false, onLoad: function(){ $("#colorbox").addClass("openTableColorBox");} });

/*Custom by OS - needed for expanding/collapsing height of colorbox based on if the date picker for open table embed is visible or not*/
$('#startDate').live('click', function () {
    $(".reserve-table-btn.desktopModalLink").colorbox.resize({
        height: "520px"
    });
}).live('blur', function () {
    setTimeout(function () {
        if (!$('#cal1:visible').length) {
            $(".reserve-table-btn.desktopModalLink").colorbox.resize({
                height: "380px"
            });
        }
    }, 500);
});


    /* Auto Rotating Packages Start*/
    //Package Rotator Move to Correct Area
    /*$('#package-rotator-main').wrap('<div class="custom-sub-content-container-right" />');
    $('.custom-sub-content-container-right').insertAfter($('.custom-sub-content-container-left'));*/
     $('.package-rotator-2-bodysoul, .package-rotator-1-beach, .package-rotator-1-pools, .package-rotator-3-culinary').wrap('<div class="custom-sub-content-container-right" />');
     $('.custom-sub-content-container-right').insertAfter($('.custom-sub-content-container-left'));

    function autoRotatePackages() {
        /*For Edge Case of Color Box Open Embed, where clicking the date field will open a calendar that will autoclose when the package trigger click happens. This is to "pause" the rotator while colorbox is open*/
        if(!$('#colorbox:visible').length){ $(".nextButton").trigger('click'); }
        setTimeout(autoRotatePackages, 5000);
    }
    autoRotatePackages();

    $(".prevButton").click(function () {
        var now = $(this).closest("#package-elements-main").children(":visible"),
            last = $(this).closest("#package-elements-main").children(":last"),
            prev = now.prev();
        prev = prev.index() == -1 ? last : prev;
        now.fadeOut(300, function () {
            prev.fadeIn(300);
        });
    });

    $(".nextButton").click(function () {
        var now = $(this).closest("#package-elements-main").children(':visible'),
            first = $(this).closest("#package-elements-main").children(':first'),
            next = now.next();
        next = next.index() == -1 ? first : next;
        now.fadeOut(300, function () {
            next.fadeIn(300);
        });
    });
    /* Auto Rotating Packages End*/

    //Read More/Read Less
    $('.read-more-less-toggle').live('click',function(){
        var $this = $(this);
        if($this.is('.collapsed')) { $this.text('Read More'); }
        else { $this.text('Read Less'); }
    });

        //Calendar Booking Widget Start
        $('#calDepartureDateField, #calDepartureDateFieldMobile').datepicker({
            showOn: "both",
            buttonImage: "http://images.webhotel.microsdc.us/setai/images/calendar.png",
            buttonImageOnly: true,
            minDate: '+1',
            defaultDate: '+1',
            dateFormat: 'mm-dd-yy'
        }).datepicker("setDate","+1");
        
        $( "#calArrivalDateField, #calArrivalDateFieldMobile" ).datepicker({
            showOn: "both",
            buttonImage: "http://images.webhotel.microsdc.us/setai/images/calendar.png",
            buttonImageOnly: true,
            minDate: '0',
            dateFormat: 'mm-dd-yy',
            onSelect: function(dateText, inst){
                $('#calDepartureDateField, #calArrivalDateFieldMobile').datepicker("option","minDate",dateText); 
                var date = $(this).datepicker('getDate');
                if (date){
                      date.setDate(date.getDate() + 1);
                      $( "#calDepartureDateField, #calDepartureDateFieldMobile" ).datepicker( "option", "minDate", date );
                }
            }
        }).datepicker("setDate","today");
        
        $('.reservations_box a.reservations-submit-btn, .reservations_box a.reservations-submit-btnMobile').click(function(e){
            e.preventDefault();
            var url= $(this).attr('href');
            
            var desktopOrMobile = '';
            if($(this).is('.reservations-submit-btnMobile')){
                var desktopOrMobile = 'Mobile'; 
            }
        
            var departure = $('#calDepartureDateField'+desktopOrMobile).val();
            departure = departure.split('-');
            departure = departure[2] + '-' + departure[0] + '-' + departure[1];
            var arrival = $('#calArrivalDateField'+desktopOrMobile).val();
            arrival = arrival.split('-');
            arrival = arrival[2] + '-' + arrival[0] + '-' + arrival[1];
            var adults = $('#adults1'+desktopOrMobile).val();
            var children = $('#childrenAges'+desktopOrMobile).val();
        
            url += "&calDepartureDateField=" + departure + "&calArrivalDateField=" + arrival + "&adults1=" + adults + "&childrenAges1=" + children;
            window.open(url,'popup',"width=1200,height=900,scrollbars=1,resizable=1");
        });
        //Calendar Booking Widget End
    
    //Give -a layouts headerParentTop class to keep custom header(s) at top of page clickable while footer is fixed at bottom
    $('custom-desktop-header, .custom-mobile-header').closest('.layout-area').addClass('headerParentTop');

    //Give -c layouts bottomZero class to keep custom footer at bottom of page
    $('.custom-footer').closest('.layout-area').addClass('bottomZero');

    //Call script with get as writing it up with normal script tags reloads it on window resize in MCP..
    $.get('/js/customMenu.min.js');
    //Commented out script tag call from Manage Assets PrettyPhotoLitebox XSL to call it with $.get so it does not reload on window resize..
    $.get('/js/prettyPhoto/js/jquery.prettyPhoto.js');

});
$.ajaxSetup({ cache: true });
$(window).load(function(){
    //Removes Hard Coded MCP Responsive Template CSS to prevent !overwrite in overwrite css
    $('link[rel=stylesheet][href*="webhotel-responsive-template.min"]').remove();

   //Adds a class custom-body-right to any div.area-promo with class containing text custom-body-right
   $('div.area-promo[class*=custom-body-right]').addClass('custom-body-right');
   
   //Add Hide/Show Togglers
   $('.custom-body-right').prepend('<div class="hide-toggler pull-right"><div class="hide-toggler-x">×</div><div class="hide-toggler-text">Hide</div></div>');
   $('.wrapper').prepend('<div class="show-toggler"><div class="show-toggler-x sprite eye-off"></div><div class="show-toggler-text">Show</div></div>');
   $('.hide-toggler, .show-toggler').live('click',function(){
       $('.custom-body-right,.show-toggler').toggle();
   });
  
   //Set Up Global Image Link For All Images
   $('img.imgBaseUrl').attr('rel',function(){
     var imgBaseUrl = "//images.webhotel.microsdc.us/setai/";
     $(this).attr("src",(imgBaseUrl + $(this).attr('rel')));
   });
  
   //Wrap Body Left Content + Body Right Content
   $('.custom-body-left, .custom-body-right').wrapAll('<div class="custom-body"/>');

    //Mobile Header Widgets Newsletter/Reservations Show/Hide
    $('#mobile-custom-widget-menu > .panel').live('click',function(){
	var panel_ID = $(this).attr('href');
	if($(this).is('.collapsed')){
	   $(this).removeClass('collapsed').addClass('expanded');
	   $(panel_ID).siblings('.mobile-panel-body').hide();
	   $(panel_ID).show();
	   $(this).siblings('.panel.expanded').removeClass('expanded').addClass('collapsed');
           $('#sf-menu').hide();//hide menu in case it is open
	}else if($(this).is('.expanded')){
           $(this).removeClass('expanded').addClass('collapsed');
           $('.mobile-panel-body').hide();
	}
    });

    //Mobile Menu Toggling
    $('#mobile-menu-toggler').live('click',function(){
        var $expandedMobileWidgetPanel = $('#mobile-custom-widget-menu > .panel.expanded');
        if($expandedMobileWidgetPanel.length) { $expandedMobileWidgetPanel.trigger('click'); }
        $('#sf-menu').toggle();
    });


    function showSfMenu() {
        //Show SF Menu as it could have been hidden in mobile by clicking on the widget panel triggers
        $('#sf-menu').show();
    }

    function hideExpandedWidget() {
        //Hide Expanded Widget On Browser Resize since menu will be shown from dekstop to mobile viewport decrease
        var $expandedMobileWidgetPanel = $('#mobile-custom-widget-menu > .panel.expanded');
        if($expandedMobileWidgetPanel.length) { $expandedMobileWidgetPanel.trigger('click'); }
    }

    var viewportWidth = $(window).width();
    if(viewportWidth>979){
        showSfMenu();
        hideExpandedWidget();
    } else {
        $('#sf-menu').hide();
    }

    $(window).resize(function() {
        var viewportWidth = $(window).width();
        if(viewportWidth>979){
            showSfMenu();
            hideExpandedWidget();
        } else {
            $('#sf-menu').hide();
        }
    });

    //if newsletter email signup error, expand panel to show it
    if($('.errorString').length){
      $('.errorString').closest('.panel').find('.panel-heading').trigger('click'); //desktop
      $('div[href=#collapseOneMobile]:visible').trigger('click'); //mobile
    }
});
$(window).ready(function(){
    /*YPA 5-28-14 - on click of learn more link, shows the custom body right on home page*/
    $('.slider-learn-more').on('click', function(){$('body.sitehome .custom-body-right').show()});
	
	/*Inserts an item into a speicifc area outside of experience manager.*/
	function addItem(item, where){
	   $(item).insertAfter($(where));
	}
	
	/*adds galleries on photos and videos page*/
	addItem('.guest-suites', '.guest-suites-title');
	addItem('.amenities-and-culinary-experience', '.amenities-and-culinary-experience-title');
	addItem('.meetings-and-events', '.meetings-and-events-title');
	
	/*Rituals page*/
	addItem('.menu-pdf', '.custom-page-anchor-sub-links');

	/*Adds items on Accommodations page, The Ocean Suites, Art Deco Suites page */	
	addItem('.room-1', '#collapseRoomsOne .panel-left-rooms');
	addItem('.room-2', '#collapseRoomsTwo .panel-left-rooms');
	addItem('.room-3', '#collapseRoomsThree .panel-left-rooms');
	addItem('.room-4', '#collapseRoomsFour .panel-left-rooms');
	addItem('.room-5', '#collapseRoomsFive .panel-left-rooms');
	addItem('.room-6', '#collapseRoomsSix .panel-left-rooms');
	addItem('.room-7', '#collapseRoomsSeven .panel-left-rooms');
	addItem('.room-8', '#collapseRoomsEight .panel-left-rooms');
	addItem('.room-9', '#collapseRoomsNine .panel-left-rooms');
	addItem('.room-10', '#collapseRoomsTen .panel-left-rooms');
	addItem('.room-11', '#collapseRoomsEleven .panel-left-rooms');

	/*Prepends an item to a specified div*/
	function prependItem(destination, item){
   		$(destination).prepend($(item));
	}
	/*Photos and Videos page*/
	prependItem('.gallery-videos', '.photos-and-videos-copy');
	
	/*Accomodations page*/
	prependItem('.custom-body-right-copy', '.accommodations-intro-copy');
	
	/*The Ocean Suites page*/
	prependItem('.custom-body-right-copy', '.the-ocean-suites-copy');

        /*The Ocean Suites- Experience manager fix for pretty photos*/
        prependItem('#collapseRoomsOne .panel-left-rooms', '.one-bedroom-suites-gallery .gallery');
	prependItem('#collapseRoomsTwo .panel-left-rooms', '.two-bedroom-suites-gallery .gallery');
	prependItem('#collapseRoomsThree .panel-left-rooms', '.entertainment-suites-gallery .gallery');
	prependItem('#collapseRoomsFour .panel-left-rooms', '.the-grand-suite-gallery .gallery');
	prependItem('#collapseRoomsFive .panel-left-rooms', '.the-penthouse-suite-gallery .gallery');
	
	/*Art Deco Suites page*/
	prependItem('.custom-body-right-copy', '.art-deco-suites-copy');
          /*Experience manager - pretty photo setup*/
          prependItem('#collapseRoomsOne .panel-left-rooms', '.studio-suites-gallery .gallery');
          prependItem('#collapseRoomsTwo .panel-left-rooms', '.junior-suites-gallery .gallery');
          prependItem('#collapseRoomsThree .panel-left-rooms', '.art-deco-one-bedroom-suites-gallery .gallery');
          prependItem('#collapseRoomsFour .panel-left-rooms', '.bi-level-suites-gallery .gallery');
	
	/*Exclusive Offers Intro txt*/
	prependItem('.custom-body-right-copy', '.exclusive-offers-copy');
	
	/*Exclusive Offers Intro txt*/
	prependItem('.custom-body-right-copy', '.discover-miami-copy');
        

        /*Culinary Experiences - experience manager pretty photo fix*/
       prependItem('#collapseRoomsOne .panel-left-rooms', '.the-restaurant-gallery .gallery');
       prependItem('#collapseRoomsTwo .panel-left-rooms', '.the-setai-grill-gallery .gallery');
       prependItem('#collapseRoomsThree .panel-left-rooms', '.the-bar-and-courtyard-gallery .gallery');
       prependItem('#collapseRoomsFour .panel-left-rooms', '.the-pool-and-beach-bar-gallery .gallery');

    /*Appends an item to a specified div*/
	function appendItem(destination, item){
   		$(destination).append($(item));
	}
	/*Inserts View Gallery image on first li of each prettyphoto gallery*/
		appendItem('ul.gallery li:first-child a','.hover-search-icon');
	/*Adds ritual page and exclusive offers page content from experience manager*/
		appendItem('.custom-widget-expanding-rooms-room-1', '#collapseRoomsOne');
        appendItem('.custom-widget-expanding-rooms-room-2', '#collapseRoomsTwo');
        appendItem('.custom-widget-expanding-rooms-room-3', '#collapseRoomsThree');
        appendItem('.custom-widget-expanding-rooms-room-4', '#collapseRoomsFour');
        appendItem('.custom-widget-expanding-rooms-room-5', '#collapseRoomsFive');
        appendItem('.custom-widget-expanding-rooms-room-6', '#collapseRoomsSix');
        appendItem('.custom-widget-expanding-rooms-room-7', '#collapseRoomsSeven');
		appendItem('.custom-widget-expanding-rooms-room-8', '#collapseRoomsEight');
		appendItem('.custom-widget-expanding-rooms-room-9', '#collapseRoomsNine');
	    appendItem('.custom-body-right-copy', '.rituals-copy');

		
	 /*Adds content from experience manager to Culinary Experiences page*/
		appendItem('#collapseRoomsOne .panel-left-rooms','.menu-list-1');
		appendItem('#collapseRoomsTwo .panel-left-rooms','.menu-list-2');
		appendItem('#collapseRoomsThree .panel-left-rooms', '.menu-list-3');
		appendItem('#collapseRoomsFour .panel-left-rooms','.menu-list-4');	

	 /*Adds content from experience manager to Contact us page*/
		appendItem('.custom-body-right-copy','.contact-us-copy');
	
	/*fixes source URL from another server to remove MCP generated code in URL*/

	$('img[src*="dev.tigglobal.com"]').each(function() {
	  var dirtySRC = $(this).attr('src');
	  var dirtySRCCleaner= dirtySRC.split('&vw=')[0];
	  var cleanFinalSRC = decodeURIComponent(dirtySRCCleaner);
	  $(this).attr('src',cleanFinalSRC)
	});
	
});
</script><script>

	// Docs at http://simpleweatherjs.com
	$(document).ready(function() {
	  $.simpleWeather({
		location: 'Miami Beach, FL',
		woeid: '',
		unit: 'f',
		success: function(weather) {
		  html = '<span class="custom-weather-temp">'+weather.temp+'&deg;'+weather.units.temp+'</span><i class="icon-'+weather.code+'"></i><span class="custom-weather-city">'+weather.city+', '+weather.region+'</span>';

		  $("#weather").html(html);
		},
		error: function(error) {
		  $("#weather").html('<p>'+error+'</p>');
		}
	  });
	});

</script>

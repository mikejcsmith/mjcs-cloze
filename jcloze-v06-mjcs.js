        
        function cloze() {
            
            // save each cloze set ;
            
            // write cloze sets to div saveCloze ;
            
            

            // jQuery("#btnBuildCloze").prop("disabled", true);
            // jQuery("#btnClozeReset").prop("disabled", false);
               
		//	$('ul.randomise-please li').each(function() {shuffle()});
			$('ul.randomise-please').each(function(index){
				console.log( index + ": " + $( this ).text() );
				$(this).find('li').shuffle();
			});
            
            
            jQuery( ".cloze-set .cloze" ).each(function( index ) {
            
            	var questionNumber = (index+1);
            	// console.log ("qno= "+questionNumber);
                
                //var a = jQuery( this ).attr("data-a");
                //var b = jQuery( this ).attr("data-b");
                
                if (jQuery( this ).attr("data-a")) {
                    var a = jQuery( this ).attr("data-a");
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-a found");
                };
                
                if (jQuery( this ).attr("data-b")) {
                    var b = jQuery( this ).attr("data-b");
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-b found");
                };
                
                
                if (jQuery( this ).attr("data-c")) {
                    var c = jQuery( this ).attr("data-c");
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-c found");
                };
                
                if (jQuery( this ).attr("data-d")) {
                    var d = jQuery( this ).attr("data-d");   
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-d found");
                };
                
                if (jQuery( this ).attr("data-e")) {
                    var e = jQuery( this ).attr("data-e");   
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-e found");
                };
                
                if (jQuery( this ).attr("data-multisearch")) {
                    var multisearch = jQuery( this ).attr("data-multisearch");   
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-multisearch found");
                };
                
                if (jQuery( this ).attr("data-answer")) {
                    var answer = jQuery( this ).attr("data-answer");   
                } else {
                	console.log("qno= "+questionNumber+" "+"no data-answer found");
                };
                
                //var answer = jQuery( this ).attr("data-answer");

                if (jQuery( this ).attr("data-hint")) {
                    var hint = jQuery( this ).attr("data-hint");
                    if (hint[0] == "#") {
                        hint = jQuery( hint ).html() ;
                    };
                    hint = "Hint: " + hint;
                    // console.log (hint );
                } else {
                    var hint = "";                    
                };
                if (jQuery( this ).attr("data-explanation")) {
                    var explanation = jQuery( this ).attr("data-explanation");
                    if (explanation[0] == "#") {
                        explanation = jQuery( explanation ).html() ;
                    };
                    explanation = "Explanation: " + explanation;
                    // console.log (explanation );
                    
                } else {
                    var explanation = "";                    
                };
                                
                
                var strSelect = "";
                
                // console.log( "("+(index+1)+") " +  jQuery( this ).attr("class") + ", " + a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + answer + ", " + hint + ", " + explanation + ", " + multisearch   );
                
                // build string;
                strSelect = "<span class='cloze-hide cloze-question'>" ;                 
                strSelect = strSelect + " <select id='cloze-select-"+(index+1)+"' class='red-border cloze-select' data-answer='"+answer+"'>";
                strSelect = strSelect + "<option value ='?'>--</option>";
                if (jQuery( this ).attr("data-a")) {
	                strSelect = strSelect + "<option value ='"+a+"'>"+a+"</option>";
                };
                if (jQuery( this ).attr("data-b")) {
	                strSelect = strSelect + "<option value ='"+b+"'>"+b+"</option>";
                };
    
                if (jQuery( this ).attr("data-c")) {
                    strSelect = strSelect + "<option value ='"+c+"'>"+c+"</option>";
                };
                if (jQuery( this ).attr("data-d")) {
                    strSelect = strSelect + "<option value ='"+d+"'>"+d+"</option>";                    
                };
                if (jQuery( this ).attr("data-e")) {
                    strSelect = strSelect + "<option value ='"+e+"'>"+e+"</option>" ;                   
                };
                strSelect = strSelect + "</select>";

                
				                
                
				

                // var btnOnClickHint = "cloze-hint-"+(index+1);
                //var btnOnClickHint = (index+1);
                // console.log ("btnOnClickHint: "+btnOnClickHint)
                //strSelect = strSelect + "<button onclick='toggleClassClozeHideHint("+String.fromCharCode(34)+btnOnClickHint+String.fromCharCode(34)+")' >?</button>";
                // var strHintBtn = "<button onclick='toggleClassClozeHideHint("+String.fromCharCode(34)+btnOnClickHint+String.fromCharCode(34)+")' >?</button>";
                
                var btnOnClickHint = "<button class='cloze-hide clozeHintBtn' onclick='toggleClassClozeHideHint("+String.fromCharCode(34)+(index+1)+String.fromCharCode(34)+")' >?</button>";

                
                //var btnOnClickExplanation = "cloze-explanation-"+(index+1);
                // console.log ("btnOnClickExplanation: "+btnOnClickExplanation)
                // strSelect = strSelect + "<button onclick='toggleClassClozeHide("+String.fromCharCode(34)+btnOnClickExplanation+String.fromCharCode(34)+")' >!</button>";
                
                //var btnMultisearch = "<button onclick='SetMultisearchHtml("+String.fromCharCode(34)+multisearch+String.fromCharCode(34)+")'>multisearch: "+multisearch+"</button>";
                              
                var btnMultisearch = "";
                              
                //var btnMultisearchNewWindow = "<button onclick='SetMultisearchHtmlNewWindow("+String.fromCharCode(34)+multisearch+String.fromCharCode(34)+")'>multisearch new window: "+multisearch+"</button>";

                var btnMultisearchNewWindow = "";
                              
                            
                var strHint = "<div id='cloze-hint-"+(index+1)+"' class='cloze-hide cloze-hint' >"+hint ;
                if (explanation===""){}else{            
                var strHint = strHint + "<button  onclick='toggleClassClozeHide("+String.fromCharCode(34)+"cloze-explanation-"+(index+1)+String.fromCharCode(34)+")' >More help ...</button>" +"</div>";
                }
                            
                var strExplanation = "<div id='cloze-explanation-"+(index+1)+"'  class='cloze-hide cloze-explanation' >"+explanation + btnMultisearch + btnMultisearchNewWindow + "</div>";   
                
                
                strSelect = strSelect +  "</span>";           
                
                
                //console.log( strSelect  );
 
                // place cloze select after the cloze item
                 jQuery( this ).after( strExplanation );
                 jQuery( this ).after( strHint );
                jQuery( this ).after( strSelect );


                
                // place question number before cloze item
                jQuery( this ).before( "<span class='cloze-hide cloze-question-number'>("+questionNumber+")</span>" );
                
                // place hint before cloze item is not empty
                if (hint===""){}else{jQuery( this ).before( btnOnClickHint );}
                
                
				strInput = "<span class='cloze-hide cloze-input-question' > "+" <input id='cloze-input-"+(index+1)+"' class='red-border cloze-input'"+" data-answer='"+answer+"'></span>"; 
                jQuery( this ).after( strInput );


				// add the options for printed use and with short answer input
                var strOptions =  "<span class='cloze-hide cloze-options' > "+"( " + a + ", " + b + ", " + c + ", " + d + " )" + "</span>";
                
                var strOptions =  "<span class='cloze-hide cloze-options' > "+"( "
                
                if (jQuery( this ).attr("data-a")) {
	                strOptions = strOptions + a ;
                };
                if (jQuery( this ).attr("data-b")) {
	                strOptions = strOptions + ", " + b ;
                };
    
                if (jQuery( this ).attr("data-c")) {
                    strOptions = strOptions + ", " + c ;
                };
                if (jQuery( this ).attr("data-d")) {
                    strOptions = strOptions + ", " + d;                    
                };
                if (jQuery( this ).attr("data-e")) {
                    strOptions = strOptions + ", " + e;                   
                };
                strOptions = strOptions + " )" + "</span>";
                     
                
                jQuery( this ).after( strOptions );
                
                
                // add the gap for printed use
                var strGap = "<span class='cloze-hide cloze-gap' > _________</span>";
                jQuery( this ).after( strGap );
                
                
                //jQuery( this ).remove();
                // an idea to remove the original term, not implemented now
                jQuery( this ).removeClass("cloze").addClass("cloze-term");
 

 
            });
 
 
 
 
            
            // control functions
            
           toggleHighlightClozeTerms();
			if (jQuery(".cloze-term").hasClass("blue-border") == true){
				jQuery("#btnToggleHighlightClozeTerms").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleHighlightClozeTerms").removeClass("green-border");  
			}

           // toggleClozeGaps();
			if (jQuery(".cloze-gap").is(':visible') == true){
				jQuery("#btnToggleClozeGaps").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeGaps").removeClass("green-border");  
			}

           // toggleClozeOptions();
			if (jQuery(".cloze-options").is(':visible') == true){
				jQuery("#btnToggleClozeOptions").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeOptions").removeClass("green-border");  
			}

           // toggleClozeQuestions();           
   			if (jQuery(".cloze-question").is(':visible') == true){
				jQuery("#btnToggleClozeQuestions").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeQuestions").removeClass("green-border");  
			}

           jQuery("#btnClozeToggleControls").prop("disabled", false);           
           jQuery("#btnClozeToggleControls").show("slow");           

           
           jQuery("#btnBuildCloze").prop("disabled", false);           
           jQuery("#btnSetupCloze").prop("disabled", false);
           
           jQuery("#btnDisplayAll").prop("disabled", false);
           jQuery("#btnToggleQuestionNumbers").prop("disabled", false);
           jQuery("#btnToggleClozeTerms").prop("disabled", false);
           jQuery("#btnToggleHighlightClozeTerms").prop("disabled", false);
           jQuery("#btnToggleClozeGaps").prop("disabled", false);
           jQuery("#btnToggleClozeOptions").prop("disabled", false);
           jQuery("#btnToggleClozeInput").prop("disabled", false);
           jQuery("#btnToggleClozeQuestions").prop("disabled", false);
           jQuery("#btnClozeToggleHints").prop("disabled", false);
           jQuery("#btnclozeCheck").prop("disabled", false);
           jQuery("#btnclozeCheckInput").prop("disabled", false);
           jQuery("#btnClozeAnswers").prop("disabled", false);
           jQuery("#btnClozeTidy").prop("disabled", false);     
           jQuery("#btnClozeReset").prop("disabled", false);
          
           prettify();
           
           // jQuery("#btnToggleClozeTerms").addClass("green-border");  
           //	jQuery("#btnToggleHighlightClozeTerms").addClass("green-border");  
			
		//	jQuery(".cloze-controls").show("slow");
           jQuery("#btnBuildCloze").hide("slow");    
           
			
       
                      
        };
        
        function clozeCheck() {
            jQuery( ".cloze-select" ).each(function( index ) {
                // console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() );
                if ( jQuery( this ).attr("data-answer") == jQuery( this ).val() ) {
                    jQuery( this ).addClass("green-border");
                    jQuery( this ).removeClass("red-border");
                    console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() + " correct" );
 
                } else {
                    jQuery( this ).addClass("red-border");
                    jQuery( this ).removeClass("green-border");
                    console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() + " incorrect" );
                    
                };
            });
            
        };
        
        function clozeCheckInput() {
            jQuery( ".cloze-input" ).each(function( index ) {
                // console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() );
                if ( jQuery( this ).attr("data-answer") == jQuery( this ).val() ) {
                    jQuery( this ).addClass("green-border");
                    jQuery( this ).removeClass("red-border");
                    console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() + " correct" );
 
                } else {
                    jQuery( this ).addClass("red-border");
                    jQuery( this ).removeClass("green-border");
                    console.log( index + ": " + jQuery( this ).attr("data-answer") + ", " + jQuery( this ).attr("class") + ", " + jQuery( this ).val() + " incorrect" );
                    
                };
            });
            
        };
        
        function clozeAnswers() {
            jQuery( ".cloze-select" ).each(function( index ) {

                jQuery(this).val(jQuery( this ).attr("data-answer"));
                    jQuery( this ).addClass("green-border");
                    jQuery( this ).removeClass("red-border");
                
                
            });
            
            jQuery( ".cloze-input" ).each(function( index ) {

                jQuery(this).val(jQuery( this ).attr("data-answer"));
                    jQuery( this ).addClass("green-border");
                    jQuery( this ).removeClass("red-border");
                
                
            });
            
        };
        
        function toggleClassClozeHide( elID ) {
            console.log("called:"+elID);
            jQuery("#"+elID).toggle("slow");
        }
        
        function toggleClassClozeHideHint( elID ) {
            console.log("called:"+elID);
            // check first if need to hide the corresponding explanation div
            if (jQuery("#"+"cloze-hint-"+elID).is(':visible')){
            	
	            jQuery("#"+"cloze-explanation-"+elID).hide("slow");
            
            } ;
            
            
            jQuery("#"+"cloze-hint-"+elID).toggle("slow");
        }
        
        function SetMultisearchHtml ( term) {
          // alert (term)  
     	     										jQuery("#iframe-multisearch").attr("src","http://mikesmithteacher.com/word/search.php?word="+term);
          jQuery("#cloze-multisearch").removeClass("cloze-hide");
          jQuery("#cloze-multisearch").show();
          
          jQuery("#btnCloseMultiSearch").removeClass("cloze-hide");
          jQuery("#btnCloseMultiSearch").show();
          
          
        }
        
        function SetMultisearchHtmlNewWindow ( term) {
          // alert (term)  
          jQuery("#iframe-multisearch").attr("src","");
          jQuery("#cloze-multisearch").addClass("cloze-hide");
          jQuery("#cloze-multisearch").hide();
          window.open("http://mikesmithteacher.com/word/search.php?word="+term);
        }

		function clearMultiSearch () {
          jQuery("#iframe-multisearch").attr("src","");
          jQuery("#cloze-multisearch").addClass("cloze-hide");
          jQuery("#cloze-multisearch").hide();

          jQuery("#btnCloseMultiSearch").addClass("cloze-hide");
          jQuery("#btnCloseMultiSearch").hide();
		
		}
        
        function toggleHighlightClozeTerms(){
          jQuery(".cloze-term").toggleClass("blue-border");  
			highlightButtons();
        }
        
        function toggleQuestionNumbers(){
          jQuery(".cloze-question-number").toggle();  
			highlightButtons();
        }
        
        function clozeToggleHints(){
          jQuery(".clozeHintBtn").toggle();  
			highlightButtons();			
        }
        
        function toggleClozeGaps(){
          jQuery(".cloze-gap").toggle();  
			highlightButtons();
        }
        
        function toggleClozeOptions(){
          jQuery(".cloze-options").toggle();  
			highlightButtons();
        }
        
        function toggleClozeTerms(){
          jQuery(".cloze-term").toggle();  

			highlightButtons();            
        }
        
        function toggleClozeInput(){
          jQuery(".cloze-input-question").toggle();  

			highlightButtons();            
        }
        
        function toggleClozeQuestions(){
          jQuery(".cloze-question").toggle();  
			highlightButtons();
            
        }
        
        function setupCloze(){
          jQuery(".cloze-question").show();  
          jQuery(".cloze").hide();  
          jQuery(".cloze-question-number").show();  
          jQuery(".cloze-term").hide();  
          // jQuery(".cloze-term").addClass("blue-border");  
          jQuery(".cloze-options").hide();  
          jQuery(".cloze-gap").hide();                        
          jQuery(".cloze-input-question").hide();                        
          jQuery(".clozeHintBtn").hide();  
          jQuery(".cloze-term").removeClass("blue-border");  
			highlightButtons();



        }
        
        function clozeDisplayAll(){
          jQuery(".cloze-question").show();  
          jQuery(".cloze").show();  
          jQuery(".cloze-question-number").show();  
          jQuery(".cloze-term").show();  
          jQuery(".cloze-options").show();  
          jQuery(".cloze-gap").show();                        
          jQuery(".cloze-input-question").show();                        
          jQuery(".clozeHintBtn").show();  
          jQuery(".cloze-term").addClass("blue-border");  
          //jQuery(".cloze-term").removeClass("blue-border");  
			highlightButtons();

        }
        
        function clozeReset(){
            jQuery( ".cloze-select" ).each(function( index ) {
				jQuery( this ).val("?").addClass("red-border").removeClass("green-border");
            });			
  
            jQuery( ".cloze-input" ).each(function( index ) {
				jQuery( this ).val("").addClass("red-border").removeClass("green-border");
            });			
  
        }
        
        function clozeTidy(){
          jQuery(".cloze-hint").hide();  
          jQuery(".cloze-explanation").hide();  
          jQuery("#cloze-multisearch").hide();  
          jQuery("#iframe-multisearch").attr("src","");
			highlightButtons();
          
            
        }
        
        function clozeToggleControls(){
       			jQuery(".cloze-controls").toggle("slow");
				$(".cloze-controls .ui-btn").addClass("ui-btn-inline");
							highlightButtons();

        }
        
        function prettify(){
            jQuery(".cloze-set").addClass("font-large", 0, "easeOutSine" );
            jQuery(".cloze-hint").addClass("cloze-help");
            jQuery(".cloze-explanation").addClass("cloze-help");

            jQuery(".cloze-set").addClass("major-page-elements", 0, "easeOutSine" );
            jQuery(".cloze-controls").addClass("major-page-elements");
            jQuery("#cloze-multisearch").addClass("major-page-elements");
            jQuery("#cloze-build").addClass("major-page-elements");
            jQuery(".video").addClass("video-page-elements");

	 		reSizeVideo();

            
            

			highlightButtons();
            
            
        }
        
        function toggleWPSidebar(){
            jQuery(".sidebar").toggleClass("cloze-hide", 4000, "easeOutSine" );
            if (jQuery(".sidebar").is(':visible')){
            	jQuery(".content").removeClass("cloze-width-100-percent", 4000, "easeOutSine" );
            
            } else {
            	jQuery(".content").addClass("cloze-width-100-percent", 4000, "easeOutSine" );
            } ;
            
            
        }
        
        function highlightButtons (){
			if (jQuery(".cloze-question").is(':visible') == true){
				jQuery("#btnToggleClozeQuestions").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeQuestions").removeClass("green-border");  
			}

			if (jQuery(".cloze-question-number").is(':visible') == true){
				jQuery("#btnToggleQuestionNumbers").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleQuestionNumbers").removeClass("green-border");  
			}

			if (jQuery(".clozeHintBtn").is(':visible') == true){
				jQuery("#btnClozeToggleHints").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnClozeToggleHints").removeClass("green-border"); 
				// hide all hints and explanations
				jQuery(".cloze-help").hide("slow"); 
			}

			if (jQuery(".cloze-options").is(':visible') == true){
				jQuery("#btnToggleClozeOptions").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeOptions").removeClass("green-border");  
			}

			if (jQuery(".cloze-term").is(':visible') == true){
				jQuery("#btnToggleClozeTerms").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeTerms").removeClass("green-border");  
			}
			if (jQuery(".cloze-gap").is(':visible') == true){
				jQuery("#btnToggleClozeGaps").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeGaps").removeClass("green-border");  
			}
			if (jQuery(".cloze-input").is(':visible') == true){
				jQuery("#btnToggleClozeInput").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleClozeInput").removeClass("green-border");  
			}
			if (jQuery(".cloze-term").hasClass("blue-border") == true){
				jQuery("#btnToggleHighlightClozeTerms").addClass("green-border");  
			} else {
				// alert ("not visible");
				jQuery("#btnToggleHighlightClozeTerms").removeClass("green-border");  
			}
            
        
        
        }

/** from CSS tricks **/
        
        function reSizeVideo (){
        
        

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='https://www.youtube.com'], object, embed"),
    $fluidEl = $("#video-01");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();



        
        }
        
        (function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);
        
        
    

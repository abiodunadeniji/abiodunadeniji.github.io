$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

});


jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

//*for bug movement all-over web pageX
 var targethead = window.document.getElementsByTagName("head")[0],
    loadedSpiders = false,
    jst = window.document.createElement("script");
  jst.async = true;
  jst.type = "text/javascript";
  jst.src = "/path/to/bug-min.js";
  jst.onload = jst.onreadystatechange = function() {
    if (!loadedSpiders && (!this.readyState || this.readyState == 'complete')) {
      loadedSpiders = true;
      // start fire the JS.
      new BugController();
    }
  };
  targethead.appendChild(jst);    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //rss feeds for my personal blog
        "https://naijadowell.com/feed/",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 4,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // will request the API via https
	    // default: false
	    // valid values: false, true
	    ssl: true,
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
   

	
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    


});

/* for github feed */
GitHubActivity.feed({ username: "abiodunadeniji", selector: "#feed" });
$(document).ready(function() {
   var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("https://mcapi.ca/query/play.craftednetworkmc.tk:25140/extensive", function(json) {
            if (json.status !== true) {
                $("#online").html('<span style="color: firebrick; font-weight: bolder;"> Server is Offline</span><br/><small style="font-size: .5em;">Check out our <a href="status">Associated Servers</a>!</small>');
                $(".button").hide();
            } else {
                $("#online").html('CraftedFreedom has  <font color="green">' + json.players.online + '</font> players online!<br/>');
                $("#players-online").html(json.players.online + ' Online Players!');
                $('.button').show();
            }
        });
        autoRefresh;
    }
    refresh();
});


$(document).ready(function() {
    $('.brand-logo').typed({
        strings: ['<small class="hide-on-med-and-down">51.</small>254.14.15<small class="hide-on-med-and-down">:25140</small>'],
        typeSpeed: 29
    });
});

    $(document).ready(function(){
        $(".one").click(function(){
            $(".a").fadeToggle(300);
            $(".one i").toggleClass("fa-chevron-right",1e3);
            $(".one i").toggleClass("fa-chevron-down",1e3)
        });

        $(".two").click(function(){
            $(".b").fadeToggle(300);
            $(".two i").toggleClass("fa-chevron-right");
            $(".two i").toggleClass("fa-chevron-down");
        });

        $(".three").click(function(){
            $(".c").fadeToggle(300);
            $(".three i").toggleClass("fa-chevron-right");
            $(".three i").toggleClass("fa-chevron-down");
        });

        $(".four").click(function(){
            $(".d").fadeToggle(300);
            $(".four i").toggleClass("fa-chevron-right");
            $(".four i").toggleClass("fa-chevron-down")
        });

        $(".five").click(function(){
            $(".e").fadeToggle(300);
            $(".five i").toggleClass("fa-chevron-right");
            $(".five i").toggleClass("fa-chevron-down");
        });

        $(".six").click(function(){
            $(".f").fadeToggle(300);
            $(".six i").toggleClass("fa-chevron-right");
            $(".six i").toggleClass("fa-chevron-down");
        });

        $(".seven").click(function(){
            $(".g").fadeToggle(300);
            $(".seven i").toggleClass("fa-chevron-right");
            $(".seven i").toggleClass("fa-chevron-down");
        });

        $(".eight").click(function(){
            $(".h").fadeToggle(300);
            $(".eight i").toggleClass("fa-chevron-right");
            $(".eight i").toggleClass("fa-chevron-down");
        });

        $(".nine").click(function(){
            $(".i").fadeToggle(300);
            $(".nine i").toggleClass("fa-chevron-right");
            $(".nine i").toggleClass("fa-chevron-down");
        });
    });


    $(document).ready(function() {
        $("#top").click(function() {
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, 1000);
    });
        $("#rules").click(function() {
        $('html, body').animate({
            scrollTop: $("#rules-sec").offset().top
        }, 1000);
    });
        $("#staff").click(function() {
        $('html, body').animate({
            scrollTop: $("#staff-sec").offset().top
        }, 1000);
    });
        $("#brand-top").click(function() {
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, 1000);
    });
});


var ypos,cover1,cover2,cover3;

function parallax() {
    ypos = window.pageYOffset;
    cover1 = document.getElementById('header');

    cover1.style.top = ypos * .4 + 'px';
};

window.addEventListener('scroll', parallax);

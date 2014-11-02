console.log("script start");
$(document).ready(function(){
    console.log("document ready");
    var buttonsource = "<div class='button_blue im_send_cont fl_l' style='width: 50px; margin-top: 6px;'><button id='extcrypt-button' style='width: 50px;'>OTS</button></div>";
    $("#im_user_holder").append(buttonsource);
    console.log("button added");
    $("#extcrypt-button").click(function(){
        $(".im_editable").each(function(index){
            console.log("im editeble");
            if (!$(this).is(":hidden")){
                console.log("found active im editeble");
                text = $(this).text();
                im_edit = this;
                $.when($.ajax({
                    url: "https://onetimesecret.com/api/v1/share",
                    type: "POST",
                    data: {'secret': text},
                    beforeSend: function (xhr){
                        console.log("ajax sending...");
                                xhr.setRequestHeader ("Authorization", "Basic " + btoa("alphakun88@gmail.com" + ":" + "073bc6f06219ca0d82bc63ee4218a6ff7747bb9c"));
                    }
                })).done(function(val){
                    $(im_edit).text("https://onetimesecret.com/secret/" + val.secret_key);
                })
            }
        });
    });
});
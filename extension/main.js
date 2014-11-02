$(document).ready(function(){
    var buttonsource = "<div class='button_blue im_send_cont fl_l' ><button id='extcrypt-button'>OTS</button></div>";
    $("#im_send_wrap").prepend( buttonsource);
    $("#extcrypt-button").click(function(){
        $(".im_editable").each(function(index){
            if (!$(this).is(":hidden")){
                text = $(this).text();
                im_edit = this;
                $.when($.ajax({
                    url: "https://onetimesecret.com/api/v1/share",
                    type: "POST",
                    data: {'secret': text},
                    beforeSend: function (xhr){
                                xhr.setRequestHeader ("Authorization", "Basic " + btoa("alphakun88@gmail.com" + ":" + "073bc6f06219ca0d82bc63ee4218a6ff7747bb9c"));
                    }
                })).done(function(val){
                    $(im_edit).text("https://onetimesecret.com/secret/" + val.secret_key);
                })
            }
        });
    });
});
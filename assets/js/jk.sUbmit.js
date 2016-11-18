var sUbmit = (function ($) {
    // 2016
    // @jessekorzan
    // www.emptycan.com
    // https://github.com/jessekorzan/rUhuman
    //
    // DUMMY FORM SUBMIT
    // proof of concept for server-side captcha validation
    // ghetto fabulous
    //
	var jk = {};
/* --------------------------------------------------	
-------------------------------------------------- */
    jk.form = {
        process : function (options) {
            options = (typeof options !== "object") ? {} : options;
            
            $.ajaxSetup({ async: false, cache: false });
            $.ajax ({
                //dataType : "json",
                crossDomain:true,
                url: options.url,
                data: options.data,
                success: function (data) { 
            		options.callBack(data);
            	},
                error: function(e) {
            	    console.error(e);
            	}
            });
        },
        output : function (data) {
            //console.log(data);
            $(".msg span").html("<mark>Ha-ha. You are a " + data + "!</mark>");
        },
        input : function (form) {
            var _values = $(form).serializeArray();
                _options = {
                url : "//code.emptycan.com/api.form.php",
                
                data : _values,
                callBack : jk.form.output
            }
            jk.form.process(_options);
        },
        init : function () {
            var _form = $("form");
            _form.on("submit", this, function(e){
                e.preventDefault();
                jk.form.input(this);
            })
        }
        
    };
    return jk;
})(jQuery);
$(function () {
	sUbmit.form.init();
});
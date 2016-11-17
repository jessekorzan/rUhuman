var rUhuman = (function ($) {
	var jk = {};
	jk.init = function(){
        jk.app.view();	
	};
/* --------------------------------------------------	
-------------------------------------------------- */
    jk.app = {
		config : {
    		classRef : "ui-form-no-robot",
    		form : "form",
    		submit : ".btn"
		},  
		view : function () {
            var _box = '<div class="' + this.config.classRef + '">';
                _box += '<label><span></span><span></span><i></i>';
                _box += '<input type="range" max="12" min="2" value="1" required>';
                _box += '</label></div>';
                            
            $(this.config.form).find(this.config.submit).before(_box);
            this.controller();
		},
		controller : function() {
    		var _this = this,
    		    _box = $("." + this.config.classRef),
    		    _mathElms = _box.find("label span"),
    		    _userInput = _box.find("input"),
    		    _form = _box.closest("form"),
    		    _sliderOutput = _box.find("i");
    		    _ANSWER = 0;
            
            //init
            _form.find(this.config.submit).attr({"disabled" : "disabled"});
            
            $.each(_mathElms, function(){
                var _rnd = Math.floor(Math.random() * (5)) + 2;
                _ANSWER += _rnd;
                $(this).html(_rnd);
            });
            
            setInterval(function(){
                var _chk = Number(_userInput.val());
                _sliderOutput.html(_chk);
                if (_chk == Number(_ANSWER)) {
                    _form.find(_this.config.submit).removeAttr("disabled");
                    _box.addClass("confirmed");
                } else {
                    _form.find(_this.config.submit).attr({"disabled" : "disabled"});
                    _box.removeClass("confirmed");
                }
            }, 100);
        },
        init :  function () {
            this.view();
        }
    };
    return jk;
})(jQuery);
$(function () {
	rUhuman.init();
});
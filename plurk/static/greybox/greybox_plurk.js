var loc = window.location;
var GB_ROOT_DIR = loc.protocol + '//' +  loc.host + "/static/greybox/";

function showGBRegister() {
    if (window.GB_showCenter)
		GB_showCenter(_('Sign up for Plurk'), '/Users/showRegister?overlay=1', 400, 700);
	return false;
};

function showGBLogin() {
    if (window.GB_showCenter)
		GB_showCenter(_('Plurk sign in'), '/Users/showLogin?overlay=1', 400, 700);
	return false;
};


var PlurkGB = {
    showAtCenter: function(title, url, width, height) {
        if (!window.GB_showCenter || (window.jQuery && (jQuery(window).width() < width || jQuery(document).height() < height))){
            window.open(url)
            return false;
        }
        GB_showCenter(title, url, height, width);
        return false;
    }
};
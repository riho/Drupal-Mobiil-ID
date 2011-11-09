(function ($) {
	$(document).ready(function() {
        $('.mobiil-id-link').click(function(e) {
		    e.preventDefault();
            $('li.mobiil-id-cancel-link').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('div.form-item-mobiil-id-phone-number').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('li.mobiil-id-link').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
			$('.id-card-login-wrapper').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form div.form-item-name').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form div.form-item-pass').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login div.form-item-name').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login div.form-item-pass').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form #edit-name').val('');
            $('#user-login-form #edit-pass').val('');
			$('#user-login #edit-name').val('');
			$('#user-login #edit-pass').val('');
            $('#edit-mobiil-id-phone-number').focus();
        });
        $('.mobiil-id-cancel-link a').click(function(e) {
		    e.preventDefault();
            $('li.mobiil-id-cancel-link').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('div.form-item-mobiil-id-phone-number').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('li.mobiil-id-link').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
			$('.id-card-login-wrapper').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login-form div.form-item-name').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login-form div.form-item-pass').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login div.form-item-name').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login div.form-item-pass').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#edit-mobiil-id-phone-number').val('');
            $('#user-login-form #edit-name').focus();
        });       
	});
})(jQuery);
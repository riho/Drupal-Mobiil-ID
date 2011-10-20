(function ($) {
	$(document).ready(function() {
        $('.mobiil-id-link').click(function() {
            $('.mobiil-id-cancel-link').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('.form-item-mobiil-id-phone-number').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('.mobiil-id-link').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
			$('.id-card-login-wrapper').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form .form-item-name').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form .form-item-pass').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('#user-login-form #edit-name').val('');
            $('#user-login-form #edit-pass').val('');
            $('#edit-mobiil-id-phone-number').focus();
        });
        $('.mobiil-id-cancel-link a').click(function() {
            $('.mobiil-id-cancel-link').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('.form-item-mobiil-id-phone-number').addClass('mobiil-id-hide').removeClass('mobiil-id-show');
            $('.mobiil-id-link').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
			$('.id-card-login-wrapper').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login-form .form-item-name').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#user-login-form .form-item-pass').addClass('mobiil-id-show').removeClass('mobiil-id-hide');
            $('#edit-mobiil-id-phone-number').val('');
            $('#user-login-form #edit-name').focus();
        });       
	});
})(jQuery);
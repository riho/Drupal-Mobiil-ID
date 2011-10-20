function query_status() {
    (function ($) {
        $.ajax({
            url: 'mobiil_id_status',
            dataType: 'json',
            cache: false,
            success: function(data) {
                //alert(data.Status);
                if (data.Status == 'OUTSTANDING_TRANSACTION') {
                    setTimeout(query_status(), 5000);
                } else if (data.Status == 'USER_AUTHENTICATED') {
                    window.location = Drupal.settings.basePath;
                } else if (data.Status == 'USER_CANCEL') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Authentication cancelled!'));
                } else if (data.Status == 'NOT_VALID') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Signature is not valid!'));
                } else if (data.Status == 'EXPIRED_TRANSACTION') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Authentication has expired!'));
                } else if (data.Status == 'MID_NOT_READY') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Mobiil-ID service is unavailable at the moment!'));
                } else if (data.Status == 'PHONE_ABSENT') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Phone is not reachable!'));
                } else if (data.Status == 'SENDING_ERROR') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Could not send the authentication message to the phone!'));
                } else if (data.Status == 'SIM_ERROR') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('SIM card error!'));
                } else if (data.Status == 'INTERNAL_ERROR') {
                    $('.mobiil-id-outstanding-transaction').css('display', 'none');
                    $('.mobiil-id-result').html(Drupal.t('Technical error of Mobiil-ID service!'));
                } else {
                    setTimeout(query_status(), 5000);
                }
            }
        });
	})(jQuery);
}

(function ($) {
	$(document).ready(function() {
        query_status();
	});
})(jQuery);
Mobiil-ID module for Drupal
Drupal module that adds the option to log in using the Estonian Mobiil-ID service

Developed by Mekaia

Refer to http://www.sk.ee/upload/files/DigiDocService_spec_est.pdf for DigiDocService specifications.

https://www.openxades.org:8443/?wsdl is a test authentication server.
You have to register your phone number here http://www.openxades.org/ddsregisteruser/ to use it or
use the phone numbers listed here: http://www.openxades.org/dds_test_phone_numbers.html

@TODO list:
   1. Default user form alter option doesn't work well with OpenID module
   2. Configuration option to set the default role/group for new users created with the module
   3. Help hook for the module
   4. Create field_firstname, field_lastname fields for user
   5. Make a template for the status page
   6. Estonian localization
   7. Better README file
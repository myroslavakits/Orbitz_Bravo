Feature: This feature will test a LogIn Functionality with reset password

@bravo1
   Scenario: Verify the ‘Forgot Password’ functionality.
    
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on My account button
    When  The user clicks on LogIn button from submenu
    When  The user clicks on Forgot password link
    When  Verify that user on Reset your password page 
    When  The user inserts Email address to input field on Reset your password page 
    When  The user clicks on Reset My Password button
    #Then  Verify a confirmation message displayed
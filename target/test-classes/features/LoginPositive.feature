Feature: This feature will test a LogIn Functionality with valid credentials 

  @bravo1
  Scenario: Verify if a user will be able to login with a valid Email address and valid password.
  
  
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on My account button
    When  The user clicks on LogIn button from submenu
    When  The user inserts Email address value to Email address input field
    When  The user inserts password value to the password input field
    Then  The user clicks on Sign In button 
   #Then  Verify that user landed on Home page by his own name 
   
   
   
   @bravo
   Scenario: Verify the ‘Forgot Password’ functionality.
    
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on My account button
    When  The user clicks on LogIn button from submenu
    When  The user clicks on Forgot password link
    When  Verify that user on Reset your password page 
    When  The user inserts Email address to input field on Reset your password page 
    When  The user clicks on Reset My Password button
    Then  Verify a confirmation message displayed

  
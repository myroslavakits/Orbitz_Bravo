Feature: This feature will test a LogIn Functionality with invalid credentials 

   @bravo1
  Scenario Outline: Validate if the user is not allowed access when the credentials entered are incorrect.
  
  
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on My account button
    When  The user clicks on LogIn button from submenu
    When  The user inserts "<EmailAddress>" value to Email address input field
    When  The user inserts "<password>" value to the password input field
    When  The user clicks on Sign In button 
    Then  The user should not land on Home page by Orbitz title

    Examples: 
      | EmailAddress          |    password    | 
      | wrong_emmaelAddress   | test12345      | 
      #| avazkhon_80@yahoo.com | wrong_password | 
      #| wrong_emmaelAddress   | wrong_password |  
      #| wrong_emmaelAddress   |                |  
      #|                       | wrong_password |  
      #|        empty          |      empty     | 
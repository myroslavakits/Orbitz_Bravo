Feature: Title of your feature I want to use this template for my feature file

  
 @bravo
Scenario: test
		Given Verify that user launch on login page by Orbitz title
		When  The user clicks on Flight link
		And   Verify that user on Search Flights page
    When  The user provides information to Flying from input field on Search Flights page
    And   The user provides information to Flying to input field on Search Flights page
    When  The user selects Departing date 
    And   The user selects Returning date 
    When  The user selects value to Adults field on Search Flights page
    And   The user selects value to Children field on Search Flights page
    When  Verify that Add a car check box is selected
    And   Verify Direct flights only message displayed on Search Flights page
    Then  The user clicks on Search Hotel and Car button

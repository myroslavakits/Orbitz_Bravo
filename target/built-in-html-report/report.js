$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ForgotPassword.feature");
formatter.feature({
  "name": "This feature will test a LogIn Functionality with reset password",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the ‘Forgot Password’ functionality.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.verify_that_user_launch_on_login_page_by_Orbitz_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on My account button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.LoginPositiveTest.the_user_clicks_on_My_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on LogIn button from submenu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.LoginPositiveTest.the_user_clicks_on_LogIn_button_from_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_clicks_on_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.verify_that_user_on_Reset_your_password_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Reset your password]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.bravo.step_defenitions.ForgotPasswordTest.verify_that_user_on_Reset_your_password_page(ForgotPasswordTest.java:28)\n\tat ✽.Verify that user on Reset your password page(file:///Users/mkits/eclipse-workspace/Orbitz_Bravo/src/test/resources/features/ForgotPassword.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "The user inserts Email address to input field on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_inserts_Email_address_to_input_field_on_Reset_your_password_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on Reset My Password button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_clicks_on_Reset_My_Password_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify a confirmation message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.verify_a_confirmation_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginPositive.feature");
formatter.feature({
  "name": "This feature will test a LogIn Functionality with valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the ‘Forgot Password’ functionality.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.verify_that_user_launch_on_login_page_by_Orbitz_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on My account button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.LoginPositiveTest.the_user_clicks_on_My_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on LogIn button from submenu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.LoginPositiveTest.the_user_clicks_on_LogIn_button_from_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_clicks_on_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.verify_that_user_on_Reset_your_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user inserts Email address to input field on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_inserts_Email_address_to_input_field_on_Reset_your_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Reset My Password button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.the_user_clicks_on_Reset_My_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify a confirmation message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bravo.step_defenitions.ForgotPasswordTest.verify_a_confirmation_message_displayed()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[We\u0027re sending you a link to reset your password]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.bravo.step_defenitions.ForgotPasswordTest.verify_a_confirmation_message_displayed(ForgotPasswordTest.java:51)\n\tat ✽.Verify a confirmation message displayed(file:///Users/mkits/eclipse-workspace/Orbitz_Bravo/src/test/resources/features/LoginPositive.feature:27)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});
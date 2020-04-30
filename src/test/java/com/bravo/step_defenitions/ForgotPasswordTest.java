package com.bravo.step_defenitions;

import org.junit.Assert;
import com.bravo.pages.SignInPage;
import com.bravo.utilities.ConfigReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgotPasswordTest {
	
	SignInPage signIn = new SignInPage();
	
	@When("The user clicks on Forgot password link")
	public void the_user_clicks_on_Forgot_password_link() {
	    
		signIn.forgotPasswordLink.click();
		
	}

	@When("Verify that user on Reset your password page")
	public void verify_that_user_on_Reset_your_password_page() {
	   
		String actualReset = signIn.resetPasswordText.getText();
		String expectedReset = "Reset your password";
	
		Assert.assertEquals(expectedReset, actualReset);
		System.out.println("The user on Reset your password page");
	}

	@When("The user inserts Email address to input field on Reset your password page")
	public void the_user_inserts_Email_address_to_input_field_on_Reset_your_password_page() {
	   
		signIn.ResetEmailAddressInput.sendKeys(ConfigReader.getConfiguration("emailAddress"));
	}

	@When("The user clicks on Reset My Password button")
	public void the_user_clicks_on_Reset_My_Password_button() {
	    
		signIn.resetPasswordButton.click();
	}

	@Then("Verify a confirmation message displayed")
	public void verify_a_confirmation_message_displayed() {
	    
		String actualConfirm = signIn.resetPasswordConfirmMessage.getText();
		String expectedConfirm = "We're sending you a link to reset your password";
		
		
		Assert.assertEquals(expectedConfirm, actualConfirm);
		System.out.println("The user able to see <We're sending you a link to reset your password> text ");
	}



	
	

}

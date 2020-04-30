package com.bravo.step_defenitions;

import com.bravo.pages.LoginPage;
import com.bravo.utilities.BrowserUtilities;
import com.bravo.utilities.ConfigReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginPositiveTest {

	LoginPage loginPage = new LoginPage();

	@When("The user clicks on My account button")
	public void the_user_clicks_on_My_account_button() {

		loginPage.myAccountButton.click();
	}

	@When("The user clicks on LogIn button from submenu")
	public void the_user_clicks_on_LogIn_button_from_submenu() {

		loginPage.logInButton.click();

	}

	@When("The user inserts Email address value to Email address input field")
	public void the_user_inserts_Email_address_value_to_Email_address_input_field() {

		BrowserUtilities.waitFor(8);
		loginPage.emailAddressInput.sendKeys(ConfigReader.getConfiguration("emailAddress"));

	}

	@When("The user inserts password value to the password input field")
	public void the_user_inserts_password_value_to_the_password_input_field() throws InterruptedException {

		BrowserUtilities.waitFor(4000);
		loginPage.passwordInput.sendKeys(ConfigReader.getConfiguration("password"));

	}

	@Then("The user clicks on Sign In button")
	public void the_user_clicks_on_Sign_In_button() {

		loginPage.signInButton.click();
	}

}

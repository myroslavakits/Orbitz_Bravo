package com.bravo.step_defenitions;

import org.junit.Assert;

import com.bravo.pages.LoginPage;
import com.bravo.utilities.Driver;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginNegativeTest {
	
	LoginPage loginPage = new LoginPage();
	
	
	@When("The user inserts {string} value to Email address input field")
	public void the_user_inserts_value_to_Email_address_input_field(String EmailAddress) {
	    
		loginPage.emailAddressInput.sendKeys(EmailAddress);
	}

	@When("The user inserts {string} value to the password input field")
	public void the_user_inserts_value_to_the_password_input_field(String password) {
		
		loginPage.passwordInput.sendKeys(password);
	   
	}

	@Then("The user should not land on Home page by Orbitz title")
	public void the_user_should_not_land_on_Home_page_by_Orbitz_title() {
		
		String loginTitleActual = Driver.getDriver().getTitle();
		String loginTitleExpected = "Orbitz Flights, Cheap Vacations, Rental Cars & Hotel Deals";
		
		Assert.assertTrue(loginTitleActual.equals(loginTitleExpected));
	    System.out.println("The user did not land on Home page with invalid credentials");
	    
		
	}



}

package com.bravo.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.bravo.utilities.Driver;



public class LoginPage {
	
	public LoginPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(id = "header-account-menu")
	public WebElement myAccountButton;
	
	@FindBy(id = "header-account-signin-button")    
	public WebElement logInButton;
	
	@FindBy(id = "gss-signin-email")
	public WebElement emailAddressInput;
	
	@FindBy(id = "gss-signin-password")
	public WebElement passwordInput;
	
	@FindBy(id = "gss-signin-submit")    
	public WebElement signInButton;
	
	@FindBy(id = "signInEmailErrorMessage")    
	public WebElement signInErrorMessage;
	
	
	@FindBy(id = "signInPasswordErrorMessage")    
	public WebElement signInPasswordErrorMessage;


}

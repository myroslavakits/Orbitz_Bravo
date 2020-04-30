package com.bravo.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.bravo.utilities.Driver;

public class SignInPage {
	public SignInPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(id = "forgot-password-container")
	public WebElement forgotPasswordLink;

	@FindBy(xpath = "//h2[.='Reset your password']")
	public WebElement resetPasswordText;

	@FindBy(id = "gss-forgot-password-email")
	public WebElement ResetEmailAddressInput;

	@FindBy(id = "gss-forgot-password-submit")
	public WebElement resetPasswordButton;

	@FindBy(xpath = " //h2[@class='remove-margin']")
	public WebElement resetPasswordConfirmMessage;

}

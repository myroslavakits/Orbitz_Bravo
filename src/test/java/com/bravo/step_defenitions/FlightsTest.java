package com.bravo.step_defenitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.bravo.pages.FlightPage;
import com.bravo.utilities.BrowserUtilities;
import com.bravo.utilities.Driver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FlightsTest {

	FlightPage flightPage = new FlightPage();
	
	
//	@Given("Verify that user launch on login page by Orbitz title")
//	public void verify_that_user_launch_on_login_page_by_Orbitz_title() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user clicks on Flight link")
//	public void the_user_clicks_on_Flight_link() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("Verify that user on Search Flights page")
//	public void verify_that_user_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user provides information to Flying from input field on Search Flights page")
//	public void the_user_provides_information_to_Flying_from_input_field_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user provides information to Flying to input field on Search Flights page")
//	public void the_user_provides_information_to_Flying_to_input_field_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user selects Departing date")
//	public void the_user_selects_Departing_date() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user selects Returning date")
//	public void the_user_selects_Returning_date() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user selects value to Adults field on Search Flights page")
//	public void the_user_selects_value_to_Adults_field_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("The user selects value to Children field on Search Flights page")
//	public void the_user_selects_value_to_Children_field_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("Verify that Add a car check box is selected")
//	public void verify_that_Add_a_car_check_box_is_selected() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@When("Verify Direct flights only message displayed on Search Flights page")
//	public void verify_Direct_flights_only_message_displayed_on_Search_Flights_page() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}
//
//	@Then("The user clicks on Search Hotel and Car button")
//	public void the_user_clicks_on_Search_Hotel_and_Car_button() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();
//	}


	@Given("Verify that user launch on login page by Orbitz title")
	public void verify_that_user_launch_on_login_page_by_Orbitz_title() {

		Driver.getDriver().navigate().to("https://www.orbitz.com");

		String loginTitleActual = Driver.getDriver().getTitle();
		String loginTitleExpected = "Orbitz Flights, Cheap Vacations, Rental Cars & Hotel Deals";
		// Asserts that two Strings are equal. If they are not, an AssertionError will
		// display
		Assert.assertEquals(loginTitleActual, loginTitleExpected);
		System.out.println("Assert passed");
		// Thread.sleep(8000);

	}

	@When("The user clicks on Flight link")
	public void the_user_clicks_on_Flight_link() {

		// Thread.sleep(7000);
		flightPage.linkFlight.click();
	}

	@When("Verify that user on Search Flights page")
	public void verify_that_user_on_Search_Flights_page() {

		String searchFliogthActual = flightPage.searchFlightsText.getText();
		// System.out.println("Status title :" + searchFliogthActual);
		String searchFliogthExpected = "Search Flights";
		Assert.assertEquals(searchFliogthExpected, searchFliogthActual);
		// Thread.sleep(4000);
	}

	@When("The user provides information to Flying from input field on Search Flights page")
	public void the_user_provides_information_to_Flying_from_input_field_on_Search_Flights_page() {

		BrowserUtilities.waitForVisibility(By.id("flight-origin-flp"), 4);
		flightPage.flyingFromInput.sendKeys("Sac");
		// Thread.sleep(3000);
		flightPage.flyingFromInput.sendKeys("" + Keys.ARROW_DOWN + Keys.ARROW_DOWN + Keys.ENTER);
	}

	@When("The user provides information to Flying to input field on Search Flights page")
	public void the_user_provides_information_to_Flying_to_input_field_on_Search_Flights_page() {

		flightPage.flyingToInput.sendKeys("Wash");
		// Thread.sleep(3000);
		flightPage.flyingToInput.sendKeys("" + Keys.ARROW_DOWN + Keys.ARROW_DOWN + Keys.ENTER);
	}

	@When("The user selects Departing date")
	public void the_user_selects_Departing_date() {

		flightPage.flightDepartDate.sendKeys("05/15/2020");
	}

	@When("The user selects Returning date")
	public void the_user_selects_Returning_date() {

		flightPage.flightReturningDate.sendKeys("" + Keys.CONTROL + 'a' + Keys.BACK_SPACE);
		// Thread.sleep(1500);
		flightPage.flightReturningDate.sendKeys("05/18/2020");
	}

	@When("The user selects value to Adults field on Search Flights page")
	public void the_user_selects_value_to_Adults_field_on_Search_Flights_page() {

		Select drpAdults = new Select(Driver.getDriver().findElement(By.id("flight-adults-flp")));
		drpAdults.selectByIndex(2);
	}

	@When("The user selects value to Children field on Search Flights page")
	public void the_user_selects_value_to_Children_field_on_Search_Flights_page() {

		Select drpchildren = new Select(Driver.getDriver().findElement(By.id("flight-children-flp")));
		drpchildren.selectByValue("0");
	}

	@When("Verify that Add a car check box is selected")
	public void verify_that_Add_a_car_check_box_is_selected() {

		WebElement option1 = Driver.getDriver().findElement(By.id("flight-add-car-checkbox-flp"));
		option1.click();

		if (option1.isSelected()) {
			System.out.println("Checkbox is Toggled On");

		} else {
			System.out.println("Checkbox is Toggled Off");
		}

	}

	@When("Verify Direct flights only message displayed on Search Flights page")
	public void verify_Direct_flights_only_message_displayed_on_Search_Flights_page() {

		boolean directFlightsMessage = flightPage.directFlightsText.isDisplayed();
		System.out.println("Status message :" + directFlightsMessage);
		Assert.assertTrue(directFlightsMessage);
		System.out.println("Direct Flights Message is displayed on Search Flights page");
	}

	@Then("The user clicks on Search Hotel and Car button")
	public void the_user_clicks_on_Search_Hotel_and_Car_button() {

		// Thread.sleep(9000);
		flightPage.searchFligthCarButton.click();
		// Thread.sleep(9000);
	}

}

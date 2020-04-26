$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/flights.feature");
formatter.feature({
  "name": "Title of your feature I want to use this template for my feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
    }
  ]
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
  "name": "The user clicks on Flight link",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_clicks_on_Flight_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.verify_that_user_on_Search_Flights_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[.\u003d\u0027 Search Flights \u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:6d8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:51353}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7ca55fbd338a6db7a361e07b43f51c47\n*** Element info: {Using\u003dxpath, value\u003d//h1[.\u003d\u0027 Search Flights \u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat com.bravo.step_defenitions.FlightsTest.verify_that_user_on_Search_Flights_page(FlightsTest.java:120)\n\tat ✽.Verify that user on Search Flights page(file:///Users/mkits/eclipse-workspace/Orbitz_Bravo/src/test/resources/features/flights.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "The user provides information to Flying from input field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_provides_information_to_Flying_from_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user provides information to Flying to input field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_provides_information_to_Flying_to_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects Departing date",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_selects_Departing_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects Returning date",
  "keyword": "And "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_selects_Returning_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects value to Adults field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_selects_value_to_Adults_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects value to Children field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_selects_value_to_Children_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Add a car check box is selected",
  "keyword": "When "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.verify_that_Add_a_car_check_box_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify Direct flights only message displayed on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.verify_Direct_flights_only_message_displayed_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on Search Hotel and Car button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bravo.step_defenitions.FlightsTest.the_user_clicks_on_Search_Hotel_and_Car_button()"
});
formatter.result({
  "status": "skipped"
});
});
package com.bravo.runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith (Cucumber.class)
@CucumberOptions (
		
		plugin = {
				"html:target/built-in-html-report",
				"json:target/Cucumber.json "
		
		},
					
		features = "src/test/resources/com/bravo/features",
		glue = "com/bravo/step_definitions",
				
		tags = "@bravo", 
     	dryRun = true
//		,monochrome =true
//		,stepNotifications = true
//		,snippets = SnippetType.CAMELCASE
		)

public class CukesRunner {

}

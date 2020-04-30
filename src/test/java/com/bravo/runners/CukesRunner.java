package com.bravo.runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith (Cucumber.class)
@CucumberOptions (
		
		plugin = {"pretty",
				"html:target/built-in-html-report",
				"json:target/Cucumber.json "
		
		},
					
		features = "src/test/resources",
		glue = "com.bravo.step_defenitions",
				
				
		tags = "@bravo", 
     	dryRun = false
//		,monochrome =true
//		,stepNotifications = true
//		,snippets = SnippetType.CAMELCASE
		)

public class CukesRunner {

}

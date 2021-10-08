package Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features="features", glue= {"StepDefination"}, format = {"pretty","html:target/cucumber-reports/cucumber.html"})
public class TestRunner {

}

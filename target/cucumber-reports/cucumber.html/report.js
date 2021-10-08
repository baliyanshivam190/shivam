$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculator.feature");
formatter.feature({
  "line": 3,
  "name": "feature to test calculator",
  "description": "",
  "id": "feature-to-test-calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "customer is on homepage",
  "description": "",
  "id": "feature-to-test-calculator;customer-is-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the valid values",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 17407318200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.Enter_the_valid_values()"
});
formatter.result({
  "duration": 3754291600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.validate_the_outcomes()"
});
formatter.result({
  "duration": 81437700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c$[78,963]\u003e but was:\u003c$[479,000]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.HomePage.validate_the_outcomes(HomePage.java:54)\r\n\tat ✽.Then validate the outcomes(Calculator.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "customer is on homepage",
  "description": "",
  "id": "feature-to-test-calculator;customer-is-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter the valid values",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "yet another action",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 11619024100,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.Enter_the_valid_values()"
});
formatter.result({
  "duration": 3781333000,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.yet_another_action()"
});
formatter.result({
  "duration": 213698600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "customer is on homepage",
  "description": "",
  "id": "feature-to-test-calculator;customer-is-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Tag3"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "validate another outcomes",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "check Message outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 11201481500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.validate_another_outcomes()"
});
formatter.result({
  "duration": 592929200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.check_Message_outcomes()"
});
formatter.result({
  "duration": 86391300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...call us on 1800 035 [500].\u003e but was:\u003c...call us on 1800 035 [641].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.HomePage.check_Message_outcomes(HomePage.java:78)\r\n\tat ✽.Then check Message outcomes(Calculator.feature:21)\r\n",
  "status": "failed"
});
});
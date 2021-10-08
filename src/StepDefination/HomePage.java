package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePage {
	WebDriver driver = null;
	@Given("^Open Chrome and start application$")
	public void Open_Chrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ashok\\Documents\\browserdrivers\\chromedriver.exe");  
	  driver = new ChromeDriver();
		driver.get("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
		driver.manage().window().maximize();
	}

	@When("^Enter the valid values$")
	public void Enter_the_valid_values() throws Throwable {
		
		driver.findElement(By.xpath("//input[@aria-labelledby='q2q1']")).sendKeys("80,000"); 
		
		Thread.sleep(1000);
		WebElement other_income = driver.findElement(By.xpath("//input[@aria-labelledby='q2q2']"));  
		other_income.sendKeys("10,000");
		Thread.sleep(1000);
		WebElement living_expense = driver.findElement(By.xpath("//input[@aria-labelledby='q3q1']"));  
		living_expense.sendKeys("500");
		WebElement home_loan = driver.findElement(By.xpath("//input[@aria-labelledby='q3q2']"));  
		home_loan.sendKeys("0");
		WebElement other_loan = driver.findElement(By.xpath("//input[@aria-labelledby='q3q3']"));  
		other_loan.sendKeys("100");
		WebElement other_commitment = driver.findElement(By.xpath("//input[@aria-labelledby='q3q4']"));  
		other_commitment.sendKeys("0");
		WebElement total_creditlimit = driver.findElement(By.xpath("//input[@aria-labelledby='q3q5']"));  
		total_creditlimit.sendKeys("10,000");
		
		WebElement Button = driver.findElement(By.id("btnBorrowCalculater"));
		Button.click();
	}
	
	@Then("^validate the outcomes$")
	public void validate_the_outcomes() throws Throwable {
		WebElement p=driver.findElement(By.xpath("//span[@id='borrowResultTextAmount']"));
		String s= p.getText();
		String ActualTitle = "$479,000";
		System.out.println("Text content is : " + s);
		Assert.assertEquals(s, ActualTitle);
	}



	@When("^yet another action$")
	public void yet_another_action() throws Throwable {
		WebElement Start_Over = driver.findElement(By.xpath("//*[@id=\"main-container\"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/div[3]/div/div/div/div[2]/div[2]/button/span"));  
		Start_Over.click();
	}

	@When("^validate another outcomes$")
	public void validate_another_outcomes() throws Throwable {
		WebElement living_expense = driver.findElement(By.xpath("//input[@aria-labelledby='q3q1']"));  
		living_expense.sendKeys("1");
		WebElement Button = driver.findElement(By.id("btnBorrowCalculater"));
		Button.click();
	}

	@Then("^check Message outcomes$")
	public void check_Message_outcomes() throws Throwable {
		WebElement error_message=driver.findElement(By.xpath("//span[@class='borrow__error__text']"));
		String Message= error_message.getText();
		String Main_Message = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 641.";
		Assert.assertEquals(Message, Main_Message);
	}

}

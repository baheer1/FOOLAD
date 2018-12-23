package com.syntax.stepDefinitions;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.syntax.pages.addCandidPage;

import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addCandidsSteps {
	addCandidPage obj;

	@Given("^I logged into OrangeHRM with \"([^\"]*)\" and \"([^\"]*)\" and click login$")
	public void i_logged_into_OrangeHRM_with_and_and_click_login(String userName, String password) throws Throwable {
		obj = new addCandidPage();
		CommonMethods.enterValue(obj.userName, userName);
		CommonMethods.enterValue(obj.password, password);
		CommonMethods.click(obj.loginButton);
	}

	@When("^I click Recruitment Module and click Candidates$")
	public void i_click_Recruitment_Module_and_click_Candidates() {
		CommonMethods.click(obj.Recruitment);

	}

	@When("^Click Add$")
	public void click_Add() {
		CommonMethods.click(obj.btnAdd);
	}

	@When("^Enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and_and(String arg1, String arg2, String arg3) {
		CommonMethods.enterValue(obj.firstName, arg1);
		CommonMethods.enterValue(obj.middleName, arg2);
		CommonMethods.enterValue(obj.lastName, arg3);
	}

	@When("^Enter \"([^\"]*)\" and \"([^\"]*)\" No$")
	public void enter_and_No(String arg1, String arg2) {
		CommonMethods.enterValue(obj.email, arg1);
		CommonMethods.enterValue(obj.contactNo, arg2);
	}

	@Then("^I see Job Vacancy is displayed$")
	public void i_see_Job_Vacancy_is_displayed() {
		boolean vacancy = obj.vacancy.isDisplayed();
		Assert.assertTrue(vacancy);
	}

	@Then("^I enter any Keywords and any Comments$")
	public void i_enter_any_Keywords_and_any_Comments() {
		CommonMethods.enterValue(obj.keyWords, "zaid");
	}

	@Then("^I select a Date Of Application$")
	public void i_select_a_Date_Of_Application() {
		CommonMethods.enterValue(obj.appliedDate, "2018-11-20");
	}

	@Then("^I click Save$")
	public void i_click_Save() throws Throwable {
		Thread.sleep(2000);
		CommonMethods.click(obj.btnSave);
		Thread.sleep(5000);
	}

	@When("^I Select \"([^\"]*)\" from Job Title$")
	public void i_Select_from_Job_Title(String value) {
		CommonMethods.DropDown(obj.jobTitle, value);
		System.out.println("Value selected");
	}

	@When("^I Select All  from Vacancy$")
	public void i_Select_All_from_Vacancy() {
		obj.jobVacancy.isDisplayed();
	}

	@When("^I Select All from the Hiring Manager$")
	public void i_Select_All_from_the_Hiring_Manager() {
		obj.hiringManager.isDisplayed();
	}

	@When("^I Select \"([^\"]*)\" from Status$")
	public void i_Select_from_Status(String value) {
		CommonMethods.DropDown(obj.status, value);
	}

	@When("^I Enter Candidates \"([^\"]*)\" from the previous entry$")
	public void i_Enter_Candidates_from_the_previous_entry(String value) {
		CommonMethods.enterValue(obj.candidateName, value);

	}

	@When("^Select Date of Application  the previous entry$")
	public void select_Date_of_Application_the_previous_entry() {
		CommonMethods.enterValue(obj.fromDate, "2018-11-20");
		CommonMethods.enterValue(obj.toDate, "2018-12-12");
	}

	@When("^Select \"([^\"]*)\" of Application to Manual$")
	public void select_of_Application_to_Manual(String type) {
		Select select = new Select(obj.modeOfApplication);
		select.selectByVisibleText(type);

	}

	@When("^Click Search$")
	public void click_Search() throws InterruptedException {
		CommonMethods.click(obj.btnSrch);
		Thread.sleep(5000);
	}

//	@Then("^I see Candidate is present$")
//	public void i_see_Candidate_is_present()  {
//		// //table/tbody/tr/td/a
////boolean Employee = BaseClass.driver.findElement(By.xpath("//a[text()='Obid st stanikzai']")).isDisplayed();
////Assert.assertTrue(Employee);
////BaseClass.driver.findElement(By.xpath("//a[text()='Obid st stanikzai']/../../td[1]//*")).click();
//		CommonMethods.click(obj.wrapper);
//		
//	}

	@Then("^I see Candidate is present \"([^\"]*)\"$")
	public void i_see_Candidate_is_present(String name) {
//		List<WebElement> rows = obj.resultTable.findElements(By.tagName("tr"));
//		for (WebElement row : rows) {
//			String rowText = row.getText();
//			System.out.println(rowText);
//			System.out.println(name);
//			if (rowText.contains(name)) {
//				System.out.println(name + " is present");
//			}
//		}
//	}
	
	///////////////////////////////
	List<WebElement> rows = obj.resultTable;
	for (int i=0;i<rows.size();i++) {
		String gettext=rows.get(i).getText();
		
		if (gettext.contains(name)) {
			//System.out.println(name + " is present");
		}
	}
}
}
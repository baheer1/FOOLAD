package com.syntax.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class addCandidPage extends BaseClass {

	@FindBy(id = "txtUsername")
	public WebElement userName;

	@FindBy(id = "txtPassword")
	public WebElement password;

	@FindBy(id = "btnLogin")
	public WebElement loginButton;

	@FindBy(xpath = "//b[contains(text(),'Recruitment')]")
	public WebElement Recruitment;

	@FindBy(xpath = "//input[@id='btnAdd']")
	public WebElement btnAdd;

	@FindBy(xpath = "//input[@id='addCandidate_firstName']")
	public WebElement firstName;
	@FindBy(xpath = "//input[@id='addCandidate_middleName']")
	public WebElement middleName;
	@FindBy(xpath = "//input[@id='addCandidate_lastName']")
	public WebElement lastName;

	@FindBy(xpath = "//input[@id='addCandidate_email']")
	public WebElement email;

	@FindBy(xpath = "//input[@id='addCandidate_contactNo']")
	public WebElement contactNo;

	@FindBy(xpath = "//select[@id='addCandidate_vacancy']")
	public WebElement vacancy;

	@FindBy(xpath = "//input[@id='addCandidate_keyWords']")
	public WebElement keyWords;
	@FindBy(xpath = " //input[@id='addCandidate_appliedDate']")
	public WebElement appliedDate;
	@FindBy(xpath = "//input[@id='btnSave']")
	public WebElement btnSave;

	@FindBy(xpath = "//*[@id='candidateSearch_jobTitle']")
	public WebElement jobTitle;
	@FindBy(xpath = " //select[@id='candidateSearch_jobVacancy']")
	public WebElement jobVacancy;
	@FindBy(xpath = "//select[@id='candidateSearch_hiringManager']")
	public WebElement hiringManager;
	@FindBy(xpath = "//select[@id='candidateSearch_status']")
	public WebElement status;
	@FindBy(xpath = "//input[@id='candidateSearch_candidateName']")
	public WebElement candidateName;

	@FindBy(xpath = "//input[@id='candidateSearch_fromDate']")
	public WebElement fromDate;
	@FindBy(xpath = "//input[@id='candidateSearch_toDate']")
	public WebElement toDate;

	@FindBy(xpath = "//select[@id='candidateSearch_modeOfApplication']")
	public WebElement modeOfApplication;
	
	
	@FindBy(xpath = "//*[@id=\"btnSrch\"]")
	public WebElement btnSrch;
	
	
	@FindBy(xpath="//a[@href='addCandidate?id=22']")
	public List<WebElement> addCandidate;

	public addCandidPage() {
		PageFactory.initElements(driver, this);
	}

}

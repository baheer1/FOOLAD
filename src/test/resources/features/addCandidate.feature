#Author: your.email@your.domain.com
Feature: OrangeHRM Adding Candids

  Background: 
    Given I logged into OrangeHRM with "Admin" and "admin123" and click login
    When I click Recruitment Module and click Candidates

  Scenario: 
    And Click Add
    And Enter "Obid" and "St" and "Stanikzai"
    And Enter "atal@gmail.com" and "5712345670" No
    Then I see Job Vacancy is displayed
    And I enter any Keywords and any Comments
    And I select a Date Of Application
    And I click Save

  Scenario: 
    And I Select "CEO" from Job Title
    And I Select All  from Vacancy
    And I Select All from the Hiring Manager
    And I Select "Hired" from Status
    And I Enter Candidates "Obid St Stanikzai" from the previous entry
    And Select Date of Application  the previous entry
    And Select "Manual" of Application to Manual
    And Click Search
    Then I see Candidate is present "Obid St Stanikzai"

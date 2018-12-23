$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addCandidate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "OrangeHRM Adding Candids",
  "description": "",
  "id": "orangehrm-adding-candids",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4888417974,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\" and click login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Recruitment Module and click Candidates",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "addCandidsSteps.i_logged_into_OrangeHRM_with_and_and_click_login(String,String)"
});
formatter.result({
  "duration": 1652975009,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_click_Recruitment_Module_and_click_Candidates()"
});
formatter.result({
  "duration": 765510493,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "orangehrm-adding-candids;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Click Add",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \"Obid\" and \"St\" and \"Stanikzai\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter \"atal@gmail.com\" and \"5712345670\" No",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I see Job Vacancy is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter any Keywords and any Comments",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select a Date Of Application",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "addCandidsSteps.click_Add()"
});
formatter.result({
  "duration": 470257878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Obid",
      "offset": 7
    },
    {
      "val": "St",
      "offset": 18
    },
    {
      "val": "Stanikzai",
      "offset": 27
    }
  ],
  "location": "addCandidsSteps.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 282699496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atal@gmail.com",
      "offset": 7
    },
    {
      "val": "5712345670",
      "offset": 28
    }
  ],
  "location": "addCandidsSteps.enter_and_No(String,String)"
});
formatter.result({
  "duration": 204193286,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_see_Job_Vacancy_is_displayed()"
});
formatter.result({
  "duration": 31055689,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_enter_any_Keywords_and_any_Comments()"
});
formatter.result({
  "duration": 86546327,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_select_a_Date_Of_Application()"
});
formatter.result({
  "duration": 159613382,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_click_Save()"
});
formatter.result({
  "duration": 7807730642,
  "status": "passed"
});
formatter.after({
  "duration": 703838868,
  "status": "passed"
});
formatter.before({
  "duration": 4398504389,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM with \"Admin\" and \"admin123\" and click login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Recruitment Module and click Candidates",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    },
    {
      "val": "admin123",
      "offset": 42
    }
  ],
  "location": "addCandidsSteps.i_logged_into_OrangeHRM_with_and_and_click_login(String,String)"
});
formatter.result({
  "duration": 1460576513,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_click_Recruitment_Module_and_click_Candidates()"
});
formatter.result({
  "duration": 1416864735,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "orangehrm-adding-candids;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I Select \"CEO\" from Job Title",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Select All  from Vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select All from the Hiring Manager",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select \"Hired\" from Status",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter Candidates \"Obid St Stanikzai\" from the previous entry",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Date of Application  the previous entry",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select \"Manual\" of Application to Manual",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click Search",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I see Candidate is present \"Obid St Stanikzai\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CEO",
      "offset": 10
    }
  ],
  "location": "addCandidsSteps.i_Select_from_Job_Title(String)"
});
formatter.result({
  "duration": 142906799,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_Select_All_from_Vacancy()"
});
formatter.result({
  "duration": 30213732,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.i_Select_All_from_the_Hiring_Manager()"
});
formatter.result({
  "duration": 30825857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hired",
      "offset": 10
    }
  ],
  "location": "addCandidsSteps.i_Select_from_Status(String)"
});
formatter.result({
  "duration": 124650559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Obid St Stanikzai",
      "offset": 20
    }
  ],
  "location": "addCandidsSteps.i_Enter_Candidates_from_the_previous_entry(String)"
});
formatter.result({
  "duration": 211978541,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.select_Date_of_Application_the_previous_entry()"
});
formatter.result({
  "duration": 354663473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "addCandidsSteps.select_of_Application_to_Manual(String)"
});
formatter.result({
  "duration": 113122579,
  "status": "passed"
});
formatter.match({
  "location": "addCandidsSteps.click_Search()"
});
formatter.result({
  "duration": 5385040477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Obid St Stanikzai",
      "offset": 28
    }
  ],
  "location": "addCandidsSteps.i_see_Candidate_is_present(String)"
});
formatter.result({
  "duration": 52265604,
  "status": "passed"
});
formatter.after({
  "duration": 607690820,
  "status": "passed"
});
});
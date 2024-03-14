# Playwright_udemy

Link: https://www.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31093884#overview

PLAYWRIGHT - The Most trending Automation tool which is an tough competitor to Selenium & Cypress
This is one and only Comprehensive Playwright course available online   which covers everything from basics to Framework  including JavaScript basics

**********10 reasons why  Playwright can be future of UI Automation******************

Playwright enables reliable end-to-end testing for modern web apps with its Auto-wait capability

· Works on major Browser which uses Chromium Engine, (Chrome & Edge) Firefox, Safari (Web kit) & Opera

· Works on any OS – Windows, MAC, Linux & Supports Native mobile emulation of Google Chrome for Android and Mobile IOS in Safari

· Works with any language – JavaScript, TypeScript, Java, Python, C#(.NET). – (This course is made on JavaScript)

· Playwright have excellent inbuilt features called Traces which can take automatic Screenshots, test video recording, Flaky test retry & Logging mechanism

· Playwright provides inspector tool which help us to monitor and debug every step of execution, see click points and verify page locators on fly

· Playwright has inbuilt API Testing libraries to fire the Network calls on fly within Web Application. (Test Edge Case scenarios with the mix of web & API testing)

· Playwright provides browser context feature which help to save and transfer the browser state to any other new browser.

· Playwright provides codegen tool which Generate test code by recording your actions. Save them into any language.



With all the above top features it has, Playwright is now tough competitor for Selenium & Cypress automation tools.

Breakdown of Playwright topics in this course

We are using JavaScript language binding to build Playwright Automation tests. (Js is mainly picked language for Playwright)
For Beginners, there is 2 hours Javascript video in the last section of this course which covers all JS basics from Scratch.



Playwright Web/UI Automation (covers all core concepts) – 50%

Mix of Web & API Tests including Network mocking. – 25%

Playwright Advanced Framework features. – 25%

JavaScript Basics for Beginners (optional)



What you’ll learn
Understand the Web Automation with Playwright on Live Applications
Comprehensive knowledge on all Playwright Methods and their usage with examples
Learn How to make API calls with in UI Automation tests to perform smart automation
Understand how to Intercept Network/API requests & responses with Playwright
Get Familiar with Playwright Inspector tool, Trace Viewer & Code Gen (Record Playback) tools
Develop End to end Framework with Playwright utilizing all the features available in the tool
Learn Visual testing with Playwright to compare the Images
Learn JavaScript fundamentals required for Playwright Automation testing
Are there any course requirements or prerequisites?
No Programming experience required. JavaScript basics are fully taught in the course in a dedicated section
Who this course is for:
Automation testers
QA
Developers


# Playwright_udemy Topics

- Playwright Web/UI Automation 
- Mix of Web and API Tests including Network mocking
- Playwright Advanced Framework feature
- Javascript Basics for Beginners

# How to identify CSS Selectors

- If Id is present
    css -> tagname#id (or) #id

- If class attribute is present
    css -> tagname.class (or) .class
    When using .class, the element is not unique, then you have to 
    use : the tagname.class   --> select.form-control

- Write css based on any Attribut
    css -> parenttagname >> childtagname
    [attribut='value']
    [href*='partial value']     *  is for partial value
- If needs to write the locator based on text
    text=''

- you can use this : style="display: none;" or style*="display"  (the second is the partial selector with '*')

- await page.waitForLoadState('networkidle');   // To wait dynimacally
This wait untill all networkIdle are loaded in the webpage. 

- To wait dynamically, there is another method; 
  await.page.locator(".card-body b").first().waitFor();

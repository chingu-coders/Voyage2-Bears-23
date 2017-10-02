@incomplete
Feature: Slinker Landing page
  As an internet user
  When I visit the Slinker Landing page
  I want everything to work as expected

  Scenario: Loading the Link Generator Landing page
    When I visit the Link Generator Landing page
    Then I should see the Page header
    And I should see the Page Header contains "Slinker - Slack Link Tool"
    And I should see the Navigation Bar

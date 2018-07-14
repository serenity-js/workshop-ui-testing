Feature: Managing a todo list

  In order to get organised
  As a developer
  I want to know what is left to do

  Scenario: James adds a new item

    Given James wants to interact with AngularJS apps
     When he adds 'write some code' to his todo list
     Then he should see that his list contains:
      | Item             |
      | write some code  |

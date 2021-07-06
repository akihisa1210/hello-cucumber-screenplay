Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Firday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  Scenario: Friday is Firday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "TGIF"

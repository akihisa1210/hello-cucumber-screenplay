import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

const isItFriday = (today: string) => {
  return "Nope";
};

Given("today is Sunday", function () {
  this.today = "Sunday";
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

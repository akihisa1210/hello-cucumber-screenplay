import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

const isItFriday = (today: string) => {
  if (today === "Friday") {
    return "TGIF";
  }
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

Given("today is Friday", function () {
  this.today = "Friday";
});

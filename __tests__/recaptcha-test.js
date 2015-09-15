"use strict";
jest.dontMock("../src/index");

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var Component = require("../src/index");

describe("Google reCAPTCHA", () => {
  var recaptcha = null;
  beforeEach(() => {
    recaptcha = TestUtils.renderIntoDocument(<Component/>);
  });

  it("should have default props defined", () => {
    expect(recaptcha.props.elementID).toBe("g-recaptcha");
    expect(recaptcha.props.onloadCallback).not.toBeDefined();
    expect(TestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
  });
});

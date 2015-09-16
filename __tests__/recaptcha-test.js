"use strict";
jest.dontMock("../src/index");

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var Component = require("../src/index");

describe("Google reCAPTCHA", () => {
  var recaptcha = null;
  recaptcha = TestUtils.renderIntoDocument(<Component/>);

  it("should have default props defined", () => {
    expect(TestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
    expect(recaptcha.props.elementID).toBe("g-recaptcha");
    expect(recaptcha.props.sitekey).not.toBeDefined();
    expect(recaptcha.props.theme).toBe("light");
    expect(recaptcha.props.type).toBe("image");
    expect(recaptcha.props.size).toBe("normal");
    expect(recaptcha.props.onloadCallback).not.toBeDefined();
  });

  it("should change the default props", () => {
    recaptcha = TestUtils.renderIntoDocument(<Component sitekey="123321" elementID="test" theme="dark" type="audio" size="compact"/>);
    expect(TestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
    expect(recaptcha.props.elementID).toBe("test");
    expect(recaptcha.props.sitekey).toBe("123321");
    expect(recaptcha.props.theme).toBe("dark");
    expect(recaptcha.props.type).toBe("audio");
    expect(recaptcha.props.size).toBe("compact");
    expect(recaptcha.props.onloadCallback).not.toBeDefined();
  });
});

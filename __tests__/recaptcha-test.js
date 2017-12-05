import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const Recaptcha = require("../src/index");
describe("Google reCAPTCHA", () => {
  it("should have default props defined", () => {
    const recaptcha = mount(<Recaptcha/>);
    expect(recaptcha.props().elementID).toBe("g-recaptcha");
    expect(recaptcha.props().sitekey).not.toBeDefined();
    expect(recaptcha.props().clsName).not.toBeDefined();
    expect(recaptcha.props().theme).toBe("light");
    expect(recaptcha.props().type).toBe("image");
    expect(recaptcha.props().size).toBe("normal");
    expect(recaptcha.props().reset).toBe(0);
    expect(recaptcha.props().onloadCallback).not.toBeDefined();
  });

  it("should change the default props", () => {
    const recaptcha = mount(
      <Recaptcha
        clsName="testing"
        sitekey="123321"
        elementID="test"
        theme="dark"
        type="audio"
        size="compact"
        reset={1}
      />);
    expect(recaptcha.props().elementID).toBe("test");
    expect(recaptcha.props().clsName).toBe("testing");
    expect(recaptcha.props().sitekey).toBe("123321");
    expect(recaptcha.props().reset).toBe(1);
    expect(recaptcha.props().theme).toBe("dark");
    expect(recaptcha.props().type).toBe("audio");
    expect(recaptcha.props().size).toBe("compact");
    expect(recaptcha.props().onloadCallback).not.toBeDefined();
  });


});

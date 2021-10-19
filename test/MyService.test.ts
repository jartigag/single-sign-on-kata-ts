import MyService from "../src/myservice/MyService";
import Request from "../src/sso/Request";
import SSOToken from "../src/sso/SSOToken";
import { SingleSignOnRegistryDummy } from "./__mocks__/SingleSignOnRegistryDummy";
import { SingleSignOnRegistryStub } from "./__mocks__/SingleSignOnRegistryStub";
import { SingleSignOnRegistryFake } from "./__mocks__/SingleSignOnRegistryFake";
import { SingleSignOnRegistrySpy } from "./__mocks__/SingleSignOnRegistrySpy";

describe("MyService", () => {
  it("invalid sso token is rejected", () => {
    const service = new MyService(new SingleSignOnRegistryDummy());

    const response = service.handleRequest(
      new Request("Foo", new SSOToken("token"))
    );

    expect(response.getText()).not.toEqual("hello Foo!");
  });
});

describe("MyService", () => {
  it("valid sso token is accepted", () => {
    const service = new MyService(new SingleSignOnRegistryStub(true));

    const response = service.handleRequest(
      new Request("Foo", new SSOToken("token"))
    );

    expect(response.getText()).toEqual("hello Foo!");
  });
  it("invalid sso token is rejected", () => {
    const service = new MyService(new SingleSignOnRegistryStub(false));

    const response = service.handleRequest(
      new Request("Foo", new SSOToken("token"))
    );

    expect(response.getText()).not.toEqual("hello Foo!");
  });
});

describe("MyService", () => {
  it("valid user-password return valid sso token", () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRegister("user", "user_passwd");

    expect(response).toEqual(new SSOToken("user"));
  });
});

describe("MyService", () => {
  it("invalid user-password return empty sso token", () => {
    const service = new MyService(new SingleSignOnRegistryFake());

    const response = service.handleRegister("user", "invalid_password");

    expect(response).toEqual(new SSOToken(""));
  });
});

describe("MyService", () => {
  it("if sso token is removed, unregister is called", () => {
    const register = new SingleSignOnRegistrySpy();
    const service = new MyService(register);

    service.handleUnRegister(new SSOToken(""));

    expect(register.isUnregistered).toEqual(true);
  });
});

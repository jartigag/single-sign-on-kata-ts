import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnRegistryDummy } from './__mocks__/SingleSignOnRegistryDummy';
import { SingleSignOnRegistryInvalidStub } from './__mocks__/SingleSignOnRegistryInvalidStub';
import { SingleSignOnRegistryValidStub } from './__mocks__/SingleSignOnRegistryValidStub';

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(new SingleSignOnRegistryDummy());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).not.toEqual('hello Foo!');
  });
});

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(new SingleSignOnRegistryInvalidStub());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).not.toEqual('hello Foo!');
  });
});

describe('MyService', () => {
  it('valid sso token is accepted', () => {
    const service = new MyService(new SingleSignOnRegistryValidStub());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).toEqual('hello Foo!');
  });
});

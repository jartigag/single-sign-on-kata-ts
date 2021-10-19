import SingleSignOnRegistry from "../../src/sso/SingleSignOnRegistry";
import SSOToken from "../../src/sso/SSOToken";

export class SingleSignOnRegistrySpy implements SingleSignOnRegistry {
  isUnregistered: boolean;

  isValid(token: string): boolean {
    return false;
  }

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    throw new Error("Dummy: not implemented");
  }

  unregister(token: string): void {
    this.isUnregistered = true;
  }
}

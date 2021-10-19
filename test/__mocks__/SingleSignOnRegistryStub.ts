import SingleSignOnRegistry from "../../src/sso/SingleSignOnRegistry";
import SSOToken from "../../src/sso/SSOToken";

export class SingleSignOnRegistryStub implements SingleSignOnRegistry {
  private readonly valid: boolean;

  constructor(valid: boolean) {
    this.valid = valid;
  }
  isValid(token: string): boolean {
    return this.valid;
  }

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    throw new Error("Dummy: not implemented");
  }

  unregister(token: string): void {
    throw new Error("Dummy: not implemented");
  }
}

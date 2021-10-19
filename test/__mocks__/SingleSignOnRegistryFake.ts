import SingleSignOnRegistry from "../../src/sso/SingleSignOnRegistry";
import SSOToken from "../../src/sso/SSOToken";

export class SingleSignOnRegistryFake implements SingleSignOnRegistry {
  isValid(token: string): boolean {
    return false;
  }
  registerNewSession(userName: string, password: string): SSOToken | undefined {
    if (password == `${userName}_passwd`) {
      return new SSOToken(userName);
    } else {
      return undefined;
    }
  }

  unregister(token: string): void {
    throw new Error("Dummy: not implemented");
  }
}

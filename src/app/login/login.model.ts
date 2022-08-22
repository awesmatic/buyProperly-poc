export interface LoginModel {
  email: string;
  firstName: string;
  id_user: number;
  passwordExpired: boolean;
  username: string;
  verified: boolean;
  hasInvested: boolean;
  jwttoken: string;
  userAccountType: number;
}

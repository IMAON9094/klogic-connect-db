export class Users {
  public personalID: string;
  public stdID: string;
  public new_password:string;

  constructor(personalId:string,stdId: string,new_pwd:string) {
    this.personalID = personalId;
    this.stdID = stdId;
    this.new_password = new_pwd;
  }
}

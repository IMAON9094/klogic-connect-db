export class Student {
  public stdID: string;
  public name: string;
  public sex: string;
  public birthday: Date;
  public personalID: string;

  constructor(stdId: string,name:string,sex:string,birthday:Date,personalId:string) {
    this.stdID = stdId;
    this.name = name;
    this.sex = sex;
    this.birthday = birthday;
    this.personalID = personalId;
  }
}

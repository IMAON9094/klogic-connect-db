export class Teachers {
  public teacherID: string;
  public name: string;
  public password:string;
  public role:string;

  constructor(teacherID:string,name: string,pwd:string,role:string) {
    this.teacherID = teacherID;
    this.name = name;
    this.password = pwd;
    this.role = role;
  }
}

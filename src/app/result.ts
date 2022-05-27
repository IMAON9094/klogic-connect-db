export class Result {
  public course_code: string;
  public subject: string;
  public credit:number;
  public section:number;

  constructor(course_code:string,subject: string,credit:number,section:number) {
    this.course_code = course_code;
    this.subject = subject;
    this.credit = credit;
    this.section = section;
  }
}

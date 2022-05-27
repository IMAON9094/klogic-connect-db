export class Register {
  public resultID: number;
  public stdID: string;
  public courseID: string;

  constructor(resultID: number,stdId: string,courseID:string) {
    this.resultID = resultID;
    this.stdID = stdId;
    this.courseID = courseID;
  }
}

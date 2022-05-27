export class Teacherschedule {
  public stdID: string;
  public name: string;
  public section:number;

  constructor(stdID:string,name: string,section:number) {
    this.stdID = stdID;
    this.name = name;
    this.section = section;
  }
}

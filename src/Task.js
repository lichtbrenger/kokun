export class Task {
  constructor(japanese="", dutch="") {
    this.active = japanese
    this.japanese = japanese;
    this.dutch = dutch 
  }

  translate() {
    if(this.active == this.japanese) {
      this.active = this.dutch
    }
    else {
      this.active = this.japanese
    }
  }
}

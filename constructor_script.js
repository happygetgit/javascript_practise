class RailwayForm {
  constructor(givenname, trainno) {
    alert(givenname + ": booking the ticket for trainno " + trainno);
    this.gname = givenname;
    this.trainno = trainno;
  }
  submitForm() {
    alert(this.gname + ": submitted a form for trainno " + this.trainno);
  }
  cancelForm() {
    alert(this.gname + ": cancelled the form for trainno " + this.trainno);
  }
}
let harryForm = new RailwayForm("harry", 234223);
let rohanForm = new RailwayForm("rohan", 453454);

harryForm.submitForm();
rohanForm.submitForm();
harryForm.cancelForm();
rohanForm.cancelForm();

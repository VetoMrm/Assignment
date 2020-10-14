import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.scss']
})
export class CreateexamComponent implements OnInit {

  examType = [
    { value: 'MCQ', viewValue: 'MCQ' },
    { value: 'Subjective', viewValue: 'Subjective' },
    { value: 'Etc', viewValue: 'Etc' },
  ];
  subject = [
    { value: 'Kannada', viewValue: 'Kannada' },
    { value: 'English', viewValue: 'English' },
    { value: 'Hindi', viewValue: 'Hindi' },
    { value: 'Maths', viewValue: 'Maths' },
    { value: 'Science', viewValue: 'Science' },
    { value: 'Social', viewValue: 'Social' },
  ];
  tags = [
    { value: 'First Semester', viewValue: 'First Semester' },
    { value: 'Second Semester', viewValue: 'Second Semester' },
    { value: 'Third Semester', viewValue: 'Third Semester'},
  ];

  noOfQuestion = [
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' },
    { value: '75', viewValue: '75'},
    { value: '100', viewValue: '100'},
  ];

  marks = [
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' },
    { value: '75', viewValue: '75'},
    { value: '100', viewValue: '100'},
  ];

  duration = [
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' },
    { value: '75', viewValue: '75'},
    { value: '100', viewValue: '100'},
  ];

  questions = [
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque, fugit exercitationem doloremque earum a eum aspernatur accusamus quos tenetur quibusdam omnis iste officiis tempore quaerat voluptates excepturi ducimus." },
  ];

  questionsTwo = [
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
    { "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit Dignissimos distinctio eaque," },
  ];

  @Input()
  maxNumberOfCharacters = 250;
  counter = true;

  interaction = {
    textValue: ''
  };

  numberOfCharacters1 = 0;
  numberOfCharacters2 = 0;

  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;

    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  
//for popup forgotpassword
openDialog(question): void {
  var printObj =question;
   const dialogRef = this.dialog.open(Question, {
     width: "800px",
     height: "300px",
    data: { pageValue: printObj }
   });
   dialogRef.afterClosed().subscribe((result) => {
   });
 }

 openDialogTwo(questionsTwo): void {
  var printObj =questionsTwo;
   const dialogRef = this.dialog.open(QuestionList, {
     width: "800px",
     height: "500px",
    data: { pageValue: printObj }
   });
   dialogRef.afterClosed().subscribe((result) => {
   });
 }
}

//PopUp of View Rounds
@Component({
 selector: "question",
 templateUrl: "question.html",
 styleUrls: ['./createexam.component.scss'],
})
export class Question {


 printObj;
 targetSetList: any;
 constructor(private route: ActivatedRoute,
   public dialog: MatDialog,
   public dialogRef: MatDialogRef<Question>,
   @Inject(MAT_DIALOG_DATA) public data: any,
 ) {
    this.printObj = data.pageValue;
 }


 onNoClick(): void {
   this.dialogRef.close();
 }
 ngOnInit() {
   
 }

 close() {
   this.dialogRef.close();
 }
}


//PopUp of View Rounds
@Component({
  selector: "questionList",
  templateUrl: "questionList.html",
  styleUrls: ['./createexam.component.scss'],
 })
 export class QuestionList {
 
 
  printObj;
  targetSetList: any;
  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionList>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
     this.printObj = data.pageValue;
  }
 
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    
  }
 
  close() {
    this.dialogRef.close();
  }
 }
 
 

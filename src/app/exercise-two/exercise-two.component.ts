import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Career } from '../shared/career.model';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {
  @ViewChild('careerInput') careerInputRef : ElementRef;
  @ViewChild('studentsInput') studentsInputRef : ElementRef;


  careers: Career[] = [
    new Career('Computer Science', 35),
    new Career('Architecture', 60),
  ];

  constructor() { }

  ngOnInit() {
  }
  addCareer(){
    const nameCareer = this.careerInputRef.nativeElement.value;
    const studentsCareer = this.studentsInputRef.nativeElement.value;
    const newCareer = new Career(nameCareer,studentsCareer);
    this.careers.push(newCareer);
  }

}

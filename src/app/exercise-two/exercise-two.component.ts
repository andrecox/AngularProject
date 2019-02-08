import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Career } from '../shared/career.model';
import { CareerService } from '../shared/career.service';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {
  @ViewChild('careerInput') careerInputRef : ElementRef;
  @ViewChild('studentsInput') studentsInputRef : ElementRef;
  careers: Career[];
  // SIN USAR SERVICIOS
  // careers: Career[] = [
  //   new Career('Computer Science', 35),
  //   new Career('Architecture', 60),
  // ];

  constructor(private careerService : CareerService) { }

  ngOnInit() {
    //console.log("ngOnInit exercise2");
    this.careers = this.careerService.getCareers();
    this.careerService.careersChanged.subscribe(
      (careers: Career[]) => { this.careers = careers; }
    );
  }
  addCareer(){
    const nameCareer = this.careerInputRef.nativeElement.value;
    const studentsCareer = this.studentsInputRef.nativeElement.value;
    const newCareer = new Career(nameCareer,studentsCareer);
    //SIN USAR SERVICIOS
    //this.careers.push(newCareer);
    this.careerService.addNewCareer(newCareer);

  }

}

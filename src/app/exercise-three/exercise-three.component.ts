import { Career } from './../shared/career.model';
import { Component, OnInit } from '@angular/core';
import { CareerService } from '../shared/career.service';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {

  newcareers: Career[];

  constructor(private careerService : CareerService) { }

  ngOnInit() {
    // console.log(' ngOnInit exercise3');
    this.newcareers = this.careerService.getNewCareers();
    this.careerService.careersNewChanged.subscribe(
      (newcareers: Career[]) => { this.newcareers = newcareers; }
    );
  }



}

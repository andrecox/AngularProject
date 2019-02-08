import { EventEmitter } from '@angular/core';
import { Career } from './career.model';

export class CareerService{
  careersChanged = new EventEmitter<Career[]>();
  careersNewChanged = new EventEmitter<Career[]>();
  careers: Career[] = [
    new Career('Computer Science', 35),
    new Career('Architecture', 60),
    new Career('Medicine', 76),
  ];

  newcareers: Career[] = [];


  getCareers(){
    return this.careers.slice();
  }

  getNewCareers(){
    return this.newcareers.slice();
  }

  addNewCareer(newcareer : Career){
    this.careers.push(newcareer);
    this.careersChanged.emit(this.careers.slice());

    this.newcareers.push(newcareer);
    this.careersNewChanged.emit(this.newcareers.slice());
  }
}

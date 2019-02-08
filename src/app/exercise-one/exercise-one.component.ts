import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {
  languages = ['English', 'Spanish', 'French', 'Germany'];
  viewLanguages = false;

  @Input() public inputPadre;

  constructor() { }

  ngOnInit() {
  }

}

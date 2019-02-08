import { Component } from '@angular/core';
import { CareerService } from './shared/career.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CareerService]
})
export class AppComponent {
  public viewExerciseOne = false;
  public viewExerciseTwo = true;
  public viewExerciseThree = true;
  public ParentVariable = 'app-component';
  title = 'practice';
}

import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css'],
})
export class Subscriber1Component {
  sub!: Subscription;

  constructor(private testService: TestService) {}

  onStart() {
    this.sub = this.testService.nums_observable.subscribe((val) =>
      console.log("Subscriber-1 : ",val)
    );
  }

  onEnd() {
    this.sub.unsubscribe();
  }

}

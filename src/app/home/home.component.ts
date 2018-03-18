import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Test } from "@app/home/test.model";
import { RouterModule, Routes, Router } from '@angular/router';
import { TestService } from './test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tests: Test[];

  constructor(private router: Router,
    private testService: TestService) { }

  goToTopik1(test: Test) {
    this.router.navigate(['/tests', test.id]);
  }

  hasListeningQuestions(test: Test): boolean {
    return this.testService.hasListeningQuestions(test);
  }

  hasReadingQuestions(test: Test): boolean {
    return this.testService.hasReadingQuestions(test);
  }

  goToTopik2(test: Test) {
    this.router.navigate(['/tests', test.id]);
  }

  ngOnInit() {
    this.tests = this.testService.getTests();
  }

}

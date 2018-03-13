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

  goToTopik2(test: Test) {
    this.router.navigate(['/tests', test.id]);
  }

  ngOnInit() {
    this.tests = this.testService.getTests();
  }

}

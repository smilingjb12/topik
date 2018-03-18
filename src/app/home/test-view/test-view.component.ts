import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { Test, Question, Answer } from '../test.model';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  test: Test;
  selectedQuestion: Question;

  constructor(private testService: TestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: any) => {
      let testId = +params['id'];
      this.test = this.testService.getTest(testId);
      this.selectedQuestion = this.test.questions[0];
    });
  }

  isActive(question: Question) {
    return question.id == this.selectedQuestion.id;
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
  }

  getQuestionNgClass(question: Question) {
    return {
      'success': question.selectedAnswer && question.selectedAnswer.isCorrect,
      'danger': question.selectedAnswer && !question.selectedAnswer.isCorrect
    }
  }

  goToPreviousQuestion() {
    let selectedQuestionIndex = this.selectedQuestion.id - 1;
    this.selectedQuestion = this.test.questions[selectedQuestionIndex - 1];
  }

  goToNextQuestion() {
    let selectedQuestionIndex = this.selectedQuestion.id - 1;
    this.selectedQuestion = this.test.questions[selectedQuestionIndex + 1];
  }



  answerIsSelected(answer: Answer) {
    return this.selectedQuestion && this.selectedQuestion.selectedAnswer &&
      this.selectedQuestion.selectedAnswer.id == answer.id;
  }


}

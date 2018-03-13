import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { Test, Question, Answer } from '../test.model';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  private test: Test;
  private selectedQuestion: Question;
  private selectedAnswer: Answer;

  constructor(private testService: TestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let testId = +params['id'];
      this.test = this.testService.getTest(testId);
      this.selectedQuestion = this.test.questions[0];
    });
  }

  isActive(question: Question) {
    return question.id == this.selectedQuestion.id;
  }

  generateQuestionNumberTitle(answer: Answer) {
    return `&#931${1 + answer.id};`;
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
    this.selectedAnswer = null;
  }
   
  getAnswerNgClass(answer: Answer) {
    return {
      'btn-success': this.selectedAnswer && answer.isCorrect,
      'btn-danger': this.selectedAnswer && !answer.isCorrect,
      'btn-light': !this.selectedAnswer
    };
  }

  answerIsSelected(answer: Answer) {
    return this.selectedAnswer && this.selectedAnswer.id == answer.id;
  }

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
    this.selectedQuestion.isAnswered = true;
  }
}

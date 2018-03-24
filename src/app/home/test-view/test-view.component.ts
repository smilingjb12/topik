import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { Test, Question, Answer } from '../test.model';
import { DarkModeService } from "@app/dark-mode.service";

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;
  testId: number;

  constructor(private testService: TestService,
    private route: ActivatedRoute,
    public darkModeService: DarkModeService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: any) => {
      this.testId = +params['id'];
      let questionsType = params['type'];
      this.questions = this.testService.getTestQuestions(this.testId, questionsType);
      this.selectedQuestion = this.testService.getStartupQuestion(this.questions);
    });
  }

  isActive(question: Question): boolean {
    return question.id == this.selectedQuestion.id;
  }

  selectQuestion(question: Question): void {
    this.selectedQuestion = question;
  }

  isFirstQuestion(question: Question): boolean {
    return this.questions[0] == question;
  }

  isLastQuestion(question: Question): boolean {
    return this.questions[this.questions.length - 1] == question;
  }

  getQuestionNgClass(question: Question) {
    return {
      'success': question.selectedAnswer && question.selectedAnswer.isCorrect,
      'danger': question.selectedAnswer && !question.selectedAnswer.isCorrect
    }
  }

  goToPreviousQuestion(): void {
    let selectedQuestionIndex = this.questions.indexOf(this.selectedQuestion);
    this.selectedQuestion = this.questions[selectedQuestionIndex - 1];
  }

  goToNextQuestion(): void {
    let selectedQuestionIndex = this.questions.indexOf(this.selectedQuestion);
    this.selectedQuestion = this.questions[selectedQuestionIndex + 1];
  }

  answerIsSelected(answer: Answer): boolean {
    return this.selectedQuestion && this.selectedQuestion.selectedAnswer &&
      this.selectedQuestion.selectedAnswer.id == answer.id;
  }
}

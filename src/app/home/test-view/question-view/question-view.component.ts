import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Question, Answer } from '../../test.model';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @ViewChild('audio') audioElement: any;
  scriptIsVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleScript(question: Question) {
    question.scriptIsVisible = !question.scriptIsVisible;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question) {
      if (this.audioElement) {
        this.audioElement.nativeElement.pause();
        this.audioElement.nativeElement.load();
      }

    }
  }

  getAnswerNgClass(answer: Answer) {
    return {
      'btn-success': answer.isTouched && answer.isCorrect,
      'btn-danger': answer.isTouched && !answer.isCorrect,
      'btn-light': !answer.isTouched
    };
  }

  selectAnswer(answer: Answer) {
    answer.isTouched = true;
    if (this.question.selectedAnswer == null) {
      this.question.selectedAnswer = answer;
    }
  }

  generateQuestionNumberTitle(answer: Answer) {
    return `&#931${1 + answer.id};`;
  }
}

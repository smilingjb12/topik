import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { TestViewComponent } from './test-view/test-view.component';
import { TestService } from './test.service';
import { QuestionViewComponent } from './test-view/question-view/question-view.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    TestViewComponent,
    QuestionViewComponent
  ],
  providers: [
    QuoteService,
    TestService
  ]
})
export class HomeModule { }

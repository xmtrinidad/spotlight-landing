import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HeadlineComponent } from './headline/headline.component';
import { ButtonHighlightDirective } from './directives/button-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    QuoteFormComponent,
    HeadlineComponent,
    ButtonHighlightDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DirectivesComponent } from './directives/directives.component';
import { TestPipe } from './test.pipe';
import { SeemaPipe } from './seema.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DirectivesComponent,
    TestPipe,
    SeemaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

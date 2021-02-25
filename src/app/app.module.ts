import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { RouterModule } from '@angular/router';
import { SearchBoxModule } from './components/ui/search-box/search-box.module';
@NgModule({
  declarations: [AppComponent, TodoComponent, TodosComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, SearchBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

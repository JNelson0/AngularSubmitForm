import { SubmitComponent } from './submit/submit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
import { UserRegisterService } from './user-register.service';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [AppComponent, SubmitComponent, UserTableComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [UserRegisterService, UserTableComponent, DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}

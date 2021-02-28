import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientService } from './shared/services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DashboardComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

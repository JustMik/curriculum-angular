import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';
import { ChisonoComponent } from './public/chisono/chisono.component';
import { CurriculumComponent } from './public/curriculum/curriculum.component';
import { SkillsComponent } from './public/skills/skills.component';
import { ContattiComponent } from './public/contatti/contatti.component';
import { LoginComponent } from './public/login/login.component';
import { AnagraficaComponent } from './admin/anagrafica/anagrafica.component';
import { ExperiencesComponent } from './admin/experiences/experiences.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JwtInterceptor } from './helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
    ChisonoComponent,
    CurriculumComponent,
    SkillsComponent,
    ContattiComponent,
    LoginComponent,
    AnagraficaComponent,
    ExperiencesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ 
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

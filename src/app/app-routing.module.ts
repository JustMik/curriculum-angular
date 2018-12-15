import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChisonoComponent } from './public/chisono/chisono.component';
import { CurriculumComponent } from './public/curriculum/curriculum.component';
import { SkillsComponent } from './public/skills/skills.component';
import { ContattiComponent } from './public/contatti/contatti.component';
import { LoginComponent } from './public/login/login.component';

import { AnagraficaComponent } from './admin/anagrafica/anagrafica.component';
import { ExperiencesComponent } from './admin/experiences/experiences.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component'; 
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'public/chisono', pathMatch:'full' },
  { path:'public', component:PublicComponent, children:
    [
      { path:'', component:ChisonoComponent },
      { path:'chisono', component:ChisonoComponent },
      { path:'curriculum', component:CurriculumComponent },
      { path:'skills', component:SkillsComponent },
      { path:'contatti', component:ContattiComponent },
      { path:'login', component:LoginComponent }
    ]
  },
  { path:'admin' , component:AdminComponent, canActivate: [AuthGuard], children: 
    [
      { path:'', component:AnagraficaComponent, canActivate: [AuthGuard] },
      { path:'anagrafica', component:AnagraficaComponent, canActivate: [AuthGuard] },
      { path:'experiences', component:ExperiencesComponent, canActivate: [AuthGuard] }
    ]
  },
    
  { path:'notfound', component:NotfoundComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'notfound', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

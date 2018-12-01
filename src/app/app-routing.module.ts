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
  { path:'admin' , component:AdminComponent, children: 
    [
      { path:'', component:AnagraficaComponent },
      { path:'anagrafica', component:AnagraficaComponent },
      { path:'experiences', component:ExperiencesComponent }
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

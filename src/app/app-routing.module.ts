import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './my-profile/about/about.component';
import { ContactComponent } from './my-profile/contact/contact.component';
import { EducationComponent } from './my-profile/education/education.component';
import { ExperienceComponent } from './my-profile/experience/experience.component';
import { HeaderComponent } from './my-profile/header/header.component';
import { IntroductionComponent } from './my-profile/introduction/introduction.component';
import { ProjectsComponent } from './my-profile/projects/projects.component';
import { SkillsComponent } from './my-profile/skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { state: 'experience' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { state: 'projects' },
  },
  { path: 'skills', component: SkillsComponent, data: { state: 'skills' } },
  {
    path: 'education',
    component: EducationComponent,
    data: { state: 'education' },
  },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { state: 'introduction' },
  },
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: '**', redirectTo: 'introduction', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

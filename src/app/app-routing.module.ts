import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './my-profile/about/about.component';
import { ContactComponent } from './my-profile/contact/contact.component';
import { EducationComponent } from './my-profile/education/education.component';
import { HeaderComponent } from './my-profile/header/header.component';
import { IntroductionComponent } from './my-profile/introduction/introduction.component';
import { ProjectsComponent } from './my-profile/projects/projects.component';
import { SkillsComponent } from './my-profile/skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

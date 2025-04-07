import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { BlogComponent } from './content/blog/blog.component';
import { PrivacyTermsComponent } from './content/privacy-terms/privacy-terms.component';
import { CvComponent } from './content/cv/cv.component';
import { PageNotFoundComponent } from './content/errors/page-not-found/page-not-found.component';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [

    // default component routes
    { path: 'home', component: MainComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'privacy-terms', component: PrivacyTermsComponent },
    { path: 'cv', component: CvComponent },

    // redirects
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 

    // error routes
    { path: '**', component: PageNotFoundComponent }, 
];

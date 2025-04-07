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
    { path: 'home', title: 'Home', component: MainComponent }, 
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'projects', title: 'Projects', component: ProjectsComponent },
    { path: 'blog', title: 'Blog', component: BlogComponent },
    { path: 'privacy-terms', title: 'Privacy & Terms', component: PrivacyTermsComponent },
    { path: 'cv', title: 'CV', component: CvComponent },

    // redirects
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 

    // error routes
    { path: '**', component: PageNotFoundComponent }, 
];

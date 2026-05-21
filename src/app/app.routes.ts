import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';

import {ProjectConfigPage} from './features/project/pages/project-config-page/project-config-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentPage },
    { path: 'students/:id', component: StudentDetailPage },
    { path: 'layouts', component: LayoutsPage },
    { path: 'signup', component: SignupPage },
    { path: 'profile', component: ProfilePage },
    { path: 'project-config', component: ProjectConfigPage },
    { path: '**', redirectTo: '' }
];
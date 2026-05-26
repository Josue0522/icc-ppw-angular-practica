import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import {ProjectConfigPage} from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page/ui-components-page';
import {SimpsonsPage} from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentPage },
    { path: 'students/:id', component: StudentDetailPage },
    { path: 'layouts', component: LayoutsPage },
    { path: 'signup', component: SignupPage },
    { path: 'profile', component: ProfilePage },
    { path: 'project-config', component: ProjectConfigPage },
    { path: 'ui-components', component: UiComponentsPage },
    { path: 'simpsons', component: SimpsonsPage},
    { path: 'simpsons/:id', component: SimpsonDetailPageComponent},
    { path: '**', redirectTo: '' }
];
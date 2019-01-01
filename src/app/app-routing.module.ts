import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AboutComponent} from "./about/about.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseCardsComponent} from "./course-cards/course-cards.component";
import {SideMenuComponent} from "./categories-menu/categories-menu.component";
import {CoursesCategoryComponent} from "./course-category/course-category.component";
import {RestaurantManagementComponent} from "./restaurant-management/restaurant-management.component";
import {AttendanceMonitoringComponent} from "./attendance-monitoring/attendance-monitoring.component";
import {DeviceDriverComponent} from "./device-driver/device-driver.component";
import {LibraryManagementComponent} from "./library-management/library-management.component";
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ExpertizaComponent } from './expertiza/expertiza.component';
import { AssignmentManagementComponent } from './assignment-management/assignment-management.component';
import { BufferManagementComponent } from './buffer-management/buffer-management.component';
import { OcrComponent } from './ocr/ocr.component';
import { MakesoilComponent } from './makesoil/makesoil.component';
import { SpringRailsComponent } from './spring-rails/spring-rails.component';
import { OpenmrsComponent } from './openmrs/openmrs.component';
import { P2pComponent } from './p2p/p2p.component';

const routes: Routes = [

    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: '',
                component: CourseCardsComponent
            },
            {
                path: 'restaurant-management',
                component: RestaurantManagementComponent
            },
            {
                path: 'attendance-monitoring',
                component: AttendanceMonitoringComponent
            },
            {
                path: 'device-driver',
                component: DeviceDriverComponent
            },
            {
                path: 'library-management',
                component: LibraryManagementComponent
            },
            {
                path: 'car-rental',
                component: CarRentalComponent
            },
            {
                path: 'expertiza',
                component: ExpertizaComponent
            },
            {
                path: 'assignment-management',
                component: AssignmentManagementComponent
            },
            {
                path: 'buffer-management',
                component: BufferManagementComponent
            },
            {
                path: 'ocr',
                component: OcrComponent
            },
            {
                path: 'makesoil',
                component: MakesoilComponent
            },
            {
                path: 'spring-rails',
                component: SpringRailsComponent
            },
            {
                path: 'openmrs',
                component: OpenmrsComponent
            },
            {
                path: 'p2p',
                component: P2pComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '',
                component: CourseCardsComponent
            },
            {
              path: ':id',
              component: CoursesCategoryComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/projects',
        pathMatch: 'full'
    }

];

export const appRouting = RouterModule.forRoot(routes);
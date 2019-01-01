import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './categories-menu/categories-menu.component';
import { CoursesCategoryComponent } from './course-category/course-category.component';
import { appRouting } from './app-routing.module';
import { RestaurantManagementComponent } from './restaurant-management/restaurant-management.component';
import { AttendanceMonitoringComponent } from './attendance-monitoring/attendance-monitoring.component';
import { DeviceDriverComponent } from './device-driver/device-driver.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ExpertizaComponent } from './expertiza/expertiza.component';
import { AssignmentManagementComponent } from './assignment-management/assignment-management.component';
import { BufferManagementComponent } from './buffer-management/buffer-management.component';
import { OcrComponent } from './ocr/ocr.component';
import { MakesoilComponent } from './makesoil/makesoil.component';
import { SpringRailsComponent } from './spring-rails/spring-rails.component';
import { OpenmrsComponent } from './openmrs/openmrs.component';
import { P2pComponent } from './p2p/p2p.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    CoursesComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent,
    RestaurantManagementComponent,
    AttendanceMonitoringComponent,
    DeviceDriverComponent,
    LibraryManagementComponent,
    CarRentalComponent,
    ExpertizaComponent,
    AssignmentManagementComponent,
    BufferManagementComponent,
    OcrComponent,
    MakesoilComponent,
    SpringRailsComponent,
    OpenmrsComponent,
    P2pComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

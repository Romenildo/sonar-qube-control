import { Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectFormComponent } from './pages/project-list/project-form/project-form.component';

export const routes: Routes = [
    { path: 'info', component: ProjectComponent },
    { path: 'projects', 
        children: [
            {
              path: '',
              component: ProjectListComponent,
            },
            {
              path: 'cadastrar',
              component: ProjectFormComponent ,
            },
            {
              path: ':type/:id',
              component: ProjectFormComponent ,
            },
          ],
    },
];

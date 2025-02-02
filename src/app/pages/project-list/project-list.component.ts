import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../project/core/dto/project.interface';
import { EDUCACIONAL } from '../project/core/db/educacional';
import { ESCOLAR } from '../project/core/db/escolar';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  public projects: Project[] = [EDUCACIONAL, ESCOLAR];

  public delete(projectId: number): void {
    this.projects = this.projects.filter((project) => project.id !== projectId);
  }

  public update(id: any): void {
    this.router.navigate(['/projects/editar', id]);
  }

  public view(id: any): void {
    this.router.navigate(['/projects/visualizar', id]);
  }
  public register(): void {
    this.router.navigate(['/projects/cadastrar']);
  }


}

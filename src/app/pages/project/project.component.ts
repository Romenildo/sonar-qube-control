import { Component } from '@angular/core';
import { FilterComponent } from "./components/filter/filter.component";
import { EDUCACIONAL } from './core/db/educacional';
import { Project } from './core/dto/project.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ESCOLAR } from './core/db/escolar';

@Component({
  selector: 'app-project',
  imports: [FilterComponent, CommonModule, CardComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  public projects: Project[] = [EDUCACIONAL, ESCOLAR];

}

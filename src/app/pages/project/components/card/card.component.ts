import { Component, Input } from '@angular/core';
import { Project } from '../../core/dto/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() project!: Project;
  currentMonth: any = 0;
  public shows: any = {
    bugs: true,
    code_smells: true,
    vulnerabilities: false,
    code_coverage: false,
    duplications: true
  }


  public getColorClass(before:number , after:number): string {
    if(after < before){
      return 'color-green';
    }
    if(after > before){
      return 'color-red';
    }
    if(after ==  before){
      return 'color-yellow';
    }
    return '';
  }

  public changeShow(type: string): void {
    this.shows[type] = !this.shows[type];
  }
}

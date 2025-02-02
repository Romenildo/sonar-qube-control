import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {

  public isView: any;
  private typePage: any;
  public form: any;

  constructor( 
    public activatedRoute: ActivatedRoute,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.creteForm();
  }

  creteForm(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      color: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(false),
      months: this.fb.array([]) // Inicializa como um FormArray
    });
  }


  public choosePageUpdateOrView(): void {
    this.typePage = this.activatedRoute.snapshot.paramMap.get('type');
    if (this.typePage === 'visualizar') {
      this.isView = true;
      this.form.disable();
    }
  }

  submit(): void {
    console.log(this.form.value);
  }

  addMonth(): void {
    const months = this.form.get('months');
    months.push(this.fb.group({
      name: new FormControl(''),
      status: new FormControl(''),
      code_smells: new FormControl(''),
      bugs: new FormControl(''),
      vulnerabilities: new FormControl(''),
      security_hotspots: new FormControl(''),
      code_coverage: new FormControl(''),
      duplications: new FormControl(''),
    }));
  }

  removeMonth(i:any): void {
    console.log('removeMonth');
  }

}

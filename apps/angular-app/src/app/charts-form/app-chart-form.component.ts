import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chart-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app-chart-form.component.html',
  styleUrl: './app-chart-form.component.css',
})
export class AppChartFormComponent {
  chartForm: FormGroup;

  @Output() chartDataEmitter = new EventEmitter<{
    aspectRatio: string;
    color: string;
  }>();

  constructor(private fb: FormBuilder) {
    this.chartForm = this.fb.group({
      aspectRatio: ['', [Validators.required, this.aspectRatioValidator]],
      color: ['', [Validators.required, Validators.pattern(/^#[0-9A-F]{6}$/i)]],
    });
  }

  // Custom validator for aspect ratio
  aspectRatioValidator(control: any) {
    const value = control.value;
    const aspectRatioPattern = /^\d+\/\d+$/;
    return aspectRatioPattern.test(value) ? null : { invalidAspectRatio: true };
  }

  onSubmit() {
    if (this.chartForm.valid) {
      const { aspectRatio, color } = this.chartForm.value; 
      this.chartDataEmitter.emit({
        aspectRatio,
        color,
      });
    } else {
      alert('Invalid form');
    }
  }
}

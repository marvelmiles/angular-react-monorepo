import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IChartData } from '@data-visualizer/react-visualizer';

@Component({
  selector: 'app-chart-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app-chart-form.component.html',
  styleUrl: './app-chart-form.component.css',
})
export class AppChartFormComponent {
  chartForm: FormGroup;

  showResetBtn = false;

  initialData: IChartData = { aspectRatio: '16:9', color: '#8884d8' };

  @Output() chartDataEmitter = new EventEmitter<IChartData>();

  constructor(private fb: FormBuilder) {
    this.chartForm = this.fb.group({
      aspectRatio: [
        this.initialData.aspectRatio,
        [Validators.required, this.aspectRatioValidator],
      ],
      color: [
        this.initialData.color,
        [Validators.required, Validators.pattern(/^#[0-9A-F]{6}$/i)],
      ],
    });
  }

  aspectRatioValidator(control: any) {
    const value = control.value;
    const aspectRatioPattern = /^\d+\:\d+$/;
    return aspectRatioPattern.test(value) ? null : { invalidAspectRatio: true };
  }

  onSubmit() {
    if (this.chartForm.valid) {
      const { aspectRatio, color } = this.chartForm.value;
      this.chartDataEmitter.emit({
        aspectRatio,
        color,
      });

      this.showResetBtn = true;
    } else {
      alert('Invalid form data.');
    }
  }

  onReset() {
    this.chartForm.reset(this.initialData);

    this.chartDataEmitter.emit(this.initialData);

    this.showResetBtn = false;
  }
}

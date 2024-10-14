import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chart-form',
  templateUrl: './app-chart-form.component.html',
  styleUrls: ['./app-chart-form.component.css'],
})
export class ChartComponent {
  chartForm: FormGroup;

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
      console.log('Submitted Aspect Ratio:', aspectRatio, 'Color:', color);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
      alert('Form is invalid. ');
    }
  }
}

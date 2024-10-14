import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AppChartFormComponent } from './charts-form/app-chart-form.component';
// import { IChartData } from '@libs/components/ReactDataVisualizer/react-visualizer';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
// export class AppComponent {
//   @ViewChild('reactVisualizer', { static: true }) reactVisualizer!: ElementRef;

//   onChartDataReceived(data: IChartData) {
//     const visualizerElem = this.reactVisualizer.nativeElement as any;
//     visualizerElem.chartData = data;
//   }
// }

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppChartFormComponent } from './app-chart-form.component';

describe('AppChartFormComponent', () => {
  let component: AppChartFormComponent;
  let fixture: ComponentFixture<AppChartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChartFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppChartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

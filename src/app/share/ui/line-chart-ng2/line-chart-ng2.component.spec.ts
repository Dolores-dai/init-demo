import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNg2Component } from './line-chart-ng2.component';

describe('LineChartNg2Component', () => {
  let component: LineChartNg2Component;
  let fixture: ComponentFixture<LineChartNg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartNg2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartNg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonTooltipComponent } from './carbon-tooltip.component';

describe('CarbonTooltipComponent', () => {
  let component: CarbonTooltipComponent;
  let fixture: ComponentFixture<CarbonTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

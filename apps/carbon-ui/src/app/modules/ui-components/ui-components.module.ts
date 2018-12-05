import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbonTooltipComponent } from './components/carbon-tooltip/carbon-tooltip.component';

@NgModule({
  declarations: [CarbonTooltipComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CarbonTooltipComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UiComponentsModule { }

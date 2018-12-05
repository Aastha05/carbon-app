import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Tooltip } from 'carbon-components';

@Component({
  selector: 'app-carbon-tooltip',
  templateUrl: './carbon-tooltip.component.html',
  styleUrls: ['./carbon-tooltip.component.scss']
})
export class CarbonTooltipComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Input() uniqueClass: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    Tooltip.create(document.querySelector(`.${this.uniqueClass}`));
  }

}

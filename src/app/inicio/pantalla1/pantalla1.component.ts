import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.scss', '../inicio.page.scss', '../../app.component.scss'],
})
export class Pantalla1Component implements OnInit {

  constructor() { }

  username = 'Santiago' //must be recieved by API 
  saldo = '1.570.000' //must be recieved by API 

  options= {
    percent: 20,
    radius: 26,
    outerStrokeWidth: 10,
    innerStrokeWidth: 10,
    space: -10,
    outerStrokeColor: "#3999de",
    innerStrokeColor: "#f7f6fb",
    showBackground: false,
    title: '0',
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 2000,
    startFromZero: false,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#52ceec',
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }
  options2= {
    percent: 0,
    radius: 26,
    outerStrokeWidth: 10,
    innerStrokeWidth: 10,
    space: -10,
    outerStrokeColor: "#3999de",
    innerStrokeColor: "#f7f6fb",
    showBackground: false,
    title: '0',
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 2000,
    startFromZero: false,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#52ceec',
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }

  ngOnInit() { }

}

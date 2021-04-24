import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './inicio.page';
import { Pantalla1Component } from 'src/app/inicio/pantalla1/pantalla1.component';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InicioPageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 26,
      percent: 20,
      maxPercent: 100,
      toFixed: 0,
      showTitle: false,
      showUnits: false,
      showSubtitle: true,
      showImage: false,
      showBackground: false,
      showInnerStroke: true,
      clockwise: false,
      responsive: true,
      startFromZero: true,
      showZeroOuterStroke: true,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      animation:true,
      animationDuration: 300
    })
  ],
  declarations: [InicioPage, Pantalla1Component]
})
export class InicioPageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class NgWorkboxComponentsModule {}

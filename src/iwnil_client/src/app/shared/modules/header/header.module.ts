import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

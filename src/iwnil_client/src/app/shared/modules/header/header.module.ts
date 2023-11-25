import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, HeaderNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

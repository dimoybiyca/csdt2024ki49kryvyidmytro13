import { Component, Input } from '@angular/core';

@Component({
  selector: 'iwnil-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() size: string = '18px';
  @Input() viewBox: number = 18;
  @Input() iconName!: string;

  getViewBox(): string {
    return `0 0 ${this.viewBox} ${this.viewBox}`;
  }
}

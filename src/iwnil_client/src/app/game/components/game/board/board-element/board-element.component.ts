import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CellTypes } from 'src/app/shared/data/cell-types.enum';

@Component({
  selector: 'iwnil-board-element',
  templateUrl: './board-element.component.html',
  styleUrls: ['./board-element.component.scss'],
})
export class BoardElementComponent {
  @Input('cellType') cellTypeProps: CellTypes;

  isImage(): boolean {
    return (
      this.cellTypeProps === CellTypes.TIC ||
      this.cellTypeProps === CellTypes.TAC
    );
  }

  getImage(): string {
    if (this.cellTypeProps === CellTypes.TIC) {
      return 'assets/img/X.svg';
    } else {
      return 'assets/img/O.svg';
    }
  }
}

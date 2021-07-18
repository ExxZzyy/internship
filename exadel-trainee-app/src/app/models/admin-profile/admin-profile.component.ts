import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';

export interface PeriodicElement {
  position: number;
  date: number;
  level: string;
  coach: string;
  expl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: '30',
  },
];
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['Position', 'Level', 'Date', 'Coach'];

  displayedColumns1: string[] = ['Position', 'Level', 'Date', 'button'];

  dataSource = ELEMENT_DATA;

  expandedElement: PeriodicElement | undefined;

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AdminDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource[0].coach = result;
    });
  }
}

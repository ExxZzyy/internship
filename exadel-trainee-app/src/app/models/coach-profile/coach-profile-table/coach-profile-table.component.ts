import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TestData } from '../../../../mocks/users-utils.mock';
import { CoachProfileDialogComponent } from '../coach-profile-dialog/coach-profile-dialog.component';

export enum Level {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

@Component({
  selector: 'app-coach-profile-table',
  templateUrl: './coach-profile-table.component.html',
  styleUrls: ['./coach-profile-table.component.scss'],
})
export class CoachProfileTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['id', 'level', 'date', 'button'];

  tabs: string[] = [Level.beginner, Level.intermediate, Level.advanced];

  dataSource: MatTableDataSource<TestData>;

  @Input() table: TestData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tabelView!: MatTable<TestData>;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.table);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.table.currentValue) {
      this.dataSource.data = changes.table.currentValue;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(id: number) {
    this.dialog.open(CoachProfileDialogComponent, { data: { id } });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Tranport } from './../../../model/Trainport.model';
import { from } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-auto-setup',
  templateUrl: './auto-setup.component.html',
  styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['TuyenXe', 'MaXe', 'TaiXe', 'GiaoVu', 'SoLuongHS'];
  dataSource: MatTableDataSource<Tranport>;
  selection = new SelectionModel<Tranport>(true, []);

  constructor() {
    const ELEMENT_DATA: Tranport[] = [
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen' },
      { TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen' },
      { TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
    ];

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


}

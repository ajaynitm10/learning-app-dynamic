import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public searchKey = '';
  public activeSwitch = true;
  public filteredElements = [];

  displayedColumns = ['key', 'value', 'active', 'source', 'date', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }
  // ngAfterViewInit() {
  // }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  changeData() {
    if(this.searchKey !== '') {
      this.filteredElements = ELEMENT_DATA.filter(el => {
        return el.key.toLowerCase().startsWith(this.searchKey);
      })
      this.dataSource = new MatTableDataSource<Element>(this.filteredElements);
      if (this.filteredElements.length === 0) {
        this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
      }
    } else {
      this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    }
  }

  onActiveSwitchClick() {
    this.activeSwitch = !this.activeSwitch;
    this.filteredElements = ELEMENT_DATA.filter(el => {
      if(el.active === this.activeSwitch) {
        return true;
      }
      })
      this.dataSource = new MatTableDataSource<Element>(this.filteredElements);
  }

}

export interface Element {
  key: string;
  value: number;
  active: boolean;
  source: string;
  date: string;
  action: any;
}

const ELEMENT_DATA: Element[] = [
  {key: 'Sample Key1', value: 12345, active: true, source: 'file sample properties', date: '05/01/1992', action: '' },
  {key: 'Sample Key2', value: 12345, active: false, source: 'database', date: '06/01/1992', action: '' },
  {key: 'Sample Key3', value: 12345, active: true, source: 'application property', date: '07/01/1992', action: '' } 
];

const ELEMENT_DATA1: Element[] = [
  {key: 'Sample Key1', value: 12345, active: true, source: 'file sample properties', date: '05/01/1992', action: '' }
]
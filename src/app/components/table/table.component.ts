import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() label: string = 'Posts';
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() fieldType: string = '';

  searchQuery: string = '';
  filteredDataSource: any[] = [];

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource']) {
      this.filteredDataSource = [...changes['dataSource'].currentValue];
    }
  }
  filterData(): void {
    if (!this.searchQuery) {
      this.filteredDataSource = [...this.dataSource];
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredDataSource = this.dataSource.filter(item => {
        if (this.fieldType === 'USERS') {
          return item.name.toLowerCase().includes(query)
        } else if (this.fieldType === 'POSTS') {
          return item.title.toLowerCase().includes(query);
        }
        return false;
      });
    }
  }

  onEdit(item: { id: number, name: string }) {
    this.newItemEvent.emit(item);
  }
}

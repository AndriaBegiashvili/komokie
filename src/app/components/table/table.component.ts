import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {CommonModule, NgFor} from "@angular/common";
import {Router, RouterEvent, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  constructor(private router:Router) {
  }
  @Input() dataSource:any;
  @Input() label:any = 'Posts';
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() fieldType: any;

  onEdit(item: { id: number, name: string }) {
    this.newItemEvent.emit(item)
  }

}

import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../components/table/table.component";
import {ApiServiceService} from "../../services/api-service.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TableComponent,
    HttpClientModule,
    CommonModule
  ],
  providers:[ApiServiceService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  dataSource:any[] = [];
  constructor(private apiService: ApiServiceService,
              private router:Router) {
  }
  ngOnInit(){
    this.apiService.getUsers().subscribe((res)=>{
      this.dataSource = res
    })
  }

  navigate($event: any) {
    this.router.navigate(["/posts",$event.id])
  }
}

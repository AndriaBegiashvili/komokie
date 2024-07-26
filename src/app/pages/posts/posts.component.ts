import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {TableComponent} from "../../components/table/table.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, TableComponent,MatDialogModule ],
  providers:[ApiServiceService],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  id:any = null;
  postsData: any[] = [];
  author: string = ''
  constructor(private apiService:ApiServiceService,
              private activatedRoute:ActivatedRoute,
              private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.fetchPostsAndAuthor()
  }

  fetchPostsAndAuthor(){
    this.apiService.getUser(this.id).subscribe((res:any)=>{
      this.author = res[0]?.name
    })
    this.apiService.getPosts(this.id).subscribe(res => {
      this.postsData = res
    })
  }

  openModal($event: any) {
    const object = {...$event,author:this.author}
      this.dialog.open(DialogComponent, {
        width: '400px',
        data: object
      })
  }
}

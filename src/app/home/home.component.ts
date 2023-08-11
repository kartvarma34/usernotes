import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes: any[] = [];
  favs: any[] = [];
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
  this.loadRecentNotes();  
  this.favNotes();  
  }

  loadRecentNotes() {
    this.dataService.getNotes().subscribe(item=> {
      //this.notes = item.slice(0,3);
      this.notes = item.sort((a: any, b: any) => {
        const dateComparison = new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
        
        if (dateComparison === 0) {
          return b.id - a.id; 
        }
        
        return dateComparison;
      })
      .slice(0, 3);
      console.log(this.notes);
    })
  }

  favNotes() {
    this.dataService.getNotes().subscribe(item=> {
      this.favs = item.filter((i: any)=> i.favorite);
      console.log(this.favs);
    })
  } 
} 


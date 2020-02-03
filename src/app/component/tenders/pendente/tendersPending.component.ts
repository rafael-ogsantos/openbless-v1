import { CrmService } from './../../../service/crm/crm.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './tendersPending.component.html',
  styleUrls: ['./tendersPending.component.css']
})
export class tendersPendente implements OnInit {
  seto: string;
  props: object
  selected: object

  constructor(private crmService: CrmService) { }

 
  public set( item) {
    this.selected = item
  }


  load = async() =>{
    await this.crmService.getPropsPending().subscribe(
      data => {
        console.log(data)
         this.props = data.props
      },
      error => console.log(error)
   )
      console.log(this.props)
  }
  
  async ngOnInit() {
     this.load()
  }

}

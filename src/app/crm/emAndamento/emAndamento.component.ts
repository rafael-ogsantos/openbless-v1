import { CrmService } from './../../service/crm/crm.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emAndamento',
  templateUrl: './emAndamento.component.html',
  styleUrls: ['./emAndamento.component.css']
})
export class CrmemAndamentoComponent implements OnInit {
seto: string;
props: object
selected: object
  

  constructor(private crmService: CrmService) { }

  public set( item) {
    this.selected = item
  }


  load = async() =>{
    await this.crmService.getMessageSectorPending().subscribe(
      data => {
        console.log(data)
         this.props = data.contact
      },
      error => console.log(error)
   )
      console.log(this.props)
  }
  
  async ngOnInit() {
     this.load()
  }
}

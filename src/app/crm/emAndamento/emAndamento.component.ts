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
  

  constructor(private crmService: CrmService) { }


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

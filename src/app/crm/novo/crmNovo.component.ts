import { CrmService } from './../../service/crm/crm.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crmNovo',
  templateUrl: './crmNovo.component.html',
  styleUrls: ['./crmNovo.component.css']
})
export class Crm2Component implements OnInit {
seto: string;
  setores = [
    "Financeiro",
    "Marketing",
    "TI",
    "Contábil"
];
sectores: object
  

  constructor(private crmService: CrmService) { }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.crmService.addMessages(form.value).subscribe(
       data => console.log(data),
       error => console.log(error)
    )
  }

  load = async(form: NgForm) =>{
    await this.crmService.getMails(form.value).subscribe(
       data => {
         console.log(data)
          this.sectores = data.mails
       },
       error => console.log(error)
    )

    console.log(this.sectores)
  }

  ngOnInit() {
  }

}

import { CrmService } from './../../service/crm/crm.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {

  setores = [
    "Financeiro",
    "Marketing",
    "TI",
    "Contábil"
];
  constructor(private crmService: CrmService) { }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.crmService.addMessages(form.value).subscribe(
       data => console.log(data),
       error => console.log(error)
    )
  }

  ngOnInit() {
  }

}

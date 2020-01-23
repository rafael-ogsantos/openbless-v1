import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-emails-sectors',
  templateUrl: './list-emails-sectors.component.html',
  styleUrls: ['./list-emails-sectors.component.css']
})
export class ListEmailsSectorsComponent implements OnInit {

  @Input() list: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth-service';
import { SiteUIService } from 'src/app/service/site/site-ui-service';
import { Subscription } from 'rxjs';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  options = [
    { title: '7 dias', value: 7, selected: true },
    { title: '15 dias', value: 15 }
]
  role: string;
  isLoading: boolean = false;
  loadingSubs: Subscription;
  periodo;
  valorP: number;
  boxes: any;

  constructor(private _authService: AuthService, private _siteUiService: SiteUIService) { 
    let boxes; boxes = {};
      boxes.valor = {};
        boxes.valor.title = 'Valor a receber';
        boxes.valor.select = this.getPeriodo();
        boxes.valor.calc = this.getCalc();
        this.boxes = boxes;
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  private getPeriodo() {
    return {
        title: 'Período',
        config: {
            col: 'col-12',
            type: 'select',
            selected: 7,
            options: [
                { title: '7 dias', value: 7, selected: true },
                { title: '15 dias', value: 15 }
            ]
        }
    };
}

private getCalc() {
    return {
        imoveis: {
            title: 'De imóveis',
            valor: 100
        },
        franqueados: {
            title: 'De franquiados',
            valor: 250
        }
    };
}
  
  ngOnInit() {
    console.log(this.valorP);
    this.periodo = this._siteUiService.getPeriodo();
    this._siteUiService.isLoading.next(true);
    this.loadingSubs = this._siteUiService.isLoading.subscribe(
      state => {
        this.isLoading = state;
      }
    );
    this._authService.getuserDetails().subscribe(
      userData => {
        // console.log("User Role = ",userData.data.roles[0].id);
        this._siteUiService.isLoading.next(false);
        this.role = userData.data.role_name;
      }
    )
  }


  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }



}

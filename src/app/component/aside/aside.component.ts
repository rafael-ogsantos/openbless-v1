import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  menu = false;

  links: Array<any> = [

    {
      title: 'Inicio',
      url: '/dashboard'
    },

    { title: 'Configurações', url: '/configuracoes' },

    {
      title: 'Imovéis',
      url: '/imoveis',
      sublinks: [
        { title: 'Cadastrar', url: '/imoveis/cadastrar' },
        { title: 'Busca/Alteração', url: '/imoveis/buscar' }
      ]
    },

    {
      title: 'Usuários',
      url: '/usuarios',
      sublinks: [
        { title: 'Cadastrar', url: '/usuarios/cadastrar' },
        { title: 'Busca/Alteração', url: '/usuarios/buscar' }
      ]
    },

    {
      title: 'Condomínios',
      url: '/condominios',
      sublinks: [
        { title: 'Cadastrar', url: '/condominios/cadastrar' },
        { title: 'Busca/Alteração', url: '/condominios/buscar' }
      ]
    },

    { title: 'Contratos e Documentos', url: '/contratos-e-documentos' },

    {
      title: 'Financeiro',
      url: '/financeiro',
      sublinks: [
        { title: 'Novo', url: '/financeiro/novo' },
        { title: 'Pagar/Receber', url: '/financeiro/pagar-receber' }
      ]
    },

    {
      title: 'CRM',
      url: '/crm',
      sublinks: [
        { title: 'Novo', url: '/crm/novo' },
        { title: 'Em andamento', url: '/crm/em-andamento' },
        { title: 'Busca', url: '/crm/buscar' }
      ]
     },

    { title: 'Sair', url: '/sair' }
  ];

  toggleMenu() { this.menu = !this.menu; }


}

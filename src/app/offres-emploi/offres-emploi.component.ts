import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listeEmploi=[
    {reference: 10 ,titre:"architecte",entreprise:"Google",etat:"true"},
    { reference: 20 ,titre:"Dev",entreprise:"Microsoft",etat:"true"},
  ];

  s : any=0;
  calcul(){
    this.s= this.listeEmploi.filter(e=>e.etat=="true").length
    }
    Emploitrouvee :any
    chercherEmploi(emploi:any){
      this.Emploitrouvee=this.listeEmploi.filter(e=>e.entreprise.toLowerCase()==emploi.toLowerCase()) 
      console.log(this.Emploitrouvee)
          
    }

}

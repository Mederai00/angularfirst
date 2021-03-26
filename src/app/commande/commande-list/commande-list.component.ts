import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/controller/model/commande.model';
import { CommandeService } from 'src/app/controller/service/commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css'],
})
export class CommandeListComponent implements OnInit {
  constructor(private commandeService: CommandeService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findCommandeItemByCommandeReference(command: Commande) {
    this.commandeService.findCommandeItemByCommandeReference(command);
  }
    get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

   public findAll(){
      this.commandeService.findAll();
   }


  deleteByReference(command: Commande) {
    this.commandeService.deleteByReference(command);
  }
}

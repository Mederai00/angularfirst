import {Component, OnInit} from '@angular/core';
import {Commande} from '../../controller/model/commande.model';
import {CommandeService} from '../../controller/service/commande.service';
import {CommandeItem} from '../../controller/model/commande-item.model';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) {
  }

  ngOnInit(): void {
  }

  public save() {
    this.commandeService.save();
  }

  public validateSave() : boolean {
    return this.commandeService.validateSave();
  }


  public addCommandeItem() {
    this.commande.total += this.commandeItem.prix * this.commandeItem.qte;
    this.commandeService.addCommandeItem();
  }

  get commande(): Commande {
    return this.commandeService.commande;
  }

  get commandeItem(): CommandeItem {
    return this.commandeService.commandeItem;
  }

}

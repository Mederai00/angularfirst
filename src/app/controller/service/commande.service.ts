import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';
import {CommandeItem} from '../model/commande-item.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private _commande: Commande;
  private _commandeItem: CommandeItem;
  private _commandes: Array<Commande> ;
  private _url = "http://localhost:8090/v1/stock-api/commande/";
  private _urlCommandeItem = "http://localhost:8090/v1/stock-api/commande-item/";


  public validateSave(): boolean {
    return this.commande.reference == null || this.commande.commandeItems.length == 0;
  }

  public addCommandeItem(){
    this.commande.commandeItems.push(this.cloneCommandeItem(this.commandeItem));
    this.commandeItem = null;
  }

  public save() {
    this.http.post<number>(this._url, this.commande).subscribe(
      data => {
        if(data>0){
          this.commandes.push(this.cloneCommande(this.commande));
          this.commande = null;
        }
      },
      error => {
        console.log("eoror");
      }
    )
  }

  public deleteByReference(command: Commande){
    this.http.delete<number>(this._url + 'ref/' + command.reference).subscribe(
      data => {
        console.log("ha data " + data);
        this.deleteByReferenceFromView(command);
      })
  }

  private deleteByReferenceFromView(command: Commande) {
    const index = this.commandes.findIndex(c => c.reference === command.reference);
    if(index !== -1){
      this.commandes.splice(index, 1);
    }
  }

  public findAll(){
    this.http.get<Array<Commande>>(this._url).subscribe(
      data => {
        this.commandes = data;
      }
    )
  }

  public findCommandeItemByCommandeReference(command: Commande){
    this.http.get<Array<CommandeItem>>(this._urlCommandeItem + "commande/ref/" + command.reference).subscribe(
      data => {
        this.commande.commandeItems = data;
      }
    )
  }

  constructor(private http: HttpClient) {
  }

  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null) {
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }


  get commandeItem(): CommandeItem {
    if (this._commandeItem == null){
      this._commandeItem = new CommandeItem();
    }
    return this._commandeItem;
  }

  set commandeItem(value: CommandeItem) {
    this._commandeItem = value;
  }

  private cloneCommandeItem(commandeItem: CommandeItem) {
    const myClone = new CommandeItem();
    myClone.qte = commandeItem.qte;
    myClone.prix = commandeItem.prix;
    myClone.produit = commandeItem.produit;
    return myClone;
  }

  private cloneCommande(commande: Commande) {
    const myClone = new Commande();
    myClone.reference = commande.reference;
    myClone.total = commande.total;
    myClone.totalPaye = commande.totalPaye;
    return myClone;
  }


}

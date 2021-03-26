import {CommandeItem} from './commande-item.model';

export class Commande {
  public reference: string ;
  public total: number ;
  public totalPaye: number ;
  public commandeItems = new Array<CommandeItem>() ;

  constructor() {
    this.total = 0 ;
    this.totalPaye = 0 ;
  }
}

import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService){}

  get characters(): Character[] {
    return this.dbzService.charactersList;
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterbyId(id);
  }
}

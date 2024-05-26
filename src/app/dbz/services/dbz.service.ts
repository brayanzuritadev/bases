import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  charactersList: Character[] = [
    {
      id: uuid(),
      names: "goku",
      power: 9000
    },
    {
      id: uuid(),
      names: "vegeta",
      power: 7800
    }
  ];

  addCharacter(Character: Character):void {

    const newCharacter: Character = { id: uuid(), ...Character}

    this.charactersList.unshift(newCharacter);
    console.log(newCharacter);
  }

  deleteCharacterbyId(id: string):void {
    this.charactersList = this.charactersList.filter(character => character.id !== id)
  }
}

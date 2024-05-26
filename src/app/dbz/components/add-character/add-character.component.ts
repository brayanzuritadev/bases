import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    names: '',
    power: 0
  }

  emittCharacter(): void{
    if(this.character.names.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character= {names: "", power: 0}
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() characterList : Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id: string){
    this.onDelete.emit(id);
  }
}

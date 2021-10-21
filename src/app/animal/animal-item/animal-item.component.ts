import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {
  @Input() model: Animal;
  @Output() deletion: EventEmitter<Animal> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onItemDeletion(): void {
    this.deletion.emit(this.model);
  }
}

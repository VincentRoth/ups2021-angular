import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;
  isLoading: boolean;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.animalService.get(1).subscribe((data) => {
      this.isLoading = false;
      this.animal = data;
    });
  }
}

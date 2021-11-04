import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.animalService.get(Number(id)).subscribe((data) => {
      this.isLoading = false;
      this.animal = data;
    });
  }
}

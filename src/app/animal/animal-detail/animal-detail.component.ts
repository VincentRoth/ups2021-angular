import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnDestroy, OnInit {
  animal?: Animal;
  isLoading: boolean;
  private subscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = paramMap.get('id');

        this.animalService.get(Number(id)).subscribe((data) => {
          this.isLoading = false;
          this.animal = data;
        });
      }
    );
  }
}

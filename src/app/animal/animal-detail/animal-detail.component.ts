import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  private unsubscribeAll$: Subject<void>;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  ngOnInit(): void {
    this.unsubscribeAll$ = new Subject();

    this.isLoading = true;

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');

        this.animalService.get(Number(id)).subscribe((data) => {
          this.isLoading = false;
          this.animal = data;
        });
      });
  }
}

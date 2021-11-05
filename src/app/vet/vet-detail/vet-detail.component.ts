import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnDestroy, OnInit {
  vet: Vet;
  private subscription: Subscription;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => {
          const id = Number(paramMap.get('id'));
          return this.vetService.get(id);
        })
      )
      .subscribe((vet) => (this.vet = vet));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalItemComponent } from '../animal-item/animal-item.component';

import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalItemComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

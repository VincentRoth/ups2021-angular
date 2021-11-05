import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');

    if (paramId) {
      this.animalService.get(Number(paramId)).subscribe((data) => {
        this.model = data;
      });
    } else {
      this.model = {
        name: undefined,
        species: undefined,
        email: undefined,
        phoneNumber: undefined,
        veterinarian: undefined,
        comment: undefined,
      };
    }
  }

  onSubmit(): void {
    const onSave = () => {
      this.router.navigate(['/animal']);
    };

    if (this.model.id) {
      this.animalService.update(this.model).subscribe(onSave);
    } else {
      this.animalService.create(this.model).subscribe(onSave);
    }
  }
}

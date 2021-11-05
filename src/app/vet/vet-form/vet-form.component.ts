import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vetService: VetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');

    if (paramId) {
      this.vetService.get(Number(paramId)).subscribe((data) => {
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    if (this.vetFormGroup.valid) {
      const onSave = () => {
        this.router.navigate(['/vet']);
      };

      const model = this.vetFormGroup.value;

      if (model.id) {
        this.vetService.update(model).subscribe(onSave);
      } else {
        this.vetService.create(model).subscribe(onSave);
      }
    }
  }

  private initForm(model?: Vet): void {
    this.vetFormGroup = new FormGroup({
      id: new FormControl(model?.id),
      firstName: new FormControl(model?.firstName),
      lastName: new FormControl(model?.lastName),
    });
  }
}

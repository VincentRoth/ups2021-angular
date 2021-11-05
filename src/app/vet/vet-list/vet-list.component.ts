import { Component, OnInit } from '@angular/core';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent implements OnInit {
  vets: Vet[];

  constructor(private vetService: VetService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onDelete(id: number): void {
    this.vetService.delete(id).subscribe(() => this.refreshData());
  }

  private refreshData(): void {
    this.vetService.getAll().subscribe((vets) => (this.vets = vets));
  }
}

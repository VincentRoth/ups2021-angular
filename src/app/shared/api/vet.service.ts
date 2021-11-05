import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vet } from './vet';

@Injectable({
  providedIn: 'root',
})
export class VetService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Vet> {
    return this.httpClient.get<Vet>(`/api/veterinarians/${id}`);
  }

  getAll(): Observable<Vet[]> {
    return this.httpClient.get<Vet[]>('/api/veterinarians');
  }

  create(data: Vet): Observable<Vet> {
    return this.httpClient.post<Vet>('/api/veterinarians', data);
  }

  update(data: Vet): Observable<Vet> {
    return this.httpClient.put<Vet>(`/api/veterinarians/${data.id}`, data);
  }

  delete(id: number): Observable<Vet> {
    return this.httpClient.delete<Vet>(`/api/veterinarians/${id}`);
  }
}

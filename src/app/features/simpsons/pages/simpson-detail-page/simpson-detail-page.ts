import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';

import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';

@Component({
  selector: 'app-simpson-detail-page',
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPageComponent {

  private route = inject(ActivatedRoute);

  private simpsonsService = inject(SimpsonsService);

  private cacheService = inject(SimpsonsCacheService);

  private characterId = Number(
    this.route.snapshot.paramMap.get('id')
  );

  characterResource = rxResource({

    stream: () => {

      // Buscar primero en cache
      const cached = this.cacheService.getById(this.characterId);

      if (cached) {

        console.log('Loaded from cache');

        return of(cached);

      }

      // Si no existe, consumir API
      return this.simpsonsService
        .getCharacterById(this.characterId)
        .pipe(
          tap((character) => {
            this.cacheService.save(character);
          })
        );

    },

  });

}
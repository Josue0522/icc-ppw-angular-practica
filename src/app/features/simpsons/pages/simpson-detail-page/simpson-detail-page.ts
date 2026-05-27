import { Component, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  RouterModule,
} from '@angular/router';

import { rxResource } from '@angular/core/rxjs-interop';

import { of, tap } from 'rxjs';

import { SimpsonsService } from '../../services/simpsons.service';

import { SimpsonsCacheService } from '../../services/simpsons-cache.service';

import { AuthService } from '../../../../core/services/auth.service';

import { FavoritesService } from '../../../../core/services/favorites.service';

@Component({
  selector: 'app-simpson-detail-page',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
  ],

  templateUrl: './simpson-detail-page.html',
})

export class SimpsonDetailPageComponent {

  authService = inject(AuthService);

  private favoritesService = inject(FavoritesService);

  private route = inject(ActivatedRoute);

  private simpsonsService = inject(SimpsonsService);

  private cacheService = inject(SimpsonsCacheService);

  private characterId = Number(
    this.route.snapshot.paramMap.get('id')
  );

  characterResource = rxResource({

    stream: () => {

      const cached =
        this.cacheService.getById(this.characterId);

      if (cached) {
        return of(cached);
      }

      return this.simpsonsService
        .getCharacterById(this.characterId)
        .pipe(
          tap((character) =>
            this.cacheService.save(character)
          )
        );

    },

  });

  isFavorite = signal(false);

  toggleFavorite() {

    const uid = this.authService.uid;

    if (!uid) return;

    if (this.isFavorite()) {

      this.favoritesService
        .removeFavorite(uid, this.characterId)
        .then(() => {
          this.isFavorite.set(false);
        });

    } else {

      this.favoritesService
        .addFavorite(uid, this.characterId)
        .then(() => {
          this.isFavorite.set(true);
        });

    }

  }

}
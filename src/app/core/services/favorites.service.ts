import { inject, Injectable } from '@angular/core';

import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface Favorite {
  userId: string;
  characterId: number;
  addedAt: Date;
}

@Injectable({
  providedIn: 'root',
})

export class FavoritesService {

  private firestore = inject(Firestore);

  addFavorite(
    userId: string,
    characterId: number
  ): Promise<void> {

    const ref = doc(
      this.firestore,
      `favorites/${userId}-${characterId}`
    );

    return setDoc(ref, {
      userId,
      characterId,
      addedAt: new Date(),
    });

  }

  removeFavorite(
    userId: string,
    characterId: number
  ): Promise<void> {

    const ref = doc(
      this.firestore,
      `favorites/${userId}-${characterId}`
    );

    return deleteDoc(ref);

  }

  getFavoritesByUser(
    userId: string
  ): Observable<Favorite[]> {

    const favRef = collection(
      this.firestore,
      'favorites'
    );

    const q = query(
      favRef,
      where('userId', '==', userId)
    );

    return collectionData(q) as Observable<Favorite[]>;

  }

}
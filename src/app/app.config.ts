import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

const firebaseConfig = {
  apiKey: "AIzaSyDboiGCcuyZdkk68koYFNtj29Yuj6UgzsU",
  authDomain: "ppw-practica-01.firebaseapp.com",
  projectId: "ppw-practica-01",
  storageBucket: "ppw-practica-01.firebasestorage.app",
  messagingSenderId: "52208877149",
  appId: "1:52208877149:web:fc51f5a85704a6555097b4",
  measurementId: "G-N26Y210T0V"
};

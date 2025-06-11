import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environment/environment';
import { ChatService } from './app/services/chat.service';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App)
  .catch(err => console.error(err));
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
if (!localStorage.getItem('user-visited')) {
  localStorage.setItem('user-visited', 'true');
  location.replace('/signup'); 
} else {
 bootstrapApplication(App, {
  providers: [provideRouter(routes),
    provideHttpClient(),
  ],
});
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideHttpClient(),
  ]
}).catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App)
  .catch(err => console.error(err));


if (!localStorage.getItem('user-visited')) {
  localStorage.setItem('user-visited', 'true');
  location.replace('/signup'); // 🚀 Force redirect on first launch
} else {
 bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
}

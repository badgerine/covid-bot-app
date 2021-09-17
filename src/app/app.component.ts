import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <div>
        <img width="300" alt="xib Logo" src="assets/logo.png">
      </div>
      <iframe src='https://webchat.botframework.com/embed/poc-xib-bot?s=E16nIVyTEK8.AQCxtPAK-kKxcqayg6UwtkclkyVVyQ4eN_82quSluWA'  style='min-width: 400px; min-height: 500px;'></iframe>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'covid-bot';
}

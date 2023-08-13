import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-i18t';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar'])
    translate.setDefaultLang('en')
  }
  switchLanguage(lang: string) {
    console.log(lang)
    this.translate.use(lang)
    // window.location.reload
  }
}

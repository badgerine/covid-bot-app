import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { BotDirective, BotHelperDirective, StyleSetDirective, BotService, ComService, IPayload, DEFAULT_OPTIONS } from 'ngx-microsoft-bot-framework';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" alt="Angular Logo" src="assets/logo.png">
      <div class="webchat-container" #botWindow></div>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor(
    private comService: ComService,
    private bot: BotDirective
  ) { }

  @ViewChild("botWindow", { static: false }) botWindowElement: ElementRef;
  passViewChild: ViewChild;
  title = 'covid-bot';

  payload: IPayload = {
    secret: 'E16nIVyTEK8.AQCxtPAK-kKxcqayg6UwtkclkyVVyQ4eN_82quSluWA',
    url: 'https://webchat.botframework.com/api/tokens',
    secretSetting: true,
    userId: 'USER_ID',
    webSocket: true
  };

  stylesetPayload: DEFAULT_OPTIONS = {
    rootHeight: '100%',
    botAvatarInitials: 'BF',
    userAvatarInitials: 'CH',
    backgroundColor: '#131313',
    root: {
      ' ::-webkit-scrollbar': {
        width: '3px'
      }
    }
  };

  styleOptionsPayload: DEFAULT_OPTIONS = {
    rootHeight: '100%',
    botAvatarInitials: 'BF',
    userAvatarInitials: 'CH',
    backgroundColor: 'red',
  };

  setBotDirective(): void {
    this.passViewChild = this.botWindowElement.nativeElement;
    this.bot.botDirective(this.passViewChild);
  }

  obtainLocalToken() {
    this.comService.obtainToken(this.payload);
  }

  obtainStylePayload() {
    this.comService.obtainStylePayload(this.stylesetPayload, this.styleOptionsPayload)
  }

  public ngOnInit(): void {
    this.obtainStylePayload();
    this.obtainLocalToken();
  }

  public ngAfterViewInit(): void {
    this.setBotDirective();
  }

}

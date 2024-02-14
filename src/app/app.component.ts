import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification';
  message: string = ''; // Initialize the message property with an empty string
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe((message: string) => {
      this.message = message;
    });
  }
}

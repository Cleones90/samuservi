import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { ChatbotComponent } from './shared/components/chatbot/chatbot';
import { SnowEffectComponent } from './features/home/components/snow-effect/snow-effect';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatbotComponent, SnowEffectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

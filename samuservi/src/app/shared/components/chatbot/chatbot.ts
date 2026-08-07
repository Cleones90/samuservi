import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class ChatbotComponent {
  private readonly whatsappNumber = '593964072527';

  isOpen = false;
  userName = '';
  nameInputValue = '';
  hasSubmittedName = false;

  messages: ChatMessage[] = [
    { text: '¡Hola! Bienvenido a SAMUSERVI S.A.' },
    { text: '¿Cómo te llamas?' }
  ];

  options = ['Cotiza tu viaje', 'Hacia dónde viajarás', 'Contacto'];

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  submitName(): void {
    const name = this.nameInputValue.trim();
    if (!name) {
      return;
    }
    this.userName = name;
    this.messages.push({ text: `¡Mucho gusto ${this.userName}! ¿En qué podemos ayudarte?` });
    this.hasSubmittedName = true;
  }

  selectOption(option: string): void {
    const message = `Hola, soy ${this.userName}. Me gustaría realizar la siguiente consulta: ${option}`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent {
  userPrompt = '';
  loading = false;

  // Store the entire conversation
  messages: { sender: 'user' | 'bot'; text: string; bulletPoints?: string[] }[] = [];

  constructor(private chatService: ChatService) {}

  sendPrompt() {
    const prompt = this.userPrompt.trim();
    if (!prompt) return;

    // Add user message
    this.messages.push({ sender: 'user', text: prompt });
    this.loading = true;
    this.userPrompt = '';

    this.chatService.askQuestion(prompt).subscribe({
      next: (res) => {
        const reply = res.response || 'No response received';

        // Split bot reply into bullet points
        const bulletPoints = reply
          .split('.')
          .map((sentence: string) => sentence.trim())
          .filter((sentence: string | any[]) => sentence.length > 0)
          .map((sentence: string) => sentence + '.');

        this.messages.push({
          sender: 'bot',
          text: reply,
          bulletPoints: bulletPoints
        });

        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.messages.push({ sender: 'bot', text: 'Error connecting to server.' });
        this.loading = false;
      }
    });
  }
}

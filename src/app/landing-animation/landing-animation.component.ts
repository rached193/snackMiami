import {Component} from '@angular/core';

@Component({
  selector: 'app-landing-animation',
  imports: [],
  templateUrl: './landing-animation.component.html',
  styleUrl: './landing-animation.component.scss',
  standalone: true
})
export class LandingAnimationComponent {

  phrases: string[] = [
    'Tired of the same old snacks?',
    'Meet the new bite-sized revolution…',
    'Gourmet snack boxes for offices & events.',
    'Tiny bites, huge flavors.'
  ];

  // Variables para el efecto
  displayText: string = '';
  currentPhraseIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // Velocidad de escritura en milisegundos


  ngOnInit(): void {
    this.type();
  }

  type(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    // Si estamos borrando, se reduce la longitud del texto
    if (this.isDeleting) {
      this.displayText = currentPhrase.substring(0, this.displayText.length - 1);
    } else { // Si estamos escribiendo, se incrementa la longitud del texto
      this.displayText = currentPhrase.substring(0, this.displayText.length + 1);
    }

    // Ajusta la velocidad de la animación
    let currentSpeed = this.typingSpeed;

    // Si se completó la escritura de la frase, espera un momento y comienza a borrar
    if (!this.isDeleting && this.displayText === currentPhrase) {
      currentSpeed = 2000; // pausa de 2 segundos
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      // Cuando la frase se ha borrado por completo, se pasa a la siguiente frase
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      currentSpeed = 500; // breve pausa antes de empezar a escribir
    }

    // Llama recursivamente a la función type() con un retraso determinado
    setTimeout(() => this.type(), currentSpeed);
  }

}

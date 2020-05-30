import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  grajDzwiek(sciezka) {
    let audio = new Audio();
    audio.src = sciezka;
    audio.load();
    audio.play();
  }


  dzwiekTrabki(){
    this.grajDzwiek("https://raw.githubusercontent.com/dominika-zajac/button-example/master/src/assets/trumpets.wav");
  }

  dzwiekGitary(){
    this.grajDzwiek("https://raw.githubusercontent.com/dominika-zajac/button-example/master/src/assets/guitar.wav");
  }

  dzwiekPianina(){
    this.grajDzwiek("https://raw.githubusercontent.com/dominika-zajac/button-example/master/src/assets/piano.wav");
  }

  dzwiekSkrzypiec(){
    this.grajDzwiek("https://raw.githubusercontent.com/dominika-zajac/button-example/master/src/assets/violin.mp3");
  }

  dzwiekFletu(){
    this.grajDzwiek("https://raw.githubusercontent.com/dominika-zajac/button-example/master/src/assets/flute.wav");
  }
}

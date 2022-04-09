import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome1 = '';
  nome2 = '';
  img = '';
  url = 'http://lucasreno.kinghost.net/love-calculator/';
  r = 0;
  mensagem = '';

  constructor(
    private http: HttpClient,
  ) { }
  amar() {
    this.http.get<any>(this.url + this.nome1 + '/' + this.nome2).subscribe(
      (resposta: any) => {
        this.r = resposta;
        if (this.r < 20) {
          this.mensagem = 'cara...nem tenta';
          this.img = '../../assets/meme/tristeza-e-melancolia.jpg';
        }
        else if (this.r < 40) {
          this.mensagem = 'desiste tanto faz, sei de nadakkkkk';
          this.img = '../../assets/meme/lego.jpg';
        }
        else if (this.r < 60) {
          this.mensagem = 'ainda há esperanças, confia';
          this.img = '../../assets/meme/forças.jpg';
        }
        else if (this.r < 80) {
          this.mensagem = 'só vai, se liga';
          this.img = '../../assets/meme/steve.jpg';
        }
        else {
          this.mensagem = 'mds pq vcs nn se pegam logo?';
          this.img = '../../assets/meme/aceita.jpg';
        }
      }
    )
  }
}

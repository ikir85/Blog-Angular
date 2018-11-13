import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-project';
  creationDate = new Date();

  articles = [
    {
      title: '100 % startup au milieu des mers',
      content: 'Ils sont quatorze, et veulent créer un pays dans les eaux internationales. Sur l \'île artificielle qu \'ils veulent faire sortir des flots, la startup est un état d \'esprit. Les habitants payent en cryptomonnaie, et vivent en autosuffisance. Bienvenue à Rohy.',
      loveIts: 0,
      dontLikeIts : 0,
      createdDate: this.creationDate
    },
    {
      title: 'Du HP 9100A à l’IBM PC, voyage à l’aube de la tech moderne',
      content: 'Un fabricant de photocopieuses, un journal spécialisé, une boutique d\'ordinateurs, un outsider libriste déchu et quelques vendeurs de calculatrices : c\'est à tout ce beau monde qu\'on doit l\'informatique personnelle et l\'industrie de la tech telle qu\'on la connaît.',
      loveIts: 0,
      dontLikeIts : 1,
      createdDate: this.creationDate
    },
    {
      title: 'Test de l’iPhone X : la maîtrise du logiciel, l’audace du matériel',
      content: 'L\'iPhone X a été l\'objet de tous les débats après son annonce : trop cher, trop ambitieux, trop rapidement sorti après l\'iPhone 8... Au terme de notre essai, notre verdict peut se résumer en quelques mots : après des années tranquilles, Apple montre à nouveau son savoir-faire d\'avant-garde.',
      loveIts: 4,
      dontLikeIts : 4,
      createdDate: this.creationDate
    }
  ];

} 
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() articleTitle: string ;
  @Input() articleContent: string ;
  @Input() articleLoveIts: number ;
  @Input() articleDontLike: number ;
  @Input() articleCreatedDate: Date ;
  
  isDisabled = false;
  DontLikeisDisabled = false;

  constructor() {

   }

  ngOnInit() {
  }

  
  addLike(){
    /*this.isDisabled = true;*/
    this.articleLoveIts += 1;
    console.log (this.articleLoveIts);
  }

  addDontLike(){
    /*this.DontLikeisDisabled = true;*/
    this.articleDontLike += 1;
    console.log (this.articleDontLike);
  }

}

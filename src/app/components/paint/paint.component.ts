import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArrPaintingsService } from 'src/app/servise/arr-paintings.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent {
  paintId:any | null = null;
  paintAuthor:any | null = null;
  painting:any | null = null;
  paintAuthorItem:any | null = null;

  constructor(
    private route:ActivatedRoute,
    private arrPaintService: ArrPaintingsService
  ){}

  ngOnInit(){
    this.route.params.subscribe(key => {
      this.paintId = key;
      this.painting = this.arrPaintService.paintings.find(e => e.id == this.paintId.id)
      this.paintAuthor = this.painting.author
      this.paintAuthorItem = this.arrPaintService.paintings.filter(e => e.author == this.paintAuthor)
      console.log(this.paintAuthorItem)
    })
  }

}

import { Component } from '@angular/core';
import { ArrPaintingsService } from 'src/app/servise/arr-paintings.service';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss']
})
export class PaintsComponent {
  paintings:any[] = [];

  constructor(private arrPaintService: ArrPaintingsService) {}

  ngOnInit(){
    this.paintings = this.arrPaintService.paintings
  }
}

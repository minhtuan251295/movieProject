import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.css']
})
export class ItemTinTucComponent implements OnInit {
  @Input() ItemTinTuc;
  constructor() { }

  ngOnInit() {
  }

}

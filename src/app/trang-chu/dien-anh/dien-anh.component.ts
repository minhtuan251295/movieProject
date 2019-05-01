import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.css']
})
export class DienAnhComponent implements OnInit {

  DanhSachDienAnh:Array<{TieuDeSuKien:string,HinhAnh:string }> = [
    {TieuDeSuKien:"Marvel & DC",HinhAnh:'../../../assets/img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg'},
    {TieuDeSuKien:"Ferdinand",HinhAnh:'../../../assets/img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg'},
    {TieuDeSuKien:"Trùm Cảng",HinhAnh:'../../../assets/img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg'}, 
  ]

  constructor() { }

  ngOnInit() {
  }

}

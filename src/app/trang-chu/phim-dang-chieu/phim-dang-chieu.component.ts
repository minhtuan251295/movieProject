import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimDangChieu: Array<{TenPhim: string, HinhAnh:string} > =[
    {TenPhim:"The Walking Dead", HinhAnh:'../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg'},
    {TenPhim:"Ferdinand", HinhAnh:'../../../assets/img/ferdinand.jpg'},
    {TenPhim:"Ngắm Pháo Hoa", HinhAnh:'../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg'},
    {TenPhim:"Nhóc Ma Siêu Quậy", HinhAnh:'../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg'},
    {TenPhim:"Trải nghiệm điểm chết", HinhAnh:'../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg'},
  ]

  constructor() { }

  ngOnInit() {
    //ngOnInit sẽ chạy trước, sau đó đến ngFor chạy thì ngFor chưa chạy xong mà ngOnInit
    //Đã chạy xong nên mình phải làm lại
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 3
    //     },
    //     1000: {
    //       items: 5
    //     }
    //   }
    // })
  }
  ngAfterViewInit(){
    //Sau khi view đã chạy xong hết (khởi tạo xong hết) mới chạy
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }
}

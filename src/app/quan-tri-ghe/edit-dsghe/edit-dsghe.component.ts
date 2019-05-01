import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css']
})
export class EditDSGheComponent implements OnInit {
  //ViewChild để dùng DOM từ cha tới con
  @ViewChild(DanhSachGheComponent) DSGheCom;
  ThemGheParent(...thamso:any[]){
    let gheDuocThem = {
      SoGhe: thamso[0],
      TenGhe: thamso[1],
      Gia: thamso[2],
      TrangThai: (thamso[3] == "true"),
    }
    this.DSGheCom.ThemGhe(gheDuocThem);
  }

  
  constructor() { }

  ngOnInit() {
  }

}

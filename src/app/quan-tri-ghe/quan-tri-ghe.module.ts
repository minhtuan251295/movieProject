import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditDSGheComponent } from './edit-dsghe/edit-dsghe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports :[GheComponent, DanhSachGheComponent, EditDSGheComponent],
  declarations: [GheComponent, DanhSachGheComponent, EditDSGheComponent]
})
export class QuanTriGheModule { }

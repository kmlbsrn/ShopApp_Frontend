import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { UserDetail } from '../UserDetail';

@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',
  styleUrls: ['./Detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {}

  userDetail: UserDetail[] = [];
  ngOnInit() {
    this.getUser(this.data.id);
  }

  getUser(id: number): void {
    this.apiService.getUserDetail(id).subscribe((data) => {
      this.userDetail = data ? [data] : [];
    });
  }
}

import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { UserDetail } from './UserDetail';
import { User } from './User';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './Detail/Detail.component';
import { UserFormDialogComponent } from './UserFormDialog/UserFormDialog.component';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent implements OnInit,OnChanges {
  users: User[] = [];




  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  ngOnChanges(){
    this.getUser();
  }

  getUser(){
     this.apiService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    this.openDialog(0, 'Add User');
  }

  updateUser(id: number): void {
    this.openDialog(id, 'Update User');
  }

  openDialog(id: number, title: string): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '700px',
      height: '470px',
      data: { id: id, title: title },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.getUser();
    });
  }

  getDetail(id: number) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '1114px',
      height: '150px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.getUser();
    });
  }

  deleteUser(id: number) {
    console.log(id);
    this.apiService.deleteUser(id).subscribe(() => {
      this.getUser();
    });
  }
}

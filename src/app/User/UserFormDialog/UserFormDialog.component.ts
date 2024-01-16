import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-UserFormDialog',
  templateUrl: './UserFormDialog.component.html',
  styleUrls: ['./UserFormDialog.component.css'],
})
export class UserFormDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  IsSubmitted: boolean = false;

  title= this.data.title;

  ngOnInit() {}

  userForm = this.fb.group({
    userName: this.fb.control(''),
    password: this.fb.control(''),
    firstName: this.fb.control(''),
    lastName: this.fb.control(''),
    phoneNumber: this.fb.control(''),
    email: this.fb.control(''),
  });

  onSubmit(): void {
    if (this.data.id == 0) {
      this.apiService.addUser(this.userForm).subscribe((data) => {
        console.log('API Response:', data);
        this.IsSubmitted = true;
      });
    } else {
      this.apiService.updateUser(this.userForm).subscribe((data) => {
        console.log('API Response:', data);
        this.IsSubmitted = true;
      });
    }

    if (this.IsSubmitted) {
      this.dialogRef.close();
    }
  }

  





  closeDialog(): void {
    this.dialogRef.close();
  }

}

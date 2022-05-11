import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../user-register.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
    constructor(
        private userRegisterService: UserRegisterService,
        public datepipe: DatePipe
    ) {}
    users = new Array();
    isUser = false;

    ngOnInit(): void {
        this.updateUserVariable();
    }

    updateUserVariable() {
        this.userRegisterService.getUsers().subscribe({
            next: (data) => {
                this.users = Object.values(data)[1];
                this.users.map((el) => {
                    el.createdAt = this.datepipe.transform(
                        el.createdAt,
                        'MM/dd/yyyy hh:mm aa'
                    );
                });
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                if (this.users.length !== 0) {
                    this.isUser = true;
                }
            },
        });
    }
}

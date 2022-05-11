import { UserRegisterService } from './../user-register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
    errorMessage: any | undefined;

    constructor(
        private userRegisterService: UserRegisterService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {}

    userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        subscription: ['Advanced', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
    });

    get name() {
        return this.userForm.get('name');
    }
    get email() {
        return this.userForm.get('email');
    }
    get subscription() {
        return this.userForm.get('subscription');
    }

    get password() {
        return this.userForm.get('password');
    }

    get passwordConfirm() {
        return this.userForm.get('passwordConfirm');
    }

    handleSubmit() {
        if (this.testUserForm()) {
            this.userRegisterService.register(this.userForm.value).subscribe({
                next: (data) => this.refreshTable(),
                error: (error) => {
                    this.errorMessage = error;
                },
                complete: () => this.userForm.reset(),
            });
            this.errorMessage = false;
        } else {
            this.errorMessage = true;
        }
    }

    testUserForm() {
        if (this.userForm.valid) {
            return true;
        }
        return false;
    }

    handleClear() {
        this.userForm.reset();
        this.errorMessage = false;
    }

    refreshTable() {
        window.location.reload();
    }
}

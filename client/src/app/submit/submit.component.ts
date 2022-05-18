import { UserRegisterService } from "./../user-register.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-submit",
    templateUrl: "./submit.component.html",
    styleUrls: ["./submit.component.scss"],
})
export class SubmitComponent implements OnInit {
    errorMessage: any | undefined;

    constructor(
        private userRegisterService: UserRegisterService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {}
    emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
    passwordPattern = "(?=.*[!-+])(?=.*[a-z])(?=.*[A-Z]).{8,}";
    userForm = this.fb.group({
        name: ["", Validators.required],
        email: [
            "",
            [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        subscription: ["Advanced", Validators.required],
        password: [
            "",
            [Validators.required, Validators.pattern(this.passwordPattern)],
        ],
        passwordConfirm: ["", Validators.required],
    });

    get name() {
        return this.userForm.get("name");
    }
    get email() {
        return this.userForm.get("email");
    }
    get subscription() {
        return this.userForm.get("subscription");
    }

    get password() {
        return this.userForm.get("password");
    }

    get passwordConfirm() {
        return this.userForm.get("passwordConfirm");
    }

    handleSubmit() {
        if (this.testUserForm()) {
            this.userRegisterService.register(this.userForm.value).subscribe({
                next: (data) => {
                    this.refreshTable();
                },
                error: (error) => {
                    console.log(error);
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
        if (confirm("Are you sure you want to clear?")) {
            this.userForm.reset();
            this.errorMessage = false;
        }
    }

    refreshTable() {
        window.location.reload();
    }
}

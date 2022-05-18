import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { SubmitComponent } from "./submit.component";

describe("SubmitComponent", () => {
    let component: SubmitComponent;
    let fixture: ComponentFixture<SubmitComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubmitComponent],
            imports: [HttpClientModule],
            providers: [FormBuilder],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubmitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("form invalide check", () => {
        expect(component.userForm.valid).toBeFalsy();
    });

    it("name input valid check", () => {
        let name = component.userForm.controls["name"];
        expect(name.valid).toBeFalsy();

        let errors: any;
        errors = name.errors || {};
        expect(errors["required"]).toBeTruthy();

        name.setValue("TestName");
        expect(name.valid).toBeTruthy();
    });

    it("email input valid check", () => {
        let email = component.userForm.controls["email"];
        expect(email.valid).toBeFalsy();

        let errors: any;

        errors = email.errors || {};
        expect(errors["required"]).toBeTruthy();

        email.setValue("email");
        errors = email.errors || {};
        expect(errors["pattern"]).toBeTruthy();

        email.setValue("email@gmail.com");
        expect(email.valid).toBeTruthy();
    });

    it("subscription input valid check", () => {
        let subscription = component.userForm.controls["subscription"];
        expect(subscription.valid).toBeTruthy();

        let errors: any;

        errors = subscription.errors || {};
        expect(errors["required"]).toBeFalsy();

        subscription.setValue("");
        errors = subscription.errors || {};
        expect(errors["required"]).toBeTruthy();

        subscription.setValue("Pro");
        expect(subscription.valid).toBeTruthy();
    });

    it("password input valid check", () => {
        let password = component.userForm.controls["password"];
        expect(password.valid).toBeFalsy();

        let errors: any;

        errors = password.errors || {};
        expect(errors["required"]).toBeTruthy();

        password.setValue("passwordFail");
        errors = password.errors || {};
        expect(errors["pattern"]).toBeTruthy();

        password.setValue("Password*pass");
        expect(password.valid).toBeTruthy();
    });

    it("passwordConfirm input valid check", () => {
        let passwordConfirm = component.userForm.controls["passwordConfirm"];
        expect(passwordConfirm.valid).toBeFalsy();

        let password = component.userForm.controls["password"];
        password.setValue("Password*pass");
        let errors: any;

        passwordConfirm.setValue("passwordNoMatch");
        errors = password.value == passwordConfirm.value;
        expect(errors).toBeFalsy();

        passwordConfirm.setValue("Password*pass");
        errors = password.value == passwordConfirm.value;
        expect(errors).toBeTruthy();
    });
});

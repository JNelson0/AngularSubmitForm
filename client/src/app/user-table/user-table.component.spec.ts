import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserTableComponent } from "./user-table.component";

describe("UserTableComponent", () => {
    let component: UserTableComponent;
    let fixture: ComponentFixture<UserTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserTableComponent],
            imports: [HttpClientModule],
            providers: [DatePipe],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

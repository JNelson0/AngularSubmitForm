import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { UserRegisterService } from "./user-register.service";

describe("UserRegisterService", () => {
    let service: UserRegisterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(UserRegisterService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("handle error", () => {
        service
            .handleError(new HttpErrorResponse({ error: "bar", status: 403 }))
            .subscribe((value) => {
                expect(typeof value).toBe("error");
            });
    });
    // it("getUsers should return object", (done: DoneFn) => {
    //     service.getUsers().subscribe((value) => {
    //         expect(typeof value).toBe("object");
    //         done();
    //     });

    // });
});

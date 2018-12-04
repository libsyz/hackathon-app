import { HackathonService } from './../hackathon-service/hackathon-service';
import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NotificationsProvider } from './notifications';

describe("Notifications Service", ()=> {
    let notificationsSrvc: NotificationsProvider;
    let authSrvc: AuthProvider;
    let httpMockup: {get: jasmine.Spy, post: jasmine.Spy}
    let hackathonSrvcMock: {currentHackId: jasmine.Spy}
    beforeEach(() => {

        httpMockup = jasmine.createSpyObj("HttpClient", ["post"])
        hackathonSrvcMock = jasmine.createSpyObj("HackathonService", ["currentHackId"])
        TestBed.configureTestingModule(
                {providers: [
                            NotificationsProvider, { provide: HttpClient, useValue: httpMockup },
                            {provide: HackathonService, useValue: hackathonSrvcMock},
                            AuthProvider, { provide: HttpClient, useValue: httpMockup },
                        ]})
        
        httpMockup = TestBed.get(HttpClient);
        authSrvc = TestBed.get(AuthProvider);
        hackathonSrvcMock = TestBed.get(HackathonService);
        notificationsSrvc = TestBed.get(NotificationsProvider);
    })

    it("Should have a predetermined API endpoint", ()=> {
        expect(notificationsSrvc.notificationsApiEndpoint).toBeDefined();
    })

    it("Should try to post a notification", ()=> {
        hackathonSrvcMock.currentHackId.and.returnValue(4);
        notificationsSrvc.addNotification();
        expect(httpMockup.post).toHaveBeenCalled();
    })
})
import { User } from './../../models/user.model';
import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { HackathonService } from './hackathon-service';
import { TestBed } from '@angular/core/testing';
import { currentId } from 'async_hooks';
import { toObservable } from '@angular/forms/src/validators';

describe("Hackathon Service", ()=> {

    // Need a Hackathon Service
    // Need Spies! 

    let hackathonSrvc: HackathonService;
    let httpMock: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, patch: jasmine.Spy }
    let authSrvc : AuthProvider;
    let userMock: User;
    beforeEach( () => {

        httpMock = jasmine.createSpyObj("HttpClient", ["get", "post", "put", "patch"]);

        TestBed.configureTestingModule( 
                { providers: [HackathonService, { provide: HttpClient, useValue: httpMock },
                              AuthProvider, {provide: HttpClient, useValue: httpMock}]})
        // gotta configur the module
        // Gotta assign values at the end
        hackathonSrvc = TestBed.get(HackathonService);
        httpMock = TestBed.get(HttpClient);
        authSrvc = TestBed.get(AuthProvider);
        userMock = new User;
    });

    it("Should have defined API Endpoints", () => {
        expect(hackathonSrvc.editHackathonPhaseEndpoint).toBeDefined();
        expect(hackathonSrvc.addHackerToHackathonEndpoint).toBeDefined();
        expect(hackathonSrvc.hackathonsEndpoint).toBeDefined();
        expect(hackathonSrvc.removeHackerFromHackathonEndpoint).toBeDefined();
    })

    it("Should try to create a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.createHackathon();
        expect(httpMock.post).toHaveBeenCalled();
    })

    it("should try to add a hacker to a given hackathon ", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.addHackerToHackathon(1,1,1);
        expect(httpMock.put).toHaveBeenCalled();
    })


    it("should try to delete a hacker from a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.clearHacker("fakeArg");
        expect(httpMock.patch).toHaveBeenCalled();
    })

    it("should try to get the number of hackers in a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.currentHackId = 1;
        hackathonSrvc.getNumberOfHackers();
        expect(httpMock.get).toHaveBeenCalled();
    })

    it("should return true if there are enough (2+) hackers in a hackathon", ()=> {
        const result = hackathonSrvc.checkForEnoughHackers(2)
        expect(result).toBeTruthy;
    })

    it("should try to save an image url within a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.savePicture("fakeImageUrl");
        expect(httpMock.patch).toHaveBeenCalled();
    })

    it("should try to save a problem statement in a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.saveProblemStatement("Some Fake Problem Statement");
        expect(httpMock.patch).toHaveBeenCalled();
    })

    it("should try to save a test protocol in a hackathon", ()=> {
        userMock.token = "secret";
        authSrvc.userData = userMock;
        hackathonSrvc.currentHackId = 1;
        hackathonSrvc.currentPhase = 2;
        hackathonSrvc.saveTest(["fakeArray"], "FakeTimeFrame");
        expect(httpMock.patch).toHaveBeenCalled();
        
    })

    it("should update the current hackathon phase", ()=> {
        hackathonSrvc.currentHackathon =  { phases: [{phaseOrder: 1, completed: true},
                                                                 {phaseOrder: 2, completed: null}
                                                                ]
                                               }  
        expect(hackathonSrvc.currentPhase).toBeUndefined(); 
        hackathonSrvc.updateCurrentPhase();
        expect(hackathonSrvc.currentPhase).toBe(2);
    })

    it("should set the end of a hackathon", ()=> {
        hackathonSrvc.setEndOfHackathon();
        expect(hackathonSrvc.currentPhase).toBe(6);
    })

    it("should clear the application state", ()=>{ 
        hackathonSrvc.currentHackathon =  { phases: [{ phaseOrder: 1, completed: true },
                                                     { phaseOrder: 2, completed: null }
                                                    ]
                                          } 
        hackathonSrvc.currentHackId = 1;
        hackathonSrvc.currentPhase = 2; 
        hackathonSrvc.clearApplicationState();
        expect(hackathonSrvc.currentHackathon).toBe(null);
        expect(hackathonSrvc.currentHackId).toBe(null);
        expect(hackathonSrvc.currentPhase).toBe(null);
    })



})
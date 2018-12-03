import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { AuthProvider } from './auth';
import { User } from './../../models/user.model';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

describe("Authorization Service", () => {

    let authService: AuthProvider;
    let httpMock: { post: jasmine.Spy, get: jasmine.Spy }
    let userMock: User;
    beforeEach(() => {
    
    httpMock = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    userMock = new User;

        TestBed.configureTestingModule( 
            { providers: [AuthProvider, 
            {provide: HttpClient, useValue: httpMock}
        ]
        })
        authService = TestBed.get(AuthProvider);
        httpMock = TestBed.get(HttpClient);
    });

    it("Should Load the Service", () => {
        expect(authService).toBeDefined();
    })

    it("Should try to sign in", () => {
        const loginData = {email: "miguel@miguel.com",
                           password: "123456"}

        authService.signIn(loginData);
        expect(httpMock.post).toHaveBeenCalled();
    });

    it("Should try to sign up", () => {
        const loginData = {email: "miguel@miguel.com",
                           password: "123456"}
        authService.signUp(loginData);
        expect(httpMock.post).toHaveBeenCalled();
    });

    it("Should hold current user data, including the auth token", () => {
        userMock.firstName = "Miguel";
        userMock.lastName = "Jimenez";
        userMock.token = "secret";
        userMock.position = "Dev";
        authService.userData = userMock;
        expect(authService.userData).toBeDefined();
        expect(authService.userData.token).toBeDefined();
    });

    it("Should return authentication headers", ()=> {
        userMock.token = "secret";
        authService.userData = userMock;
        const authHeaders = authService.getAuthenticatedHeaders();

        expect(authHeaders instanceof HttpHeaders).toBeTruthy();
    })

    it("Should set a user", ()=> { 
        userMock.firstName = "Miguel";
        authService.setCurrentUser(userMock);
        expect(authService.userData).toBeDefined();
    }) 

    it("Should try to get user data from a service", ()=> {
        userMock.firstName = "Miguel";
        userMock.id = 3;
        authService.userData= userMock;
        authService.getUserData();
        expect(httpMock.get).toHaveBeenCalled();
    })
    


})
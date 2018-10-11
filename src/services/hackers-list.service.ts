import { Injectable } from '@angular/core';


@Injectable()
export class hackersList {
    // shit I don't know JS

    users: {}[] = [
        {
            name: "Nick Fury",
            imageUrl: "nick_fury.jpg"
        },
        {
            name: "Peter Parker",
            imageUrl: "peter_parker.jpg" 
        },
        {
            name: "Bruce Wayne",
            imageUrl: "bruce_wayne.jpg" 
        },
        {
            name: "Bender Rodriguez",
            imageUrl: "bender_rodriguez.jpeg" 
        },
        {
            name: "Rick Sanchez",
            imageUrl: "rick_sanchez.png" 
        }
    
    ]
    constructor(){

    }

    getUsers(){
        return this.users;
    }
}
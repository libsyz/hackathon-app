import { CloudinaryUploaderProvider } from './cloudinary-uploader';
import { HttpClient } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe("Cloudinary Uploader", () => {

    let cloudinaryService: CloudinaryUploaderProvider;
    let httpMock: { post: jasmine.Spy }

    beforeEach(() => {

    httpMock = jasmine.createSpyObj('HttpClient', ['post']);

        TestBed.configureTestingModule(
            { providers: [ 
                CloudinaryUploaderProvider, { provide: HttpClient, useValue: httpMock }
            ]
        }
    )
    
    cloudinaryService = TestBed.get(CloudinaryUploaderProvider);
    httpMock = TestBed.get(HttpClient);
    
})
    it("Should Try to upload a picture via post method", ()=> {
        let imageData = "MockInfo.jpg";
        cloudinaryService.uploadPicture(imageData);
        expect(httpMock.post).toHaveBeenCalled();
    })

})
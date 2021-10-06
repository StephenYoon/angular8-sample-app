import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

    private REST_API_SERVER = "http://localhost:5005";
    private isApiRequest: boolean = false;

    constructor(private http: HttpClient) { }

    getOfferById(id: number): Observable<any> {
        //return this.http.get("./assets/api-offer-data-response.json");
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Offer/GetByIdAsync?offerId=${id}`)
            : this.http.get("./assets/api-offer-data-response.json");
    }

    getOffersByLocationId(id: number): Observable<any> {
        //return this.http.get("./assets/api-offer-listing-data.json");
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Offer/GetByLocationIdAsync?locationId=${id}`)
            : this.http.get("./assets/api-offer-listing-data.json");
    }

    getProductsByLocationId(id: number): Observable<any> {
        //return this.http.get("./assets/api-product-data.json");
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Product/GetByLocationIdAsync?locationId=${id}`)
            : this.http.get("./assets/api-product-data.json");
    }

    getProductAddOnsByProductId(id: number): Observable<any> {
        //return this.http.get("./assets/api-product-add-on-data.json");        
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Product/GetAddonsListByProductIdAsync?productId=${id}`)
            : this.http.get("./assets/api-product-add-on-data.json");        
    }

    getLocationById(id: number): Observable<any> {
        //return this.http.get("./assets/api-location-data.json");
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Location/GetByIdAsync?locationId=${id}`)
            : this.http.get("./assets/api-location-data.json");
    }

    getWorkforceByLocationId(id: number): Observable<any> {
        return this.http.get("./assets/api-workforce-data.json");
    }
    
    isVoucherCodeAllowedForOffer(offerId: number, voucherCode: string): Observable<any> {
        // return boolean
        return this.isApiRequest
            ? this.http.get(`${this.REST_API_SERVER}/api/Booking/IsVoucherCodeAllowedForOffer?offerId=${offerId}&voucherCode=${voucherCode}`)
            : new Observable((observer) => {
                observer.next(true)
                observer.complete()
            });
    }
}

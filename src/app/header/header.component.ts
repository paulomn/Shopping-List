import { DataStorageService } from './../shared/data-storage';
import { Response } from '@angular/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) {}

    onSave() {
        this.dataStorageService.storeRecipes()
        .subscribe((response: Response)=> {
            console.log(response);
        }); 
    }

    onFetch() {
        this.dataStorageService.getRecipes();
    }
}
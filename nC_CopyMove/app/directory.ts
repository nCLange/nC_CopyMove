﻿
import {DataService} from './dataservice';
import {DocumentLibrary} from './documentlibrary';

export class Directory {
    name: string;
    selected: boolean;
    directories: Array<Directory>;
    expanded: boolean;
    parent: any;
    dataService: DataService;
    relpath: string;
    absolutePath: string;

    constructor(name,parent) {
        this.name = name;
        this.selected = false;
        this.parent = parent;
        this.dataService = new DataService();
        this.relpath = this.getRelUrl();
        this.absolutePath = this.getAbsolutePath();
       
        
    }
    getStyle() {
        if (this.expanded) {
            return "yellow";
        } else {
            return "";
        }
    }

    getRelUrl() {

        if (this.parent instanceof DocumentLibrary) {

            return this.parent.relpath+"/"+this.name;
        }
        else {
          
            return this.parent.getRelUrl()+"/"+this.name;
        }

    }

    getAbsolutePath() {
        if (this.parent instanceof DocumentLibrary)
            return this.parent.parent.path;
        else return this.parent.getAbsolutePath();
    }

    toggle() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.dataService.searchDirectories(this.absolutePath, this.relpath, this).then(
                response => {
                    var tempresponse;
                    tempresponse = response;
                    this.directories = tempresponse;
                }, response => {
                    console.log("Failure " + response);
                });
        }
            
    }

}
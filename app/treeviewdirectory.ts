﻿import {Component, Input} from '@angular/core';
import {Directory} from './directory';

import {DocumentLibrary} from './documentlibrary';


@Component({
    selector: 'tree-view-directory',
    template: `<ul class="dirList">
                <li class="dirListElements" *ngFor="let directory of folderLookUp.directories"><div [style.background-color]="directory.getStyle()"(dblclick)="mark(directory)" (click)="select(directory)"><img src="../images/Folders.svg" width="16" height="16">&nbsp;{{directory.name}}</div><div *ngIf="directory.expanded"><tree-view-directory [folderLookUp]="directory"></tree-view-directory></div></li>
               </ul>`,
    directives: [TreeViewDirectory]
})
export class TreeViewDirectory {
    @Input() folderLookUp: DocumentLibrary;
    selected: boolean;
    dblclick: boolean;
    constructor() {

    }
    select(directory: Directory) {
        let that = this;
        this.dblclick = false;
        setTimeout(
            function () {
                if(that.dblclick==false)
                    directory.toggle();
            }, 400);

       
    }

    mark(directory: Directory) {
        
        this.dblclick = true;
        directory.select("--1");
    }

}

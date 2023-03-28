import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
    @Input() btnText!:string;

    constructor(){}

    ngOnInit(): void {
      
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectionModes } from './components/choicer/selection-modes.enum';
import { Item } from './models/item.model';
import { items } from './mockedItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  choicer: FormControl;
  selectedChoicerItemIcon = 'check';
  items: Item[] = items;
  selectionMode: SelectionModes = SelectionModes.Multi;

  ngOnInit() {
    this.choicer = new FormControl({ value: [], disabled: false });
    this.myForm = new FormGroup({
      choicer: this.choicer
    });
  }
}



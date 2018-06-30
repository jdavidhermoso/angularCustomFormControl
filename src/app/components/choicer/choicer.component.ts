import { ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Item } from '../../models/item.model';
import { SelectionModes } from './selection-modes.enum';


@Component({
  selector: 'app-choicer',
  templateUrl: './choicer.component.html',
  styleUrls: ['./choicer.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoicerComponent),
      multi: true
    }]
})
export class ChoicerComponent implements ControlValueAccessor {
  @Input() selectedItems: Item[] = [];
  @Input() itemsList: Item[];
  @Input() disabled = false;
  @Input() icon = 'check';
  @Input() selectionMode: SelectionModes = SelectionModes.Multi;

  onChange = (items: Item[]) => {
  }

  onTouched = () => {
  }


  get value(): Item[] {
    return this.selectedItems;
  }

  onItemClicked(item: Item) {
    this.onTouched();
    if (!this.disabled && !item.disabled) {
      this.toggleItemState(item);
    }
  }

  toggleItemState(item: Item) {
    const itemId = item.id;
    if (this.isItemSelected(itemId)) {
      this.removeItemFromSelection(itemId);
    } else if (this.canSelectItem()) {
      this.selectedItems.push(item);
    }

    this.onChange(this.value);
  }

  canSelectItem() {
    return (this.selectionMode === SelectionModes.Single && this.selectedItems.length < 1) || this.selectionMode === SelectionModes.Multi;
  }

  removeItemFromSelection(itemToRemoveId: number) {
    this.selectedItems = this.selectedItems.filter((selectedItem) => {
      return selectedItem.id !== itemToRemoveId;
    });
  }

  writeValue(items: Item[]) {
    this.selectedItems = items;
    this.onChange(this.value);
  }

  registerOnChange(fn: (items: Item[]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  isItemSelected(itemId: number) {
    return this.getItemByItemId(itemId);
  }

  getItemByItemId(itemId: number) {
    return this.selectedItems.find((item: Item) => {
      return item.id === itemId;
    });
  }
}

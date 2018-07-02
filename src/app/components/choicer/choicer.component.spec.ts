import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIcon, MatIconModule } from '@angular/material';
import { AppComponent } from '../../app.component';
import { Item } from '../../models/item.model';

import { ChoicerComponent } from './choicer.component';

describe('ChoicerComponent', () => {
  let component: ChoicerComponent;
  let containerComponent: AppComponent;
  let fixture: ComponentFixture<ChoicerComponent>;
  let containerFixture: ComponentFixture<AppComponent>;
  const singleItem = {
    id: 1,
    title: 'Item 1 title',
    subtitle: 'Item 1 subtitle',
    description: '',
    image: '',
    disabled: false
  };
  const items: Item[] = [singleItem];

  const setComponentState = (isDisabled: boolean) => {
    component.disabled = isDisabled;
  };

  const setSelectedItem = (item: Item) => {
    component.selectedItems.push(item);
  };

  const setSingleItemState = (isDisabled: boolean) => {
    singleItem.disabled = isDisabled;
  };

  const setContainerComponentItems = (items: Item[]) => {
    containerComponent.items = items;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ChoicerComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => component),
          multi: true
        }],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    containerFixture = TestBed.createComponent(AppComponent);
    containerComponent = containerFixture.componentInstance;
    fixture = TestBed.createComponent(ChoicerComponent);
    component = fixture.componentInstance;

    setContainerComponentItems(items);
    containerComponent.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ChoicerComponent: Component or items are disabled.', () => {
    it('Component is disabled, so none element should be selected', () => {
      setComponentState(true);
      component.onItemClicked(singleItem);
      expect(component.selectedItems).toMatchSnapshot();
    });

    it('Single item is disabled, so none element should be selected', () => {
      setSingleItemState(true);
      setComponentState(false);

      component.onItemClicked(singleItem);
      expect(component.selectedItems).toMatchSnapshot();
    });
  });

  describe('ChoicerComponent: Component or items are enabled.', () => {
    it('Neither Component nor single item are disabled, so single element should be selected', () => {
      setComponentState(false);
      setSingleItemState(false);
      component.onItemClicked(singleItem);
      expect(component.selectedItems).toMatchSnapshot();
    });

    it('Item clicked is selected, so it should be unselected when clicked', () => {
      setComponentState(false);
      setSingleItemState(false);
      setSelectedItem(singleItem);
      component.onItemClicked(singleItem);
      expect(component.selectedItems).toMatchSnapshot();
    });
  });

  describe('ChoicerComponent: ', () => {
    it('When write value is called, selectedItems are updated with the passed values', () => {
      setComponentState(false);
      setSingleItemState(false);
      component.writeValue(items);

      expect(component.selectedItems).toMatchSnapshot();
    });

    it('When registerOnChange is called passing a function, onChange function is set', () => {
      const mock = jest.fn();

      component.registerOnChange(mock);

      expect(component.onChange).toEqual(mock);
    });

    it('When registerOnTouched is called passing a function, onTouched function is set', () => {
      const mock = jest.fn();

      component.registerOnTouched(mock);

      expect(component.onTouched).toEqual(mock);
    });
  });
});



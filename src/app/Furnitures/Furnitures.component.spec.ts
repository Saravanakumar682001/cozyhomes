/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FurnituresComponent } from './Furnitures.component';

describe('FurnituresComponent', () => {
  let component: FurnituresComponent;
  let fixture: ComponentFixture<FurnituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sub2Component } from './Sub2.component';

describe('Sub2Component', () => {
  let component: Sub2Component;
  let fixture: ComponentFixture<Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

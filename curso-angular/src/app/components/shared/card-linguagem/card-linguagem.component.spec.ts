/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardLinguagemComponent } from './card-linguagem.component';

describe('CardLinguagemComponent', () => {
  let component: CardLinguagemComponent;
  let fixture: ComponentFixture<CardLinguagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLinguagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

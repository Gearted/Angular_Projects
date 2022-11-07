import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnamatopiaComponentComponent } from './create-onamatopia-component.component';

describe('CreateOnamatopiaComponentComponent', () => {
  let component: CreateOnamatopiaComponentComponent;
  let fixture: ComponentFixture<CreateOnamatopiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnamatopiaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOnamatopiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

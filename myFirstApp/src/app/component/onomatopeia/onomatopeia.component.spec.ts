import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopeiaComponent } from './onomatopeia.component';

describe('OnomatopeiaComponent', () => {
  let component: OnomatopeiaComponent;
  let fixture: ComponentFixture<OnomatopeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnomatopeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnomatopeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

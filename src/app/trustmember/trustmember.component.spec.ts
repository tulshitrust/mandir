import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustmemberComponent } from './trustmember.component';

describe('TrustmemberComponent', () => {
  let component: TrustmemberComponent;
  let fixture: ComponentFixture<TrustmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

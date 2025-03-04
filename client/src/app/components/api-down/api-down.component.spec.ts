import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDownComponent } from './api-down.component';

describe('ApiDownComponent', () => {
  let component: ApiDownComponent;
  let fixture: ComponentFixture<ApiDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

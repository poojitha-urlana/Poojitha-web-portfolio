import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerficatesComponent } from './cerficates.component';

describe('CerficatesComponent', () => {
  let component: CerficatesComponent;
  let fixture: ComponentFixture<CerficatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerficatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerficatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

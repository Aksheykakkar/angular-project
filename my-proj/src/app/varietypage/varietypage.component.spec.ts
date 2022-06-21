import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietypageComponent } from './varietypage.component';

describe('VarietypageComponent', () => {
  let component: VarietypageComponent;
  let fixture: ComponentFixture<VarietypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarietypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

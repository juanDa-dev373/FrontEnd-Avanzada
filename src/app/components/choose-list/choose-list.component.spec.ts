import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseListComponent } from './choose-list.component';

describe('CreateListComponent', () => {
  let component: ChooseListComponent;
  let fixture: ComponentFixture<ChooseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

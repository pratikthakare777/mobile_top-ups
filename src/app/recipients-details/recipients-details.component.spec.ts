import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsDetailsComponent } from './recipients-details.component';

describe('RecipientsDetailsComponent', () => {
  let component: RecipientsDetailsComponent;
  let fixture: ComponentFixture<RecipientsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

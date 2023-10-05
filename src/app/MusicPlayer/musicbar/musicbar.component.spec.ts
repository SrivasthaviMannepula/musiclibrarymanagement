import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicbarComponent } from './musicbar.component';

describe('MusicbarComponent', () => {
  let component: MusicbarComponent;
  let fixture: ComponentFixture<MusicbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicbarComponent]
    });
    fixture = TestBed.createComponent(MusicbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

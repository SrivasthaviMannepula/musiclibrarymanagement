import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularArtistCardComponent } from './popular-artist-card.component';

describe('PopularArtistCardComponent', () => {
  let component: PopularArtistCardComponent;
  let fixture: ComponentFixture<PopularArtistCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularArtistCardComponent]
    });
    fixture = TestBed.createComponent(PopularArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

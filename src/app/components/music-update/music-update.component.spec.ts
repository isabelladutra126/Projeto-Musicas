import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicUpdateComponent } from './music-update.component';

describe('MusicUpdateComponent', () => {
  let component: MusicUpdateComponent;
  let fixture: ComponentFixture<MusicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

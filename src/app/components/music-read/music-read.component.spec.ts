import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicReadComponent } from './music-read.component';

describe('MusicReadComponent', () => {
  let component: MusicReadComponent;
  let fixture: ComponentFixture<MusicReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

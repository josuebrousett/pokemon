import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPokemonComponent } from './mi-pokemon.component';

describe('MiPokemonComponent', () => {
  let component: MiPokemonComponent;
  let fixture: ComponentFixture<MiPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

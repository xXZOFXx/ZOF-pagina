import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrainicioComponent } from './barrainicio.component';

describe('BarrainicioComponent', () => {
  let component: BarrainicioComponent;
  let fixture: ComponentFixture<BarrainicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrainicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

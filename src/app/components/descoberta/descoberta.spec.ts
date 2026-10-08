import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DescobertaComponent } from './descoberta';

describe('DescobertaComponent', () => {
  let component: DescobertaComponent;
  let fixture: ComponentFixture<DescobertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescobertaComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescobertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
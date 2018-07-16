
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SiteNavComponent } from './site-nav.component';

describe('SiteNavComponent', () => {
  let component: SiteNavComponent;
  let fixture: ComponentFixture<SiteNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SiteNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

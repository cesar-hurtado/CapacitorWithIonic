import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupsListPage } from './pickups-list.page';

describe('PickupsListPage', () => {
  let component: PickupsListPage;
  let fixture: ComponentFixture<PickupsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickups-list',
  templateUrl: './pickups-list.page.html',
  styleUrls: ['./pickups-list.page.scss'],
})
export class PickupsListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

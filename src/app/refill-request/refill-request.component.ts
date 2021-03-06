import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refill-request',
  templateUrl: './refill-request.component.html',
  styleUrls: ['./refill-request.component.scss'],
})
export class RefillRequestComponent implements OnInit {
  locationName: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.locationName = this.router.getCurrentNavigation().extras.state;
        console.log("in location page", this.locationName)
      }
    });

  }
  ngOnInit() { }

}

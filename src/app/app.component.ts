import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader: boolean = true;
  img = 'assets/rn.png';

  ngOnInit(): void {
    // Hide the loader after 2 seconds
    setTimeout(() => {
      this.showLoader = false;
    }, 2000); // 2000 milliseconds = 2 seconds
  }
}
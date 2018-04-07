import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;

      marker : [
        {
          lat: 52.673858,
          lng: 7.815982,
          label: '1',
          draggable: true,
          infowindowContent: 'test',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 52.373858,
          lng: 7.215982,
          label: '2',
          draggable: false,
          infowindowContent: 'test2',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 52.973858,
          lng: 7.215982,
          label: '3',
          draggable: false,
          infowindowContent: 'test2',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        }
      ]
}

import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper, PolyMouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 51.678418;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      infowindowContent: 'test'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      infowindowContent: 'test2'
    },
    {
      lat: 51.423858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      infowindowContent: 'test3'
    },
    {
      lat: 52.423858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      infowindowContent: 'test3'
    }
  ];

  lng = 7.809007;
  mapTypeId = 'terrain';

  polyClick(e: any) {
    console.log(e);
  }
}


// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  infowindowContent: string;
}


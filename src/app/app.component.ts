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
  markers: MarkerType[] = [
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

  pClick(e: PolyMouseEvent) {
   console.log(`MGPV4: pClick(${e})`);
   console.log(e);
   console.log(e.latLng.lat());
   console.log(e.latLng.lng());
  }
}


// just an interface for type safety.
interface MarkerType {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  infowindowContent: string;
}


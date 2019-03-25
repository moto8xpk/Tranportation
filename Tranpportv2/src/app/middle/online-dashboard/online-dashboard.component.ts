import { Component, OnInit } from '@angular/core';
import { marker } from 'src/model/market.model';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-online-dashboard',
  templateUrl: './online-dashboard.component.html',
  styleUrls: ['./online-dashboard.component.css']
})
export class OnlineDashboardComponent implements OnInit {

  title: string = 'Online Dashboard';
  lat: number = 10.857174;
  lng: number = 106.625263;
  iconRoute: string = 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjVqpnCgcvgAhWEHqYKHch_BpEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F143698%2Fauto_bus_transport_vehicle_icon&psig=AOvVaw0W9BzFBFx68eMSegYlSXsg&ust=1550775774088167';

  markers: marker[] = [
    {
      lat: 10.770476,
      lng: 106.692536,//10.770476, 106.692536
      label: 'Co so 1',
      draggable: true
    },
    {
      lat: 10.857215,
      lng: 106.630062,//10.857215, 106.630062
      label: 'Co so Soongsil',
      draggable: false
    },
    {
      lat: 10.801751,
      lng: 106.640730,//10.801751, 106.640730
      label: 'Bosch',
      draggable: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markerIconUrl() {
    return '../../../assets/bus.png';
  }

}

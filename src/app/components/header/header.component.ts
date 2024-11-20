import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'Temperature', icon: 'pi pi-chart-line', route: 'temperature-chart'},
      { label: 'CO2', icon: 'pi pi-chart-line', route: 'co2-chart'},
      { label: 'Methane', icon: 'pi pi-chart-line', route: 'methane-chart'},
      { label: 'NO2', icon: 'pi pi-chart-line', route: 'no2-chart'},
      { label: 'Arctic ice', icon: 'pi pi-chart-line', route: 'arctic-chart'}
    ]
  }
}

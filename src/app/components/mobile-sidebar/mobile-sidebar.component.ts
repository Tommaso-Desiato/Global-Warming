import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, TabMenuModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.css'
})
export class MobileSidebarComponent {
  
  sidebarVisible: boolean = false;

  items: MenuItem[] = [
    { label: 'Temperature', icon: 'pi pi-chart-line', route: 'temperature-chart'},
      { label: 'CO2', icon: 'pi pi-chart-line', route: 'co2-chart'},
      { label: 'Methane', icon: 'pi pi-chart-line', route: 'methane-chart'},
      { label: 'NO2', icon: 'pi pi-chart-line', route: 'no2-chart'},
      { label: 'Arctic ice', icon: 'pi pi-chart-line', route: 'arctic-chart'}
  ]

  toggleSidebar() : void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, PanelMenuModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.css'
})
export class MobileSidebarComponent {
  
  sidebarVisible: boolean = false;

  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['']},
    { label: 'Temperature', icon: 'pi pi-chart-line', routerLink: 'temperature-chart'},
    { label: 'CO2', icon: 'pi pi-chart-line', routerLink: 'co2-chart'},
    { label: 'Methane', icon: 'pi pi-chart-line', routerLink: 'methane-chart'},
    { label: 'NO2', icon: 'pi pi-chart-line', routerLink: 'no2-chart'},
    { label: 'Arctic ice', icon: 'pi pi-chart-line', routerLink: 'arctic-chart'}
  ]

  toggleSidebar() : void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

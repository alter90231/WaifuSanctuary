import { Component } from '@angular/core';
import { CustomAlertComponent } from "../custom-alert/custom-alert.component";

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CustomAlertComponent],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {
  isAlertVisible = false

  showAlert(){
    this.isAlertVisible= true
    const ruborElement = document.getElementById('rubor')
    if(ruborElement){
      ruborElement.style.opacity = '1'
      ruborElement
    }
  }
}

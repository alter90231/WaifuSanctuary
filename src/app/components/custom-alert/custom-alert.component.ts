import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.css'
})
export class CustomAlertComponent {
  @Output() close = new EventEmitter<void>()

  closeAlter(){
    this.close.emit()
  }
}

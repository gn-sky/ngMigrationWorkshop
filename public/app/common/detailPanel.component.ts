import { Input, Component } from "@angular/core";

@Component({
  selector: 'detail-panel',
  templateUrl: './detailPanel.component.html'
})
export class DetailPanelComponent {
  @Input() title: string;
  @Input('collapsed') initialCollapsed: string;
  collapsed: boolean;

  ngOnChanges() {
    this.collapsed = (this.initialCollapsed === 'true');
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
}

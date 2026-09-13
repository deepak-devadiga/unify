import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavigationTile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route?: string;
  color: string;
  subsections?: NavigationTile[];
}

@Component({
  selector: 'app-navigation-subsection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'navigation-subsection.component.html',
  styles: [],
})
export class NavigationSubsectionComponent {
  @Input() subsections: NavigationTile[] = [];
}

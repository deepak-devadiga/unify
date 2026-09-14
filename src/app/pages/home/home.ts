import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

interface NavigationTile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route?: string;
  color: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  tile: NavigationTile[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly sections = signal<Section[]>([
    {
      id: uuidv4(),
      title: 'Section 1',
      description: 'Description for Section 1',
      tile: [
        {
          id: uuidv4(),
          title: 'Tile 1',
          description: 'Description for Tile 1',
          icon: 'icon-1',
          color: 'color-1',
          route: '/word-to-pdf',
        },
        {
          id: uuidv4(),
          title: 'Tile 2',
          description: 'Description for Tile 2',
          icon: 'icon-2',
          color: 'color-2',
        },
        {
          id: uuidv4(),
          title: 'Tile 3',
          description: 'Description for Tile 3',
          icon: 'icon-3',
          color: 'color-3',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Section 2',
      description: 'Description for Section 2',
      tile: [
        {
          id: uuidv4(),
          title: 'Tile 4',
          description: 'Description for Tile 4',
          icon: 'icon-4',
          color: 'color-4',
        },
        {
          id: uuidv4(),
          title: 'Tile 5',
          description: 'Description for Tile 5',
          icon: 'icon-5',
          color: 'color-5',
        },
      ],
    },
  ]);
}

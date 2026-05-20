import { Component } from '@angular/core';

type LayoutCard = {
  meta: string;
  title: string;
  description: string;
};

type LayoutSection = {
  title: string;
  description: string;
  containerClass: string;
  cardClass: string;
  cards: LayoutCard[];
};

@Component({
  selector: 'app-layouts-page',
  standalone: true,
  templateUrl: './layouts-page.html',
})
export class LayoutsPage {
  readonly layoutSections: LayoutSection[] = [
    {
      title: 'Dashboard con sidebar',
      description: 'Layout clásico para paneles administrativos con una columna fija y contenido principal flexible.',
      containerClass: 'grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]',
      cardClass: 'rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200',
      cards: [
        {
          meta: 'Sidebar',
          title: 'Menú principal',
          description: 'Agrupa accesos a secciones internas sin competir visualmente con el contenido central.',
        },
        {
          meta: 'Contenido',
          title: 'Panel central',
          description: 'Ocupa el espacio disponible con títulos, métricas y acciones prioritarias.',
        },
      ],
    },
  ];
}
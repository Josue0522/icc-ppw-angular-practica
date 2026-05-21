import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlassStatCard } from "../../../../components/ui/glass-stat-card/glass-stat-card";
import { GradientCtaBanner } from "../../../../components/ui/gradient-cta-banner/gradient-cta-banner";
import { FeatureChipList } from "../../../../components/ui/feature-chip-list/feature-chip-list";

@Component({
  selector: 'app-ui-components-page',
  imports: [GlassStatCard, GradientCtaBanner, FeatureChipList],
  templateUrl: './ui-components-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsPage {
   readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];

}
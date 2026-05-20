import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UpperCasePipe, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: "./app-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader { 

  readonly brand = signal("PPW Angular")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
      () => 
      (this.showInfo() ? 'Ocultar info':'Mostrar info'));

  changeBrand():void{
    //Actualizar el valor de la señal brand
    this.brand.update((valor) => valor + '!');
  }

  resetBrand():void{
    this.brand.set("PPW Angular")
  }

  toogleInfo(){
    this.showInfo.update((value) => !value);
  }

}

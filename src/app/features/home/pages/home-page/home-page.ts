import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "../../../../components/hero/hero";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Hero],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  
  constructor(private router:Router){}

  goToStudentsPage(){
    this.router.navigate(['/students']);
  }
}

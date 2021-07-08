import { LivreService } from '../livre.service';
import { Livre } from '../livre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrls: ['./create-livre.component.css']
})
export class CreateLivreComponent implements OnInit {

  livre: Livre = new Livre();
  submitted = false;
  constructor(private livreService: LivreService,
 private router: Router) { }

  ngOnInit() {
       this.livre.adddate=new Date().toString().slice(4,31);

  }
  newLivre(): void {
    this.submitted = false;
    this.livre = new Livre();
  }
 save() {

    this.livreService.createLivre(this.livre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.livre = new Livre();
   // this.gotoList();
  }
onError 
  onSubmit() {

    this.submitted = true;
    this.save();
  }
  //gotoList() {
   // this.router.navigate(['/livres']);
 // }
}

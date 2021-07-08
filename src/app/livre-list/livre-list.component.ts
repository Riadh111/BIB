import { LivreDetailsComponent } from './../livre-details/livre-details.component';
import { Observable } from "rxjs";
import { LivreService } from "./../livre.service";
import { Livre } from "./../livre";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-livre-list",
  templateUrl: "./livre-list.component.html",
  styleUrls: ["./livre-list.component.css"]
})
export class LivreListComponent implements OnInit {
  livres: Observable<Livre[]>;

  constructor(private livreService: LivreService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.livres = this.livreService.getLivresList();
  }

  deleteLivre(isbn: number) {
    this.livreService.deleteLivre(isbn)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  livreDetails(isbn: number){
    this.router.navigate(['details', isbn]);
  }

  updateLivre(isbn: number){
    this.router.navigate(['update', isbn]);
  }
adddate = new Date();

}

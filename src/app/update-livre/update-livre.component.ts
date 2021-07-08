import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

  isbn: number;
  livre: Livre;

  constructor(private route: ActivatedRoute,private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    this.livre = new Livre();

    this.isbn = this.route.snapshot.params['isbn'];
    
    this.livreService.getLivre(this.isbn)
      .subscribe(data => {
        console.log(data)
        this.livre = data;
      }, error => console.log(error));
  }

  updateLivre() {
    this.livreService.updateLivre(this.isbn, this.livre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.livre = new Livre();
    this.gotoList();
  }

  onSubmit() {
    this.updateLivre();    
  }

  gotoList() {
    this.router.navigate(['/livres']);
  }
}

import { Livre } from '../livre';
import { Component, OnInit, Input } from '@angular/core';
import { LivreService } from '../livre.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.css']
})
export class LivreDetailsComponent implements OnInit {

  id: number;
  livre: Livre;

  constructor(private route: ActivatedRoute,private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    this.livre = new Livre();

    this.id = this.route.snapshot.params['id'];
    
    this.livreService.getLivre(this.id)
      .subscribe(data => {
        console.log(data)
        this.livre = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['livres']);
  }
}

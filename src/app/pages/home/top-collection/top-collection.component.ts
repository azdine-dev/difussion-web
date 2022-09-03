import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-top-collection',
	templateUrl: './top-collection.component.html',
	styleUrls: ['./top-collection.component.scss']
})

export class TopCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	categories = [['all'], ['women'], ['men']];
	titles = { "all": "All", "women": "Women's", "men": "Men's" };

	constructor() { }

	ngOnInit(): void {
	}
}

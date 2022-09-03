import { Component, OnInit, Input } from '@angular/core';
import { productSlider } from '../data';

@Component({
  selector: 'molla-recent-collection',
  templateUrl: './recent-collection.component.html',
  styleUrls: ['./recent-collection.component.scss'],
})
export class RecentCollectionComponent implements OnInit {
  @Input() products = [];
  @Input() loaded = false;

  categories = [['all'], ['women'], ['men']];
  titles = { all: 'All', women: "Women's", men: "Men's" };
  sliderOption = productSlider;

  constructor() {}

  ngOnInit(): void {}
}

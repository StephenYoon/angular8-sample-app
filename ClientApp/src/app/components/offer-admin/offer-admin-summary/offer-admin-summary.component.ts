import { Component, OnInit, Input } from '@angular/core';
import * as foo from '../../../models/offer-model-interfaces';
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offer-admin-summary',
  templateUrl: './offer-admin-summary.component.html',
  styleUrls: ['./offer-admin-summary.component.scss']
})
export class OfferAdminSummaryComponent implements OnInit {
  @Input() offer: foo.Offer;
  faSave = faSave;
  faEdit = faEdit;
  isEditMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editTitleClick() {
    this.isEditMode = !this.isEditMode;
  }
}

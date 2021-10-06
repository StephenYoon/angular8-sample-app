import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer-admin-exclusion-dates',
  templateUrl: './offer-admin-exclusion-dates.component.html',
  styleUrls: ['./offer-admin-exclusion-dates.component.scss']
})
export class OfferAdminExclusionDatesComponent implements OnInit {
  @Input() offerExcludeDatesSelection: Date[]; // TODO: this has to be an array of dates, multi-select via https://www.primefaces.org/primeng/#/calendar
  @Output() updatedOfferExcludeDatesSelection = new EventEmitter<Date[]>();

  selectedSummary: string;

  constructor() { }

  ngOnInit() {
    this.getSelectedSummary();
  }

  removeFromExcludeDates(date: Date): void {
    if(!this.offerExcludeDatesSelection.length){
      return;
    }
    var index = this.offerExcludeDatesSelection.indexOf(date);
    if (index >= 0) {
      this.offerExcludeDatesSelection.splice(index, 1);
    }
  }

  updateDateSelection(): void {
    this.updatedOfferExcludeDatesSelection.emit(this.offerExcludeDatesSelection);    
    this.selectedSummary = this.offerExcludeDatesSelection.map(d => `${this.getDateFormated(d)}`).join(', ');
    //((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
  }

  getSelectedSummary(): void {
    this.selectedSummary = this.offerExcludeDatesSelection.map(d => `${this.getDateFormated(d)}`).join(', ');
  }

  getDateFormated(date: Date): string {
    let dateFormated = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
    return dateFormated;
  }
}

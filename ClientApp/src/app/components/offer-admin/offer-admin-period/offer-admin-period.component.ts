import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferDayOfWeekViewItemsEntity, OfferDayOfWeekItem, OfferDayOfWeekTimeItemsEntity } from 'src/app/models/offer-model-interfaces';
import { OfferDayOfWeekDto, OfferStartEndDateDto } from 'src/app/models/dto-models';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offer-admin-period',
  templateUrl: './offer-admin-period.component.html',
  styleUrls: ['./offer-admin-period.component.scss']
})
export class OfferAdminPeriodComponent implements OnInit {
  // Note: months are zero-based
  @Input() offerStartDate: Date; 
  @Input() offerEndDate: Date;
  @Input() offerDayOfWeekViewItems: OfferDayOfWeekViewItemsEntity[];
  @Output() updateOfferStartEndDate = new EventEmitter<OfferStartEndDateDto>();
  @Output() updateOfferPeriodAllBusinessHours = new EventEmitter<boolean>();
  @Output() updateOfferDayAndTimeRanges = new EventEmitter<OfferDayOfWeekDto[]>();

  faCheck = faCheck;

  toggleAllBusinessHours: boolean;
  csvTimeRangeWarnings: string[];
  
  daysOfWeek: OfferDayOfWeekDto[] = [
    { codeDayOfWeekId: 0, dayCode: '0', dayName: 'Sunday',    csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 1, dayCode: '1', dayName: 'Monday',    csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 2, dayCode: '2', dayName: 'Tuesday',   csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 3, dayCode: '3', dayName: 'Wednesday', csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 4, dayCode: '4', dayName: 'Thursday',  csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 5, dayCode: '5', dayName: 'Friday',    csvTimeRanges: '', warningMessages: '', daySelected: true },
    { codeDayOfWeekId: 6, dayCode: '6', dayName: 'Saturday',  csvTimeRanges: '', warningMessages: '', daySelected: true }
  ]

  constructor() { }

  ngOnInit() {
    this.toggleAllBusinessHours = true;
    this.getOfferDayOfWeeks();
  }

  getOfferDayOfWeeks(): OfferDayOfWeekDto[] {    
    // extract out offerDays from view model
    var offerDays = this.offerDayOfWeekViewItems.map(o => o.offerDayOfWeekItem);

    // update csvTimeRanges
    if (offerDays && offerDays.length) {
      this.toggleAllBusinessHours = false;

      offerDays.forEach(day => {
        let csvTimes = this.getOfferDayOfWeekTimesCsv(day.codeDayOfWeekId, this.offerDayOfWeekViewItems);
        this.daysOfWeek.filter(d => d.dayCode == day.codeDayOfWeekItem.dayOfWeekCode)[0].csvTimeRanges = csvTimes;
      });  
    } else {
      this.toggleAllBusinessHours = true;
    }

    return this.daysOfWeek;
  }
  
  getOfferDayOfWeekTimesCsv(codeDayOfWeekId: number, offerDayViewItems: OfferDayOfWeekViewItemsEntity[]): string {    
    let offerDayViewItem = offerDayViewItems.filter(o => o.offerDayOfWeekItem.codeDayOfWeekItem.codeDayOfWeekId == codeDayOfWeekId);
    if (!offerDayViewItem || !offerDayViewItem.length) {
      return null;
    }    
    if (!offerDayViewItem[0].offerDayOfWeekTimeItems || !offerDayViewItem[0].offerDayOfWeekTimeItems.length) {
      return null;
    }
    
    let offerDayOfWeekTimes = offerDayViewItem[0].offerDayOfWeekTimeItems;

    let timeSpans: string[] = [];
    offerDayOfWeekTimes.forEach(item => timeSpans.push(item.startTime + "-" + item.endTime));

    return timeSpans.toString()
  }

  onStartEndDateChange(): void {
    this.updateOfferStartEndDate.emit({ startDate: this.offerStartDate, endDate: this.offerEndDate });
  }

  onToggleAllBusinessHoursChange(): void {
    this.updateOfferPeriodAllBusinessHours.emit(this.toggleAllBusinessHours);
  }

  onDayChange(offerDay: OfferDayOfWeekDto): void {
    offerDay.daySelected = !offerDay.daySelected;

    // if day is selected, validate time ranges
    let areValuesValid = this.validateTimeRangeValues();

    if (areValuesValid) {
      this.updateOfferDayAndTimeRanges.emit(this.daysOfWeek);
    }    
  }

  onCsvTimeRangeChange(): void {
    this.validateTimeRangeValues();
  }

  // if a time range is invalid in any of the offer days, return false
  validateTimeRangeValues(): boolean {
    this.csvTimeRangeWarnings = [];
    for (let day of this.daysOfWeek) {
      if (!day.daySelected) {
        continue;
      }
      let validationWarnings = this.validateTimeRangeCsv(day.dayName, day.csvTimeRanges);
      if (validationWarnings.length){
        this.csvTimeRangeWarnings = this.csvTimeRangeWarnings.concat(validationWarnings);
      }
    }

    // if there are no warning, emit updates back to main component
    if (!this.csvTimeRangeWarnings.length) {
      this.updateOfferDayAndTimeRanges.emit(this.daysOfWeek);
    }

    return this.csvTimeRangeWarnings.length ? false : true;
  }
    
  /*
    Time range in the form of: 8:00-12:00,13:00-16:30
    - time values are corrects
    - has start and end times per time range
    - time ranges don't overlap
    - start time < end time
    */
  validateTimeRangeCsv(dayName: string, timeRangeCsv: string): string[] {

    let timeFormatWithoutSeconds = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]$/;
    let timeFormatWithSeconds = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/;
    let warnings: string[] = [];

    if (!timeRangeCsv) {
      warnings.push(`${dayName}: could not find a time range`);
      return warnings;
    }

    let timeRanges = timeRangeCsv.split(',');
    for (let timeRange of timeRanges) {
      let times = timeRange.split('-');

      // Must have start & end time (2 time values)
      if (!timeRange || times.length != 2) {
        warnings.push(`${dayName}: could not find a start & end time value separated with a hyphen from ${timeRange}`);
        continue;
      }

      // Both start and end time values must parse as an actual time.
      for (let timeValue of times) {
        let isValidTime1 = timeFormatWithoutSeconds.test(timeValue);
        let isValidTime2 = timeFormatWithSeconds.test(timeValue);
        if (!isValidTime1 && !isValidTime2) {
          warnings.push(`${dayName}: could not convert ${timeValue} to a time`)
        }
      }
      
      // ensure start time < end time (there should be a start and end time if we reached this point)
      let startTimeParts = times[0].split(':');
      let endTimeParts = times[1].split(':');
      if (parseInt(startTimeParts[0]) >= parseInt(endTimeParts[0])) {
        warnings.push(`${dayName}: start time should be less then end time in ${timeRange}`)
      }
    }
    
    // Time ranges must not overlap, example, this is invalid: 8:00-16:00,15:00-19:30
    // - iterate "-1" as we check ahead
    if(timeRanges.length > 1) {
      for (var i = 0; i < (timeRanges.length - 1); i++) {
        let timesCurrent = timeRanges[i].split('-');
        let timesNext = timeRanges[i+1].split('-');
        if(timesCurrent[1] >= timesNext[0]) {
          warnings.push(`${dayName}: found overlapping time ranges in ${timeRangeCsv}`)
        }
      }
    }

    return warnings;
  }
}

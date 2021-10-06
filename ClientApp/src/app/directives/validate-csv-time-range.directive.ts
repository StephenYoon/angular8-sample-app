import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/*
  Time range in the form of: 8:00-12:00,13:00-16:30
  - time values are corrects
  - has start and end times per time range
  - time ranges don't overlap
  - start time < end time
  */
export function validateTimeRangeCsv(control: AbstractControl): {[key: string]: any} {
  // TODO
  let warnings: string[] = [];
  let timeRangeCsv = control.value;

  if (!control.value) {
    return null;
  }

  let timeRanges = timeRangeCsv.split(',');
  for (let timeRange of timeRanges) {
    let times = timeRange.split('-');

    // Must have start & end time (2 time values)
    if (!timeRange || timeRange.length != 2) {
      warnings.push(`Could not determine a start & end time value separated with a hyphen from ${timeRange}.`);
      continue;
    }

    // Both start and end time values must parse as an actual time.
    for (let timeValue of times) {
      let isValidTimeValue = Date.parse(timeValue);
      if (!isValidTimeValue) {
        warnings.push(`${timeValue} could not be converted to a time.`)
      }
    }
  }
  
  // Time ranges must not overlap, example, this is invalid: 8:00-16:00,15:00-19:30
  // - iterate "-1" as we check ahead
  if(timeRanges.length > 1) {
    for (var i = 0; i < (timeRanges.length - 1); i++) {
      let timeRangeCurrent = timeRanges[i].split('-');
      let timeRangeNext = timeRanges[i+1].split('-');

      let timesCurrent = timeRanges[i].split('-');
      let timesNext = timeRanges[i+1].split('-');
      if(timesCurrent[1] >= timesNext[0]) {
        warnings.push(`${timeRangeCsv} has overlapping time ranges.`)
      }
    }
  }

  return warnings.length ? {'forbiddenTimeRange': {value: warnings.join("\r\n")}} : null;
  //return warnings.length ? warnings.join("\r\n") : '';
}

@Directive({
  selector: '[appValidateCsvTimeRange]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateCsvTimeRangeDirective, multi: true}]
})
export class ValidateCsvTimeRangeDirective implements Validator {
  @Input('appValidateCsvTimeRange') timeRangeCsv: string;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    let validatorResult = validateTimeRangeCsv(control);
    return this.timeRangeCsv ? validatorResult : null;
  }
}

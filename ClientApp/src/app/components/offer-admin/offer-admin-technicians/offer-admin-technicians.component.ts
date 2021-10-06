import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OffersService } from '../../../services/offers.service';

import * as roo from '../../../models/workforce-model-interface';
import { WorkforceDto } from '@app/models/dto-models';

@Component({
  selector: 'app-offer-admin-technicians',
  templateUrl: './offer-admin-technicians.component.html',
  styleUrls: ['./offer-admin-technicians.component.scss']
})
export class OfferAdminTechniciansComponent implements OnInit {
  @Input() locationId: number;
  @Input() workforceIds: number[];
  @Output() selectedTechniciansUpdate = new EventEmitter<WorkforceDto[]>();
  @Output() selectedTechnicianToggleUpdate = new EventEmitter<boolean>();

  techniciansFormControl: FormControl = new FormControl();

  toggleAnyTechnician: boolean = true;
  technicians: roo.WorkforceView[];
  technicianDtos: WorkforceDto[];
  selectedSummary: string;

  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.technicianDtos = [];
    this.toggleAnyTechnician = this.workforceIds && this.workforceIds.length ? false : true;
    this.getTechnicianByLocationId(this.locationId);
  }

  getTechnicianByLocationId(id: number): void {
    this.offerService.getWorkforceByLocationId(id).subscribe(data => {
      this.technicians = data;
      this.technicianDtos = this.technicians
        //.filter(x => x.workforceItem.isActive)
        .map(x => ({
          workforceId: x.workforceItem.workforceId,
          firstName: x.workforceItem.firstName,
          lastName: x.workforceItem.lastName,
          email: x.workforceItem.email,
          genderCode: x.workforceItem.codeGenderItem.genderCode,
          genderName: x.workforceItem.codeGenderItem.genderName,
          isSelected: this.workforceIds ? (this.workforceIds.indexOf(x.workforceItem.workforceId) >= 0) : false
        }));
        this.techniciansFormControl = new FormControl(this.workforceIds);
        this.updateTechSelection(this.workforceIds)
    });
  }

  toggleChange(event): void {
    this.selectedTechnicianToggleUpdate.emit(this.toggleAnyTechnician);
  }

  updateTechSelection(techIds: number[]): void {
    for (let tech of this.technicianDtos){
      tech.isSelected = (techIds.includes(tech.workforceId));
    }
    let selectedTechs = this.technicianDtos.filter(t => t.isSelected);
    this.selectedSummary = selectedTechs.map(s => `${s.firstName} ${s.lastName} (${s.genderCode})`).join(', ');
    this.selectedTechniciansUpdate.emit(selectedTechs);
  }

  selectionChange(event): void {
    let techIds = event.value;
    this.updateTechSelection(techIds);
  }
}

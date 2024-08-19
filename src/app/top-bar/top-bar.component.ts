

import { CdkStep } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent {
  @ViewChild(MatStepper) stepper: MatStepper | any;

  firstFormGroup = this._formBuilder.group({
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });
  secondFormGroup = this._formBuilder.group({
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });

  isLinear = false;
  selectedCountry: any = null;
  countries = [
    { code: 'us', name: 'United States', flag: 'us' },
    { code: 'fr', name: 'France', flag: 'fr' },
    { code: 'de', name: 'Germany', flag: 'de' },
  ];
  mobileNumber: any = '';
  activeStep = 0;
  isStep1Complete = false;
  isStep2Complete = false;
  selectedCompany: any;
  displayCountryAndMobile: boolean = true;
  displayCompany: boolean = false;
  activeIndex = 0;

  constructor(private _formBuilder: FormBuilder) {
  }

  setActiveStep(step: number): void {
    this.activeStep = step;
  }

  // Define logic to check if a step is complete
  isStepComplete(index: number): boolean {
    // For demonstration, assume no steps are complete
    return false;
  }

  // Determine if a step is currently active
  isActiveStep(index: number): boolean {
    return this.activeIndex === index;
  }

  // Handle step changes to update the active step index
  onStepChange(event: any) {
    this.activeIndex = event.selectedIndex;
    const step: CdkStep = event.selectedStep;
    console.log('activeIndex', this.firstFormGroup);
    // Add your condition to check if navigation is allowed
    if (this.activeIndex === 1 && this.firstFormGroup.invalid) {
      event.previouslySelectedStep.selected = true;
      this.stepper.selectedIndex = 0;
      // Optionally show a message or alert
      // alert('Please complete the form before proceeding.');
    }
  }

  // Get the icon for a step based on its state
  getIconForStep(index: number): string {
    if (this.isActiveStep(index)) {
      return 'circle'; // Filled circle for the active step
    } else {
      return 'radio_button_unchecked'; // Empty circle for inactive steps
    }
  }

  receiveMessage($event: any) {
    this.selectedCountry = $event;
    console.log($event);
  }


  // Method to handle image selection
  // selectImage(index: number): void {
  //   this.images.forEach((img, i) => img.selected = i === index);
  // }

  items = [
    { title: 'DU', image: 'assets/du.png' },
    { title: `Etisalat's`, image: 'assets/et.png' },
    { title: 'Virgin Mobile', image: 'assets/vm.png' },
    { title: 'Nol', image: 'assets/nol.png' }
  ];

  productList = [
    { value: 10, country: 'AED' },
    { value: 20, country: 'AED' },
    { value: 30, country: 'AED' },
    { value: 40, country: 'AED' },
    { value: 50, country: 'AED' },
    { value: 60, country: 'AED' },
  ]
  normalItem = { title: 'Normal Box', image: 'https://via.placeholder.com/300x200' };

  selectItem(item: any) {
    this.displayCountryAndMobile = false;
    this.displayCompany = false;
    this.selectedCompany = item;
    console.log('Selected item:', item);
  }

  nextStep(value: boolean) {
    console.log(this.firstFormGroup.value);
    this.secondFormGroup.patchValue({
      mobileNumber: this.firstFormGroup.value['mobileNumber']
    });
    if (!value)
      this.displayCompany = true;
  }

  goToStep(value: any) {
    this.stepper.selectedIndex = 0;
  }
}

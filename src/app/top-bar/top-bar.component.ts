

import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {

  
  firstFormGroup = this._formBuilder.group({
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;
  selectedCountry: any = null;  
  countries = [
    { code: 'us', name: 'United States', flag: 'us' },
    { code: 'fr', name: 'France', flag: 'fr' },
    { code: 'de', name: 'Germany', flag: 'de' },
  ];
  mobileNumber: any = '';

  
  // images = [
  //   { src: 'assets/du.png', alt: 'Image 1', title: 'Title 1', background: 'lightblue', selected: false },
  //   { src: 'assets/du.png', alt: 'Image 2', title: 'Title 2', background: 'lightgreen', selected: false },
  //   { src: 'assets/du.png', alt: 'Image 3', title: 'Title 3', background: 'lightcoral', selected: false },
  //   { src: 'assets/du.png', alt: 'Image 4', title: 'Title 4', background: 'lightgoldenrodyellow', selected: false }
  // ];

  //New design
  activeStep = 0;
  isStep1Complete = false;
  isStep2Complete = false;
  selectedCompany: any;


  setActiveStep(step: number): void {
    this.activeStep = step;
  }

  constructor(private _formBuilder: FormBuilder) {
  }

  
  activeIndex = 0;
  
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
  }

  // Get the icon for a step based on its state
  getIconForStep(index: number): string {
    if (this.isActiveStep(index)) {
      return 'circle'; // Filled circle for the active step
    } else {
      return 'radio_button_unchecked'; // Empty circle for inactive steps
    }
  }

  receiveMessage($event: any){
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

  productList =[
    { value: 10 , country: 'AED' },
    { value: 20 , country: 'AED' },
    { value: 30 , country: 'AED' },
    { value: 40 , country: 'AED' },
    { value: 50 , country: 'AED' },
    { value: 60 , country: 'AED' },
  ] 
  normalItem = { title: 'Normal Box', image: 'https://via.placeholder.com/300x200' };

  selectItem(item: any) {
    this.selectedCompany = item;
    console.log('Selected item:', item);
    // Add any additional logic needed for selection
  }
}

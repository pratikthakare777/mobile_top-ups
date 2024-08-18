import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';


@Component({
  selector: 'app-country-dropdown',
  standalone: false,
  templateUrl: './country-dropdown.component.html',
  styleUrl: './country-dropdown.component.scss'
})
export class CountryDropdownComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedCompany: any;
  
  isOpen = false;
  searchTerm = '';
  selectedCountry: any = null;
  countries = [
    { name: 'India', flag: 'in', code: '+91' },
    { name: 'United States', flag: 'us', code: '+1' },
    { name: 'France', flag: 'fr', code: '+33' },
    { name: 'Germany', flag: 'de', code: '+49' },
    // Add more countries as needed
  ];
  filteredCountries = this.countries;
  error: any;

  constructor(private dataService: DataService, private fb: FormBuilder) {}
  
  ngOnInit() {
    this.dataService.getCountries().subscribe({
      next: (data: any) => {
        console.log('data', data);
        this.countries = data;
      },
      error: (err: any) => {
        this.error = 'Failed to load countries';
        console.error(err);
      }
    });
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.isOpen = false;
    this.notify.emit(this.selectedCountry);
  }

  filterCountries() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(term)
    );
  }

  // try {
  //   const parsedNumber = parsePhoneNumber(phoneNumber, countryCode);
  //   return parsedNumber.isValid() ? null : { invalidPhoneNumber: true };
  // } catch (error) {
  //   return { invalidPhoneNumber: true };
  // }

}

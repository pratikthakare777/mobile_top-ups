import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipients-details',
  templateUrl: './recipients-details.component.html',
  styleUrl: './recipients-details.component.scss'
})
export class RecipientsDetailsComponent {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedCompany: any;
  @Input() mobileNumber: any;
  // @Input() selectedCountryFromParent: any;
  private _myInputValue: string = '';

  @Input()
  set myInputValue(value: string) {
    console.log('country',value);
    // Perform any transformation or logic here before setting the value
    this._myInputValue = value;
    this.selectedCountry= value;
    // Optionally call another method to handle the updated value
  }

  get myInputValue(): string {
    return this._myInputValue;
  }
  
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
}

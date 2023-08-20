import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/core/api.service';
import { checkData, fullData } from './interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  city = "";
  error = false;
  typo = false;
  checkAPI!: checkData;
  dataAPI!: fullData;
  emptyCheck!: checkData;
  emptyData!: fullData;

  constructor(private service: APIService) {}

  inputData = new FormGroup({
    search: new FormControl(''),
  });

  checkData(city: string) {
    return this.service.checkCity(city);
  }

  getData(city: string) {
    return this.service.getData(city);
  }

  onSubmit() {
    const userInput = this.inputData.value.search;
    if (userInput) {
      this.checkData(userInput).subscribe(check => {
        this.checkAPI = check[0];
        this.getData(userInput).subscribe((data) => {
          this.dataAPI = data;
          console.log(this.dataAPI);
          if (data.name != check[0].name) {
            this.typo = true;
            console.log("Typo?");
          }}, (err) => {
            this.error = true;
            this.checkAPI = this.emptyCheck;
            this.dataAPI = this.emptyData;
            console.log("Error");
        });
      });
    }
    this.typo = false;
    this.error = false;
  }
}

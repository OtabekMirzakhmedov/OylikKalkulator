import { Component , OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'OylikKalkulator';
  daraja = 'option0';
  oylik: number = 0;
  univerReyting = 'top0';
  univerReytingiUstamasi = 0;
  value = 0;
  ustama: number = 0;
  summa: number = 0;
  kpi: number = 0;
  
  updateUstama(event: any) { 
    this.ustama = event.value;
  }
  
  updateKpi(event: any) {
    this.kpi = event.value;
  }

  
  
  ngOnInit(): void {
    if (this.daraja == 'option0') {
      this.oylik = 0;
      
    }
    
  }

  Calculate() {
    switch (this.daraja) {
      case 'option0': this.oylik = 0; break;
      case 'option1': this.oylik = 9000000; break;
      case 'option2': this.oylik = 8000000; break;
      case 'option3': this.oylik = 7000000; break;
      case 'option4': this.oylik = 6000000; break;
      case 'option5': this.oylik = 6000000; break;
    }

    switch (this.univerReyting) {
      case 'top100': this.univerReytingiUstamasi = this.oylik; break;
      case 'top300': this.univerReytingiUstamasi = this.oylik * 0.6; break;
      case 'top500': this.univerReytingiUstamasi = this.oylik * 0.4; break;
      case 'top1000': this.univerReytingiUstamasi = this.oylik * 0.1; break;
      case 'top1000+': this.univerReytingiUstamasi = this.oylik * 0; break;
      case 'top0': this.univerReytingiUstamasi = this.oylik * 0; break;
    }

    this.summa = this.oylik + this.univerReytingiUstamasi + this.oylik * this.ustama / 100 + this.oylik * this.kpi / 100;



  }

}

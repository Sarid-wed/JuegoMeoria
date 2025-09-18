import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: false,
  templateUrl: './carta.html',
  styleUrls: ['./carta.css']


})
export class Carta {

VolteaNumero1 = 0;
VolteaNumero2 = 0;
VolteaNumero3 = 0;
VolteaNumero4 = 0;
VolteaNumero5 = 0;
VolteaNumero6 = 0;
VolteaNumero7 = 0;
VolteaNumero8 = 0;
VolteaNumero9 = 0;
VolteaNumero10 = 0;
VolteaNumero11 = 0;
VolteaNumero12 = 0;
VolteaNumero13 = 0;
VolteaNumero14 = 0;
VolteaNumero15 = 0;
VolteaNumero16 = 0;

aumentar1() {
  
      this.VolteaNumero1++;


    
  }
 aumentar2() {
  this.VolteaNumero2 += 1;
}

aumentar3() {
  this.VolteaNumero3 += 1;
  this.giro();
}

aumentar4() {
  this.VolteaNumero4 += 1;
}

aumentar5() {
  this.VolteaNumero5 += 1;
}

aumentar6() {
  this.VolteaNumero6 += 1;
}

aumentar7() {
  this.VolteaNumero7 += 1;
}

aumentar8() {
  this.VolteaNumero8 += 1;
}

aumentar9() {
  this.VolteaNumero9 += 1;
}

aumentar10() {
  this.VolteaNumero10 += 1;
}

aumentar11() {
  this.VolteaNumero11 += 1;
}

aumentar12() {
  this.VolteaNumero12 += 1;
}

aumentar13() {
  this.VolteaNumero13 += 1;
}

aumentar14() {
  this.VolteaNumero14 += 1;
}

aumentar15() {
  this.VolteaNumero15 += 1;
}

aumentar16() {
  this.VolteaNumero16 += 1;
}

giro() {
  if (this.VolteaNumero1 === 1 && this.VolteaNumero3 === 1) {
    this.VolteaNumero1 = 1;
    this.VolteaNumero3 = 1;

  } else {
    setTimeout(() => {
      this.VolteaNumero1 = 0;
      this.VolteaNumero3 = 0;
    }, 1000); 
  }
}
}
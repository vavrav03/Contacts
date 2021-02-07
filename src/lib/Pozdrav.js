function Pozdrav() {
   let pozdrav = "Dobré ráno!";
   let cas = new Date().getHours();
   if (cas <= 2) {
      pozdrav = "Dobrou noc!";
   } else if (cas <= 8) {
      pozdrav = "Dobré ráno!";
   } else if (cas <= 11) {
      pozdrav = "Dobré dopoledne!";
   } else if (cas <= 12) {
      pozdrav = "Dobré poledne a dobrou chuť, pokud právě obědváte!";
   } else if (cas <= 16) {
      pozdrav = "Dobré odpoledne!";
   } else if (cas <= 19) {
      pozdrav = "Dobrý podvečer!";
   } else if (cas <= 22) {
      pozdrav = "Dobrý večer!";
   } else if (cas <= 23) {
      pozdrav = "Dobrou noc!";
   } else {
      pozdrav = "Dobrý den!";
   }
   return pozdrav;
}
export default Pozdrav;

var age = prompt("¿Cuántos años tienes?");
   if(age <= 3) {
   alert("toddler");
   }

   if(age > 3 && age <= 5) {
   alert("preschool");
   }

   if(age > 5 && age <= 12) {
   alert("gradeschool");
   }

   if(age >12 && age <= 18) {
   alert("teen");
   }

   if(age >18 && age <= 21) {
   alert("young adult");
   } else {
   alert("Adult");
   }
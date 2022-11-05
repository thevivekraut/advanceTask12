class student{
   constructor(name,age,marks){
       this.name=name;
       this.age=age;
       this.marks=marks;
   }
   
   setPlacementAge(MinPlacement){
      console.log(this);
      return (minMarks) => {
         if(this.marks > minMarks && this.age > MinPlacement){
            console.log(this.name + " is ready for placement")
         }
         else{
            console.log(this.name + " is not ready for placement")
         }
      }
   }
}

const vivek = new student('Vivek',20,75);
const kartik = new student('Kartik',21,79);

vivek.setPlacementAge(18)(40);
kartik.setPlacementAge(18)(40);

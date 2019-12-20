


class Greeter{

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showGreeting() {
      //  console.log ('From show greeting function '+ this.firstName + ' ' + this.lastName );
        const row2 = document.getElementById("r1c2");
       // console.log('row2', row2, 'doc', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName;
    }

    resetGreeting(){
      //  console.log ('From show greeting function '+ this.firstName + ' ' + this.lastName );
        const row2 = document.getElementById("r1c2");
     //   console.log('row2', row2, 'doc', document);
        row2.innerHTML = 'r1c2';
    }
}


  const greet = new Greeter('Chad','Nickel');

 


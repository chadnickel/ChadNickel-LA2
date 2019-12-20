var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        console.log('From show greeting function ' + this.firstName + ' ' + this.lastName);
        var row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'doc', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName;
    };
    Greeter.prototype.resetGreeting = function () {
        console.log('From show greeting function ' + this.firstName + ' ' + this.lastName);
        var row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'doc', document);
        row2.innerHTML = 'r1c2';
    };
    return Greeter;
})();
//window.onload = () => {
var greet = new Greeter('Chad', 'Nickel');
// greet.showGreeting(); 
//}

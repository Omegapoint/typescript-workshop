function printHelloWorld(person: string, element: string) {
    document.getElementById(element).innerHTML = "Hello " + person;
}

var user: string = "Daniel";
var element: string = "welcome-text";

printHelloWorld(user, element);
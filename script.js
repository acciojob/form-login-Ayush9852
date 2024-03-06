function getFormvalue() {
    //Write your code here
	event.preventDefault();
	var form = document.getElementById("form1");

	// Get the values of first name and last name input fields
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

	alert( firstName + " " + lastName);

}

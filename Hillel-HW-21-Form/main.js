function myTable(forms) {
    let form = document.getElementById("form");
    let table = document.getElementById("myTable");

    let firstName = form.elements["firstName"].value;
    let lastName = form.elements["lastName"].value;
    let birthday = form.elements["birthday"].value;
    let genderInputs = form.elements["gender"];
        let gender;
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
        }
    }
    
    let city = form.elements["city"].value;
    let adress = form.elements["adress"].value;

    let languageInputs = form.querySelectorAll('input[name="language"]:checked');
    let languages = Array.from(languageInputs).map(function(input) {
        return input.value;
    }).join(", ");

    let newRow = table.insertRow(-1);
    let cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6)
    ];

    cells[0].innerHTML = firstName;
    cells[1].innerHTML = lastName;
    cells[2].innerHTML = birthday;
    cells[3].innerHTML = gender;
    cells[4].innerHTML = city;
    cells[5].innerHTML = adress;
    cells[6].innerHTML = languages;

    form.reset();
    table.style.display = "table";
}
myTable();
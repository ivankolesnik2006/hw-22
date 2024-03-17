function showTable() {
    const form = document.getElementById('regForm');
    const userData = document.getElementById('userData');
    const tableBody = document.getElementById('userDataTable');

    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;
    const dOfB = form.elements['dOfB'].value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const city = form.elements["city"].value;
    const address = form.elements["address"].value;
    const languages = [];
    const languageCheckboxes = form.querySelectorAll('input[name="language"]:checked');
        for (let i = 0; i < languageCheckboxes.length; i++) {
            languages.push(languageCheckboxes[i].value);
        }
    
    tableBody.innerHTML = `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${dOfB}</td>
            <td>${gender}</td>
            <td>${city}</td>
            <td>${address}</td>
            <td>${languages.join(', ')}</td>
        </tr>
    `;

    userData.style.display = "block";
}
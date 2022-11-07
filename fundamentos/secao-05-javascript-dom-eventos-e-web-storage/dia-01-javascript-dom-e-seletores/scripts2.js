function getFormValue() {
    const form = document.querySelector('#form1');
    const firstName = document.getElementsByName('fname')[0].value;
    const lastName = document.getElementsByName('lname')[0].value;
    console.log(firstName);
    console.log(lastName);
}
getFormValue();

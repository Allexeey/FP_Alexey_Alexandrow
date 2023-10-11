let userName = inputUserName();
while (!userName || userName === "") {
    alert('Введите корректное имя пользователя');
    userName = inputUserName();
}

let age = inputAge();
while (!age || age === "" || isNaN(+age) || +age <= 0 || age > 100) {
    alert(`Введите корректный возраст`);
    age = inputAge();
}

const upUsername = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
const message = `Привет, ${upUsername.replace(/[0-9]|\s/g,'')}, тебе уже ${age.replace(/\s/g,'')} лет!`
alert(message);

function inputUserName() {
    return prompt('Как вас зовут?');
}

function inputAge() {
    return prompt('Сколько вам лет?');
}
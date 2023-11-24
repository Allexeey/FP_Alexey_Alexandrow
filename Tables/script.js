var data;
var selectedGuest;
var selectedTeacher;

var guestBody;
var activitiesBody;
var teacherBody;
var equipmentBody;

window.onload = function () {

    guestBody = document.getElementById('guest');
    activitiesBody = document.getElementById('activities');
    teacherBody = document.getElementById('teacher');
    equipmentBody = document.getElementById('equipment');


    const removeMeactivitiesBtn = document.getElementById('removemeActivities');
    removeMeactivitiesBtn.addEventListener("click", () => {
        if (!selectedGuest) return;
        selectedGuest.allActivities.shift();
        viewData();
    });

    const removeTeacherBtn = document.getElementById('removeTeacher');
    removeTeacherBtn.addEventListener("click", () => {
        if (!selectedGuest) return;
        selectedGuest.teachers.shift();
        viewData();
    });

    const removeEquipmentBtn = document.getElementById('removeEquipment');
    removeEquipmentBtn.addEventListener("click", () => {
        if (!selectedGuest) return;
        selectedGuest.equipment.shift();
        viewData();
    });

    const removemeGuestBtn = document.getElementById('removemeGuest');
    removemeGuestBtn.addEventListener("click", () => {
        if (data.length == 0) return;
        data.shift();
        viewData();
    });
    const addGuestBtn = document.getElementById('addGuest');
    addGuestBtn.addEventListener("click", () => {
        data.push(getNewguest());
        viewData();
    });

    const updateGuestBtn = document.getElementById('updateGuest');
    updateGuestBtn.addEventListener("click", () => {
        if (!selectedGuest) return;
        selectedGuest.fName = 'new fName'
        selectedGuest.lname = 'new lname'
        selectedGuest.age = 12
        viewData();
    });

    const buttonRestore = document.getElementById('restore');
    buttonRestore.addEventListener("click", () => {
        data = getTestData();
        viewData();
    });

    data = getTestData();
    viewData();
};

function viewData() {
    console.log(data);

    if (data.length == 0) {
        guestBody.innerHTML = '';
        activitiesBody.innerHTML = '';
        teacherBody.innerHTML = '';
        equipmentBody.innerHTML = '';

        return;
    }

    guestBody.innerHTML = '';

    for (const guest of data) {

        let row = `<tr> <td>${guest.fName}</td> <td>${guest.lname}</td> <td>${guest.age}</td> </tr>`
        guestBody.innerHTML += row;
    }

    const rows = guestBody.getElementsByTagName('tr');
    Array.from(rows).forEach((row, index) => {
        row.addEventListener("click", () => {
            selectedGuest = data[index];
            viewGuestData()
        });
    });

    if (data.length > 0) {
        selectedGuest = data[0];
        viewGuestData();
    }

}

function viewGuestData() {
    if (!selectedGuest) return;

    activitiesBody.innerHTML = '';
    teacherBody.innerHTML = '';
    equipmentBody.innerHTML = '';

    for (const medicine of selectedGuest.equipment) {
        let row = `<tr> <td>${medicine.name}</td> <td>${medicine.dose}</td> </tr>`
        equipmentBody.innerHTML += row;
    }

    for (const teacher of selectedGuest.teachers) {
        let row = `<tr> <td>${teacher.fName}</td> <td>${teacher.lname}</td> <td>${teacher.profile}</td> <td>${teacher.experience}</td> </tr>`
        teacherBody.innerHTML += row;
    }

    for (const allActivities of selectedGuest.allActivities) {
        let row = `<tr> <td>${allActivities.title}</td> <td>${allActivities.value}</td> </tr>`
        activitiesBody.innerHTML += row;
    }
}
let a = document.getElementById('spis');
let b = 1;
let p = 0;
document.getElementById('add_info').style.display = 'none';

function obshak() {
    if (a.value === "1") {
        document.getElementById('perviy_otpravka').style.display = 'block';
        document.getElementById('obshiy').style.display = 'none';
    } else if (a.value === "2") {
        document.getElementById('vtoroy_otpravka').style.display = 'block';
        document.getElementById('obshiy').style.display = 'none';
    }
}

function perviy() {
    let g = document.getElementById('Name_One').value;
    document.getElementById('result').insertAdjacentHTML('beforeend', 'Данные добавлены <br>');
    document.getElementById('result').insertAdjacentHTML('beforeend', `id: ${b} | Запись: ${g}<br>`);
    b += 1;
    document.getElementById('ID').value = b;
    document.getElementById('perviy_otpravka').style.display = 'none';
    document.getElementById('obshiy').style.display = 'block';
    
}

function vtoroy() {
    let g = document.getElementById('Name_Two').value;
    document.getElementById('result').insertAdjacentHTML('beforeend', 'Таблица добавлена <br>');
    document.getElementById('result').insertAdjacentHTML('beforeend', `
    <table id="tab">
    <th colspan="2"><h3>${g}</h3></th>
    </table>`);
    b += 1;
    document.getElementById('ID').value = b;

    let closeButtonContainer = document.getElementById('closeButtonContainer');
    if (closeButtonContainer.innerHTML === '') {
        closeButtonContainer.insertAdjacentHTML('beforeend', '<button onclick="closeTable()" id="close_tab">Закрыть таблицу</button>');
    }
    let dobav_danie = document.getElementById('dobav_danie');
    if (dobav_danie.innerHTML === '') {
        dobav_danie.insertAdjacentHTML('beforeend', '<button onclick="DobavDanie()" id="DobavDanie">Добавить данные</button>');
    }
    document.getElementById('Name_Two').style.display = 'none';
    document.getElementById('butt_click').style.display = 'none';
    document.getElementById('add_info').style.display = 'block';
}

function closeTable() {
    document.getElementById('result').insertAdjacentHTML('beforeend', 'Таблица закрыта');
    document.getElementById('vtoroy_otpravka').style.display = 'none';
    document.getElementById('obshiy').style.display = 'block';
    document.getElementById('close_tab').remove();
}

function DobavDanie() {
    let d = document.getElementById('add_info').value;
    p += 1;
    document.getElementById('tab').insertAdjacentHTML('beforeend',
        `<tr>
        <td>${p}</td>
        <td>${d}</td>
    </tr>`);
}
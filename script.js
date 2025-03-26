function loadGuitars() {
    fetch('./json/objects.json')
        .then(response => response.json())
        .then(data => {
            const guitars = data.guitars;
                console.log(guitars);
                SelectGuitar(guitars);
        })
        .catch(error => {
            console.error("Erreur lors du filtrage des guitares : ", error);
        });
}


function SelectGuitar(obj) {
    const container = document.getElementById('container');
    container.innerHTML = "";
    obj.forEach(guitar => {
        const select = document.querySelector('.style');
        const selectedOptions = select.options[select.selectedIndex];
        if (selectedOptions.value === 'all') {
            CreateCard(guitar);
        } else if (selectedOptions.id === 'electric') {
            if (guitar.type === 'electric') {
                CreateCard(guitar);
            }
        } else if (selectedOptions.id === ('acoustic')) {
            if (guitar.type === 'acoustic') {
                CreateCard(guitar);
            }
        } else {
            CreateCard(guitar);
        }
    });
}

const select = document.querySelector('.style');
select.addEventListener('change', function() {
    loadGuitars();
});

function CreateCard(guitar) {
    const container = document.getElementById('container');
    const div1 = document.createElement('div');
    div1.classList.add('card-content');
    const div2 = document.createElement('div');
    div2.classList.add('card-picture');
    const divPrin = document.createElement('div');
    divPrin.classList.add('card');
    const spec = document.createElement('h4');
    const brand = document.createElement('h3');
    const model = document.createElement('h5');

    const pickups = document.createElement('ul');
    const pickup1 = document.createElement('li');
    const pickup2 = document.createElement('li');
    const pickup3 = document.createElement('li');

    const body = document.createElement('p');
    const neck = document.createElement('p');
    const fretNbr = document.createElement('p');
    const vibrato = document.createElement('p');
    const picture = document.createElement('img');
    const deleteBtn = document.createElement('button');

    spec.textContent = guitar.name;
    brand.textContent = guitar.brand;
    model.innerHTML = `<p><strong>Model Series :</strong> <em>${guitar.model}</em></p>`;
    pickup1.innerHTML = `<p><strong>Pickups:</strong></p><p><strong>Neck:</strong> <em>${guitar.pickups.neck}</em></p>`;
    pickup2.innerHTML = `<p><strong>Middle:</strong> <em>${guitar.pickups.middle}</em></p>`;
    pickup3.innerHTML = `<p><strong>Bridge:</strong> <em>${guitar.pickups.bridge}</em></p>`;
    body.innerHTML = `<p><strong>Body: </strong></p><em>${guitar.body}</em>`;
    neck.innerHTML = `<p><strong>Neck: </strong></p><em>${guitar.neck}</em>`;
    fretNbr.innerHTML = `<p><strong>Frets Nbr: </strong></p><em>${guitar.frets}</em>`;
    vibrato.innerHTML = `<p><strong>Vibrato: </strong></p><em>${guitar.vibrato}</em>`;
    picture.src = guitar.picture;

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        divPrin.remove(); // Supprime la carte au clic
    });

    container.classList.add(guitar.type);

    pickups.appendChild(pickup1);
    pickups.appendChild(pickup2);
    pickups.appendChild(pickup3);

    div1.appendChild(spec);
    div1.appendChild(brand);
    div1.appendChild(model);
    div1.appendChild(pickups);
    div1.appendChild(body);
    div1.appendChild(neck);
    div1.appendChild(fretNbr);
    div1.appendChild(vibrato);
    
    div2.appendChild(picture);

    divPrin.appendChild(div1);
    divPrin.appendChild(div2);
    divPrin.appendChild(deleteBtn); // ✅ Correction : Ajout du bouton dans la carte

    container.appendChild(divPrin);
}


loadGuitars();
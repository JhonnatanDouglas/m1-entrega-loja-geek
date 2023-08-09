let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
];

// Cabeçalho do Site

const body = document.querySelector('body');
document.title = 'GeekWord';

// Criando tags, ids e classes do Cabeçalho

const main = document.createElement('main');
const headerTag = document.createElement('header');
const divImgTag = document.createElement('div');
const imgTag = document.createElement('img');
const divBtnTags = document.createElement('div');
const btnProductsTag = document.createElement('button');
const btnContactsTag = document.createElement('button');
imgTag.id = 'logoImg';
imgTag.src = '/logo.svg';
imgTag.alt = 'Logo Geek Word';
btnProductsTag.id = 'btn-products';
btnProductsTag.innerText = 'Products';
btnContactsTag.id = 'btn-contact';
btnContactsTag.innerText = 'Contact';

// Inserindo ao corpo da página

body.appendChild(headerTag);
headerTag.appendChild(divImgTag);
divImgTag.appendChild(imgTag);
headerTag.appendChild(divBtnTags);
divBtnTags.appendChild(btnProductsTag);
divBtnTags.appendChild(btnContactsTag);

// Configuração dos Cards


function createListCard (ulTag, itensList, i) {
    const liTag = document.createElement('li');
    const imgListTag = document.createElement('img');
    const h3ListTag = document.createElement('h3');
    const pListTag = document.createElement('p');
    const divListTag = document.createElement('div');
    
    imgListTag.className = 'imgItem';
    h3ListTag.className = 'tittleItem';
    pListTag.className = 'descriptionItem';
    
    ulTag.appendChild(liTag);
    liTag.appendChild(divListTag);
    divListTag.appendChild(imgListTag);
    divListTag.appendChild(h3ListTag);
    divListTag.appendChild(pListTag);

    imgListTag.src = itensList[i].image;
    imgListTag.alt = itensList[i].name;
    h3ListTag.innerText = itensList[i].name;
    pListTag.innerText = itensList[i].price;
}

function createCard(itensList, typeList) {
    const sectionTag = document.createElement('section');
    const divTag = document.createElement('div');
    const h2Tag = document.createElement('h2');
    divTag.appendChild(h2Tag);

    for (let i = 0; i < itensList.length; i++) {
        if(itensList[i].type == typeList) {
            h2Tag.innerText = typeList;
        } 
        else if (itensList[i].type == typeList) {
            h2Tag.innerText = typeList;
        }
    }

    const ulTag = document.createElement('ul');
    sectionTag.appendChild(divTag);
    divTag.appendChild(ulTag);

    for (let i = 0; i < itensList.length; i++) {
        if(itensList[i].type == typeList) {
            createListCard(ulTag, itensList, i);
        } 
        else if (itensList[i].type == typeList) {
            createListCard(ulTag, itensList, i);
        }
    }
    return sectionTag;
};

body.appendChild(main);
main.appendChild(createCard(itens, 'Painting'));
main.appendChild(createCard(itens, 'Action Figures'));
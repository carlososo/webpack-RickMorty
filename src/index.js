'use strict'
import './styles/style.scss'
import axios from 'axios';
const main = document.querySelector('.aqui');
const form = document.querySelector('#formulario')

form.addEventListener('submit',(e)=>{
  e.preventDefault();
    main.innerHTML=("");
    const busqueda =document.getElementById('busqueda');
    const valor=busqueda.value;
    getData(valor);
})
const getData =async(character)=>{ 
  try{
   const response = await axios.get(`https://rickandmortyapi.com/api/character${!character?"":"/?name="+character}`)
   const array = (response.data.results);
  console.log(array);
array.map(({name, gender, image, url, status, origin}) =>{
  const carta = document.createElement('div')
  carta.classList.add("card")
  carta.innerHTML =`
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Gender: ${gender}</p>
    <p class="card-text">Status: ${status}</p>
    <p class="card-text">Origin: ${origin.name}</p>
  </div>`
  main.appendChild(carta);
})
}catch(e){
  window.location.href ="404.html"
}
}
getData();
document.addEventListener('DOMContentLoaded',(event)=>{
    getmovieTitles() 
    eventButton()
    titlemovie()
    movieDesc()
    showTime()
    runTime()
    remainingTickets()
    deleteMovie()
    captureImages()
  
})

const buyTicket=document.createElement('div')
buyTicket.addEventListener('click',event =>{

})

function eventButton(){
    fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(data => console.log(data["capacity"] - data["tickets_sold"]))
   
}
function getmovieTitles(){
    const li = document.getElementById('li-item')
    li. innerHTML=`
             <li id="giant" onclick="trigger(event)">The Giant Gila Monster <button type="button">Del</button> </li> 
             <li>Manos:The Hands OfFate <button type="button">Del</button> </li>
              <li>Time Chasers <button type="button">Del</button></li>
              <li>The Touch Of Satan <button type="button">Del</button> </li>
              <li>Santa Claus Conquers The Martians <button type="button">Del</button></li>
              <li>Track Of The Moon Beast <button type="button">Del</button> </li>
              <li>The Skydivers <button type="button">Del</button></li>
              <li>The Killer Shrews <button type="button">Del</button></li>
              <li>Project Moon Base <button type="button">Del</button></li>
              <li>The Giant Spider Invasion <button type="button">Del</button></li>
              <li>Catalina Caper <button type="button">Del</button></li>
              <li>Secret Agent Super Dragon <button type="button">Del</button></li>
              <li>Wild Rebels <button type="button">Del</button></li>
              <li>Danger: Diabolik <button type="button">Del</button></li>
              <li>Village Of The Giants <button type="button">Del</button> </li> ` 
}
const divmovie = document.getElementById('title')
function titlemovie(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     divmovie.innerHTML=`
    <div id="title" class="title">
      ${item.title}</div>`

})
})}
const runtime = document.getElementById('runtime')
function runTime(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     runtime.innerHTML=`
    <div id="runtime" class="meta">${item.runtime} minutes</div>`

})
})}

const divdesc = document.getElementById('film-info')
function movieDesc(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     divdesc.innerHTML=`
     <div id="film-info"> ${item.description}</div>`

})
})}
const showtime = document.getElementById('showtime')
function showTime(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     showtime.innerHTML=`
     <div id="film-info"> ${item.showtime}</div>`

})
})}

const remainder = document.getElementById('ticket-num')
function remainingTickets(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     remainder.innerHTML=`
     <span id="ticket-num">${item["capacity"]-item["tickets_sold"]}</span> remaining tickets`
    })
})}

function trigger(event){
    console.log(event)
}

const capimage=document.getElementById('poster')

function captureImages(image){
    fetch('http://localhost:3000/films/${id}',{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(image)
    })
        .then(res => res.json())
        .then((data) => {
            data.forEach((item)=>{
                capimage.innerHTML=`
                <img
                id="poster"
                src="db.json/${item.poster}"
                alt="${getmovieTitles()}"/>
                `
            })
        }
    )}

const delmovies= document.createElement('delete')
function deleteMovie(id){
    const btns=document.querySelectorAll("delete")
    btns.forEach(btn => {
        btn.addEventListener("click",function(){
            const delmovie= btn.getAttribute('delete')

            fetch('http://localhost:3000/films/${id}',{
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(res => res.json())
              .then(data => { console.log(data);

                const list= document.getElementById(`item${item["Id"]}`);
                list.remove();
              })
              })
    })}
    

const soldoutli= document.createElement('li')
soldoutli.setAttribute('class','sold-out')


const ulmain= document.getElementById('films')
ulmain.appendChild(soldoutli)
      


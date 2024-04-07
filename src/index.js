document.addEventListener('DOMContentLoaded',(event)=>{
    getmovieTitles() 
    eventButton()
    titlemovie()
    movieDesc()
    showTime()
    runTime()
    remainingTickets()
    deleteMovie()
  
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
             <p id="giant" onclick="trigger(event)">The Giant Gila Monster <button type="button">Del</button> </p> 

             <p>Manos:The Hands OfFate <button type="button">Del</button> </p
              <p>Time Chasers <button type="button">Del</button></p>
              <p>The Touch Of Satan <button type="button">Del</button> </p>
              <p>Santa Claus Conquers The Martians <button type="button">Del</button></p>
              <p>Track Of The Moon Beast <button type="button">Del</button> </p>
              <p>The Skydivers <button type="button">Del</button></p>
              <p>The Killer Shrews <button type="button">Del</button></p>
              <p>Project Moon Base <button type="button">Del</button></p>
              <p>The Giant Spider Invasion <button type="button">Del</button></p>
              <p>Catalina Caper <button type="button">Del</button></p>
              <p>Secret Agent Super Dragon <button type="button">Del</button></p>
              <p>Wild Rebels <button type="button">Del</button></p>
              <p>Danger: Diabolik <button type="button">Del</button></p>
              <p>Village Of The Giants <button type="button">Del</button> </p> ` 
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
const remainder = document.getElementById('showtime')
function remainingTickets(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     remainder.innerHTML=`
     <span id="ticket-num"></span> remaining tickets`
    })
})}

function trigger(event){
    console.log(event)
}

function deleteMovie(movies){
    const btns=document.querySelectorAll(".btn-delete")
    btns.forEach((btn) => {
        btn.addEventListener("click",(event)=>{
            const delmovie= event.target.
            deleteMovie(delmovie)
      })
    })
}







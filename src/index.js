document.addEventListener('DOMContentLoaded',(event)=>{
   eventButton()
   remainingTickets()
   movieDetails()
  
})
  // Function to fetch movie data information
    const ul= document.getElementById("films")
    function movieDetails() {
        fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie.title;
                li.className=("film", "item");
                if (movie.tickets_sold == movie.capacity) {
                    li.getAttribute("sold-out");
                    li.textContent += " (Sold Out)";
                }
                li.addEventListener("click", function() {
                    const movietitle = document.getElementById("title");
                    const runtime = document.getElementById("runtime");
                    const desc= document.getElementById("film-info");
                    const showtime = document.getElementById("showtime");
                    const im = document.getElementById("poster");
                    const remainingTickets= document.getElementById("ticket-num")

                    
                    movietitle.textContent = movie.title;
                    runtime.textContent = movie.runtime + " minutes";
                    desc.textContent = movie.description;
                    showtime.textContent = movie.showtime;
                    im.src = movie.poster;
                    remainingTickets= remainingTickets()

                    ul.appendChild(li)

               
            
                } 
                ) 
            })
        })
    }
    function eventButton(){
        fetch('http://localhost:3000/films/4')
        .then(res => res.json())
        .then(data => console.log(data["capacity"] - data["tickets_sold"]))
       
    }
    // Function to buy tickets
    function buyTicket(movieId) {
        fetch('http://localhost:3000/films/${movieId}')
        .then(response => response.json())
        .then(movie => {
            if (movie.tickets_sold < movie.capacity) {
                const newTicketsSold = movie.tickets_sold -1
                fetch('http://localhost:3000/films/${movieId}', {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ tickets_sold: newTicketsSold })
                })
                .then(response => response.json())
                .then(updatedMovie => {
                    const li = document.querySelector(li[movie.id = "${movieId}"]);
                    if (updatedMovie.tickets_sold === updatedMovie.capacity) {
                        li.getAttribute("sold-out");
                        li.textContent += " (Sold Out)";
                    }
                })
            } else {
                console.log("Sold out!");
            }
        })
      
    }

const remainder = document.getElementById('ticket-num')
function remainingTickets(movieId){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then((data) => {
    data.forEach((item) => {
     remainder.innerHTML=`
     <span id="ticket-num">${item["capacity"]-item["tickets_sold"]}</span> `
    })
})}


const movietitle = document.getElementById("title");
movietitle.getAttribute('button')
const deleteButtons = document.createElement('deleteBtn');
deleteButtons.textContent= "Delete"
deleteButtons.getAttribute("delete-btn")
movietitle.appendChild(deleteButtons)

function deleteBtn(){
 deleteButtons.forEach(button => {
    button.addEventListener('click', (event)=>{
      const itemId = button.getAttribute('delete');

      fetch(`http://localhost:3000/films/${Id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response =>response.json())
      
      })
      })
      .then(data => {
        console.log('Movie deleted successfully');
        const listItem = document.getElementById(`item${data.movie}`);
        listItem.remove();
      })
     
    }  

  


 



      


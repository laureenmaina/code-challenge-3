document.addEventListener('DOMContentLoaded',(event)=>{
   eventButton()
   remainingTickets()
   populateFilmList()
  
})
  // Function to fetch movie data information
    const ul= document.getElementById("films")
    function populateFilmList() {
        fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const li = document.createElement("li")
                li.textContent = movie.title;
                li.getAttribute("film", "item")
                if (movie.tickets_sold == movie.capacity) {
                    li.getAttribute("sold-out")
                    li.textContent += " (Sold Out)"
                }
                li.addEventListener("click", function() {
                    const im = document.getElementById("poster");
                    const desc= document.getElementById("film-info");
                    const movietitle = document.getElementById("title");
                    const runtime = document.getElementById("runtime");
                    const showtime = document.getElementById("showtime");
                    const remainingTickets= document.getElementById("ticket-num")
                    
                    im.src = movie.poster
                    desc.textContent = movie.description
                    movietitle.textContent = movie.title.toUppercase()
                    runtime.textContent = movie.runtime + " minutes"
                    showtime.textContent = movie.showtime
                    remainingTickets= [movie.capacity]-[movie.tickets_sold]

                });
                ul.appendChild(li);
            });
        })
    }
    function eventButton(Id){
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
                const newTicketsSold = movie.tickets_sold + 1;
                fetch('http://localhost:3000/films/${movieId}', {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ tickets_sold: newTicketsSold })
                })
                .then(response => response.json())
                .then(updatedMovie => {
                    const li = document.querySelector(li[data.id = "${movieId}"]);
                    if (updatedMovie.tickets_sold === updatedMovie.capacity) {
                        li.classList.add("sold-out");
                        li.textContent += " (Sold Out)";
                    }
                })
            } else {
                alert("Sold out!");
            }
        })
      
    }

const remainder = document.getElementById('ticket-num')

function remainingTickets(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())  
    .then(data => {
    data.forEach((item) => console.log((item["capacity"])-(item["tickets_sold"])
))}
    )}

 
 



      


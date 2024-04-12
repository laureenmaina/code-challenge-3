document.addEventListener('DOMContentLoaded', () => {
    movieDetails(); // Fetch movie details and display them
    // remainingTickets(); // Display remaining tickets for each movie
    deleteMovie()
    // delMovie()
    buyTicket()
    updateTicketsSold()
});

// Function to fetch and display movie details
function movieDetails() {
    const ul = document.getElementById("films");
    fetch(`https://json-server-pckf.onrender.com/films`,{
        method: "GET",
        headers:{
            "Content-type":"application/json"
        }

    })
    .then(response => response.json())
    .then(data => {
        data.forEach(movie => {
             const li = document.getElementById('li-item');
             const btn = document.createElement("li");
             btn.innerHTML=`
            <span id="${movie.id}"> ${movie.title}</span>
             <button id="delete" onclick="delbtn()">Delete</button>
             `

              li.appendChild(btn)

btn.querySelector("#delete").addEventListener('click', () =>{
    btn.innerHTML=''
    delMovie(`${movie.id}`)
              })
         
          
            
            // li.textContent = movie.title;
            li.style.cursor = "pointer";
            li.className = "film item";
            if (movie.tickets_sold == movie.capacity) {
                li.className += " sold-out";
            }
            const span = document.getElementById(`${movie.id}` )

            span.addEventListener("click", () => {
                const movietitle = document.getElementById("title");
                movietitle.textContent = `${movie.title}` ;

                const runtime = document.getElementById("runtime");
                runtime.textContent = `${movie.runtime}` + " minutes";

                const desc = document.getElementById("film-info");
                desc.textContent = `${movie.description}` ;

                const showtime = document.getElementById("showtime");
                showtime.textContent = `${movie.showtime}` ;

                const im = document.getElementById("poster");
                im.src = `${movie.poster}` ;

                const remainingTickets = document.getElementById("ticket-num");
                remainingTickets.textContent = `${movie.capacity}`  - `${movie.tickets_sold}` ;

    
             
            });
            ul.appendChild(li);
    
    });
})}



function deleteMovie(id) {
    fetch(`https://json-server-pckf.onrender.com/films/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error deleting movie:", error));
}





function updateTicketsSold(film) {
    fetch(`https://json-server-pckf.onrender.com/films/${film}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "tickets_sold": films.tickets_sold
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error updating tickets sold:", error));
}

// Function to handle buying tickets

function buyTicket(ticket) {
    const num = document.getElementById("ticket-num");
    let value = parseInt(num.textContent);
    if (value > 1) {
        num.textContent = value + ticket;
    } else {
        num.textContent = "Sold Out!";
    }
}




  


 



      


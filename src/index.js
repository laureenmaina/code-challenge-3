document.addEventListener('DOMContentLoaded', () => {
    movieDetails(); // Fetch movie details and display them
    remainingTickets(); // Display remaining tickets for each movie
    deleteMovie()
    buyTicket()
   

});

// Function to fetch and display movie details
function movieDetails() {
    const ul = document.getElementById("films");
    fetch("https://json-server-pckf.onrender.com/films")
    .then(response => response.json())
    .then(data => {
        data.forEach(movie => {
            // const li = document.createElement("li");
             const li = document.getElementById('li-item');
             const btn = document.createElement("li");
             btn.innerHTML=`
            <span id="${movie.id}"> ${movie.title}</span>
             <button>Delete</button>

             
             `
             li.appendChild(btn)
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
const li = document.createElement("li");
li.className = "film item";
li.addEventListener("click", () => {

fetch('https://json-server-pckf.onrender.com/films')
.then(response => response.json())
.then(data => {
    
        const del = document.createElement("li");
        del.className = "delete-btn";
      
    })
    
    li.appendChild(del)
})

// Function to handle buying tickets
function buyTicket(movieId) {
    fetch(`https://json-server-pckf.onrender.com/films/${movieId}`)
    .then(response => response.json())
    .then(movie => {
        if (movie.tickets_sold < movie.capacity) {
            const newTicketsSold = movie.tickets_sold + 1; // Increment tickets sold
            fetch(`https://json-server-pckf.onrender.com/films/${movieId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ tickets_sold: newTicketsSold })
            })
            .then(response => response.json())
            .then(updatedMovie => {
                const li = document.querySelector(`li[data-id="${movieId}"]`);
                if (updatedMovie.tickets_sold === updatedMovie.capacity) {
                    li.classList.add("sold-out");
                }
            })
        } else {
            console.log("Sold out!");
        }
    })
  
}

// Function to display remaining tickets for each movie
function remainingTickets() {
    const remainder = document.querySelectorAll('.ticket-num');
    remainder.forEach(remainderItem => {
        const movieId = remainderItem.getAttribute('data-id');
        fetch(`https://json-server-pckf.onrender.com/films/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            remainderItem.textContent = movie.capacity - movie.tickets_sold;
        })
        .catch(error => console.error("Error:", error));
    });
}

// Function to delete movies


function updateTicketsSold(movieId, ticketsSold) {
        fetch(`https://json-server-pckf.onrender.com/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "tickets_sold": ticketsSold
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update tickets sold');
            }
        })
        .catch(error => {
            console.error('Error updating tickets sold:', error);
        });
    
    };


function deleteMovie(movieId) {
    fetch(`https://json-server-pckf.onrender.com/films/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        
        if (response.ok) {
            const listItem = document.querySelector(`li[data-id="${movieId}"]`);
            listItem.remove();
            console.log('Movie deleted successfully');
        } else {
            console.error('Failed to delete movie');
        }

    }
            
    )}

    function buyTicket(ticket){
        const num= document.getElementById("ticket-num")
        const value= parseInt(num.innerHTML)
        num.innerHTML=value
        if(value>1){
            num.innerHTML=value+ticket
        }else{
            num.textContent="Sold Out!"
        }

    }




  


 



      


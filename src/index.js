document.addEventListener('DOMContentLoaded', () => {
    movieDetails(); // Fetch movie details and display them
    // remainingTickets(); // Display remaining tickets for each movie
   
   
   
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
             btn.id= movie.id
             btn.innerHTML=`
            <span id="${movie.id}"> ${movie.title}</span>
             <button id="delete" onclick="deleteMovie(${movie.id})">Delete</button>
             `

              li.appendChild(btn)

btn.querySelector("#delete").addEventListener('click', () =>{
    btn.innerHTML=''
   
              }) 
            // li.textContent = movie.title;
            li.style.cursor = "pointer";
            li.className = "film item";
            if (movie.tickets_sold == movie.capacity) {
                li.className += " sold-out";
            }
            const span = document.getElementById(`${movie.id}` )

            span.addEventListener("click", () => {
                buyTicket(movie)
                const movietitle = document.getElementById("title");
                movietitle.textContent = `${movie.title}`

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

                if (remainingTickets.textContent==0){
                    buyBtn.textContent="Sold Out!"
        
                }else{
                    buyBtn.textContent="Buy Ticket"
                    
                }

    
             
            });
            ul.appendChild(li);
    
    });
})}



function deleteMovie(id) {
    fetch(`https://json-server-pckf.onrender.com/films/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error deleting movie:", error));
}

    

// Function to handle buying tickets
const buyBtn= document.getElementById('buy-ticket')
const num = document.getElementById("ticket-num");
function buyTicket(ticket) {
    buyBtn.onclick= () =>{
        if (num.textContent >0){
            ticket.tickets_sold++

        fetch(`https://json-server-pckf.onrender.com/films/${ticket.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tickets_sold: ticket.tickets_sold
        })
    })
    .then(response => response.json())
    .then(data => {
        num.textContent= `${data.capacity  - data.tickets_sold}`
        if (num.textContent==0){
            buyBtn.textContent="Sold Out!"
            document.getElementById(ticket.id).classList.add('sold-out')
            
        }


    })
    .catch(error => console.error("Error updating tickets sold:", error));

 }
}
   
    let value = parseInt(num.textContent);
    if (value > 1) {
        num.textContent = value + ticket;
    } else {
        num.textContent = "Sold Out!";
    }
}




  


 



      


let e = localStorage.getItem("cards")
let deta = JSON.parse(e)

let div = document.querySelector("#content")
deta.map((item, index) => {
    div.innerHTML += `
    <div class="card shadow-sm m-3" style="width: 18rem; border: none; border-radius: 15px; overflow: hidden;">
      <div class="card-header text-center" style="background: linear-gradient(45deg, #007bff, #6c63ff); color: white; font-weight: bold;">
        ${item.category}
      </div>
      <div class="card-body text-center" style="background-color: #f8f9fa;">
        <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${item.name}</h5>
        <p class="card-text" style="color: #6c757d; font-size: 0.95rem; margin: 0;">
          Price: <span style="color: #007bff; font-weight: bold;">$${item.price}</span>
        </p>
        <p class="card-text" style="color: #495057; font-size: 0.85rem; margin: 0.5rem 0;">
          ${item.description || 'No description available.'}
        </p>
        <button 
          onclick="addtocard(${index})" 
          class="btn btn-primary rounded-pill shadow-sm px-4 fw-bold"
          style="background: linear-gradient(45deg, #007bff, #6c63ff); border: none;">
          Add TO card
        </button>
      </div>
    </div>`;
});



function addtocard(index){
  alert("ap ka order ho jaye ga okiee" , index)
}


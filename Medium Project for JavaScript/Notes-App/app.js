const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach(note =>{
        addNewNote(note);
    })
}

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = '') {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = ` 
      <div class="tools">
        <h4>Notes Here</h4>
        <button class="edit btn"><i class="far fa-edit"></i></button>
        <button class="new btn"><i class="fas fa-plus"></i></button>
        <button class="delete btn"><i class="fas fa-trash"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden" } "></div>
      <textarea class="${text ? "hidden" :""}""></textarea>
    
    `;

  const editBtn = note.querySelector(".edit");
  const newBtn = note.querySelector(".new");
  const deleteBtn = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);
    
  newBtn.addEventListener("click", () => {
    addNewNote();
  });

  deleteBtn.addEventListener("click", () => {
    note.remove()
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];

    notesText.forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

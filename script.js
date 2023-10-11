const btn = document.querySelector(".btn");

const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    const notes = [];
    textAreaData.forEach((note) => {
      return notes.push(note.value);
    });
  
    localStorage.setItem("notes", JSON.stringify(notes));
};

const addnewnote = (text ='')=>{
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>

    <div class="main ${text? "" :"hidden"}  "> </div>
    <textarea class="${text? "hidden" : ""}"></textarea>  `;

    var notessec = document.querySelector(".notes")

    note.insertAdjacentHTML("afterbegin", htmlData);
    notessec.appendChild(note);
    const main = note.querySelector(".main");
    const textarea = note.querySelector("textarea")

    textarea.value = text;
    main.innerText = text;

    const delnote = note.querySelector(".delete")
    delnote.addEventListener("click",()=>{
        note.remove();
        updateLSData();
    })
    
    const editnote = note.querySelector(".edit");
    editnote.addEventListener("click",()=>{
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    textarea.addEventListener("change", (event) => {
        const value = event.target.value;
        main.innerText = value;
        updateLSData();
    });

}

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addnewnote(note));
}

btn.addEventListener("click", () => addnewnote());
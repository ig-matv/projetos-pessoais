const prof = document.getElementById("profissional");
const pes = document.getElementById("pessoal");

function mostrarPessoal(){
    prof.classList.add("hide");

    setTimeout(()=>{
        prof.style.display="none";
        pes.style.display="block";

        setTimeout(()=>{
            pes.classList.remove("hide");
        },50);

    },400);
}

function mostrarProfissional(){
    pes.classList.add("hide");

    setTimeout(()=>{
        pes.style.display="none";
        prof.style.display="block";

        setTimeout(()=>{
            prof.classList.remove("hide");
        },50);

    },400);
}

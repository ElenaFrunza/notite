function incarca(){
    document.getElementById('text-luni').value= localStorage.getItem('luni');
    document.getElementById('text-marti').value= localStorage.getItem('marti');
    document.getElementById('text-miercuri').value= localStorage.getItem('miercuri');
    document.getElementById('text-joi').value= localStorage.getItem('joi');
    document.getElementById('text-vineri').value= localStorage.getItem('vineri');
    document.getElementById('text-sambata').value= localStorage.getItem('sambata');
    document.getElementById('text-duminica').value= localStorage.getItem('duminica');

    // ------------------------------------------------------

    document.getElementById('data-luni').innerHTML= localStorage.getItem('data-luni');
    document.getElementById('data-marti').innerHTML= localStorage.getItem('data-marti');
    document.getElementById('data-miercuri').innerHTML= localStorage.getItem('data-miercuri');
    document.getElementById('data-joi').innerHTML= localStorage.getItem('data-joi');
    document.getElementById('data-vineri').innerHTML= localStorage.getItem('data-vineri');
    document.getElementById('data-sambata').innerHTML= localStorage.getItem('data-sambata');
    document.getElementById('data-duminica').innerHTML= localStorage.getItem('data-duminica');

// ------------------------------------------------------------------
}

function salveaza(zi){

    let text = document.getElementById("text-"+zi).value;
    let data = new Date();
    let dataText = data.toLocaleString();
   
    localStorage.setItem(zi, text);
    localStorage.setItem('data-'+zi, dataText);


    document.getElementById('data-'+zi).innerHTML = dataText;
    
    alert("Salvat cu succes!");
}
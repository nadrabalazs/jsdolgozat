function Kiszamol() {
    // Csak ide írhat!
    let elsoSzamErteke = document.getElementById("ID_egyik_befogo").value;
    let masodikSzamErteke = document.getElementById("ID_masik_befogo").value;
    let eredmeny = document.getElementById("ID_eredmeny");
    eredmeny.textContent = Math.sqrt(Math.pow(elsoSzamErteke, 2) + Math.pow(masodikSzamErteke,2)).toFixed(2);
}

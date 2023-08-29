const freloj =() =>{
    let fecha = new Date();
    let hora = formatohora (fecha.getHours());
    let min =  formatohora (fecha.getMinutes());
    let seg =  formatohora (fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}:${min}:${seg}`;

    const meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const dias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"]
    let diasemana=dias[fecha.getDay()]
    let dia=fecha.getDate();
    let mes=meses[fecha.getMonth()]
    let fechatexto=`${diasemana}, ${dia} ${mes}`;
    document.getElementById("fecha").innerHTML=fechatexto;
}

const formatohora=(hora)=>{
    if (hora<10){
        hora = "0"+hora
    } return hora;

}

setInterval(freloj,1000)
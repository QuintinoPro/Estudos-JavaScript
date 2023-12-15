
function converthora(hora) {
    if (hora.includes("AM")) {
        let separado = hora.split(':');
        let horas = parseInt(separado[0],10);
        let min = parseInt(separado[1],10);

        let horafinal = horas + 12;

        let result = horafinal + ":" + min + ":" + "00" + " PM";
        
        console.log(result);
    }
    else if (hora.includes("PM")){
        let separado = hora.split(':');
        let horas = parseInt(separado[0],10);
        let min = parseInt(separado[1],10);

        let horafinal = 12 - horas;

        let result = horafinal + ":" + min + ":" + "00" + " AM";
        
        console.log(result);
    }
}

var h = "04:20:00 AM";
console.log(converthora(h));

var h1 = "04:20:00 PM";
console.log(converthora(h1));

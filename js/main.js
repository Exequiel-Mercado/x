do {
    op = parseInt(prompt("Bienvenido a su sistema de Gestión de Alumnos (GDA). Ingrese la opción que desea realizar hoy: \n1_Agregar alumno nuevo.\n2_ Modificar alumno.\n3_ Listar alumnos por apellido.\n4_Definir abanderados.\n5_ Filtrar alumnos. 0_ Salir."))
    switch (op){
        case 1:
            console.log(alumnos)
            agregarAlumno()
            break
        case 2:
            modificarAlumno(alumnos)
            break
        case 0:
            alert(0)
            break
    }
}while(3 < op < 0)

function agregarAlumno() {
    const nom = prompt("Ingrese el nombre:");
    const ap = prompt("Ingrese el apellido:");
    const prom = prompt("Ingrese el promedio:");
    const cur = prompt("Ingrese el curso:");
    const anio = prompt("Ingrese el año:");
    const gen = prompt("Ingrese el genero:")

    const nuevoAlumno = new Alumno((alumnos.length + 1), nom, ap, prom, cur,anio,gen);
    alumnos.push(nuevoAlumno)
    console.log(nuevoAlumno)
    
}

function modificarAlumno(alumnos) {
    do {
        opc = parseInt(prompt("Qué desea realizar: \n1. Modificar promedio.\n2. Eliminar alumno. \n3. Salir."));
        switch(opc) {
            case 1:
                modPromedio(alumnos);
                break
            case 2:
                eliAlumno(alumnos);
                break
            case 3:
                break
        }
    } while (3 < opc < 0);
}

function modPromedio(alumnos) {
    idN = parseInt(prompt("Ingrese el ID del estudiante al que desea modificar el promedio: "))
    alumnos.forEach(el => {
        if ((el.id) === idN) {
            el.promedio = parseInt(prompt("Ingrese el nuevo promedio:"));
        }
    });
    console.log(alumnos[idN-1])
}

function eliAlumno(alumnos) {
    eliminado = parseInt(prompt("Ingrese el ID del estudiante al que desea eliminar: "))
    alumnos.splice(eliminado-1,1)
    console.log(alumnos)
}


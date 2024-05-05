class Alumno {
    constructor(id, nombre, apellido, promedio, curso, año, genero){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.promedio = promedio;
        this.curso = curso.toUpperCase();
        this.año = año;
        this.genero = genero;
    }
}

const alumnos = [
    {id:1, nombre:"Marta",apellido:"Espinosa", promedio:8, curso:"C", año:4, genero:"F"},
    {id:2, nombre:"Ana",apellido:"Gonzales", promedio:3.4, curso:"A", año:3, genero:"F"},
    {id:3, nombre:"Federico",apellido:"Yestre", promedio:7, curso:"B", año:2, genero:"M"},
    {id:4, nombre:"Exequiel",apellido:"Mercado", promedio:8.9, curso:"A", año:1, genero:"M"},
    {id:5, nombre:"Sandra",apellido:"Nube", promedio:9, curso:"C", año:3, genero:"F"},
    {id:6, nombre:"Beto",apellido:"Monserrat", promedio:6, curso:"B", año:4, genero:"M"},
    {id:7, nombre:"Susana",apellido:"Juanes", promedio:4, curso:"B", año:5, genero:"F"},
    {id:8, nombre:"Mica",apellido:"Velez", promedio:10, curso:"C", año:6, genero:"F"}
]

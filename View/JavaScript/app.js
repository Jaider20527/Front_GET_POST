// app.js
document.addEventListener('DOMContentLoaded', function() {
    const productTableBody = document.getElementById('productTable').querySelector('tbody');

    // Función para obtener los datos de la API
    function fetchProducts() {
        fetch('http://localhost:8080/Casos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                data.forEach(product => {
                    addProductToTable(product);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Función para agregar un producto a la tabla
    function addProductToTable(product) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.cliente}</td>
            <td>${product.tipocaso}</td>
            <td>${product.fechainicio}</td>
            <td>${product.fechacierre}</td>
            <td>${product.prioridad}</td>
            <td>${product.estado}</td>
            <td>${product.descripcioncaso}</td>
            <td>${product.abogadoasignado}</td>

        `;

        productTableBody.appendChild(row);
    }

    // Llamada a la función para obtener los productos al cargar la página
    fetchProducts();

  

});


function crear(){
    var jsons =  {
        cliente: document.getElementById("clienteC").value,
        tipocaso: document.getElementById("tipoCasoC").value,
        fechainicio: document.getElementById("fechaInicioC").value,
        fechacierre: document.getElementById("fechaCierreC").value,
        prioridad: document.getElementById("prioridadC").value,
        estado: document.getElementById("estadoC").value,
        descripcioncaso: document.getElementById("descripcionCasoC").value,
        abogadoasignado: document.getElementById("abogadoAsignadoC").value
    };
    console.log(jsons);
    fetch("http://localhost:8080/EnvioCasos", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(jsons)});
        window.location.href = "file:///C:/Users/Usuario/.vscode/Proyectos/Front_GET_POST/View/HTML/Casos.html";
}
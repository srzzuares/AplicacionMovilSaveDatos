    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {

        var localStorage = window.localStorage; 	
		document.getElementById("nombre").innerText = localStorage.getItem("Nombre");
        document.getElementById("rol").innerText = localStorage.getItem("Rol");
        document.getElementById("carrera").innerText = localStorage.getItem("Carrera");
        document.getElementById("matricula").innerText = localStorage.getItem("Matricula");
        document.getElementById("numtel").innerText = localStorage.getItem("Numero_Telefonico");
    }

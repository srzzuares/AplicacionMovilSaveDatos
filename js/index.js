/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
document.getElementById("removeProjectFromLocalStorage").addEventListener 
   ("click", removeProjectFromLocalStorage); 
document.getElementById("getLocalStorageByKey").addEventListener 
   ("click", getLocalStorageByKey);  
var localStorage = window.localStorage; 	



function setLocalStorage() { 
    localStorage.setItem("Nombre", "Crystian Enrique Suarez Cuevas"); 
    localStorage.setItem("Rol", "Alumno"); 
    localStorage.setItem("Carrera", "TSU TIC DSM"); 
    localStorage.setItem("Matricula", "200527"); 
    localStorage.setItem("Numero_Telefonico", "7641003411"); 
 } 


 function showLocalStorage() { 
    console.log(localStorage.getItem("Nombre")); 
    console.log(localStorage.getItem("Rol")); 
    console.log(localStorage.getItem("Carrera")); 
    console.log(localStorage.getItem("Matricula")); 
    console.log(localStorage.getItem("Numero_Telefonico")); 

    location.href = "muestraDatos.html"
 } 	


 function removeProjectFromLocalStorage(){
    localStorage.clear();
 }

 function getLocalStorageByKey(){
   console.log(localStorage.getItem("Nombre")); 
   console.log(localStorage.getItem("Rol")); 
   console.log(localStorage.getItem("Carrera")); 
   console.log(localStorage.getItem("Matricula")); 
   console.log(localStorage.getItem("Numero_Telefonico")); 
 }
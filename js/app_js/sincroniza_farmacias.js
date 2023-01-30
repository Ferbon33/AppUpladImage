

 function sincroniza_farmacias(){
 db.transaction(function (tx) {
           
           tx.executeSql('DELETE FROM FARMACIAS ');
           
         });
  $.ajax({
        dataType: "html",
        type: "POST",
        data: 'zona=542',
        url: 'http://200.91.34.81:8080/easyfarma/backend_app/farmacias.php',
              }).done(function (resultado) {
              var datosRecibidos = JSON.parse(resultado);
              
              var clasif_fcia ="estrella3.png";
                $.each( datosRecibidos, function ( key, value ) {
               
               
            db.transaction(function (tx) {
           
           tx.executeSql('INSERT INTO FARMACIAS (id_fcia,logo_fcia,nombre_fcia,direccion_fcia,clasif_fcia) VALUES (?,?,?,?,?)',[value.id,value.logo,value.nombre,value.direccion,clasif_fcia]);
           
         });



                });
               
               
              emergente_toast("Se cargaron las Farmacias de tu zona Correctamente");
             
        });
    
    
   

 }
 
        
    

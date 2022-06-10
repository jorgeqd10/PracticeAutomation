Genere 8 scripts los cuales pueden ser ejecutados de la sig manera:
Abrir el archivo mainRunner.js en la linea 9 .src(["./QA/tests/test*.js"]) modificar el nombre de archivo que se quiera ejecutar en este caso TestCafe va a ejecutar todos los scripts ya que * funciona como comodin, en caso de querer ejecutar uno por uno setear test acompanado del numero.

Test1.
Entra a Dresses page, selecciona un tipo de vista, hover sobre un elemento en especifico y le da click al boton add to cart, valida que el msj de que fue agregado este desplegado tambien valida el nombre del producto coincida de la pagina Dresses y la pagina del carrito

Test2.
Entra a Dresses page, selecciona un tipo de vista list, hover sobre un elemento en especifico y le da click al boton add to cart, valida que el msj de que fue agregado este desplegado tambien valida el nombre del producto coincida de la pagina Dresses y la pagina del carrito

Test3.
Entra a la app, busca printed, selecciona Printed Summer Dress por el path

Test4.
Entra a la app, click en shopping cart y valida que este vacio por medio del mensaje default que aparece

Test5.
Entra a la app, agrega 2 diferentes vestidos o ropa, elimina uno desde el hover del shopping cart ademas valida que haya sido validado tomando el valor de cuantos productos hay en el shopping cart

Test6.
entra a la app, hace 2 busquedas por medio de un ciclo mandando a llamar valores en archivo json, ambos string no existen en la tienda y valida que la app despliegue un mensaje de que no existe. 

Test7. 
Entra a una pagina de login valida 3 scenarios... positivo username y pass funcionan y valida el msj
negativo 1: username valido y password invalido valida el msj
negativo 2: username invalido y password valido valida el msj 

Test8.
Entra a la app. busca especificamente un producto y lo selecciona del primer resultado que aparece, toma el precio le suma un valor de 2 porque es el valor del shipping lo compara con lo que aparece en la pagina... valida que los datos del producto sean validos, la data la trae de un json y se usa data driven... mismo ejercicio se repite 3 veces
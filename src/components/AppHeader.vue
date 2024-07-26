<template>
    <div>
        <button v-if="loggedIn">Logout</button>
        <!-- Se muestra este H5 -->
        <!-- Para saber que nuestro componente se esta renderizando independiente de las props del boton  -->
        <h5>Hola desde el componente AppHeader</h5>
    </div>
</template>

<script>
export default {
    props: {
        loggedIn: {
            type: Boolean,
            //por default no se muestra el boton
            //si quieres ver el boton cambia las props a true
            default: false,
        },
    },
    data() {
        return {

        }
    }
};
</script>


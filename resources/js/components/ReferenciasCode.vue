<template>
  <div>

    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" class="form-control" v-model="nombre">
    </div>

    <div class="form-group">
      <label for="modelo">Modelo</label>
      <input type="text" id="modelo" name="modelo" class="form-control" v-model="modelo">
    </div>

    <alert :show.sync="visible" placement="top" :duration="3000" type="danger" width="400px" dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <strong>Atención!</strong>
      <p v-for="coincidencia in coincidencias" :key="coincidencia.id">
        Esta referencia al parecer ya está existe: {{ concidencia.nombre }} {{coincidencia.modelo}}. 
        <br>
      </p>
    </alert>

    <div class="form-group">
      <label for="producto_id">Producto</label>
      <select class="form-control" name="producto_id" id="producto_id" v-model="producto" @change="escoger_producto">

        <option value="">Seleccione</option>
        <option :value="producto.id" v-for="producto in arrayProductos" :key="producto.id">{{ producto.nombre }} </option>

      </select>

      <input type="hidden" name="codigo" v-model="codigo" />
      <input type="hidden" name="codigo_barras" v-model="codigo_barras" />
    </div>


    <barcode v-bind:value="barCode">

    </barcode>

  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
import { alert } from 'vue-strap'
export default {
  props: {
    nombre_ref: {
      type: String,
      required: false
    },
    producto_id: {
      type: Number,
      required: false
    },
    modelo_ref: {
      type: String,
      required: false
    },
    codigo_ref: {
      type: String,
      required: false
    },
    codigo_bar: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      barcodeValue: '',
      nombre: '',
      modelo: '',
      producto: '',
      // nombre_prod: '',
      codigo: '',
      codigo_barras: '',
      arrayProductos: [],
      visible: false,
      coincidencias: [],
      edit: false,
      edit_cod_ref: false
    };
  },

  components: {
    barcode: VueBarcode,
    alert
  },

  computed: {
    barCode() {

      //si cambia el nombre y el producto debe codigo_barras actualizado. Validar por medio de un watch y change
      //debe retornar de 2 aunque this.codigo_barras != 'seleccione'
      if (this.codigo_barras != 'seleccione' && this.edit == true) {

        return (this.codigo_barras);

      } 
      

      if (this.producto != '' && this.nombre != ''){ //2

        let prod = this.arrayProductos.filter(producto => this.producto == producto.id)
        
        
        return this.codigo_barras = prod[0].codigo + this.nombre;
      }

      else {
        return '';
      }

    },


    codigoReferencia(){

      if (this.codigo != 'codigo' && this.edit_cod_ref == true) {

        return (this.codigo);

      } 


      if(this.producto != ''  && this.nombre != '' && this.modelo != ''){

        let prod = this.arrayProductos.filter(producto => this.producto == producto.id);
        
        let marca = prod[0].marca.nombre;

        console.log(marca + this.nombre + this.modelo)
        
        return (this.codigo = marca + this.nombre + this.modelo)

        
        //xiaomi_redmi_9a
      }
    },
    
    validateName(){
      if(this.modelo != '' && this.nombre != ''){//validar de nulo

        if(Object.values(this.nombre).length > 3){//está obteniendo la longitud de un nulo
          this.validate();
        }
      }
    }
  },

  watch: {

    nombre(new_value, old_value) {
      if(this.edit == true && old_value != '') 
      {
        this.edit = false
      }

      if(this.edit_cod_ref == true && old_value != '') 
      {
        this.edit_cod_ref = false
      }

    },

    modelo(new_value, old_value) {
      if(this.edit_cod_ref == true && old_value != '') 
      {
        this.edit_cod_ref = false
      }
    }

  },
  
  methods: {

    getProductos() {
      axios.get('/admin/productos/json')
      .then(response => {

        this.arrayProductos = response.data;

      })
      .catch(error => {
          // handle error
        console.log(error);
      })
      .then(() => {
          // always executed
      });

    },

    validate(){

      // if(this.modelo != '' && this.nombre != ''){

      //   if(Object.values(this.nombre).length > 3){

      const params = {
        nombre: this.nombre,
        modelo: this.modelo,
      };

      axios.get('/admin/referencias/validate', { params })
      .then(response => {

        if(response.length > 0){
          this.visible = true;

          this.coincidencias = response.data;

        }
        else{

        }

      })
      .catch(error => {
            // handle error
        console.log(error);
      })
      .then(() => {
            // always executed
      });

      //   }
      // }

    },

    escoger_producto() {
      if(this.edit == true) {

        this.edit = false;
        
      }

      if(this.edit_cod_ref == true) {
        this.edit_cod_ref = false
      }
    }

  },


  mounted() {

    this.getProductos();

    this.producto = this.producto_id;

    this.nombre = this.nombre_ref;
    this.modelo = this.modelo_ref;
    
    this.codigo = this.codigo_ref;

    this.codigo_barras = this.codigo_bar;

    if(this.codigo_bar != 'seleccione'){
      this.edit = true;
    }

    if(this.codigo_ref != 'modelo'){
      this.edit_cod_ref = true;
    }


  }

};
</script>

<style>

</style>
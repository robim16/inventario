<template>
  <div>
    <div class="form-group">
      <label for="marca_id">Marca</label>
      <select class="form-control" name="marca_id" id="marca_id" v-model="marca" @change="select_option">

        <option value="">Seleccione</option>
        <option :value="marca.id" v-for="marca in arrayMarcas" :key="marca.id">
          {{ marca.nombre }}
        </option>

      </select>
      <input type="hidden" name="codigo" v-model="codigo_producto">
      <input type="hidden" name="codigo_barras" v-model="cbarras">
    </div>

    <div class="form-group">
      <label for="subcategoria_id">Subcategoria</label>
      <select class="form-control" name="subcategoria_id" id="subcategoria_id" v-model="subcategoria" @change="select_option">
        <option value="">Seleccione</option>
        
        <option :value="subcategoria.id" v-for="subcategoria in arraySubcategorias" :key="subcategoria.id">
          {{ subcategoria.nombre }}
        </option>

      </select>
    </div>


    <barcode v-bind:value="barCode">

    </barcode>

  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
  props: {
    codigo: {
      type: String,
      required: false
    },
    codigo_barras: {
      type: String,
      required: false
    },
    marca_id: {
      type: Number,
      required: false
    },
    subcategoria_id: {
      type: Number,
      required: false
    },
  },
  data() {
    return {
      barcodeValue: "",
      marca: "",
      subcategoria: "",
      codigo_producto: "",
      cbarras: "",
      arrayMarcas: [],
      arraySubcategorias: [],
      selected: false,
    };
  },
  components: {
    barcode: VueBarcode,
  },

  computed: {

    barCode() {

      if (this.codigo_barras != 'seleccione' && this.selected == false) {

        return (this.codigo_barras);

      } 


      if (this.marca != "" && this.subcategoria != "") {//store

        var sel_marca = document.getElementById("marca_id");
        var option_marca = sel_marca.options[sel_marca.selectedIndex].text;

        var sel_subcategoria = document.getElementById("subcategoria_id");
        var option_subcategoria =
        sel_subcategoria.options[sel_subcategoria.selectedIndex].text;

        return (this.cbarras = option_marca + option_subcategoria);
      }

      return this.cbarras
      
    },


    codigo_prod(){

      if (this.codigo_barras != 'seleccione' && this.selected == false){

        return (this.codigo);

      }


      if(this.marca != "" && this.subcategoria != ""){

        var sel_marca = document.getElementById("marca_id");
        var option_marca = sel_marca.options[sel_marca.selectedIndex].text;

        return (this.codigo_producto = option_marca + this.subcategoria);
      }

      return this.codigo_producto
    }
  },
  methods: {
    getMarcas() {
      axios
      .get("/admin/marcas/json")
      .then((response) => {
        this.arrayMarcas = response.data;
      })
      .catch((error) => {
          // handle error
          console.log(error);
        })
      .then(() => {
          // always executed
        });
    },

    getSubcategorias() {
      axios
      .get("/admin/subcategorias/json")
      .then((response) => {
        this.arraySubcategorias = response.data;
      })
      .catch((error) => {
          // handle error
          console.log(error);
        })
      .then(() => {
          // always executed
        });
    },

    select_option() {
      this.selected = true;
    },
  },

  mounted() {
    this.getMarcas();
    this.getSubcategorias();

    this.marca = this.marca_id;
    this.subcategoria = this.subcategoria_id;

    if(this.codigo_barras != 'seleccione' && this.codigo != 'seleccione'){
      this.cbarras = this.codigo_barras;
      this.codigo_producto = this.codigo;
    }

  },
};
</script>

<style>
</style>
<template>
  <div class="container">
    <div class="row">
        <div class="col col-md-12">
                        
            <div class="card card-info">
                <div class="card-header">
                    <h3 class="card-title">Datos del proveedor</h3>
    
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <div class="row">
                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nit</label>
                                <input class="form-control" type="text" id="nit" name="nit" autofocus
                                    value="" v-model="proveedor.nit">
                            </div>
                            <!-- /.form-group -->
    
                            
                        </div>
                        <!-- /.col -->
    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nombre</label>
                                <input class="form-control" type="text" id="nombre" name="nombre"
                                    value="" v-model="proveedor.nombre">
                            </div>
    
                           
    
                        </div>
    
                    </div>
                    <!-- /.row -->
    
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="form-group">
    
                                <label>Dirección</label>
                                <input class="form-control" type="text" id="direccion" name="direccion"
                                    value="" v-model="proveedor.direccion">
                               
                            </div>
                            <!-- /.form-group -->
    
                        </div>
                        <!-- /.col -->
    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Teléfono</label>
                                
                                <input class="form-control" type="text" id="telefono" name="telefono"
                                    value="" v-model="proveedor.telefono">
    
                            </div>
                        </div>
    
                    </div>
    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" id="email" name="email"
                                    value="" v-model="proveedor.email">
                               
                            </div>
    
                        </div>
    
    
                        
                    </div>
    
    
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
    
                </div>
            </div>
        </div>
    </div>
    <div class="row clearfix">
        <div class="col-md-12">
            <table class="table table-bordered table-hover" id="tab_logic">
                <thead>
                    <tr>
                        <th class="text-center"> # </th>
                        <th class="text-center"> Producto </th>
                        <th class="text-center"> Cantidad </th>
                        <th class="text-center"> Precio </th>
                        <th class="text-center"> Total </th>
                    </tr>
                </thead>
                <tbody>
                    <tr id='addr0'>
                        <td>1</td>
                        <td><input type="text" name='product' placeholder='Enter Product Name'
                                class="form-control" /></td>
                        <td><input type="number" name='qty' placeholder='Enter Qty' class="form-control qty"
                                step="0" min="0" /></td>
                        <td><input type="number" name='price' placeholder='Enter Unit Price'
                                class="form-control price" step="0.00" min="0" /></td>
                        <td><input type="number" name='total' placeholder='0.00' class="form-control total"
                                readonly /></td>
                    </tr>
                    <tr id='addr1'></tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row clearfix">
        <div class="col-md-12">
            <button id="add_row" class="btn btn-default pull-left">Nueva fila</button>
            <button id='delete_row' class="pull-right btn btn-default">Borrar fila</button>
        </div>
    </div>
    <div class="row clearfix" style="margin-top:20px">
        <div class="pull-right col-md-4">
            <table class="table table-bordered table-hover" id="tab_logic_total">
                <tbody>
                    <tr>
                        <th class="text-center">Sub Total</th>
                        <td class="text-center"><input type="number" name='sub_total' placeholder='0.00'
                                class="form-control" id="sub_total" readonly v-model="entrada.subtotal" /></td>
                    </tr>
                    <tr>
                        <th class="text-center">IVA</th>
                        <td class="text-center">
                            <div class="input-group mb-2 mb-sm-0">
                                <input type="number" class="form-control" id="tax" placeholder="0" v-model="entrada.porcentaje_impuesto">
                                <div class="input-group-addon">%</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">Total impuesto</th>
                        <td class="text-center"><input type="number" name='tax_amount' id="tax_amount"
                                placeholder='0.00' class="form-control" readonly v-model="entrada.impuesto"/></td>
                    </tr>
                    <tr>
                        <th class="text-center">Total</th>
                        <td class="text-center"><input type="number" name='total_amount' id="total_amount"
                                placeholder='0.00' class="form-control" readonly v-model="entrada.total" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            proveedor: {
                nit: '',
                nombre: '',
                direccion: '',
                telefono: '',
                email: ''
            },
            entrada: {
                prefijo: '',
                consecutivo: '',
                proveedor_id: '',
                total: 0,
                subtotal: 0,
                impuesto: 0,
                porcentaje_impuesto: 0,
                referencias: [
                    {
                        id: '',
                        cantidad: '',
                        valor_unitario: '',
                        total_referencia: ''
                    }
                ]
            },
            fecha: ''
        }
        
    }
}
</script>

<style>

</style>
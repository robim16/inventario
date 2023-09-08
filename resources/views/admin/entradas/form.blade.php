{{-- <div class="container">
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
                                <input class="form-control" type="text" id="nombre" name="nombre" autofocus
                                    value="{{ old('nombre') }}">
                            </div>
                            <!-- /.form-group -->
    
                            @if ($errors->has('nombre'))
                                <small class="form-text text-danger">
                                    {{ $errors->first('nombre') }}
                                </small>
                            @endif
    
                        </div>
                        <!-- /.col -->
    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nombre</label>
                                <input class="form-control" type="text" id="marca" name="marca"
                                    value="{{ old('marca') }}">
                            </div>
    
                            @if ($errors->has('marca'))
                                <small class="form-text text-danger">
                                    {{ $errors->first('marca') }}
                                </small>
                            @endif
    
                        </div>
    
                    </div>
                    <!-- /.row -->
    
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="form-group">
    
                                <label>Dirección</label>
                                <select name="category_id" id="category_id" class="form-control" style="width: 100%;"
                                    required>
                                    <option value="{{ '0' }}">
                                        {{ 'Seleccione una categoría' }}
                                    </option>
    
    
                                </select>
                                @if ($errors->has('category_id'))
                                    <small class="form-text text-danger">
                                        {{ $errors->first('category_id') }}
                                    </small>
                                @endif
                            </div>
                            <!-- /.form-group -->
    
                        </div>
                        <!-- /.col -->
    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Teléfono</label>
                                <select name="subcategory_id" id="subcategory_id" class="form-control" style="width: 100%;"
                                    required>
    
                                </select>
                                @if ($errors->has('subcategory_id'))
                                    <small class="form-text text-danger">
                                        {{ $errors->first('subcategory_id') }}
                                    </small>
                                @endif
    
                            </div>
                        </div>
    
                    </div>
    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email</label>
                                <select name="tipo_id" id="tipo_id" class="form-control " style="width: 100%;" required>
    
                                </select>
                                @if ($errors->has('tipo_id'))
                                    <small class="form-text text-danger">
                                        {{ $errors->first('tipo_id') }}
                                    </small>
                                @endif
                            </div>
    
                        </div>
    
    
                        
    
                    </div>
    
    
                </div>
               
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
                        <td><input type="text" name='product[]' placeholder='Enter Product Name'
                                class="form-control" /></td>
                        <td><input type="number" name='qty[]' placeholder='Enter Qty' class="form-control qty"
                                step="0" min="0" /></td>
                        <td><input type="number" name='price[]' placeholder='Enter Unit Price'
                                class="form-control price" step="0.00" min="0" /></td>
                        <td><input type="number" name='total[]' placeholder='0.00' class="form-control total"
                                readonly /></td>
                    </tr>
                    <tr id='addr1'></tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row clearfix">
        <div class="col-md-12">
            <button id="add_row" class="btn btn-default pull-left">Add Row</button>
            <button id='delete_row' class="pull-right btn btn-default">Delete Row</button>
        </div>
    </div>
    <div class="row clearfix" style="margin-top:20px">
        <div class="pull-right col-md-4">
            <table class="table table-bordered table-hover" id="tab_logic_total">
                <tbody>
                    <tr>
                        <th class="text-center">Sub Total</th>
                        <td class="text-center"><input type="number" name='sub_total' placeholder='0.00'
                                class="form-control" id="sub_total" readonly /></td>
                    </tr>
                    <tr>
                        <th class="text-center">Tax</th>
                        <td class="text-center">
                            <div class="input-group mb-2 mb-sm-0">
                                <input type="number" class="form-control" id="tax" placeholder="0">
                                <div class="input-group-addon">%</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">Tax Amount</th>
                        <td class="text-center"><input type="number" name='tax_amount' id="tax_amount"
                                placeholder='0.00' class="form-control" readonly /></td>
                    </tr>
                    <tr>
                        <th class="text-center">Grand Total</th>
                        <td class="text-center"><input type="number" name='total_amount' id="total_amount"
                                placeholder='0.00' class="form-control" readonly /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> --}}

{{-- @push('scripts')
    <script>
        $(document).ready(function() {
            var i = 1;
            $("#add_row").click(function() {
                b = i - 1;
                $('#addr' + i).html($('#addr' + b).html()).find('td:first-child').html(i + 1);
                $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
                i++;
            });
            $("#delete_row").click(function() {
                if (i > 1) {
                    $("#addr" + (i - 1)).html('');
                    i--;
                }
                calc();
            });

            $('#tab_logic tbody').on('keyup change', function() {
                calc();
            });
            $('#tax').on('keyup change', function() {
                calc_total();
            });


        });

        function calc() {
            $('#tab_logic tbody tr').each(function(i, element) {
                var html = $(this).html();
                if (html != '') {
                    var qty = $(this).find('.qty').val();
                    var price = $(this).find('.price').val();
                    $(this).find('.total').val(qty * price);

                    calc_total();
                }
            });
        }

        function calc_total() {
            total = 0;
            $('.total').each(function() {
                total += parseInt($(this).val());
            });
            $('#sub_total').val(total.toFixed(2));
            tax_sum = total / 100 * $('#tax').val();
            $('#tax_amount').val(tax_sum.toFixed(2));
            $('#total_amount').val((tax_sum + total).toFixed(2));
        }
    </script>
@endpush --}}

<entradas />

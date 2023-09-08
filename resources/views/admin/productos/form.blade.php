<div class="row">
    <div class="col-md-6 mx-auto">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Productos</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                @if (empty($producto))
                <form action="{{ route('productos.store') }}" method="post">
                    @method('POST')
                    
                    @else
                    <form action="{{ route('productos.update', $producto->id) }}" method="post">
                        @method('PUT')
                        @endif
                        @csrf

                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" class="form-control" value="{{ old('nombre') ?? @$producto->nombre}}">
                        </div>

                        <div class="form-group">
                            <label for="descripcion">Descripcion</label>
                            <textarea id="descripcion" name="descripcion" class="form-control" rows="4">
                                {{ @$producto->descripcion }}
                            </textarea>
                        </div>

                        <div class="form-group">

                            <products-code 
                            :codigo="{{ @$producto->codigo ? 
                            json_encode($producto->codigo) : 'codigo'}}"
                            :codigo_barras="{{ @$producto->codigo_barras ? json_encode($producto->codigo_barras) : 'seleccione'}}"
                            :marca_id="{{ @$producto->marca_id ? json_encode($producto->marca_id) : 0}}"
                            :subcategoria_id="{{ @$producto->subcategoria_id ? json_encode($producto->subcategoria_id) : 0}}"
                            />  
                        </div>

                        <div class="form-group">
                            <input type="reset" value="Cancelar" class="btn btn-secondary">
                            <input type="submit" value="{{ empty($producto) ? 'Crear' : 'Editar' }}" class="btn btn-success float-right">
                        </div>
                    </form>

                </div>

                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>

    </div>


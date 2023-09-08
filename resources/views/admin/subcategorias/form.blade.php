<div class="row">
    <div class="col-md-6 mx-auto">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Subcategorías</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                @if (empty($subcategoria))
                    <form action="{{ route('subcategorias.store') }}" method="post">
                        @method('POST')
                    
                @else
                    <form action="{{ route('subcategorias.update', $subcategoria->id) }}" method="post">
                        @method('PUT')
                @endif
                    @csrf

                    <div class="form-group">
                        <label for="codigo">Código</label>
                        <input type="text" id="codigo" name="codigo" class="form-control" value="{{ old('codigo') ?? @$subcategoria->codigo}}">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" class="form-control" value="{{ old('nombre') ?? @$subcategoria->nombre}}">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripcion</label>
                        <textarea id="descripcion" name="descripcion" class="form-control" rows="4">
                            {{ @$subcategoria->descripcion }}
                        </textarea>
                    </div>

                    <div class="form-group">
                        <select class="form-control" name="categoria_id" id="categoria_id">
                            @foreach ($categorias as $categoria)
                                <option value="">Seleccione</option>
                                <option value="{{ $categoria->id }}" 
                                    @if (@$subcategoria->categoria_id == $categoria->id)
                                        selected
                                    @endif>
                                    {{ $categoria->nombre }}
                                </option>
                                
                            @endforeach
                        </select>
                    </div>

                    <div class="form-group">
                        <input type="reset" value="Cancelar" class="btn btn-secondary">
                        <input type="submit" value="{{ empty($subcategoria) ? 'Crear' : 'Editar' }}" class="btn btn-success float-right">
                    </div>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    
</div>


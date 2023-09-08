<div class="row">
    <div class="col-md-6 mx-auto">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Marcas</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                @if (empty($marca))
                    <form action="{{ route('marcas.store') }}" method="post">
                        @method('POST')
                    
                @else
                    <form action="{{ route('marcas.update', $marca->id) }}" method="post">
                        @method('PUT')
                @endif
                    @csrf

                    <div class="form-group">
                        <label for="codigo">Código</label>
                        <input type="text" id="codigo" name="codigo" class="form-control" value="{{ old('codigo') ?? @$marca->codigo}}">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" class="form-control" value="{{ old('nombre') ?? @$marca->nombre}}">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripcion</label>
                        <textarea id="descripcion" name="descripcion" class="form-control" rows="4">
                            {{ @$marca->descripcion }}
                        </textarea>
                    </div>

                    <div class="form-group">
                        <input type="reset" value="Cancelar" class="btn btn-secondary">
                        <input type="submit" value="{{ empty($marca) ? 'Crear' : 'Editar' }}" class="btn btn-success float-right">
                    </div>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    
</div>


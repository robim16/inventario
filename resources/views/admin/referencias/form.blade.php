<div class="row">
    <div class="col-md-8 mx-auto">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Referencias</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                @if (empty($referencia))
                    <form action="{{ route('referencias.store') }}" method="post" enctype="multipart/form-data">
                        @method('POST')
                    @else
                        <form action="{{ route('referencias.update', $referencia->id) }}" method="post"
                            enctype="multipart/form-data">
                            @method('PUT')
                @endif
                @csrf

                <div class="form-group">
                    <referencias-code
                        :producto_id="{{ @$referencia->producto_id ? json_encode($referencia->producto_id) : 0 }}"
                        :codigo_ref="{{ @$referencia->codigo ? json_encode($referencia->codigo) : 'codigo' }}"
                        :codigo_bar="{{ @$referencia->codigo_barras ? json_encode($referencia->codigo_barras) : 'seleccione' }}"
                        :nombre_ref="{{ @$referencia->nombre ? json_encode($referencia->nombre) : 'nombre' }}"
                        :modelo_ref="{{ @$referencia->modelo ? json_encode($referencia->modelo) : 'modelo' }}" />


                </div>

                <div class="form-group">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" name="descripcion" class="form-control" rows="4">
                                    {{ @$referencia->descripcion }}
                                </textarea>
                </div>


                <div class="form-group">
                    <label for="nombre">Tamaño</label>
                    <input type="text" id="tamano" name="tamano" class="form-control"
                        value="{{ old('tamano') ?? @$referencia->tamano }}">
                </div>

                <div class="form-group">
                    <label for="nombre">Peso</label>
                    <input type="text" id="peso" name="peso" class="form-control"
                        value="{{ old('peso') ?? @$referencia->peso }}">
                </div>

                <div class="form-group">
                    <input class="form-control" name="imagen[]" type="file" accept="image/*"
                        onchange="loadFile(event)" multiple />
                </div>

                <img id="output" />

                <div class="form-group">
                    <input type="reset" value="Cancelar" class="btn btn-secondary">
                    <input type="submit" value="{{ empty($referencia) ? 'Crear' : 'Editar' }}"
                        class="btn btn-success float-right">
                </div>
                </form>

            </div>

            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>

</div>

@push('scripts')
    <script type="text/javascript">
        var loadFile = function(event) {
            var output = document.getElementById('output');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src) // free memory
            }
        };
    </script>
@endpush

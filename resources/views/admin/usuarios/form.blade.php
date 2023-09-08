<div class="row">
    <div class="col-md-6 mx-auto">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Usuarios</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                @if (empty($usuario))
                    <form action="{{ route('usuarios.store') }}" method="post" enctype="multipart/form-data">
                        @method('POST')
                    
                @else
                    <form action="{{ route('usuarios.update', $usuario->id) }}" method="post" enctype="multipart/form-data">
                        @method('PUT')
                @endif
                    @csrf

                    <div class="form-group">
                        <label for="identificacion">Identificación</label>
                        <input type="text" id="identificacion" name="identificacion" class="form-control" value="{{ old('identificacion') ?? @$usuario->identificacion}}">
                    </div>
                    <div class="form-group">
                        <label for="nombres">Nombres</label>
                        <input type="text" id="nombres" name="nombres" class="form-control" value="{{ old('nombres') ?? @$usuario->nombres}}">
                    </div>
                    
                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" class="form-control" value="{{ old('apellidos') ?? @$usuario->apellidos}}">
                    </div>
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion" class="form-control" value="{{ old('direccion') ?? @$usuario->direccion}}">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="text" id="telefono" name="telefono" class="form-control" value="{{ old('telefono') ?? @$usuario->telefono}}">
                    </div>
                    <div class="form-group">
                        <label for="email">email</label>
                        <input type="email" id="email" name="email" class="form-control" value="{{ old('email') ?? @$usuario->email}}">
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input type="password" id="password" name="password" class="form-control" value="{{ old('password') ?? @$usuario->password}}">
                    </div>
                
                    <div class="form-group">
                        <select class="form-control" name="role_id" id="role_id">
                            @foreach ($roles as $role)
                                <option value="">Seleccione</option>
                                <option value="{{ $role->id }}" 
                                    @if (@$usuario->role_id == $role->id)
                                        selected
                                    @endif>
                                    {{ $role->nombre }}
                                </option>
                                
                            @endforeach
                        </select>
                    </div>

                    <div class="form-group">
                        <input class="form-control" name="imagen" type="file" accept="image/*" onchange="loadFile(event)"/>
                    </div>

                    <div class="text-center">
                        <img id="output" class="rounded-circle" src="{{ @$usuario ? 
                            url('storage/' . $usuario->imagen()->first()['url']) : ''}}" style="width: 200px; height: 2ñ00px;"
                        />
                    </div>

                    <div class="form-group">
                        <input type="reset" value="Cancelar" class="btn btn-secondary">
                        <input type="submit" value="{{ empty($usuario) ? 'Crear' : 'Editar' }}" class="btn btn-success float-right">
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

        function loadFileEdit(url){
            var output = document.getElementById('output');
            output.src = url
        }
    </script>
@endpush



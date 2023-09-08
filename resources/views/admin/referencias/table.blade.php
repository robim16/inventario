<!-- /.row -->
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Referencias</h3>

                <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
                <a class=" m-2 float-right btn btn-primary" href="{{ route('referencias.create') }}">Crear</a>
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Modelo</th>
                            <th>Tamaño</th>
                            <th>Peso</th>
                            <th colspan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($referencias as $referencia)
                            <tr>
                                <td>{{ $referencia->id }}</td>
                                <td>{{ $referencia->codigo }}</td>
                                <td>{{ $referencia->nombre }}</td>
                                <td>{{ $referencia->descripcion }}</td>
                                <td>
                                    <img src="{{ $referencia->imagenes->count() > 0 ? url('storage/' . $referencia->imagenes()->first()['url']) : '' }}"
                                        alt="{{ $referencia->nombre }}" style="height: 80px; width: 80px;"
                                        class="rounded-circle">
                                </td>
                                <td>{{ $referencia->producto->nombre }}</td>
                                <td>{{ $referencia->modelo }}</td>
                                <td>{{ $referencia->tamano }}</td>
                                <td>{{ $referencia->peso }}</td>
                                <td>
                                    <a href="{{ route('referencias.edit', $referencia->id) }}"
                                        class="btn btn-success">Editar</a>
                                </td>
                                <td>
                                    <form action="{{ route('referencias.destroy', $referencia->id) }}" method="post">
                                        @method('DELETE')
                                        @csrf

                                        <button type="submit" class="btn btn-danger">Eliminar</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->

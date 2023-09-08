<!-- /.row -->
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Subcategorías</h3>

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
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th colspan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($subcategorias as $subcategoria)
                            
                            <tr>
                                <td>{{ $subcategoria->id }}</td>
                                <td>{{ $subcategoria->codigo }}</td>
                                <td>{{ $subcategoria->nombre }}</td>
                                <td>{{ $subcategoria->descripcion }}</td>
                                <td>{{ $subcategoria->categoria->nombre }}</td>
                                <td><a href="{{ route('subcategorias.edit', $subcategoria->id)}}" class="btn btn-success">Editar</a></td>
                                <td>
                                    <form action="{{ route('subcategorias.destroy', $subcategoria->id)}}" method="post">
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

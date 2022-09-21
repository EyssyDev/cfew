<div class="container-respons">
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal para crear y actualizar subclase -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <div class="modal fade" id="modalAgregarSubClase" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Subclase</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" role="form" accept-charset="UTF-8" name="formSubClase" id="formSubClase" method="POST">
                        <table class="table table-condensed">
                            <tr>
                                <td align="right"><label class="control-label">ID SubClase: </span></td>
                                <td colspan="3" ><input type="text" name="idSubClase" id="idSubClase" class="form-control input-sm" maxlength="6" required></input></td>
                            </tr>
                            <tr valign="baseline">
                                <td align="right"><label class="control-label">Descripción:</label></td>
                                <td colspan="3" ><textarea rows = "4" cols = "40" name="desSubClase" id="desSubClase" class="form-control input-sm" required></textarea></td>
                            </tr>	
                        </table>          
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-success" id="guardarCambiosSubclase">Registrar SubClase</button>
                            <input type="hidden" id="accion" name="accion" value="Agregar"/>
                            <input type="hidden" id="idSubClase2" name="idSubClase2" value=""/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Fin del modal para crear clases -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <div class="container" id="clusterModClase1">
        <h2>Catálogo de Subclases</h1>
    </div>
    <br>
    <div class="container"> 
      <div id="toolbar">
        <button type="button" class="btn btn-success" id="botonAgregarSubClase" data-bs-toggle="modal" data-bs-target="#modalAgregarSubClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>  Agregar</button> 
            <button type="button" class="btn btn-primary dropdown-toggle" id="botonOpciones" data-bs-toggle="dropdown" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>  Opciones</button> 
            <ul class="dropdown-menu"> 
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonActualizarSubClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16¿2 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>  Editar</button></li> 
                <li><button type="button" class="btn btn-danger dropdown-item" id="botonEliminarSubClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>  Eliminar</button></li> 
            </ul> 
      </div>  
    <table
        id="tablaSubClases"
        data-multiple-select-row="true"
        data-click-to-select="true"
        data-show-copy-rows="true"  
        data-show-print="true"
        data-show-columns="true"
        data-toolbar="#toolbar"
        data-pagination="true"
        data-search="true"
        data-method="post" 
        data-ajax="ajaxRequestSub"   
        >
        <thead>
            <tr>
            <th data-field="state" data-checkbox="true">ID</th>
            <th data-field="id_subclase" data-sortable="true">ID Subclase</th>
            <th data-field="descripcion" data-sortable="true">Descripcion</th>
            </tr>
        </thead>
        <tbody>
    </tbody>
    </table>
    </div>
    <br>
</div>




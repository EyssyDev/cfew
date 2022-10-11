// variables globales de clases
var auxClases= [];
// variables globales de subclases
var auxIDSubC, auxDesSubC = "";

var fecha = new Date();
var fechaHoy = fecha.toLocaleDateString() + " a la(s) " + fecha.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
});

// variables globales de reguardos
var auxResguardos = [];
// variables globales de reguardos bajas
var auxResguardosBajas = [];


 $.get("php/refrescarSesion.php", function (data, status) {
        dataUser = data;
        // console.log(dataUser);
    });
// -----------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------Helpers, AjaxRequest-------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function messageNoData(titleMessage, text, icon,action) {
            swal({
                title: titleMessage,
                text: text,
                icon: icon,
                buttons: true,
                dangerMode: true,
            }).then(() => {
                action
            });
        }
function f_datos(url, param, fn_cb, fn_err) {
    $.ajax({
        type: "POST",
        url: url,
        data: param
    })
        .done(function (resp) {
            // console.log(resp);
            if (!resp.success) {
                // alert(resp.message, 1);
                messageNoData(resp.message,"","warning");
                if (fn_err)
                    fn_err(resp.data);
            }
            else {
                if (fn_cb)
                    fn_cb(resp.data);
            }
        });
}
function formToObject(form) {
    arrayForm = $(form).serializeArray();
    var objectForm = {};
    arrayForm.forEach(function (obj, index) {
        objectForm[obj.name] = obj.value;
    });
    return objectForm;
}
function hoy_input_date() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var today = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    return today;
}


function ajaxRequestCl(params) {
    var url = 'php/Select_all_clases.php';
    //consola(jQuery.parseJSON(params.data));
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
        params.success(res);
    });
}

function ajaxRequestSub(params) {
    var url = 'php/Select_all_subclases.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        params.success(res);
    });
}

function ajaxRequestRes(params) {
    var url = 'php/selectAllResguardos.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res["data"]);
        params.success(res["data"]);
    });
}

function ajaxRequestRepoBaja(params) {
    var url = 'php/selectAllRepoBaja.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
        params.success(res);
    });
}

function cargarTablaBT(tablaDinamica) {
    $(tablaDinamica).bootstrapTable({
        printPageBuilder: function (table) {
            return `
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    <style type="text/css" media="print">
                        @page {
                            size: auto;
                            margin: 25px 0 25px 0;
                        }
                    </style>
                    <style type="text/css" media="all">
                        body {
                            font-family: sans-serif;
                        }
                        table {
                            border-collapse: collapse;
                            font-size: 12px;
                        }
                        table, th, td {
                            border: 1px solid grey;
                        }
                        th, td {
                            text-align: left;
                            vertical-align: middle;
                            font-size: 15px;
                            padding: 5px;
                        }
                        p {
                            font-weight: bold;
                            margin-left:20px;
                        }
                        small {
                            margin-left:25px;
                            color: gray
                        }
                        table {
                            width:94%;
                            margin-left:3%;
                            margin-right:3%;
                        }
                        div.bs-table-print {
                            text-align:center;
                        }
                        .boxMod1 {
                            text-align: center;
                            border-bottom: 2.5px solid grey;
                        }
                        .boxMod1 small {
                            color: gray
                        }
                        .head {
                            padding: 3%; 
                            letter-spacing: 0.07em;
                        }                         
                    </style>
                </head>
                <title>Reporte BMPC</title>
                <body>
                    <small>Reporte generado el dia ${fechaHoy}</small>
                    <div class="row head">
                        <div class="col-md boxMod1">
                            <small>
                                Gerencia Regional de Transmisión Sureste 
                                <br>
                                Zona de Transmisión Malpaso
                            </small>
                            <p>Sistema de Control de Resguardo Poca Cuantia</p>
                        </div>
                    </div>
                    <div class="bs-table-print">${table}</div>
                </body>
            </html>
            `
        }
    });

}
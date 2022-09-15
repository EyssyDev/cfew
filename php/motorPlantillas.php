<?php
Class Plantilla {
    private $vars = array();

    public function asignar($clave, $valor) {
        $this->vars[$clave] = $valor;
    }

    public function ilustrar($nombre_plantilla) {
        $ruta = 'vistas/' . $nombre_plantilla;

        if (file_exists($ruta)) {
            $contenido = file_get_contents($ruta);

            foreach ($this->vars as $clave => $valor) {
                $contenido = preg_replace('/\[' . $clave . '\]/', $valor, $contenido);
            }
            $contenido = preg_replace('/\<\!\-\- if (.*) \-\->/', '<?php if ($1) : ?>', $contenido);
            $contenido = preg_replace('/\<\!\-\- echo (.*) \-\->/', '<?php echo ($1) ; ?>', $contenido);
            $contenido = preg_replace('/\<\!\-\- else \-\->/', '<?php else : ?>', $contenido);
            $contenido = preg_replace('/\<\!\-\- endif \-\->/', '<?php endif; ?>', $contenido);
            eval(' ?>' . $contenido . '<?php ');
        }
        else {
            exit('<h1> Error de Plantilla </h1> ');
        }
    }
}
?>
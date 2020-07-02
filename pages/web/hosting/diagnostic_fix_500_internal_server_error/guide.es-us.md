---
title: 'Web Hosting: Error 500 Internal Server Error (Error interno del servidor)'
excerpt: Error 500 Internal Server Error (Error interno del servidor)
id: '1987'
slug: web_hosting_error_500_internal_server_error_error_interno_del_servidor
legacy_guide_number: g1987
section: Diagnóstico
---


## .htaccess
Si la sintaxis de .htaccess no es la correcta, el servidor web mostrará un error 500. Debemos renombrar .htacess en .htaccess_bak, por ejemplo. Si el sitio vuelve a funcionar, se trata de un problema con la sintaxis de .htaccess.


## Permisos/Derechos
Es necesario respetar determinadas normas de seguridad en relación con los derechos que se dan a los scripts: 

- La raíz de su sitio debe estar obligatoriamente en 705 (los permisos establecidos por defecto por OVHcloud). Se trata de un directorio / (barra) o . (punto) en su conexión FTP. No lo modifique. 
- El resto de directorios deben estar como máximo en 755. 
- Los scripts PHP/CGI deben estar como máximo en 755.




## Error de scripts
Si programa en perl, por ejemplo, cualquier error de interpretación del script a nivel de código se resumirá en un error 500. Por motivos de seguridad, no podemos facilitar más información. Para depurar sus scripts, puede utilizar la conexión telnet/SSH (a partir de la gama Profesional).


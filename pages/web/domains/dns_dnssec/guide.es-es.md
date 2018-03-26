---
title: Proteja su dominio con DNSSEC
excerpt: ''
slug: proteja_su_dominio_con_dnssec
legacy_guide_number: g609
section: General
---


## Requisitos

- El dominio debe estar registrado con OVH. Se trata de una limitación técnica, ya que es obligatorio que los registros DS estén actualizados en el registro.
- El dominio debe tener una de las siguientes extensiones: .fr, .com, .be, .net, .eu, .pl, .re, .pm, .yt, .wf, .tf, .info, .li, .ch, .biz, .de, .sx, .org, .se, .nl, .in, .us, .at, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk o cualquiera de las nuevas extensiones como .paris, .club, .xyz, .wiki, .ink, así como todas las extensiones de Donuts. Pronto será compatible con más extensiones.




## Situaciones posibles

- El dominio está alojado en servidores DNS externos (su servidor dedicado o cualquier otra máquina). En ese caso, consulte la guía correspondiente en [guias.ovh.es](http://guias.ovh.es). En ella encontrará cómo generar sus claves, firmar su zona y enviar a OVH la clave pública que permite actualizar el campo DS en el registro.

- El dominio utiliza los DNS compartidos de OVH. Esta es la situación que se describe en esta guía. Nosotros nos encargamos de forma transparente de generar las claves, de su rotación periódica, de la actualización del registro DS y de la firma de la zona.


Si no sabe cuál es su caso, acceda al [área de cliente](https://www.ovh.com/manager/web/). 

Seleccione su dominio en la sección «Dominios» y acceda a la pestaña «Gestión de DNS». Si los servidores DNS que aparecen tienen el formato nsXX.ovh.net, dnsXX.ovh.net o Xns200.anycast.me, son los de OVH.


## Activación

- En primer lugar, acceda a su [área de cliente](https://www.ovh.com/manager/web).

- Seleccione su dominio en la sección «Dominios» en la columna de la izquierda.



![](images/img_2896.jpg){.thumbnail}

- Puede comprobar si utiliza servidores DNS de OVH en la pestaña «Gestión de DNS».



![](images/img_3966.jpg){.thumbnail}

- A continuación, acceda a la pestaña de «Información general» de su dominio y haga clic en el botón de activación de «Delegación segura (DNSSEC)».



![](images/img_3967.jpg){.thumbnail}

- Aparecerá una ventana emergente en la que podrá confirmar la activación de DNSSEC. La operación puede tardar hasta 24 horas en hacerse efectiva.



![](images/img_2895.jpg){.thumbnail}

- El botón de activación se encenderá una vez confirmada la operación.



![](images/img_3968.jpg){.thumbnail}

- Podrá comprobar el estado de la operación desde la pestaña «Tareas recientes».



![](images/img_3969.jpg){.thumbnail}


## Desactivación
Si desea desactivar la opción DNSSEC, seleccione su dominio en la sección «Dominios», acceda a la pestaña de «Información general» y haga clic en el botón de «Delegación segura (DNSSEC)». Aparecerá una ventana emergente para confirmar la operación. 

Tenga en cuenta que, si se está realizando una operación de activación, debe esperar hasta que se complete (el botón aparece en gris) para no dejar la configuración DNSSEC de su dominio en un estado intermedio.

![Desactivación](images/img_3970.jpg){.thumbnail}


## Método 1: Utilizando Firefox o Chrome
Puede instalar una extensión Firefox que permite verificar si los sitios que visita están asegurados por DNSSEC, y si es así, cuál es el resultado de la validación. Esta extensión está [disponible aquí](http://www.dnssec-validator.cz/). Una vez instalado, verá una clave a la izquierda de la barra de direcciones de su navegador. Para los dominios donde la clave está en verde, la IP del sitio está verificada por DNSSEC.

![Módulo Firefox de validación DNSSEC: este sitio es seguro](images/img_119.jpg){.thumbnail}
Si la clave está naranja significa que el servidor DNS recursivo de su FAI no es compatible con DNSSEC. Esto no es grave, ya que puede utilizar los servidores DNS alternativos para efectuar esta validación. El módulo Firefox le propone una lista a la que puede acceder haciendo clic derecho sobre la clave y seleccionando «Preferencias».

También existe una versión alfa de esta extensión para Chrome en [esta página](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm).


## Método 2: En modo consola, con declaración previa de la clave raíz
Para verificar que DNSSEC está configurado correctamente para un dominio, puede utilizar la herramienta dig. Para poder efectuar la validación DNSSEC, necesita conocer la clave pública raíz (con la que se consigna la clave que consigna la zona root «.»). Esta clave está disponible en varios sitios de internet. Para facilitar la operación, incluimos la clave a continuación; puede copiarla tal cual en el archivo /etc/trusted-key.key (todo debe estar sobre la misma línea):


```
. 172717 IN DNSKEY 257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```


Tenga en cuenta que usted no debe copiar sin verificar su autenticidad, ya que con DNSSEC, como en cualquier sistema criptográfico basado en una cadena de confianza, la importancia de los elementos fundamentales que son de confianza, por definición, es capital. Su punto de distribución oficial está en [IANA](https://data.iana.org/root-anchors/) y el archivo está firmado por GPG.
El comando a ejecutar es el siguiente, buscando aquí validar la IP de www.eurid.eu:

```
$ dig +sigchase www.eurid.eu
;; RRset to chase:
www.eurid.eu. 544 IN CNAME eurid.eu.
[...]
;; WE HAVE MATERIAL, WE NOW DO VALIDATION
;; VERIFYING DS RRset for eu. with DNSKEY:55231: success
;; OK We found DNSKEY (or more) to validate the RRset
;; Ok, find a Trusted Key in the DNSKEY RRset: 19036
;; VERIFYING DNSKEY RRset for . with DNSKEY:19036: success

;; Ok this DNSKEY is a Trusted Key, DNSSEC validation is ok: SUCCESS
```


La última línea indica que la validación se ha realizado correctamente, porque la cadena de confianza podría elevarse con éxito y está bien; después de todo, conoce la clave pública de la zona raíz.

Si obtiene el mensaje siguiente, es que dig no ha encontrado la clave raíz en /etc/trusted-key.key:

```
$ dig +sigchase www.eurid.eu
No trusted keys present
```




## Método 3: En modo consola, sin declaración previa de la clave raíz
Si no puede declarar la clave pública como en el anterior, puede confiar en servidor DNS de terceros para hacer la validación en su lugar. Algunos servidores DNS recursivos validan DNSSEC y diversas entidades los ponen a disposición del público. Nótese, por ejemplo, los de [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr), que incluimos en el siguiente ejemplo, donde buscamos validar la IP del sitio www.eurid.eu:


```
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```


Aquí la presencia del indicador «ad» indica que la respuesta que se recibe está validada por la resolución recursiva.


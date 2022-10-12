---
title: Veeam Cloud Connect
slug: veeam/veeam-cloud-connect
excerpt: Presentación de Veeam Cloud Connect
section: Veeam
---

**Última actualización: 07/12/2021**

## Objetivo

Veeam Cloud Connect es una solución de la empresa de software Veeam  que permite disponer de una copia de seguridad fuera del sitio sin tener que gestionar una infraestructura en un segundo sitio. Veeam Cloud Connect ofrece un medio fácil y seguro para realizar copias de seguridad y restaurar sus datos almacenados en la nube.

**Esta guía explica cómo configurar su Veeam Cloud Connect**

## Requisitos

- Tener contratada la solución [Veeam Cloud Connect](https://www.ovh.es/storage-solutions/veeam-cloud-connect/){.external}.

> [!primary]
>
> Actualmente nuestras soluciones Veeam no son compatibles con la última versión (11) de Veeam. OVHcloud seguirá ofreciendo la versión 10 hasta nuevo aviso. Tenga en cuenta este aspecto a la hora de configurar Veeam para sus servicios.
>

## Procedimiento

### Productos compatibles

La principal ventaja de Veeam Cloud Connect, más allá de su simplicidad, es que funciona independientemente de dónde esté alojada su infraestructura. Esta puede estar alojada en OVHcloud (un Hosted Private Cloud, o un servidor dedicado en el que usted mismo realiza la virtualización con un hipervisor de VMware o Microsoft), en otro proveedor, o en sus propias instalaciones.

Lista de productos OVHcloud compatibles:

- [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/){.external}
- Máquinas virtuales alojadas en nuestros [Servidores dedicados](https://www.ovhcloud.com/es-es/bare-metal/){.external} y administradas con Microsoft Hyper-V o VMware ESXi.


### Cómo contratar la solución

La solución puede contratarse en el sitio web [OVH.com](https://www.ovh.es/storage-solutions/veeam-cloud-connect/){.external}

Una vez realizado el pago, recibirá un correo electrónico con:

- La dirección IP y el nombre de su servicio.
- El usuario y la contraseña.


### Área de cliente OVHcloud

En su área de cliente OVHcloud, diríjase a la sección `Servidor`, y abra el menú `Plataformas y Servicios`.

![veeam cloud connect](images/veeam-cloud-connect-manager-start.png){.thumbnail}

Aparecerá la siguiente página donde tendrá acceso a la configuración de su producto, su suscripción y la ubicación de almacenamiento.

![veeam cloud connect](images/veeam-cloud-connect-manager.png){.thumbnail}

En la segunda pestaña, `Espacio de almacenamiento`, aparecerá el nombre de su espacio de almacenamiento, la capacidad y el datacenter de replicación.


![veeam cloud connect](images/veeam-cloud-connect-manager-espace.png){.thumbnail}

Al final de esa línea hay un botón

que sirve para aumentar o disminuir la capacidad de almacenamiento.


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace.png){.thumbnail}

Al modificar ese valor aparece el siguiente mensaje:


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace-ok.png){.thumbnail}


### Instalación

Para instalar su Veeam Cloud Connect debe haber contratado previamente su propio servidor de backup Veeam.

La activación del Veeam Cloud Connect se realiza en la misma interfaz, en la consola Veeam Backup &Replication, descargable en la página web de [Veeam](https://www.veeam.com/){.external}.


> [!success]
>
> Puede consultar la instalación de la consola en esta página.
> 

Primero debe añadir el servicio en su consola, haciendo clic en «ADD SERVICE PROVIDER»


![veeam cloud connect](images/veeam-cloud-connect-add-provider.png){.thumbnail}

Introduzca la IP y el nombre de la solución que ha recibido por correo electrónico.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ip.png){.thumbnail}

Añada el usuario y la contraseña, y haga clic en «Apply» para continuar.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-login.png){.thumbnail}

Aparecerá una pantalla con los recursos disponibles para este producto.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ressources.png){.thumbnail}

Por último, aparecerá un resumen.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-recap.png){.thumbnail}

Al hacer clic en `terminar`{.action} aparecerá el servicio en la consola.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-finish.png){.thumbnail}


### Configuración

Para replicar una de sus copias de seguridad, diríjase a la pestaña `Backup & Replication` situada en la parte inferior izquierda de la consola.

Aparecerá una lista de tareas de backup. Haga clic en `Backup Copy`{.action}, en la barra de herramientas de la parte superior de la consola, para comenzar con la configuración.


![veeam cloud connect](images/veeam-cloud-connect-replicat.png){.thumbnail}

Primero, debe ponerle nombre a la nueva tarea. También puede configurar la frecuencia con la que se realiza la tarea.


![veeam cloud connect](images/veeam-cloud-connect-replicat-name.png){.thumbnail}

Al hacer clic en el botón `Añadir`{.action}, aparecerán tres opciones, que se explican con detalle en [esta página](https://helpcenter.veeam.com/docs/backup/vsphere/backup_copy_vms.html?ver=95){.external}.

En este ejemplo vamos a replicar una copia de seguridad.


![veeam cloud connect](images/veeam-cloud-connect-replicat-select.png){.thumbnail}

Elija a continuación la carpeta de almacenamiento que aparecía anteriormente.


![veeam cloud connect](images/veeam-cloud-connect-replicat-target.png){.thumbnail}

Para transferir su copia de seguridad de su servidor a nuestra infraestructura con Veeam Cloud Connect, puede seleccionar el modo directo o bien utilizar el servicio WAN accelerator.

Puede consultar el funcionamiento de [WAN accelerator en esta página](https://helpcenter.veeam.com/docs/backup/vsphere/wan_hiw.html?ver=95){.external}.


![veeam cloud connect](images/veeam-cloud-connect-replicat-data.png){.thumbnail}

En la siguiente pantalla puede especificar los periodos en los que desea ejecutar esta tarea.


![veeam cloud connect](images/veeam-cloud-connect-replicat-schedule.png){.thumbnail}

Después aparecerá un resumen. Haga clic en `Terminar`{.action} para añadir la tarea.


![veeam cloud connect](images/veeam-cloud-connect-replicat-finish.png){.thumbnail}

Si deja activa la casilla «Iniciar la tarea en cuando haga clic en Terminar», la tarea comenzará a ejecutarse.

Aparecerá de nuevo la pantalla inicial con la nueva tarea.


![veeam cloud connect](images/veeam-cloud-connect-replicat-cloud.png){.thumbnail}


### Restauración

Para restaurar su copia de seguridad, tan solo debe hacer clic derecho sobre la tarea.

Puede elegir entre restaurar la máquina virtual entera o restaurar carpetas específicas.


![veeam cloud connect](images/veeam-cloud-connect-restore.png){.thumbnail}

Seleccione la MV y la copia de seguridad que desea restaurar.


![veeam cloud connect](images/veeam-cloud-connect-restore-select.png){.thumbnail}

Elija a continuación la ubicación de restauración (la inicial o una diferente).


![veeam cloud connect](images/veeam-cloud-connect-restore-mode.png){.thumbnail}

Puede añadir una «razón» si lo desea, y a continuación aparecerá un resumen de la operación.


![veeam cloud connect](images/veeam-cloud-connect-restore-resume.png){.thumbnail}

Se abrirá entonces una ventana de su consola Veeam, indicando las tareas en curso.

Cuando se realiza una restauración, en su vSphere aparecen varios eventos.


![veeam cloud connect](images/veeam-cloud-connect-restore-done.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.

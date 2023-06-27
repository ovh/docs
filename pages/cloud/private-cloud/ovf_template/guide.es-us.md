---
title: 'Desplegar una plantilla OVF Windows y SQL Server'
excerpt: 'Cómo desplegar una plantilla OVF Windows y SQL Server'
updated: 2020-10-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/10/2020**

OVHcloud ofrece plantillas Linux, Windows Server y Windows SQL Server (en formato OVF) que puede desplegar directamente desde su cliente Web (HTML 5).

Las MV Windows desplegadas a partir de una plantilla utilizan automáticamente las licencias SPLA que ofrece OVHcloud. El despliegue de una MV Windows provocará automáticamente una facturación adicional.

**Esta guía explica dónde encontrar las plantillas y cómo desplegarlas.**

> [!primary]
> 
> En [esta página](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/images-licenses/) puede consultar el precio del licenciamiento de las imágenes que OVHcloud pone a su disposición.
>

## Requisitos

- Tener acceso al cliente web (HTML5).
- Haber activado las [licencias de Windows](/pages/cloud/private-cloud/manager_ovh_private_cloud#licencia-windows) desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} (en la pestaña `Licencia Widows`{.action} de la plataforma). 


Desde un navegador de internet, vaya a la página de inicio de su Private Cloud y haga clic en `OVH Templates`{.action}.

![Registro CNAME](images/gatewayssl.png){.thumbnail}

En la nueva pantalla de `OVH Templates`, acceda al detalle de las plantillas Linux, Windows y SQL propuestas. 

Al seleccionar la plantilla, se abrirá una ventana en la que podrá consultar los enlaces necesarios para desplegarla, en función de su versión de vSphere.

![Registro CNAME](images/copylink.png){.thumbnail}


### Desplegar la plantilla OVF

Una vez conectado al cliente web vSphere, haga clic en `Hosts and Clusters`{.action}. A continuación, haga clic derecho en el datacenter y seleccione `Deploy OVF Template...`{.action}.

![Desplegar la plantilla](images/01selectdeploy.png){.thumbnail}

Se abrirá un cuadro de diálogo donde podrá configurar el despliegue. En primer lugar, introduzca la URL obtenida como se explica más arriba.

![Seleccionar la plantilla](images/02puturl.png){.thumbnail}

En la siguiente etapa, elija el datacenter.

![Elección del datacenter](images/03selectdatacenter.png){.thumbnail}

Seleccione a continuación el cluster en el que quiera desplegar la máquina virtual.

![Elección del cluster](images/04selectcluster.png){.thumbnail}

A continuación se mostrarán todos los detalles de la plantilla, incluyendo la contraseña predeterminada. Por seguridad, es importante que la cambie la primera vez que se conecte.

![Detalles de la plantilla](images/05detailstemplate.png){.thumbnail}

Elija el datastore en el que quiera que se almacene la máquina virtual, así como el formato del disco.

![Elección del datastore](images/06selectdatastore.png){.thumbnail}

Ahora elija la red que quiera utilizar.

![Elección de la red](images/07selectnetwork.png){.thumbnail}

Se mostrará un resumen de la configuración elegida. Compruebe que sea correcta.

![Resumen de la configuración](images/08resume.png){.thumbnail}

Cuando haga clic en `Finish`{.action}, se creará una tarea en la que podrá consultar el progreso del despliegue.

![Consultar el progreso del despliegue](images/09startdeploy.png){.thumbnail}

Una vez finalizado el despliegue, ya puede cerrar esta ventana.

La máquina virtual desplegada aparecerá en el inventario.

![Registro CNAME](images/10inventory.png){.thumbnail}

### Finalización de la instalación para SQL Server

Inicie su máquina virtual recién desplegada y abra la consola.

Abra la sesión Windows e introduzca el nombre de su instancia SQL, la contraseña y el juego de caracteres que desee en la ventana prevista a tal efecto.

![Registro CNAME](images/sqlinformations.png){.thumbnail}


> [!primary]
> 
> Le recomendamos que establezca una contraseña que cumpla estos criterios:
> 
> * Tener al menos ocho caracteres.
> * Tener al menos tres tipos de caracteres (letras mayúsculas, minúsculas, cifras, caracteres especiales).
> * la contraseña no debe ser una palabra que esté en el diccionario;
> * No incluir información personal (nombre, apellidos o fecha de nacimiento).
>

Una vez introducidos los datos, haga clic en `Aceptar`{.action}.

Se abrirá una ventana que muestra el despliegue. Al finalizar el despliegue, se abrirá una última ventana en la que se le informará de la marcha.

Haga clic de nuevo en `Aceptar`{.action} para que la instalación finalice y reinicie la máquina virtual.

Una vez reiniciada, podrá empezar a utilizar su máquina virtual.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

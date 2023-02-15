---
title: Utilizar Zerto Virtual Replication entre dos datacenters de OVHcloud
slug: zerto-virtual-replication-vmware-vsphere-drp
excerpt: Esta guía explica cómo implementar Zerto Virtual Replication en su Plan de Recuperación ante desastres entre dos productos Private Cloud.
section: Servicios y opciones de OVHcloud
updated: 2022-02-11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 11/02/2022**

## Objetivo

Esta guía explica los conceptos y los detalles de la implementación de Zerto Virtual Replication entre dos datacenters de OVHcloud.

Para otros casos, consulte nuestra guía sobre cómo [utilizar Zerto entre OVHcloud y una plataforma tercera](https://docs.ovh.com/us/es/private-cloud/zerto-virtual-replication-customer-to-ovhcloud/).

**Esta guía explica cómo implementar Zerto Virtual Replication para su Plan de Recuperación ante desastres (DRP) entre dos productos Hosted Private Cloud.**

## Requisitos

- Tener contratados dos productos [Private Cloud](https://www.ovh.com/es/private-cloud/){.external} en dos datacenters diferentes.
- Tener una dirección IP pública libre en cada datacenter.

### Conceptos Zerto Virtual Replication

Zerto Virtual Replication es una solución técnica que permite replicar los datos entre infraestructuras de virtualización o cloud. Para ello se apoya en los hipervisores de la plataforma al desplegar máquinas virtuales (MV) llamadas Virtual Replication Appliance (VRA) que se encargan de duplicar las escrituras en las unidades de almacenamiento y las transmiten hacia el sitio remoto.

#### Virtual Replication Appliance (VRA)

Las VRA se despliegan en cada hipervisor y consumen recursos para realizar la replicación:

- vCPU: 1
- RAM: 2 GB
- Almacenamiento: 36 GB

OVHcloud añade de forma gratuita un datastore dedicado para almacenar todas las VRA.

#### Sitios

La replicación de datos se realiza entre dos (2) sitios emparejados, para que las VRA de cada lado puedan establecer sus flujos de replicación.

Por defecto los flujos de replicación Zerto no están encriptados, pero como la seguridad es una prioridad para OVHcloud, se establece un túnel cifrado (via IPSec) entre los dos sitios por medio de una appliance de red llamada L2VPN.

#### Grupo de replicación (VPG)

La activación y la gestión de la replicación de las MV se realiza a través de un Grupo de replicación (VPG)
Esto permite agrupar de forma lógica un grupo de MV que correspondan a una misma necesidad empresarial y operativa (por ejemplo, una aplicación con su base de datos) con el fin de configurar el máximo objetivo de pérdida de datos admisible ( **RPO**), el orden de encendido ( básico antes de la aplicación), la configuración de red para los ejercicios o para un caso real. 

También se puede definir un nivel de prioridad entre las VPG para priorizar la transferencia de datos si el ancho de banda de red da problemas.

## Procedimiento

### Activar el servicio

#### Desde el área de cliente de OVHcloud

En su área de cliente OVHcloud, diríjase a la parte `Servidor` -> `Private Cloud` .> Seleccione su plataforma Private Cloud primaria, > seleccione
el datacenter deseado > y haga clic en la pestaña `Disaster Recovery Plan (DRP)`{.action}.

![zerto ovhcloud enable](images/zerto_OvhToOvh_enable_01.png){.thumbnail}

Seleccione **Between two OVHcloud Private Cloud solutions** y haga clic en `Activate Zerto DRP`{.action},

![zerto ovhcloud enable](images/zerto_OvhToOvh_enable_02.png){.thumbnail}

La selección del **Private Cloud** Primario y del **datacenter** se hacen de forma automática en función de la infraestructura a la que se haya accedido.

Seleccione en el desplegable una dirección IP pública **libre** del bloque de IP públicas asociadas al **Private Cloud**. Esta dirección se utilizará para establecer un enlace seguro entre las infraestructuras.

Haga clic en `Next`{.action},

![zerto ovhcloud enable](images/zerto_OvhToOvh_enable_03.png){.thumbnail}

Hay que seleccionar el sitio secundario entre los **Private Cloud** que aparecen en el menú desplegable. 

Solo aparecerán como disponibles los que cumplan los siguientes criterios:

- Estar físicamente en otra Ubicación
- No tener ninguna otra replicación Zerto en curso

Seleccione a continuación el **datacenter** del **Private Cloud** de destino en el menú desplegable.

Seleccione en el menú desplegable una dirección IP pública **libre** del bloque de IP públicas asociadas al **Private Cloud**. Esta dirección se utilizará para establecer un enlace seguro entre las infraestructuras.

Haga clic en `Next`{.action},

![zerto ovhcloud enable](images/zerto_OvhToOvh_enable_04.png){.thumbnail}

Una vez enviada la solicitud de activación, esta puede tardar como máximo una hora, tal y como se indica en el mensaje que aparece en pantalla, siempre y cuando los datos proporcionados sean correctos (sobre todo si la dirección IP no está siendo utilizada por una de sus máquinas virtuales, en cuyo caso la activación fallará).

![zerto ovhcloud enable](images/zerto_OvhToOvh_enable_05.png){.thumbnail}

Una vez realizada la activación, recibirá por correo electrónico una configuración de instalación y los enlaces de acceso a la interfaz Zerto de cada una de las infraestructuras.

> [!primary]
> Estimado/a cliente:
> 
> Acaba de activar la solución Zerto DRP entre 2 de sus soluciones Private Cloud.
> 
> Puede conectarse al sitio web principal a través de la siguiente dirección:
> 
>   - URL        : https://zerto.pcc-192-0-2-1.ovh.com/
> 
> Puede conectarse al sitio secundario a través de la siguiente dirección:
> 
>   - URL        : https://zerto.pcc-192-0-2-2.ovh.com/
> 
> Puede acceder con sus cuentas de administrador tal y como lo hace en vSphere.
> 

#### Desde la API de OVHcloud

### Interfaz Zerto Replication

Se puede acceder a la interfaz desde las dos (2) infraestructuras a través de la siguiente dirección:

- URL : https://zerto.pcc-x-x-x-x.ovh.com/ (modificar con la dirección de su Private Cloud)

> [!warning]
>
> Tal y como se indica en el cuerpo del correo electrónico, los datos de acceso para conectarse son los mismos que se utilizan para conectarse a la interfaz vSphere.
>

Una vez haya introducido sus credenciales de acceso, aparecerá una pantalla que muestra el panel de control de Zerto:

![Zerto Dashboard](images/zerto_OvhToOvh_int_01.png){.thumbnail}

En esta pantalla podrá consultar:

- El estado de salud de los VPG
- El estado general de Zerto Replication con cuatro indicadores
- Una tabla con los rendimientos de Zerto Replication
- El estado de todos los VPG
- La lista de las últimas alertas, acciones y eventos Zerto Replication

### Configurar un grupo de replicación (VPG)

En el menú `Acciones`{.action}, seleccione `Crear VPG`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_01.png){.thumbnail}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_02.png){.thumbnail}

En la primera pantalla:

- Introduzca un nombre para el VPG, que tenga sentido operativo.
- Salvo necesidad particular, la prioridad definida en **Medium** se puede dejar tal cual.

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_03.png){.thumbnail}

El siguiente paso consiste en seleccionar las MV que formarán parte del VPG.

> [!warning]
>
> Una MV no puede estar en varios VPG.
> 

- Filtre las MV por nombre con el campo **Search**
- Seleccione en las casillas de la izquierda las MV correspondientes

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_04.png){.thumbnail}

- Haga clic en la flecha que apunta a la derecha para pasarlas al VPG

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_05.png){.thumbnail}

El siguiente paso consiste en seleccionar el sitio remoto:

- **Recovery Site** : seleccione en la lista el sitio remoto (el que no se llame «Local») 
- **ZORG** : seleccione **No Organization** en el desplegable. Si se seleccionar cualquier otro valor aparecerá un mensaje de error al pasar al paso siguiente.

Ahora hay que definir los recursos en remoto:

- **Hosts** : Seleccione el recurso de cálculo, que puede ser un **host específico** (con su dirección IP y precedido del nombre del cluster entre corchetes si procede), un **Ressource Pool** (con las letras RP, seguido del nombre del cluster y del nombre del Ressource Pool) o un **Cluster** (con su nombre). Solo se puede seleccionar un **Ressource Pool** o un **Cluster** (en este caso Cluster1).
- **Datastore** : Seleccione el recurso de almacenamiento, que puede ser un **Datastore específico** (con su nombre precedido del nombre del **Storage Cluster** entre corchetes en su caso) o un **Storage Cluster** (con su nombre).

Deje el resto de valores tal y como aparecen salvo necesidades avanzadas.

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_06.png){.thumbnail}

En el paso siguiente, se puede afinar la configuración para el almacenamiento en caso de necesidades avanzadas.

Si no es el caso, deje el resto de valores tal y como aparecen.

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_07.png){.thumbnail}

Lo que viene a continuación es una parte importante, ya que es el primer paso de la configuración de red.

- **Failover/Move Network** : seleccione el portgroup por defecto para la conmutación.
- **Failover Test Network** : seleccione el portgroup para los tests failover.
- **Recovery Folder** : seleccione la carpeta (o la raíz) en la que se añadirán las MV conmutadas al sitio.

> [!primary]
> Las opciones de **Pre-recovery Script** y **Post-recovery Script** no se pueden utilizar.
> 

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_08.png){.thumbnail}

En este segundo paso de la configuración de red, 

- se puede elegir el portgroup para los tests y conmutaciones de cada MV.
- También se puede cambiar la configuración IP de las MV para cada caso.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_09.png){.thumbnail}

> [!warning]
>
> El cambio de IP solo es posible para las MV con un sistema operativo compatible y para las que tienen las **VMware Tools** en funcionamiento.
> 

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_10.png){.thumbnail}

Haga clic en `NEXT`{.action} para continuar

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_11.png){.thumbnail}

En la última pantalla, aparece un resumen de todos los elementos configurados.

Compruebe la configuración y confirme la creación del VPG haciendo clic en `DONE`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_13.png){.thumbnail}

El nuevo VPG aparecerá en la lista con el estado **Initializing**.

### Ejecutar un ejercicio de recuperación ante desastres 

Después de haber configurado la replicación y haber dejado que se ejecute varios días, puede probar si su DRP funciona con las acciones gestionadas por Zerto Replication.

> [!warning]
>
> El test de failover en Zerto Replication se hace **sin**interrupción en el sitio principal, tan solo debe asegurarse de haber configurado correctamente las redes de prueba para evitar cualquier conflicto de direccionamiento IP y para su producción no se vea afectada por este ejercicio.
>
> No debe modificar ni eliminar manualmente ningún recurso iniciado por el test. Zerto eliminará todos los recursos automáticamente al finalizar el test.
>
> Tenga en cuenta que la replicación sigue ejecutándose entre los dos sitios durante el test.
>

![Zerto Test Failover](images/zerto_OvhToOvh_test_00.png){.thumbnail}

Para ello, conéctese a la interfaz de Zerto Replication y haga clic en `FAILOVER`{.action}(el selector de la izquierda aparece por defecto en **TEST**).

Si el texto del botón está en gris, significa que no existe ningún VPG disponible para el test (la inicialización no ha terminado).

![Zerto Test Failover](images/zerto_OvhToOvh_test_01.png){.thumbnail}

Aparecerá de forma inmediata una pantalla con los VGP disponibles, el sentido de replicación, el sitio de destino y si el nivel de protección es correcto (**Meeting SLA**).

Tiene entonces dos opciones:

1. Activar la casilla para seleccionar el VPG y, por tanto, hacer el test en todas sus MV.
2. Haga clic en el icono a la derecha del nombre del VPG para que aparezca la lista de las MV del VPG. De este modo puede elegir qué MV del VPG formarán parte del test.

Confirme la selección y pase al siguiente paso haciendo clic en `NEXT`{.action}.

![Zerto Test Failover](images/zerto_OvhToOvh_test_02.png){.thumbnail}

En este ejemplo hemos escogido la opción 1 que corresponde con un test en un VPG.

En este paso aparece un resumen de las acciones asociadas al VPG.

- Sentido de replicación
- Sitio remoto
- Si se ha definido una secuencia de inicio de las MV
- Si existen scripts Pre o Post conmutación (funcionalidad no disponible).

Prosiga, haciendo clic en `NEXT`{.action}

![Zerto Test Failover](images/zerto_OvhToOvh_test_03.png){.thumbnail}

Aparecerá una última pantalla de resumen que muestra los diferentes sitios con la cantidad de VPG para el test.

Confirme el inicio del test haciendo clic en `START FAILOVER TEST`{.action}

El test de failover se inicia inmediatamente con las acciones sobre el vCenter del sitio remoto.

Solo queda comprobar que todo funciona correctamente en el sitio remoto.

![Zerto Test Failover](images/zerto_OvhToOvh_test_05.png){.thumbnail}

Cuando termine de comprobar las máquinas que hayan sido conmutadas, haga clic en el pequeño cuadrado rojo a la derecha del **Testing Failover**

![Zerto Test Failover](images/zerto_OvhToOvh_test_06.png){.thumbnail}

Aparece una ventana indicando si el test ha tenido éxito, y se puede añadir un comentario.

Confirme el final del test haciendo clic en `STOP`{.action}.

La eliminación de recursos utilizados en el test se inicia inmediatamente después de este paso.

### Ejecutar una recuperación ante desastres

En caso de incidente mayor en el sitio principal o en el marco de un ejercicio en condiciones reales, el inicio de la conmutación se efectúa lógicamente desde el sitio secundario (de recuperación).

> [!warning]
>
> El failover en modo **LIVE** en Zerto Replication se realiza considerando el sitio principal como no disponible, por lo tanto hay que prestar atención a la configuración de red para evitar cualquier conflicto de direccionamiento IP.
>
> Todos los recursos que se inicien en el sitio secundario estarán activos a nivel de tratamiento de datos.
>
> Tenga en cuenta que la replicación entre los dos sitios se modifica o interrumpe (Más información más adelante)
>

![Zerto Live Failover](images/zerto_OvhToOvh_live_02.png){.thumbnail}

Para ello, conéctese a la interfaz de Zerto Replication, cambie el selector de abajo a la derecha de la interfaz a **LIVE** (el color va a cambiar para avisar de que se van a realizar acciones que tendrán impacto en sus MV) y haga clic en `FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_03.png){.thumbnail}

Aparecerá de forma inmediata una pantalla con los VGP disponibles, el sentido de replicación, el sitio de destino y si el nivel de protección es correcto (**Meeting SLA**).

Tendrá varias opciones:

1. Activar la casilla para seleccionar el VPG y, por tanto, todas sus MV para la conmutación.
2. Hacer clic en el icono a la derecha del nombre del VPG para que aparezca la lista de las MV del VPG. De este modo puede elegir qué MV del VPG formarán parte de la conmutación.

Confirme la selección y pase al siguiente paso haciendo clic en `NEXT`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_04.png){.thumbnail}

Como ejemplo aparece seleccionada la opción 1, el test en un VPG.

En este paso aparece un resumen de las acciones asociadas al VPG.

- Sentido de replicación
- Sitio remoto
- El **Checkpoint** : se trata de la fecha en la que se restaurarán los datos. El intervalo entre dicha fecha y la fecha actual determinará el **RPO**
- La **Commit Policy** : ver más adelante.
- **VM Shutdown** : determina el comportamiento que hay que adoptar en el sitio primario si siguen funcionando, si se dejan funcionando, se apagan o se fuerza el apagado.
- **Reverse Protection** : indica si la replicación del VPG debe configurarse en sentido inverso al completar el failover para poder proceder más adelante al failback.
- Si se ha definido una secuencia de inicio de las MV
- Si existen scripts Pre o Post conmutación (funcionalidad no disponible).

![Zerto Live Failover](images/zerto_OvhToOvh_live_05.png){.thumbnail}

Hay tres (3) opciones para la **Commit Policy**:

- Auto-Rollback : sin acción por su parte, el procedimiento de reversión de los cambios se realiza al cabo del tiempo previsto.
- Auto-Commit: sin acción por su parte, la confirmación de los datos en la plataforma secundaria se realiza al cabo del tiempo previsto (ya no se puede volver a la plataforma principal).
- None : las acciones de **Rollback** o de **Commit** necesitan confirmación.

![Zerto Live Failover](images/zerto_OvhToOvh_live_06.png){.thumbnail}

Para las opciones **Automáticas**, la temporalización por defecto es de sesenta (60) minutos.

Haga clic en `NEXT`{.action} para continuar

![Zerto Live Failover](images/zerto_OvhToOvh_live_07.png){.thumbnail}

La última pantalla de resumen muestra los diferentes sitios con la cantidad de VPG para la conmutación.

> [!warning]
>
> Por favor, lea con atención el resumen y los avisos.
>

Ejecute la conmutación haciendo clic en `START FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_08.png){.thumbnail}

Si ha elegido una **Commit Policy** **Automática**, aparecerá un mensaje de aviso para recordarle su impacto.

Confirme el inicio haciendo clic en `START FAILOVER`{.action}.

La conmutación se inicia inmediatamente con las acciones sobre el vCenter del sitio remoto.

Solo queda comprobar que todo funciona correctamente en el sitio remoto.

![Zerto Live Failover](images/zerto_OvhToOvh_live_10.png){.thumbnail}

Después de ejecutar la conmutación, aparecerá una alerta en la interfaz de Zerto Replication.
Está asociada a la **Commit Policy** y estará visible mientras no se confirme o anule el commit.

En ese caso, las acciones se ejecutan mediante los iconos a la derecha del VPG.

![Zerto Live Failover](images/zerto_OvhToOvh_live_11.png){.thumbnail}

A la hora de confirmar el commit, puede configurar automáticamente el VPG en sentido inverso (**Reverse Protection**).

Confirme haciendo clic en `COMMIT`{.action}

![Zerto Live Failover](images/zerto_OvhToOvh_live_13.png){.thumbnail}

En el VPG, verá que la dirección de replicación (la flecha) ha cambiado.

### Preparar y realizar una reversión de los cambios

Según cómo se haya realizado el **Failover**, el regreso al sitio principal (esto no es obligatorio) puede requerir varias acciones.

Si ha realizado la conmutación con **Reverse Protection**, el procedimiento de reversión de los cambios consiste en hacer un **Failover Live** (consultar la parte correspondiente para ver las acciones requeridas).

Si ha realizado la conmutación **sin** **Reverse Protection**, el procedimiento de reversión de los cambios consiste en crear un VPG **y después** hacer un **Failover Live** (consultar las secciones anteriores para ver las acciones requeridas).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>

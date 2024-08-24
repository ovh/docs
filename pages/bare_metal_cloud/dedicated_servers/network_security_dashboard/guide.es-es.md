---
title: "Monitorización de los ataques DDoS con el Network Security Dashboard"
excerpt: "Aprenda a navegar por el panel de control de seguridad de red"
updated: 2023-12-19
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica el panel de control de seguridad de la red y proporciona una visión general de las medidas de respuesta activadas por nuestra infraestructura de protección DDoS cuando se detecta actividad de red malintencionada. Puede encontrar información detallada sobre las protecciones adicionales activadas que se deben implementar para mantener sus servicios activos y en funcionamiento. Además, hay gráficos de tráfico disponibles en el tablero de mandos para limpiar los periodos de actividad del centro a fin de visualizar mejor la situación.

## Requisitos

- Un servicio de OVHcloud expuesto en una dirección IP pública dedicada ([Servidor Dedicado](/links/bare-metal/bare-metal/), [VPS](https://www.ovhcloud.com/es-es/vps/), [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/), [IP adicional](https://www.ovhcloud.com/es-es/network/additional-ip/), etc.)
- Acceso al [área de cliente de OVHcloud](/links/manager)

## Instrucciones

### Seguridad de red 

La infraestructura anti-DDoS de OVHcloud es un sistema de defensa múltiple y distribuido para luchar contra los ciberataques. Consta de múltiples ubicaciones de borde y centros de limpieza que pueden analizar y limpiar el tráfico malintencionado. Junto con el [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) y la [GAME DDoS protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), ofrece servicios de protección de calidad para distintos casos.

La infraestructura anti-DDoS analiza constantemente el tráfico entrante (mecanismo de detección) y eventualmente redirige dicho tráfico a través de nuestros centros de limpieza (también conocidos como «mitigación») ubicados en data centers de todo el mundo. El tráfico entrante se analiza en profundidad y, finalmente, se filtra de los paquetes malintencionados antes de llegar al servidor o servicio.

#### ¿Qué ocurre cuando un ataque llega a la IP de mi servicio?

Cada vez que se detecta un ataque hacia una IP de su servicio, se le notifica por correo electrónico que el tráfico se ha desviado a través de la infraestructura anti-DDoS. También puede supervisar estos periodos en el panel de seguridad de la red con detalles adicionales.

Durante un ataque, una acción de mitigación activa se indica mediante un icono de advertencia en la página de lista de IP (en la sección `Gestionar las direcciones IP`{.action} del área de cliente).

![red-line-attack](images/forced_blur.png){.thumbnail}

> [!primary]
>
> Puede encontrar más información sobre cómo mitigar los ataques DDoS en OVHcloud [aquí](https://www.ovhcloud.com/es-es/security/anti-ddos/ddos-attack-optimization/).
>

> [!warning]
>
> Tenga en cuenta que la lógica de protección se basa en direcciones IP públicas asociadas a un servidor (o servicio). Como resultado, las estadísticas y los gráficos se muestran o calculan por IP.
> 

### Notificaciones de seguridad de red

![red-line-attack](images/nsd_04_blur.PNG){.thumbnail}

En el área de cliente de OVHcloud, acceda a la sección «Bare Metal Cloud» {.action}. A continuación, acceda a `Network`{.action} en el menú de la izquierda y haga clic en `IP`{.action}. Asegúrese de que la opción `Modo avanzado` esté activada para ver el estado de la infraestructura anti-DDoS y la configuración de sus componentes.

Las columnas corresponden al estado de limpieza anti-DDoS (**Mitigación**), la disponibilidad de las funciones de Edge Network **Firewall** y **Firewall GAME** y sus estados.

- El estado **Mitigación** puede ser:
    - **Automático** - El centro de limpieza está en modo **automático**. Es el modo recomendado para usar, redirecciona el tráfico para un análisis más profundo cuando sea necesario.
    - **Permanente** - El centro de limpieza está **habilitado de forma permanente**. No se recomienda habilitarlo permanentemente, a menos que se observe fluctuación de latencia debido a un redireccionamiento del tráfico hacia adelante y hacia atrás.
    - **Forzado** - Esto indica que el centro de limpieza está **tomando medidas** en este momento.

- La columna **Firewall** indica el estado del firewall de red perimetral que puede ser:
    - **Activado** - El firewall está **activado** para esta IP.
    - **Desactivado** - El firewall está **desactivado** para esta IP.
    - **(sin estado)** - No se ha creado la configuración del cortafuegos. Para configurar las reglas, haga clic en el botón `...`{.action} y seleccione `Crear firewall`{.action}.

- El estado del firewall **GAME** (disponible únicamente para los [servidores dedicados OVHcloud **Game**](/links/bare-metal/bare-metal/prices/#filterType=range_element&filterValue=game) puede ser:
    - **Activado** - La protección DDoS GAME está **activada** en esta IP.
    - **Desactivado** - El firewall GAME está **disponible** pero **desactivado** en esta IP.
    - **(sin estado)** - El firewall GAME no está disponible para esta IP. Esto significa que la IP de la lista no está configurada en una gama de productos compatible.

- La columna **Alertas** puede indicar un centro de limpieza activo con un icono de advertencia y una sugerencia adecuada.

### Network Security Dashboard

En el área de cliente de OVHcloud, puede acceder al panel de control desde la página de lista de IP (para una IP concreta) o directamente desde el panel de control de seguridad de red en el menú `Network`{.action}.

Acceda a la pestaña `Bare Metal Cloud`{.action}, luego a `Network`{.action} y seleccione `Network Security Dashboard`{.action}.

Alternativamente, en la lista de IP (esta opción solo está disponible cuando el centro de limpieza está en acción): Acceda a la pestaña `Bare Metal Cloud`{.action}, vaya a `Network`{.action} y haga clic en `Direcciones IP públicas`{.action}. Haga clic en el botón `...`{.action} y acceda a `Network Security Dashboard`{.action}.

En la pestaña **registro del centro de limpieza**, puede recuperar toda la información sobre los ataques detectados en el pasado (o que están en curso).

![red-line-attack](images/nsd_main_blur.png)

En la tabla, están presentes las siguientes columnas: 

- **Tiempo de detección** - Marca de tiempo de la primera detección de ataque
- **Hora de finalización**: marca de tiempo de cuándo finalizó la mitigación el centro de limpieza
- **IP de destino**: la IP que ha sido el objetivo del ataque
- **Vectores de ataque**: proporciona información sobre los tipos de ataques detectados, como ataques UDP o TCP, etc.

> [!warning]
>
> Tenga en cuenta que las direcciones IP de origen de los eventos detectados no se muestran porque suelen ser simuladas (los ataques DDoS pueden apuntar a otras fuentes distintas de las que proceden en realidad) y que dicha información puede ser engañosa o no utilizable.
> 

En la pestaña **Gráfico de tráfico**, puede ver un gráfico que muestra el tráfico a su dirección IP (bps o pps).

![red-line-attack](images/nsd_graph_tab_blur.png)

Presenta tráfico malintencionado que se descartó (**en rojo**) y tráfico limpio entregado a su dirección IP (**en verde**). También se muestran estadísticas básicas de mitigación, por ejemplo: cuántos ataques se detectaron para una IP seleccionada, cuánto tráfico (o paquetes) se limpió durante los ataques o cuántas veces los centros de limpieza realizaron una acción para inspeccionar su tráfico (número de eventos) en un período de tiempo seleccionado.

## FAQ

### ¿Por qué no veo todos los ataques en el panel de seguridad de la red?

Dependiendo de la naturaleza del ataque, se pueden tomar diferentes acciones para eliminar mejor la amenaza. En ambos casos, es mejor mitigar los ataques lo más cerca posible del origen:

- En caso de ataque a la red de OVHcloud (**external**), el tráfico se redirige a los centros de limpieza anti-DDoS para su limpieza (visible en el panel de control).
- Tenga en cuenta que los ataques procedentes de la red de OVHcloud (**internal**) son gestionados por nuestro equipo de seguridad. La mitigación se centra en bloquear el origen del ataque y no será notificada por los sistemas de infraestructura anti-DDoS.

### No se muestran datos en los registros del centro de limpieza, ¿es esto normal?

Sí, significa que no hay ataques sospechosos dirigidos a sus direcciones IP públicas.

### No se muestra ningún gráfico de tráfico o datos para una dirección IP que introduzco.

Estos datos solo están disponibles para las direcciones IP públicas durante los eventos de detección automática de la infraestructura anti-DDoS (cuando el tráfico se redirige a través del centro de limpieza).

### El gráfico de tráfico para algunas posiciones en los registros del centro de limpieza no está disponible.

Los datos del gráfico de tráfico sólo están disponibles durante las últimas dos semanas, mientras que las entradas del registro pueden revisarse durante el año pasado.

### Persiste un ataque a mi servicio, ¿cómo puedo proteger mejor mi servidor?

Algunos tipos de ataques pueden ser tan específicos que nuestra infraestructura anti-DDoS no podrá detectarlos ni limpiarlos automáticamente. En estos casos, el firewall configurado en su servidor es su mejor opción. También recomendamos descargar algunas de las reglas del firewall del servidor al borde de nuestra red, mediante el Edge Network Firewall.

Para obtener más información sobre cómo configurar las reglas de Edge Network Firewall, consulte nuestra guía [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Mi servicio sufre un ataque y tengo problemas en el servidor. ¿Qué más puedo hacer?

La infraestructura anti-DDoS es una solución diseñada para ofrecer la mejor eficiencia y una amplia gama de servicios que proteger. En algunos casos específicos, puede ser necesario realizar ajustes adicionales (por ejemplo, para la especificidad o el tamaño de la aplicación). Para ello, visite nuestro [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) y busque la acción apropiada dentro de la categoría "Ataque de red y/o anti-DDoS".

Para permitirnos comprender mejor su caso y poder ayudarle, indíquenos algunos detalles más:

#### Paso 1 - Capturar tráfico

Para poder ofrecerle la mejor solución, primero tendremos que analizar una muestra de tráfico.

Para proporcionarnos una captura de este tipo, ejecute este comando en Linux:

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

> [!primary]
>
> Si utiliza Windows, utilice [Wireshark](https://www.wireshark.org/) y capture 100.000 paquetes.
>

Una vez que el comando termina de ejecutarse, se crea el archivo de captura. Puede adjuntar el archivo creado a su tíquet de soporte o subirlo a nuestra solución de uso compartido de archivos utilizando [esta guía](/pages/account_and_service_management/account_information/use-plik).

Asegúrese de compartir el enlace del archivo cargado con el equipo de soporte de su tíquet.

#### Paso 2 - Proporcionar información a OVHcloud

En cualquier caso en el que sea necesario realizar ajustes en nuestro sistema anti-DDoS, es obligatorio proporcionarnos los siguientes datos específicos:

- Servicio alojado en el servidor afectado
- Fecha y hora de inicio del ataque
- Fecha y hora de finalización del ataque
- IP afectada(s)
- Servicio, protocolo y puerto utilizado por el servicio afectado
- Tamaño del servicio (XS: 1-10, S: 10-100, M: 100-1k, L: 1-10k, XL: 10-100k, XXL: 100k+ clientes conectados)
- Otros servicios alojados en el servidor
- Otros puertos utilizados en el servidor
- Existen otros servicios en direcciones IP separadas: Sí/No
- En caso afirmativo, ¿qué direcciones IP?
- ¿Se está eliminando el tráfico legítimo?: SÍ/NO
- Se ha perdido la conexión con el servidor: SÍ/NO
- Qué tipo de tráfico legítimo se va a eliminar

## Más información <a name="go-further"></a>

[Activación y configuración del Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

[Protección de un servidor GAME con el firewall de aplicaciones](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
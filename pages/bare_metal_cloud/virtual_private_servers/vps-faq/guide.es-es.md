---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

## ¿Qué es un VPS y para qué sirve?

Un servidor privado virtual (VPS) permite alojar sitios web (sitio corporativo, e-commerce, contenidos, multimedia) y aplicaciones de software (portales, Extranet, soluciones colaborativas, wikis, CRM). A diferencia del alojamiento compartido, los datos están aislados en una máquina virtual dedicada al usuario.

Los VPS, situados estratégicamente entre un alojamiento web y un servidor físico, combinan la fiabilidad y el rendimiento de un servidor dedicado sin tener que gestionar las cargas de hardware.

## ¿Qué elegir entre un VPS y un alojamiento web?

La utilización de un VPS se inscribe en la continuidad lógica de la de un alojamiento web. Los servidores privados virtuales ofrecen más posibilidades y mayor libertad de acción en cuanto a la configuración, el acceso y las funcionalidades (root, Apache PHP.init). También puede instalar un certificado SSL o cualquier otro programa de software que desee.

No obstante, tenga en cuenta la necesidad de seleccionar correctamente su VPS. ya que requiere una configuración acorde a las necesidades de las aplicaciones y una adaptación al crecimiento de su actividad.

## ¿Qué ventajas tiene un VPS con respecto a un servidor dedicado?

La ventaja de los VPS es que permiten liberarse de la gestión del hardware, como el seguimiento del estado de los discos duros, la memoria RAM y la CPU. Son adecuados para la mayoría de los usos web, para proyectos cuyo tamaño sea controlado.  
El uso de un servidor dedicado está recomendado para gestionar usted mismo la parte del hardware, construir arquitecturas más elaboradas, crear una infraestructura que incluya una red privada (vRack) o desplegar soluciones complejas que no sean servicios web.

Por regla general, los usuarios y usuarios que desarrollan su actividad web evolucionan hacia servidores dedicados o soluciones de Public Cloud. Estos servicios ofrecen infraestructuras más complejas y flexibles, adaptadas a un crecimiento fuerte.

## ¿Qué diferencia hay entre las soluciones VPS y Public Cloud?

El VPS es una solución adaptada a los entornos de preproducción y producción, que no necesitan un rendimiento constante.
El Public Cloud de OVHcloud ofrece una infraestructura multiservidor con alta disponibilidad de las máquinas. Esta solución también incluye una red privada, el vRack.

## ¿Cómo elegir un VPS de OVHcloud?

Para elegir un VPS que se ajuste a sus necesidades, compruebe que:

- la cantidad de recursos necesarios (procesador, memoria, espacio en disco, ancho de banda...);
- el sistema operativo requerido (Linux o Windows);
- los requisitos técnicos esenciales para el buen funcionamiento de la aplicación (por ejemplo, una base de datos requiere velocidad de lectura-escritura).

Esto le permitirá elegir entre nuestras soluciones de VPS:

- **VPS Starter**: máquina de entrada para probar nuestra solución (solo con una distribución Linux).
- **VPS Value, Essential y Comfort**: ideales para el alojamiento de sitios web, servicios de e-commerce o sistemas de monitorización;
- **VPS Elite**: adecuado para portales de e-commerce y aplicaciones que requieren más recursos de CPU y memoria.
- **VPS Limited Edition** (cantidad limitada): estos VPS ofrecen un rendimiento mejorado, una gran ventaja para alojar sitios web complejos, aplicaciones que consumen muchos recursos o incluso servidores de juego. Esta oferta es válida hasta agotar stock.

> [!primary]
> Es posible pasar de un VPS Limited Edition a otro VPS de la misma gama, pero, por motivos técnicos, no es posible pasar de un VPS Limited Edition a un VPS de otra gama (Starter, Value, Essential o Comfort).

### ¿Quién puede utilizar un VPS?

Para gestionar un VPS, es necesario tener conocimientos básicos de administración de servidores. Estos conocimientos son esenciales para gestionar el sistema operativo (Linux o Windows) instalado en la máquina y configurar las aplicaciones. ¿Cree que necesita un VPS, pero considera que no dispone de los conocimientos necesarios? Le invitamos a que se ponga en contacto con uno de nuestros [partners](/links/partner). 

Si desea disfrutar de recursos garantizados sin tener conocimientos de administración de servidores, le recomendamos nuestros [planes de hosting Performance](/links/web/hosting-performance-offer).

## ¿Cómo conectarme a mi VPS?

Puede conectarse a distancia a su VPS con las claves que le facilitemos por correo electrónico tras la entrega del servicio.
El método de conexión depende de los sistemas operativos utilizados.

En la guía ["Primeros pasos con un VPS"](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) encontrará todos los detalles.

## ¿Es posible alojar varios sitios web en un VPS?

Sí. Un VPS puede particionarse y organizarse en función de sus necesidades. De este modo, puede alojar varios sitios web o proyectos, asignando a cada uno de ellos un espacio privado cuyo volumen elija. Para simplificar estas operaciones, puede instalar un panel de control de sitios web, como Plesk o cPanel.

### ¿Se guarda un VPS?

Es recomendable aplicar una estrategia de backup adecuada en función de la sensibilidad de sus datos.  
Visite nuestra [página web del VPS](/links/bare-metal/vps-options) para saber más sobre las opciones disponibles.

## ¿Cómo proteger mi VPS?

Por defecto, el VPS se entrega "desnudo", por lo que no incluye ninguna configuración de seguridad. Es lo primero que tienes que hacer en la recepción.
Para ello, no dude en consultar la guía ["Proteger un VPS"](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

### ¿Cuál es el ancho de banda asignado a mi VPS? ¿Está garantizada?

El ancho de banda que aparece en la página de nuestros productos está garantizado. Es la tasa de transferencia mínima que se le ha asignado.

### ¿Qué SLA se aplica a mi VPS?

En todas las gamas de VPS, OVHcloud ofrece un SLA del 99,9%.

### ¿Cómo acceder al Backup Storage desde una dirección IP distinta de mi servicio? <a name="backupstorage"></a>

El acceso al backup FTP puede restringirse al servicio al que esté asociado desde el área de cliente de OVHcloud.

Para autorizar direcciones IP adicionales desde las que quiere acceder a su Backup Storage, puede utilizar la API de OVHcloud.  
Esto le permitirá recuperar sus copias de seguridad de datos desde un servicio diferente a través de diferentes protocolos (FTP, NFS, CIFS).

> [!warning]
> Solo es posible autorizar las direcciones IP de OVHcloud.
>

Conéctese a la [consola API de OVHcloud](/links/api) con las claves de su cuenta de cliente y utilice la siguiente llamada:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Cambie la configuración de la siguiente manera:

- `serviceName`: introduzca el nombre interno de su VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: establezca este parámetro en `true` si utiliza este protocolo.
- `ftp`: establezca este parámetro en `true` si utiliza este protocolo.
- `ipBlock`: introduzca la dirección IP que tendrá acceso, con el formato `203.0.113.100/32`.
- `nfs`: establezca este parámetro en `true` si utiliza este protocolo.

Pulse el botón `EXECUTE`{.action}.

Para comprobar que su dirección IP está autorizada, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>


## Más información

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
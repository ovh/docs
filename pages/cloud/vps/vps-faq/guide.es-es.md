---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Primeros pasos'
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## FAQ VPS

## ¿Qué es un VPS y para qué sirve?

Un servidor privado virtual (VPS) permite alojar sitios web (sitio corporativo, e-commerce, contenidos, multimedia) y aplicaciones de software (portales, Extranet, soluciones colaborativas, wikis, CRM). A diferencia del alojamiento compartido, los datos están aislados en una máquina virtual dedicada al usuario.

Los VPS, situados estratégicamente entre un alojamiento web y un servidor físico, combinan la fiabilidad y el rendimiento de un servidor dedicado sin tener que gestionar las cargas de hardware.

## ¿Qué elegir entre un VPS y un alojamiento web?

La utilización de un VPS se inscribe en la continuidad lógica de la de un alojamiento web. Los servidores privados virtuales ofrecen más posibilidades y mayor libertad de acción en cuanto a la configuración, el acceso y las funcionalidades (root, Apache PHP.init). También puede instalar un certificado SSL o cualquier otro programa de software que desee.

No obstante, tenga en cuenta la necesidad de seleccionar correctamente su VPS. ya que requiere una configuración acorde a las necesidades de las aplicaciones y una adaptación al crecimiento de su actividad.

## ¿Qué elegir entre un VPS y un alojamiento web Plesk?

Los alojamientos web Plesk disponen de un espacio con Plesk preinstalado. Puede gestionar sus sitios web pero no es administrador del servicio. y solo podrá utilizarse para la gestión.
Seleccionando un VPS, usted es el administrador del servidor y OVHcloud no tiene acceso a su contenido. Así podrá utilizarlo libremente según sus necesidades.

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
el sistema operativo (Linux o Windows),
- los requisitos técnicos esenciales para el buen funcionamiento de la aplicación (por ejemplo, una base de datos requiere velocidad de lectura-escritura).

Esto le permitirá elegir entre nuestras soluciones de VPS:

- **VPS Starter**: Máquina de entrada para probar nuestra solución (solo con una distribución Linux, sin panel de control web).
- **VPS Value, Essential y Comfort**: ideales para el alojamiento de sitios web, servicios de e-commerce o sistemas de monitorización;
- **VPS Elite**: adecuado para portales de e-commerce y aplicaciones que requieren más recursos de CPU y memoria.


### ¿Quién puede utilizar un VPS?

Para gestionar un VPS, es necesario tener conocimientos básicos de administración de servidores. Estos conocimientos son esenciales para gestionar el sistema operativo (Linux o Windows) instalado en la máquina y configurar las aplicaciones. ¿Cree que necesita un VPS, pero considera que no dispone de los conocimientos necesarios? Le invitamos a que se ponga en contacto con uno de nuestros partners. 

Si desea disfrutar de recursos garantizados sin tener conocimientos de administración de servidores, le recomendamos nuestros [planes de hosting Performance](https://www.ovhcloud.com/es-es/web-hosting/performance-offer/).

## ¿Cómo conectarme a mi VPS?

Para conectarse a su VPS, deberá utilizar la dirección IP, el nombre de usuario y la contraseña que le indicaremos por correo electrónico al recibir el pedido.
En Windows, le recomendamos que se conecte mediante el programa Putty. Puede conectarse directamente al terminal desde un equipo Linux.

En la guía ["Primeros pasos con un VPS"](../primeros-pasos-con-vps/) encontrará todos los detalles.

## ¿Es posible alojar varios sitios web en un VPS?

Sí. Un VPS puede particionarse y organizarse en función de sus necesidades. De este modo, puede alojar varios sitios web o proyectos, asignando a cada uno de ellos un espacio privado cuyo volumen elija. Para simplificar estas operaciones, puede instalar un panel de control de sitios web, como Plesk o cPanel.

### ¿Se guarda un VPS?

OVHcloud no realiza copias de seguridad de los datos alojados en su VPS. Por lo tanto, usted deberá crearlas por su cuenta.
Para ello, puede utilizar las siguientes opciones: la copia de seguridad manual (Snapshot) o la copia de seguridad automatizada.

## ¿Cómo proteger mi VPS?

Por defecto, el VPS se entrega "desnudo", por lo que no incluye ninguna configuración de seguridad. Es lo primero que tienes que hacer en la recepción.
Para ello, no dude en consultar la guía ["Proteger un VPS"](../consejos-proteccion-vps/).

### ¿Cuál es el ancho de banda asignado a mi VPS? ¿Está garantizada?

El ancho de banda que aparece en la página de nuestros productos está garantizado. Es la tasa de transferencia mínima que se le ha asignado.

### ¿Qué SLA se aplica a mi VPS?

En todas las gamas de VPS, OVHcloud ofrece un SLA del 99,9%.

### ¿Cómo acceder al Backup Storage desde una dirección IP distinta de mi servicio? <a name="backupstorage"></a>

El acceso al backup FTP puede restringirse al servicio al que esté asociado desde el área de cliente de OVHcloud.

Para poder añadir más direcciones IP de distintos servicios, puede utilizar la API de OVHcloud.
para así poder recuperar los backups desde un servicio de otra localización.

> [!warning]
> Solo es posible autorizar las direcciones IP de OVHcloud.
>

Conéctese a [https://api.ovh.com/](https://api.ovh.com/) y utilice la siguiente llamada:

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Introduzca los campos de la siguiente forma:

- `serviceName `: el nombre de su VPS
- `cifs `: marque si es necesario
- `ftp`: marque si es necesario
- `ipBlock`: introduzca la IP con el formato `1.2.3.4/32`
- `nfs`: marque si es necesario

![post api](images/post-api.png){.thumbnail}

Para comprobar que su dirección IP está autorizada, utilice la siguiente llamada:

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![get api](images/get-api.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

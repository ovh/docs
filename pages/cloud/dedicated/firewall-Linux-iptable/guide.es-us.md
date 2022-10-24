---
title: Configurar el firewall de Linux con iptables
excerpt: Cómo proteger un servidor con iptables
slug: firewall-iptables
section: Tutoriales
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 18/10/2022**

## Objetivo

Su servidor dedicado está equipado con un cortafuegos. Los cortafuegos crean una barrera entre una red de confianza y una red no fiable.
Los cortafuegos funcionan estableciendo reglas que regulan el tráfico autorizado y el que está bloqueado. El cortafuegos utilitario desarrollado para los sistemas Linux es iptables.

**Esta guía explica cómo proteger un servidor dedicado de OVH utilizando iptables.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la seguridad de un servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) en su cuenta de OVHcloud.
- Tener acceso de administrador (root/sudo) a su servidor por SSH.

## Procedimiento

> [!primary]
>
> Esta guía explica los comandos para una distribución Ubuntu Server.
>
> Esta guía es genérica.
 Tenga en cuenta que deberá adaptar los comandos en función de la distribución o el sistema operativo que utilice. En algunos casos le aconsejamos que utilice herramientas externas. Si necesita ayuda sobre el uso de dichas herramientas, puede consultar su documentación oficial.  
>

### 1. Actualizar el sistema

Los desarrolladores de distribuciones y sistemas operativos ofrecen actualizaciones frecuentes de los paquetes, en muchas ocasiones por motivos de seguridad. **La actualización de la distribución o sistema operativo es, por lo tanto, un aspecto fundamental a la hora de proteger su servidor dedicado.**

Para más información, consulte nuestra guía sobre la [seguridad de un servidor dedicado](https://docs.ovh.com/us/es/dedicated/seguridad-de-un-servidor-dedicado/).

### 2. Instalar el firewall iptables en Ubuntu

> [!primary]
>
> Existen dos versiones diferentes de iptables para IPv4 e IPv6. Las reglas que cubrimos en este tutorial Linux iptables se refieren a IPv4.
> Para configurar iptables para IPv6, debe utilizar la utilidad iptables6. Estos dos protocolos diferentes no funcionan juntos y deben configurarse de forma independiente.
>

iptables instalados por defecto en la mayoría de sistemas Linux. Para confirmar que iptables está instalado, utilice el siguiente comando:

```bash
sudo apt-get install iptables
```

El ejemplo de salida en Ubuntu confirma que la última versión de iptables ya está presente :

![version-iptables](images/step2-version-iptables.PNG){.thumbnail}

Por lo general, el comando iptables es el siguiente:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

A continuación le ofrecemos una lista de algunas de las opciones de iftables habituales:

- -A —append: Añade una regla a una cadena (al final).
- -C —check : Busca una regla que coincida con los requerimientos de la cadena.
- -D —delete: Borra las reglas especificadas de una cadena.
- -F —flush: Elimina todas las reglas.
- -I —insert: Añade una regla a una cadena en una posición dada.
- -L —list : Muestra todas las reglas de una cadena.
- -N -new-chain: Crea una nueva cadena.
- -v —verbose: Muestra más información cuando se usa una opción de lista.
- -X —delete-chain: Elimina la cadena proporcionada.

### 3. Comprobar el estado actual de iptables

Para ver todas las reglas actuales en su servidor, introduzca el siguiente comando en la ventana del terminal:

```bash
sudo iptables -L
```

El sistema muestra el estado de sus cadenas.<br>
La salida listará tres cadenas:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### 4. Autorizar el tráfico en localhost

Para autorizar el tráfico de su propio sistema (localhost), añada la cadena de entrada introduciendo lo siguiente:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Este comando configura el cortafuegos para aceptar el tráfico para la interfaz localhost (lo) (-i). Ahora todo lo que viene de su sistema pasará por su cortafuegos.
Es necesario establecer esta regla para que las aplicaciones puedan comunicarse con la interfaz localhost.

### 5. Autorizar el tráfico en puertos específicos <a name="step5"></a>

Estas reglas permiten el tráfico en los distintos puertos que usted especifique utilizando los comandos que se indican a continuación.
Un puerto es un punto de terminación de comunicación especificado para un tipo específico de datos.

Para autorizar el tráfico web HTTP, introduzca el siguiente comando:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Para autorizar únicamente el tráfico entrante SSH (Secure Shell), introduzca lo siguiente (tenga en cuenta que utilizamos el puerto 22, que es el número de puerto SSH por defecto. Si su número de puerto es diferente, asegúrese de ajustar los siguientes comandos en consecuencia):

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Para autorizar el tráfico de internet HTTPS, introduzca el siguiente comando:

```bash
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

Las opciones funcionan de la siguiente forma:

- -p: Comprueba el protocolo especificado (tcp).
- —dport : Especifica el puerto de destino.
- -j jump: Realiza la acción 

> [!warning]
> En caso de perder el acceso a su servidor, puede seguir utilizando la herramienta KVM/IPMI para acceder a él de nuevo y modificar su configuración o eliminar las reglas.
>
> Para más información sobre el acceso a esta herramienta, consulte [esta guía](https://docs.ovh.com/us/es/dedicated/utilizar-ipmi-servidor-dedicado/).
> 

### 6. Controlar el tráfico por dirección IP

Utilice el siguiente comando para aceptar el tráfico desde una dirección IP específica.

```bash
sudo iptables -A INPUT -s su_dirección_IP_a_autorizar -j ACCEPT
```

Sustituya la dirección IP en el pedido por la dirección IP que quiera autorizar.

También puede bloquear el tráfico desde una dirección IP 

```bash
sudo iptables -A INPUT -s su_dirección_IP_a_bloquear -j DROP
```

Sustituya la dirección IP en el pedido por la dirección IP que quiera bloquear.

Puede rechazar el tráfico a partir de un rango de direcciones IP, con el siguiente comando:

```bash
sudo iptables -A INPUT -m iprange --src-range su_dirección_IP_inicio-su_dirección_IP_fin -j REJECT
```

Las opciones iptables que hemos utilizado en los ejemplos funcionan de la siguiente manera:

- -m: Coincide con la opción especificada.
- -iprange: Indica que el sistema espere un rango de direcciones IP en lugar de una.
- —src-range: Identifica el rango de direcciones IP.

### 7. Eliminar el tráfico no deseado

Si establece reglas de firewall iptables, debe impedir el acceso no autorizado eliminando el tráfico procedente de otros puertos:

```bash
sudo iptables -A INPUT -j DROP
```

La opción -A añade una nueva regla a la cadena. Si una conexión pasa por puertos distintos de los que ha definido, se abandonará.

> [!warning]
> 
>Atención: Si introduce este comando antes de realizar [el paso 5](#step5), bloqueará todos los accesos, incluido el actual, el acceso SSH. Esto es especialmente problemático en una máquina a la que se accede a distancia. 
>

### 8. Eliminar una regla

Un método más preciso es eliminar el número de línea de una regla.

```bash
sudo iptables -P INPUT DROP 
```

En primer lugar, enumere todas las reglas introduciendo lo siguiente:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Busque la línea de la regla de cortafuegos que quiera eliminar y ejecute el siguiente comando:

```bash
sudo iptables -D INPUT <Number>
```

Sustituya `Number` por el número de línea de la regla que quiera eliminar.

### 9. Guardar los cambios

Al reiniciar el sistema, iptables no conserva las reglas que había creado.
Cada vez que configure iptables en Linux, todos los cambios que realice se aplicarán únicamente hasta el siguiente reinicio.

Para guardar las reglas en los sistemas basados en Ubuntu, escriba:

```bash
sudo -s iptables-save -c
```

La próxima vez que inicie el sistema, iptables recargará automáticamente las reglas del firewall.

Ya puede configurar reglas de firewall iptables básicas para su servidor Linux.
No dude en experimentar, ya que siempre puede borrar las reglas que no necesita, o vaciar todas las reglas y volver a empezar.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

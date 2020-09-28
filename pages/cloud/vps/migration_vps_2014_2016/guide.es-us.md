---
title: Migración de un VPS 2014 a la gama 2016
excerpt: Esta guía explica las distintas formas de migración y ofrece información imprescindible para realizar con éxito esta operación.
slug: migracion_de_un_vps_2014_a_la_gama_2016
section: Miscelánea
---


## 
Los VPS Classic 2014 solo pueden migrar al modelo equivalente de la gama VPS SSD 2016 de forma manual.

Los VPS Cloud 2014 pueden migrar al modelo equivalente de la gama VPS Cloud 2016 de forma manual o automática.


## Migración manual
Le entregaremos un nuevo VPS de la gama 2016 y le prorrogaremos el servicio por el tiempo equivalente a la diferencia de precio entre ambos modelos. 

Por ejemplo, si usted tuviera un VPS de 10 €/mes pagado por 3 meses, y el precio del nuevo modelo fuera de 5 €/mes, la fecha de renovación se aplazaría 6 meses para reflejar la bajada de precio.

En la práctica, la página de migración le indicará exactamente cuál será el nuevo precio y la nueva fecha de renovación antes de aceptar la migración. 

Su antiguo VPS permanecerá activo durante cinco días para que pueda migrar sus servicios tranquilamente. Al cabo de este período de tiempo, será suspendido. 

La entrega del nuevo VPS comenzará en el momento en el que lo solicite y el proceso será exactamente el mismo que si hubiera realizado un nuevo pedido. Unos minutos después, recibirá por correo electrónico las instrucciones para acceder a su nuevo VPS 2016, y este aparecerá en su área de cliente.


## Migración automática
Esta opción solo está disponible para los VPS Cloud. Su VPS se convertirá al formato de OpenStack y se iniciará en la nueva infraestructura.

## ¡Importante! Este método presenta las siguientes limitaciones:

- No tiene garantías: Hemos probado y migrado con éxito todas nuestras plantillas, pero la configuración de algunos servicios tras la entrega (firewall, servicios configurados sobre la IP pública, configuración de red específica, etc.) puede impedir que su VPS funcione en la nueva infraestructura. 
- Interrupción del servicio: Tendremos que apagar su VPS y copiar el disco en la nueva infraestructura. Esta operación tardará al menos unos 30 minutos, más una duración variable en función del tamaño de su VPS.
- Cambio de dirección IP: Su VPS cambiará de dirección IP y debe estar en DHCP para funcionar en la nueva infraestructura.


Cuando solicite la migración automática de su VPS, le comunicaremos su futura dirección IP y realizaremos la migración seis horas después. De este modo, podrá iniciarla por la noche y tendrá tiempo suficiente para transferir sus nombres de dominio.  

Para garantizar una correcta migración en Linux, le invitamos a seguir los pasos que se indican a continuación (en Windows no será necesario).

Pase a DHCP:


```
# Debian based
/etc/network/interfaces
auto lo
iface lo inet loopback
auto eth0
iface eth0 inet dhcp
```



```
# RedHat based
/etc/sysconfig/network
Delete the line that starts with GATEWAY=
/etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE="eth0"
BOOTPROTO="dhcp"
IPV6INIT="no"
ONBOOT="yes"
```


Desactive las reglas udev:


```
#rm -f /etc/udev/rules.d/70-persistent-net.rules
#rm -f /lib/udev/write_net_rules
```


Si tiene cualquier problema, puede utilizar el KVM y el modo de rescate (desde el área de cliente) para corregir la configuración de su VPS.
Tras la migración, una vez que todo funcione correctamente, podrá: 


- desinstalar los VMwareTools (ya no serán necesarios); 
- reactivar la monitorización SLA del VPS en su área de cliente o la API.


Si no consigue que su VPS funcione en la nueva infraestructura, dispone de un plazo de quince días, durante el cual conservaremos su antiguo VPS, para revertir la operación y reiniciar su antiguo VPS. En ese caso, perderá todos los cambios realizados entre la migración y la recuperación de su antiguo VPS.


## 
Antes de realizar la migración, realice una copia de seguridad de sus datos.
Asegúrese de haber entendido correctamente el procedimiento de migración. Si tiene alguna duda, contacte con nosotros y le asistiremos durante el proceso para que la migración se realice sin inconvenientes.

Acceda a la [página para solicitar la migración](https://www.ovh.es/vps2016/migration2014to2016/#/) e identifíquese con su ID de cliente de OVH.

Seleccione el VPS que quiera migrar en la lista desplegable y el tipo de migración (automática o manual).

Seleccione el centro de datos de destino. La página le indicará la nueva tarifa, la nueva fecha de expiración del servicio y la nueva dirección IP en caso de migración automática.

Acepte las condiciones particulares y podrá iniciar la migración.


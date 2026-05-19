---
title: Información Anti-Hack - Servidor dedicado y VPS
excerpt: Descubra qué información se mostrará y se proporcionará cuando se active la protección Anti-Hack interna de OVHcloud.
updated: 2026-05-04
---

**Descubra qué ocurre cuando la protección Anti-Hack de OVHcloud se activa en su Servidor dedicado o en su VPS.**

## Requisitos

- un Servidor dedicado o un VPS que haya sido comprometido
- acceso al [área de cliente de OVHcloud](/links/manager)

## Información Anti-Hack

### Servidor dedicado

Cuando la protección Anti-Hack se activa en su Servidor dedicado, aparece un mensaje en su [área de cliente de OVHcloud](/links/manager): "*Su servidor ha sido comprometido. Póngase en contacto con nuestro equipo de asistencia técnica para obtener instrucciones sobre los pasos a seguir.*"

Según el nivel de criticidad de la protección Anti-Hack activada por OVHcloud, las siguientes acciones estarán autorizadas/serán necesarias para restablecer el servicio completo en el servidor.

| Estado | Acciones esperadas |
| ------ | ----------------- |
| Comprometido | Reiniciar el servidor o solicitar a OVHcloud que reinstale el servidor |
| ComprometidoBloqueado | Recopilar los datos a través de FTP en el servidor iniciado en el sistema rescue FTP |

![información antihack SD](images/hacked-service.png){.thumbnail}

En caso de que su servidor sea colocado en modo rescue FTP, OVHcloud también abrirá un ticket de soporte en su nombre con el siguiente contenido:

>
> Estimado cliente,
>
> Dado que su servidor nsXXXXXXX.ip-XXX-XXX-XXX.eu representa una amenaza demasiado grave para nuestra red,
hemos tenido que colocarlo en modo "rescue FTP". Se le ha enviado un correo electrónico
con un nombre de usuario y una contraseña para que pueda
recuperar fácilmente los datos que aún se encuentran en el espacio de almacenamiento.
>
> No dude en ponerse en contacto con nuestro soporte técnico para evitar que esta
situación se vuelva crítica.
>
> A continuación encontrará los registros generados por nuestro sistema que desencadenaron esta alerta.
>
> - INICIO DE LA INFORMACIÓN ADICIONAL -
>
>  <Detalles del ataque>
>
> - FIN DE LA INFORMACIÓN ADICIONAL -
>
> Atentamente,
>
> Soporte al cliente de OVHcloud
> El equipo de OVHcloud

### VPS

Cuando la protección Anti-Hack se activa en su VPS, este puede ser colocado en modo rescue según la gravedad de la amenaza detectada.

![información antihack VPS](images/hacked-vps.png){.thumbnail}

En caso de que su VPS sea colocado en modo rescue, OVHcloud también abrirá un ticket de soporte en su nombre con el siguiente contenido:

>
> Estimado cliente,
>
> Se ha detectado actividad anómala en su VPS vps-XXXXXXXX.vps.ovh.net.
>
> Su VPS ha sido colocado en modo rescue. Esto le permitirá intervenir
en su VPS para resolver los problemas detectados. Se le ha enviado un correo electrónico con información sobre el modo rescue.
>
> Ya no es posible realizar ninguna acción en su VPS a través de su Manager/API. Solo son posibles las siguientes acciones:
>
> - Reinstalación de su VPS.
> - Uso del modo rescue para resolver los problemas detectados.
>
> Una vez resueltos los problemas, póngase en contacto con nuestro soporte técnico para restaurarlo al modo normal.
>
> No dude en ponerse en contacto con nuestro equipo de soporte técnico para evitar que esta situación se vuelva crítica.
>
> A continuación encontrará los registros generados por nuestro sistema que desencadenaron esta alerta.
>

> [!primary]
> **Tenga en cuenta la última parte del mensaje que indica:** "*Una vez resueltos los problemas, póngase en contacto con nuestro soporte técnico para restaurarlo al modo normal. No dude en ponerse en contacto con nuestro equipo de soporte técnico para evitar que esta situación se vuelva crítica.*"
>

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).

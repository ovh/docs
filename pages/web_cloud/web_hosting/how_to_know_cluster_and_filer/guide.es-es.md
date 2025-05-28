---
title: "Web hosting - Cómo conocer su cluster y su filer"
excerpt: "Cómo encontrar el número de cluster y/o el número de filer en el que se encuentra su alojamiento web"
updated: 2025-05-21
---

## Objetivo

Los alojamientos web funcionan en una infraestructura compartida denominada *cluster*. OVHcloud dispone de varios clusters en los que se reparten varios alojamientos web.
Cada cluster, por motivos de eficacia y seguridad, también se divide virtualmente en varios segmentos denominados *filers*. Los filers contienen varios alojamientos web.
Al utilizar un alojamiento web, es posible que deba conocer el número del cluster o del filer en el que se encuentra el alojamiento web.

**Descubra cómo encontrar el número de cluster y el número de filer en el que se encuentra su alojamiento web.**

## Procedimiento

- Tener contratado un plan de [alojamiento web](/links/web/hosting).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Obtener el número de cluster de un alojamiento web

Haga clic en las fichas siguientes para ver cada uno de los **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, consulte el número de cluster del alojamiento web en la columna izquierda, bajo el epígrafe **Servidor FTP y SFTP** (3 cifras entre `0` y `9`).
>>
>> ![FTP-SSH - número del cluster](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/find-cluster-ftp-ssh.png){.thumbnail}

### Consultar el número del filer de un alojamiento web

Haga clic en las fichas siguientes para ver cada uno de los **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En el recuadro **Información general** de la página que se abre, obtenga el número del filer bajo la indicación `Servidor de archivos`{.action}.
>>
>> ![Número del filer](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/filer.png){.thumbnail}

## Más información

[Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
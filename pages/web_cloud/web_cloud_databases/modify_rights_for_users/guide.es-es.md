---
title: "Web Cloud Databases - Modificar los permisos de un usuario"
excerpt: "Descubra cómo modificar los permisos de un usuario en su solución Web Cloud Databases"
updated: 2025-06-23
---

## Objetivo

La solución [Web Cloud Databases](/links/web/databases) puede contener varias bases de datos. Permite definir uno o varios usuarios para la gestión y el uso de las bases de datos. Estos usuarios pueden tener permisos más o menos elevados en función de sus funciones en las bases de datos.
Durante el uso del producto, es posible que necesite modificar los permisos de un usuario en su [Web Cloud Databases](/links/web/databases).

**Descubra cómo modificar los permisos de un usuario en una solución Web Cloud Databases.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Disponer de una solución [Web Cloud Databases](/links/web/databases) y de uno o varios usuarios.

## Procedimiento

> [!primary]
> Para crear un nuevo usuario en su solución Web Cloud Databases, consulte la sección **Crear un usuario** de nuestra guía "[Crear bases de datos y usuarios en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Web Cloud Databases`{.action} y seleccione la solución Web Cloud Databases correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Usuarios y permisos`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha del usuario correspondiente y seleccione `Editar los permisos`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se abrirá una nueva página en la que podrá consultar todas las bases de datos de su solución Web Cloud Databases. En esta tabla podrá consultar todos los derechos de los que dispone su usuario para cada una de las bases de datos de su solución Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Aquí es donde podrá modificar los permisos de su usuario para cada una de sus bases de datos. Para ello y para cada una de las bases de datos afectadas, solo tiene que hacer clic en los círculos vacíos correspondientes a los permisos que quiere redefinir para su usuario. La modificación se hará efectiva en unos instantes.

A continuación se resumen los tipos de consultas posibles en una base de datos en función del derecho asignado al usuario:

<table align="center">
<thead>
<tr>
<th><center>Permisos</center></th>
<th><center>Administrador</center></th>
<th><center>Lectura y escritura</center></th>
<th><center>Lectura</center></th>
<th><center>Ninguno</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Más información
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
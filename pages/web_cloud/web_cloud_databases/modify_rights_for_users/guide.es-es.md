---
title: "Web Cloud Databases - Modificar los permisos de un usuario"
excerpt: "Descubra cómo modificar los permisos de un usuario en su solución Web Cloud Databases"
updated: 2026-03-24
---

## Objetivo

La solución [Web Cloud Databases](/links/web/databases) puede contener varias bases de datos. Permite definir uno o varios usuarios para la gestión y el uso de las bases de datos. Estos usuarios pueden tener permisos más o menos elevados en función de sus funciones en las bases de datos.
Durante el uso del producto, es posible que necesite modificar los permisos de un usuario en su [Web Cloud Databases](/links/web/databases).

**Descubra cómo modificar los permisos de un usuario en su solución Web Cloud Databases.**

## Requisitos

- Disponer de una solución [Web Cloud Databases](/links/web/databases) y de uno o varios usuarios.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

<!-- CP-STEPS-START:modificar-permisos-usuario -->

> [!primary]
> Para crear un nuevo usuario en su solución Web Cloud Databases, consulte la sección **Crear un usuario** de nuestra guía "[Crear bases de datos y usuarios en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Usuarios y permisos`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} situado a la derecha del usuario correspondiente y seleccione `Editar los permisos`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página que aparece, encontrará una tabla con todas las bases de datos de su solución Web Cloud Databases. En esta tabla podrá consultar todos los permisos de los que dispone su usuario para cada una de las bases de datos de su solución Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Aquí es donde podrá modificar los permisos de su usuario para cada una de sus bases de datos. Para ello, en cada base de datos correspondiente, haga clic en los círculos vacíos que se correspondan con los permisos que quiera redefinir para su usuario. La modificación se hará efectiva en unos instantes.

<!-- CP-STEPS-END:modificar-permisos-usuario -->

A continuación se muestra una tabla que resume los tipos de consultas posibles en una base de datos en función del permiso asignado al usuario:

<table align="center">
<thead>
<tr>
<th><center>Permisos</center></th>
<th><center>Administrador</center></th>
<th><center>Lectura / Escritura</center></th>
<th><center>Lectura</center></th>
<th><center>Ninguno</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).

---
title: FAQ Hosted Private Cloud
excerpt: ''
slug: faq_dedicated_cloud
legacy_guide_number: g598
section: FAQ
---


## Al configurar el HA aparece el error: «Cannot complete the configuration of the HA agent on the host».
Si el error persiste, debe desconfigurar y volver a configurar manualmente el cluster con el HA. Para ello, acceda a las propiedades de su cluster, desmarque la opción HA y acepte los cambios. Una vez finalizada la tarea, puede volver a las propiedades y reactivar la opción HA. Cuando se haya completado la operación, la opción HA estará activa en su cluster.


## ¿Para qué sirve la opción «Rescan Datastore» del cluster?
Esta opción se utiliza en los almacenamientos iSCSI para actualizar todas las rutas de acceso. 
En OVH, esta operación no es necesaria, ya que solo se utiliza en los filers iSCSI, que nosotros no ofrecemos.


## Después de una alarma, esta permanece indicada sobre el host (triángulo rojo).
Es necesario aceptar la alarma y ponerla en verde. En la pestaña «Alarms» de su host, haga clic derecho sobre la alarma.


## Tengo una MV en estado «Invalid».
En ese caso, elimine la MV del inventario haciendo clic derecho sobre ella. 
Seleccione «Remove from Inventory» (eliminar del inventario) y no «Delete from Disk» (borrar del disco). Si eligiera esta segunda opción, perdería todos los datos de su MV.
A continuación, solo tiene que volver a añadir la MV al inventario.


## Cuando accedo a la consola de mi MV, me sale una pantalla en negro.
El SO de la MV ha puesto la pantalla en suspensión. Pulse cualquier tecla de su teclado para reactivarla.


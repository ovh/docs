---
title: Enterprise File Storage - Conceptos de rendimiento
excerpt: "Descubra los conceptos relacionados con el aprovisionamiento, el seguimiento y la prueba de rendimiento de la solución Enterprise File Storage"
updated: 2025-09-12
---

## Objetivo

Descubra los conceptos relacionados con el aprovisionamiento, el seguimiento y la prueba del rendimiento de la solución [Enterprise File Storage](/links/storage/enterprise-file-storage).

## Procedimiento

### Seguimiento del rendimiento

El concepto de "nivel de servicio" es un elemento importante de la solución Enterprise File Storage. Establece los niveles de rendimiento alcanzables para cada servicio aprovisionado. El rendimiento de un sistema de archivos suele definirse por varios elementos: 

- Tasa de bits.
- Las IOPS (o número de operaciones de entrada-salida por segundo).
- El tamaño de bloque.
- El modelo de acceso secuencial o aleatorio.

A día de hoy, Enterprise File Storage proporciona y garantiza objetivos de rendimiento de **64 MB/s por TB y 4000 IOPS por TB**. La capacidad aprovisionada de los servicios tiene, por tanto, un impacto directo en el rendimiento disponible para su servicio.

Esta información es importante al diseñar la arquitectura de almacenamiento. Veamos tres ejemplos:

- **Ejemplo n°1**: su aplicación necesita una tasa de transferencia teórica de aproximadamente **430 MB/s**. Para ello, debe aprovisionar al menos **7 TB** de almacenamiento. En efecto, un rápido cálculo (**430/64 = 6,72**) permite estimar la capacidad mínima necesaria para alcanzar este caudal.

- **Ejemplo n°2**: su infraestructura necesita **4500 IOPS** y un volumen de datos de **1 TB**. Para ello, debe aprovisionar **2 TB** para obtener las **4500 IOPS necesarias**. Más específicamente en este caso, disfrutará de **8000 IOPS** sobre la capacidad aprovisionada. Por lo tanto, el objetivo es recargar el servicio para garantizar el nivel de rendimiento deseado.

- **Ejemplo n°3**: su aplicación no necesita un rendimiento en particular, pero un volumen de almacenamiento de más de **60 TB**. En ese caso, es preferible optar por el servicio de almacenamiento [NAS-HA](/links/storage/nas-ha), más económico y que permite alcanzar una capacidad superior a 58 TB por servicio.

### volúmenes y calidad de servicios (QoS)

Le recordamos que un volumen es una partición del servicio (también llamada "pool" o "pool de capacidad"). Durante el pedido, aprovecha una capacidad para su servicio. Una vez entregado el servicio, deberá crear sus volúmenes poniendo a su disposición un espacio de entre 100 GB y 29 TB por volumen. 

A continuación ofrecemos la jerarquía de un servicio de almacenamiento Enterprise File Storage:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png){.thumbnail}

Enterprise File Storage todavía no permite cambiar la QoS manualmente. La QoS se define en el nivel de servicio (pool).

### Cómo optimizar el rendimiento de su sistema de archivos

Para optimizar el rendimiento de su Enterprise File Storage, es importante tener en cuenta:

- Tenga en cuenta que la solución Enterprise File Storage se reserva en el mismo datacenter que sus cargas de trabajo. La latencia entre los datacenters puede ser elevada y afectar al rendimiento global de su aplicación.
- Para una mayor fiabilidad y un ancho de banda máximo, favorezca a los servidores de última generación, ya que disponen de las nuevas interfaces de red.
- Identifique el ancho de banda público disponible en los servidores de clientes para garantizar la compatibilidad con el rendimiento aprovisionado y así maximizar el rendimiento.

### Prueba de rendimiento

Para realizar sus propias pruebas de rendimiento y familiarizarse con los niveles de servicio de Enterprise File Storage, le recomendamos que utilice herramientas como [FIO](https://github.com/axboe/fio), una popular herramienta de evaluación. Ofrece numerosas opciones configurables para simular la carga de trabajo deseada y proporciona estadísticas detalladas sobre el comportamiento del almacenamiento bajo carga. También está disponible de forma gratuita en una amplia gama de sistemas operativos.

Es importante probar el rendimiento de su Enterprise File Storage en el mismo datacenter que sus cargas de trabajo. La latencia entre los datacenters es demasiado elevada durante el funcionamiento normal para que dicha evaluación sea pertinente.

Antes de iniciar el test, compruebe que el cliente utilizado para este benchmark tenga acceso a su servicio Enterprise File Storage y a un volumen de prueba. Si todavía no lo ha hecho, puede consultar la guía de [gestión desde el área de cliente de OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_control_panel).

#### Banco de pruebas

La herramienta [FIO](https://github.com/axboe/fio) le permite probar varios escenarios y modificar numerosos parámetros de prueba: 

- El número de imágenes.
- El tamaño de las imágenes.
- El tamaño de bloque.
- La duración del test.
- El número de FIO workers.
- El modelo de acceso (lectura/escritura/secuencial/aleatoria), etc.

A continuación se muestran algunos ejemplos de comandos FIO que permiten confirmar que se puede alcanzar el número máximo de IOPS (4000) o el ancho de banda máximo (64MB/s) para un servicio EFS de 1 TB:

**Random read - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=8k -size=1G -time_based -runtime=60 -name=test1 -directory=/share-nfs
```
**Random write - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=8k -size=1G -time_based -runtime=60 -name=test2 -directory=/share-nfs
```
**Random read - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=64k -size=1G -time_based -runtime=60 -name=test3 -directory=/share-nfs
```
**Random write - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=64k -size=1G -time_based -runtime=60 -name=test4 -directory=/share-nfs
```
**Sequential read - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=8k -size=1G -time_based -runtime=60 -name=test5 -directory=/share-nfs
```
**Sequential write - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=8k -size=1G -time_based -runtime=60 -name=test6 -directory=/share-nfs
```
**Sequential Read - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=64k -size=1G -time_based -runtime=60 -name=test7 -directory=/share-nfs
```
**Sequential write - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=64k -size=1G -time_based -runtime=60 -name=test8 -directory=/share-nfs
```

Más información en [la documentación de FIO](https://fio.readthedocs.io/en/latest/index.html).

**También puede utilizar otras herramientas open source como:**

- [nfsiostat](https://man7.org/linux/man-pages/man8/nfsiostat.8.html)
- [NFStest](https://wiki.linux-nfs.org/wiki/index.php/NFStest)
- [nfstrace](https://github.com/epam/nfstrace)

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en Discord : <https://discord.gg/ovhcloud>

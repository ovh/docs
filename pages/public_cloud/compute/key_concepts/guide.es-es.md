---
title: 'Public Cloud Instancias - Conceptos clave'
excerpt: 'Descubra los fundamentos del Public Cloud Compute: funcionamiento de las instancias, familias y tamaños disponibles, despliegues multi-AZ, gestión de imágenes, seguridad SSH, mecanismos de copia de seguridad, red pública/privada, y ventajas de los Savings Plans.'
updated: 2025-12-05
---

## Objetivo

Esta guía tiene como objetivo brindarle una comprensión clara de los conceptos fundamentales necesarios para la creación, configuración y gestión de sus primeras instancias de OVHcloud Public Cloud Compute. Aprenderá cómo funcionan las instancias, cómo elegir el tipo de instancia adecuado y cómo los elementos clave, como las imágenes, las zonas de disponibilidad, la red, la seguridad y las copias de seguridad, se integran dentro del ecosistema de OVHcloud.

## ¿Qué es una instancia (Máquina Virtual)?

Una instancia, o Máquina Virtual (VM), es un servidor completamente aislado que se ejecuta en la infraestructura física compartida de OVHcloud. Funciona como un servidor tradicional, pero ofrece la flexibilidad y escalabilidad de la nube. Usted elige el sistema operativo, define los recursos de CPU, RAM y Almacenamiento, y despliega sus aplicaciones, sitios web o entornos de desarrollo.

Las instancias de Public Cloud Compute ofrecen:

- Creación bajo demanda y escalado flexible – Escalar recursos según sus necesidades.
- Facturación progresiva – Facturado por hora o por mes según el uso real.
- Integración transparente con los servicios de OVHcloud – incluyendo el almacenamiento de objetos (*Object Storage*), la red, las copias de seguridad y mucho más.

Las instancias pueden gestionarse a través del área de cliente de OVHcloud, la interfaz Horizon, los puntos de acceso API, o mediante herramientas de automatización y orquestación como la CLI de OVHcloud y Terraform.

## Tipos de instancias

OVHcloud ofrece varias familias de instancias diseñadas para satisfacer diferentes necesidades de carga de trabajo. Cada familia ofrece una gama de tamaños (*flavors*) para adaptarse precisamente a sus necesidades de recursos.

| Tipos de instancias  | Descripción                      | Casos de uso típicos                                                                                                                                                        |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General            | Equilibrio entre CPU y Memoria         | Adecuado para servidores de desarrollo, aplicaciones web y cargas de trabajo empresariales generales. Proporciona una relación equilibrada entre CPU y RAM.                                            |
| CPU optimizada     | Alta rendimiento del procesador     | Ideal para aplicaciones intensivas en cálculo, tareas de procesamiento paralelo, pipelines CI/CD o microservicios que requieren una alta frecuencia de CPU.                                     |
| Memoria optimizada | Alta capacidad de memoria          | Diseñado para análisis de datos, cargas de trabajo de big data y caché de bases de datos. Presenta altas relaciones memoria/CPU y IOPS acelerados. Los núcleos virtuales están a 2 GHz o más.       |
| Almacenamiento optimizado | Alta rendimiento IOPS           | Equipado con almacenamiento NVMe para E/S de disco ultrarrápidas, ideal para bases de datos y aplicaciones de big data.                                                                     |
| GPU                | Gráficos acelerados por hardware      | Proporciona un rendimiento de cálculo paralelo excepcional, hasta 1000 veces más rápido que la CPU para ciertas cargas de trabajo. Adecuado para IA, aprendizaje profundo y renderizado 3D.               |
| Descubrimiento     | Recursos compartidos, económico | Instancias de entrada con recursos compartidos, ofreciendo un rendimiento estable a un precio asequible. Ideal para entornos de prueba, formación o proyectos de demostración. | 

Cada familia de instancias incluye varios tamaños (flavors) para ayudarle a adaptar la instancia a las necesidades específicas de sus aplicaciones.

## Localización y zonas de disponibilidad

Las instancias de Public Cloud de OVHcloud se despliegan en [varios centros de datos a través del mundo](/links/infrareg), garantizando una alta disponibilidad y proximidad con sus usuarios. Ejemplos de regiones:

- GRA – Gravelines, Francia
- BHS – Beauharnois, Canadá
- DE – Fráncfort, Alemania

**Tipos de zonas de disponibilidad:**

| Tipos de zona                   | Descripción                                                                    | Uso recomendado                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | Las instancias se despliegan en una sola zona.                                   | Entornos simples, desarrollo, pruebas o cargas de trabajo no críticas.                                  |
| 3-AZ (Triple Availability Zone) | Las instancias se distribuyen en tres zonas redundantes dentro de la misma región. | Cargas de trabajo de producción que requieren alta disponibilidad y tolerancia a fallos.                                  |
| Zonas Locales                     | Ubicaciones periféricas más cercanas a los usuarios finales para reducir la latencia. | Aplicaciones sensibles a la latencia como procesamiento de datos en tiempo real, juegos en línea o servicios web interactivos. | 

> [!primary]
> 
> **Buena práctica**: Para cargas de trabajo críticas, elija un [despliegue multi-AZ](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture) para garantizar la resiliencia y la continuidad del servicio.
>

## Imágenes del sistema disponibles

Al crear una instancia, selecciona una imagen que incluye el sistema operativo y, posiblemente, aplicaciones preinstaladas. OVHcloud ofrece una variedad de imágenes para satisfacer necesidades diversas:

- **Distribuciones Linux**: Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux y otras. Estas imágenes están listas para servidores web, entornos de desarrollo y cargas de trabajo generales.
- **Windows Server**: Versiones con licencias integradas, permitiendo un despliegue inmediato para aplicaciones basadas en Microsoft y cargas de trabajo empresariales.
- **Aplicaciones preconfiguradas**: Imágenes que incluyen software como cPanel, Plesk, Docker o NVIDIA GPU Cloud (NGC). Simplifican el despliegue y aceleran la transición a producción.
- **[Imágenes personalizadas](/pages/public_cloud/Compute/upload_own_image)**: Puede importar sus propias imágenes en formato QCOW2 o RAW, ofreciendo un control total sobre su entorno y permitiendo migraciones, modelos estándar o configuraciones especializadas.

**Ciclo de vida y soporte**: OVHcloud actualiza regularmente el catálogo de imágenes. Siempre consulte las anuncios sobre el ciclo de vida y el fin del soporte para asegurarse de que sus imágenes siguen seguras y soportadas. Ver [aquí](/pages/public_cloud/Compute/image-life-cycle).

## Claves SSH

Las claves SSH ofrecen un medio seguro para acceder a sus instancias sin utilizar contraseñas. Están compuestas por dos elementos:

- **Clave pública**: Instalada en la instancia para permitir el acceso.
- **Clave privada**: Conservada con seguridad en su máquina local y utilizada para autenticar la conexión.

La autenticación SSH garantiza un acceso cifrado y confiable a sus servidores.

Buena práctica:

- Nunca comparta su clave privada.
- Utilice una clave única para cada usuario.
- Almacene sus claves en un gestor o cofre seguro.

Para instrucciones detalladas sobre la creación y uso de claves SSH, consulte la guía [OVHcloud sobre SSH](/pages/public_cloud/Compute/creating-ssh-keys-pci).

## Copias de seguridad

Las copias de seguridad protegen sus datos y configuraciones contra pérdidas accidentales o errores. OVHcloud ofrece varios mecanismos de copia de seguridad para garantizar la seguridad de sus instancias y datos:

- **Tipos de copias de seguridad:**
    - Copias de seguridad manuales: Toma una instantánea de su disco en cualquier momento.
    - Copias de seguridad automáticas: Copias de seguridad programadas creadas a intervalos regulares.
    - Creación y restauración de instancias: Despliega una nueva instancia directamente desde una copia de seguridad existente.
- **Ubicaciones de copia de seguridad:**
    - Copia de seguridad local: Almacenada en la misma región que su instancia.
    - Copia de seguridad remota: Crea automáticamente una copia de la copia de seguridad local en una región de su elección.

> [!primary]
>
> **Buena práctica**: Las copias de seguridad no sustituyen una [arquitectura resistente](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). Para entornos críticos, combine las copias de seguridad con la replicación multi-AZ para garantizar una protección máxima de los datos y una disponibilidad óptima del servicio.
>

## Redes públicas y privadas

Las instancias de Public Cloud de OVHcloud pueden conectarse a diferentes tipos de redes según sus necesidades de aplicación.

| Tipos de red        | Descripción                                                                                   | Casos de uso                                                                            |
| -----------------------| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Red pública          | Las instancias se conectan a Internet a través de una dirección IP pública.                         | Alojamiento de sitios web, APIs o proporcionar acceso remoto a sus servidores.                  |
| Red privada (vRack)   | Una interconexión privada entre sus recursos de OVHcloud, aislada de Internet.                   | Conexión de bases de datos, servicios backend o comunicación interna entre instancias. | 

El vRack le permite crear una red segura e aislada, incluso a través de diferentes regiones o proyectos.

**Ejemplo**: Albergue su base de datos en una red privada mientras expone únicamente su servidor web en la red pública.

Para más detalles sobre la configuración de redes de Public Cloud, consulte la guía oficial [OVHcloud sobre redes](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Los Savings Plans le permiten reducir sus costos de Public Cloud Compute a cambio de un compromiso de uso constante durante un período definido, que va de 1 mes a 3 años.

**Ventajas clave:**

- **Costos reducidos**: Más económico que la facturación en *pay-as-you-go*.
- **Aplicación automática**: Las ahorros se aplican automáticamente a todas las instancias compatibles.
- **Flexible**: Puede cambiar los tipos o tamaños de instancias manteniendo los beneficios de su plan.

**Casos de uso ideales:**

- Cargas de trabajo estables y predecibles, como aplicaciones de producción o servidores empresariales.
- Servicios con necesidades constantes de recursos que se benefician de una optimización de costos.

Los Savings Plans le ayudan a optimizar su presupuesto manteniendo el rendimiento y la fiabilidad de su entorno en la nube. Para más información, consulte la guía oficial [OVHcloud sobre Savings Plans](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Más información

Una vez que domine los conceptos fundamentales de Public Cloud Compute de OVHcloud, puede explorar operaciones y tareas de gestión más avanzadas.

- [Cómo crear una instancia de Public Cloud y acceder a ella](/pages/public_cloud/Compute/public-cloud-first-steps)
- [Gestionar sus instancias de Public Cloud](/pages/public_cloud/Compute/first_steps_with_public_cloud_instance)
- [Iniciar una instancia en un volumen arrancable](/pages/public_cloud/Compute/start_instance_on_attached_volume)
- [Poner en suspensión o pausar una instancia](/pages/public_cloud/Compute/suspend_or_pause_an_instance)
- [Primeros pasos con aplicaciones preinstaladas](/pages/public_cloud/Compute/apps_first_steps)
- [Añadir créditos de nube](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Únete a nuestra [comunidad de usuarios](/links/community).
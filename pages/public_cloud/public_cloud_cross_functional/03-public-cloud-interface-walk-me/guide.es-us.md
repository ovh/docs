---
title: "Conocer la interfaz de Public Cloud"
excerpt: "Visita guiada de la interfaz de Public Cloud para descubrir las diferentes secciones"
updated: 2025-04-28
---

## Objetivo

Usted acaba de crear su proyecto de Public Cloud y quiere saber más sobre la interfaz de usuario en el área de cliente de OVHcloud.

**Descubra las principales secciones de la interfaz de Public Cloud desde el área de cliente de OVHcloud.**

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](/links/manager).
- Haber creado su [primer proyecto de Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).

## Procedimiento

Una vez creado el primer proyecto de Public Cloud, será redirigido a la interfaz principal de Public Cloud.

![Public Cloud interface](images/main-interface-2025.png){.thumbnail}

### Acceso a sus datos de cuenta de OVHcloud

Los parámetros de su cuenta de OVHcloud permanecen accesibles en cualquier momento, al igual que las notificaciones o el cambio de idioma del área de cliente.

![Public Cloud interfaz - menú cuenta](images/account-2025.png){.thumbnail}

### Su proyecto de Public Cloud

Como es posible utilizar varios proyectos (en función de sus cuotas), el nombre y el ID del proyecto siempre se muestran, independientemente de la pantalla que visite, para saber en qué entorno está actuando.

![Menú proyecto](images/project-menu-2025.png){.thumbnail}

El ID puede ser necesario al utilizar la CLI, determinadas solicitudes de soporte u otras. Puede copiarlo haciendo clic en el icono situado a la derecha.

Puede cambiar el nombre del proyecto en la pestaña `Ajustes`{.action}. Introduzca un nuevo nombre y haga clic en `Actualizar`{.action}.

![Renombrar un proyecto de Public Cloud](images/rename-project.png){.thumbnail}

### El menú principal de Public Cloud

![Public Cloud interfaz - menú principal](images/main-menu-2025.png){.thumbnail}

|Sección|Descripción de las opciones|
|---|---|
|**Compute**|Esta sección permite iniciar instancias, ya que estos servidores cloud están disponibles bajo demanda.|
|**Backup Storage**|En esta sección encontrará diferentes soluciones de almacenamiento y bases de datos, cada una de las cuales se adapta a una necesidad y un uso particular.|
|**Network**|En esta sección podrá conectar sus recursos de Public Cloud y conectarlos con otros productos de OVHcloud.|
|**Containers and Orchestration**|Esta sección ofrece diversas herramientas para automatizar sus arquitecturas y aumentar la flexibilidad.|
|**Databases & Analytics**|Estos servicios le ayudarán a resolver sus problemas de Big Data y de Data Analytics.|
|**AI and Machine Learning**|En esta sección encontrará las herramientas de OVHcloud para la inteligencia artificial.|

### Atajos rápidos

En el centro de la pantalla encontrará atajos que le permitirán acceder rápidamente a los asistentes de configuración y a las guías más útiles.

![Public Cloud interface - menú de acceso rápido](images/shortcuts-2025.png){.thumbnail}

#### Ayudas a la creación de recursos

Para cada recurso que quiera crear, le guiará un asistente de configuración que, paso a paso, le permitirá configurar los recursos según sus necesidades.
<br>En la mayoría de los casos, deberá elegir la localización del recurso, el modelo, algunos parámetros personalizables y, en algunos casos, el modo de facturación.

![Public Cloud interface - Asistente de configuración](images/wizard-2025.png){.thumbnail}

### Herramientas de gestión

El proyecto de Public Cloud incluye diversas herramientas de gestión, que se encuentran en la parte inferior de la barra de menú, a la izquierda.

![Public Cloud interface - Herramientas de gestión](images/management-tools-2025.png){.thumbnail}

|Entrada del menú|Descripción|
|---|---|
|**Horizon**|Es la [interfaz gráfica](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) que usualmente se encuentra disponible en OpenStack. No se modifica, lo que permite a los usuarios que están acostumbrados a esta interfaz recuperar sus reflejos.|
|**Usuarios y roles**|Permite [crear usuarios](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) y asignarles un rol. Estos usuarios permiten acceder directamente a las API o al panel Horizon. Por ejemplo, puede crear un usuario para las operaciones de mantenimiento habituales y un usuario para las herramientas de automatización, como Terraform.|
|**Cuotas y regiones**|Esta herramienta le permite controlar las localizaciones y los límites de recursos disponibles para su proyecto.<br><br>**Cuotas**: Nuestro sistema, que respeta determinados criterios (número de facturas ya pagadas, uso de otros productos de OVHcloud), establece límites al número de recursos que puede crear para evitar problemas de impago. Por defecto, el sistema aumenta los límites automáticamente cuando se cumplen determinados criterios. Sin embargo, puede [aumentar manualmente una cuota](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota#aumentar-manualmente-la-cuota-de-recursos) desde esta herramienta.<br><br>**Localizaciones**: Public Cloud está disponible en varias localizaciones del mundo. Además, cada localización puede tener varias "regiones" (concepto propio de OpenStack). Por ejemplo, para un cliente europeo, la zona APAC (Asia-Pacífico) está desactivada por defecto. Si esto se ajusta a sus necesidades, puede activar nuevas regiones desde este menú.|
|**Claves SSH**|Una herramienta que le permite [gestionar sus llaves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) de forma centralizada.|
|**Facturación**|Las facturas de Public Cloud funcionan en base al principio de pago por uso (en inglés, *pay-as-you-go*). En [este menú](/pages/public_cloud/public_cloud_cross_functional/analyze_billing) podrá consultar su consumo actual, ver un pronóstico de la siguiente factura y, por supuesto, recuperar sus facturas anteriores.|
|**Crédito y códigos promocionales**|Este menú le permite consultar el consumo de un cupón, añadir uno o [añadir crédito](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) directamente en su proyecto de Public Cloud.|
|**Savings Plan**| Este es un modelo de precios que ofrece descuentos en recursos específicos cuando se opta por períodos de compromiso de hasta 36 meses.|
|**Contactos y permisos**|Además de poder cambiar el contacto técnico o el contacto de facturación de su proyecto, también puede [añadir otros contactos](/pages/public_cloud/compute/change_project_contacts) (cuenta de OVHcloud) para administrar técnicamente su proyecto. También puede añadir usuarios únicamente *read-only*.|
|**Configuración del proyectos**|Esta última herramienta le permite configurar los parámetros generales del proyecto como su nombre, su configuración como "proyecto por defecto de la cuenta", la compatibilidad HDS o incluso [eliminar su proyecto de Public Cloud.](/pages/public_cloud/public_cloud_cross_functional/delete_a_project).|

### Gestión de servicios

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2mHcXQC6mTM?si=8_0aQCfBtmumGRbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!primary]
>
> En esta sección, explicamos las diferentes opciones de gestión de los servicios que ofrece OVHcloud a través de tres herramientas principales: el área de cliente de OVHcloud, Horizon y la API OpenStack. Cada una de estas herramientas se ha diseñado para satisfacer necesidades específicas en función de su nivel de experiencia, sus preferencias de gestión y sus requisitos de rendimiento y personalización.
>
> La siguiente matriz compara las características clave de cada herramienta para ayudarle a elegir la solución que mejor se adapte a sus necesidades. Ya sea principiante, usuario intermedio o experto en automatización, esta comparación le permitirá entender mejor las ventajas, la facilidad de uso, los niveles de habilidad requeridos y la escalabilidad de cada herramienta.
>

| Criterios/Características                   | Área de cliente de OVHcloud | Horizon | OpenStack API |
| ------------------------------------------- | ---------------------- | ------- | ------------- |
| Principales ventajas                        | Interfaz intuitiva, ideal para empezar rápidamente. | Proporciona un mayor control para usuarios avanzados con una vista avanzada de la configuración. | Automatización completa, con integración fluida con otras herramientas. |
| Nivel de competencia requerido                 | Accesible a todos, ideal para principiantes o necesidades simples | Intermediario, requiere una cierta experiencia (administradores de sistemas, ingenieros cloud...) | Avanzado, requiere conocimientos de scripting/API (arquitectos cloud, ingenieros de DevOps, expertos en automatización) |
| Facilidad de uso                      | Intuitivo y accesible | Avanzada pero visual | Técnico |
| Personalización                            | Bajo - Ideal para configuraciones estándar y rápidas, con control avanzado limitado. | Media: interfaz gráfica que ofrece ajustes avanzados (red, almacenamiento, etc.), aunque restringidos por la interfaz de usuario. | Muy alta - Personalización casi completa a través de la API, con posibilidad de crear scripts, flujos de trabajo automatizados y arquitecturas a medida. |
| Rendimiento y escalabilidad                 | Rendimiento limitado y escalabilidad básica. Es adecuado para implementaciones pequeñas o no críticas. La escalabilidad suele ser manual y más lenta. Ideal para entornos estáticos o proyectos pequeños. | Rendimiento medio con gestión de escalabilidad mejorada a través de la interfaz gráfica. Escalabilidad más rápida que en el área de cliente de OVHcloud, pero limitada por la interfaz. Es adecuado para proyectos de tamaño mediano o que requieren una cierta escalabilidad. | Rendimiento óptimo y escalabilidad completa. Permite despliegues masivos, automatizados y rápidos mediante scripts o herramientas de terceros. Ideal para infraestructuras dinámicas, cargas pesadas y entornos que requieren una gran elasticidad. Recomendado para arquitecturas críticas. |
| Perímetros de uso (Compute)               | - Creación y gestión simplificada de máquinas virtuales (VM).<br> - Redimensionamiento de las MV tras su creación (modificación del modelo «flavor» en caliente o «flavor» en frío, según los recursos disponibles).<br> - Selección de configuraciones estándar para las MV (RAM, CPU, almacenamiento).<br> - Gestión de las acciones esenciales: inicio, parada y eliminación de las VM.<br> - Acceso a los snapshots para copias de seguridad rápidas y restauraciones simplificadas..<br> - Asignación y gestión de direcciones Floating IP.<br> - Creación y administración básicas de discos adicionales.<br> - Supervisión de los recursos con una monitorización esencial (CPU, memoria, almacenamiento). | - Gestión avanzada de accesos: compatibilidad con el control de accesos basado en funciones (RBAC) para una gestión segura de varios usuarios.<br> - Administración avanzada de redes: creación y gestión de redes privadas complejas asociadas a máquinas virtuales (redes internas, subredes).<br> - Despliegue de máquinas virtuales con configuraciones de red específicas, incluida la gestión de múltiples interfaces de red.<br> - Utilización de imágenes personalizadas para la creación de MV, como alternativa a las imágenes estándar ofrecidas por OVHcloud.<br> - Integración de flujos de trabajo preconfigurados a través de Horizon para automatizar los despliegues y configuraciones. | - Automatización completa: todas las acciones disponibles en el área de cliente de OVHcloud y Horizon pueden realizarse a través de la API, con la posibilidad de automatizarlas y scripts.<br> - Despliegue de infraestructuras en modo Infraestructura como código (IaC) con herramientas como Terraform, Ansible o scripts personalizados.<br> - Integración con canalizaciones CI/CD para el despliegue automatizado (por ejemplo, integración con GitLab CI).<br> - Gestión avanzada de cuotas de recursos (número de CPU, RAM total, etc.).<br> - Escalabilidad dinámica: ajuste automático de las instancias en función de la carga a través de API o scripts.<br> - Monitoring y recopilación de métricas personalizadas a través de la API, ofreciendo más granularidad que la interfaz Horizon o el área de cliente de OVHcloud. |
| Perímetros de uso (Network)          | - Creación y gestión de redes privadas (Private Networks).<br> - Asociación de direcciones Floating IP y direcciones Additional IP.<br> - Configuración de enrutamiento básica (Basic Routing). | - Gestión avanzada de las reglas de seguridad a través de los grupos de seguridad (Security Groups).<br> - Visualización de las topologías de red para una gestión simplificada.<br> - Soporte completo de las subredes IPv6 para una conectividad moderna.<br> - Configuración de las directivas QoS (Quality of Service) para dar prioridad a los recursos de red. | - Acceso a todas las funcionalidades disponibles en Horizon y en el área de cliente de OVHcloud.<br> - Creación de rutas personalizadas para una gestión de red más flexible.<br> - Configuración precisa de las políticas QoS (Quality of Service).<br> - Gestión avanzada de los VRRP (Virtual Router Redundancy Protocol) para garantizar la redundancia de los routers.<br> - Automatización de las acciones de red mediante scripts (Infrastructure as Code).<br> - Integración con SDN (Software-Defined Networking) para una gestión de red ágil. |
| Perímetros de uso (Backup Storage) | - Creación y gestión de volúmenes de almacenamiento: Object Storage, Block Storage y File Storage.<br> Copia de seguridad automática básica (snapshots) de los volúmenes, con posibilidad de restauración.<br> - Combinación de los volúmenes de almacenamiento con las instancias para un acceso simplificado.<br> - Gestión de contenedores Object Storage (Swift) para organizar los datos..<br> - Visualización del estado de los volúmenes y del espacio de almacenamiento utilizado.<br> - Adición y gestión de archivos en un Object Storage. | - Gestión avanzada de los snapshots: retención, duplicación y otras opciones para un control preciso de las copias de seguridad.<br> - Gestión detallada del volumen compartido (multi-attach) para una mayor flexibilidad.<br> - Creación y gestión de copias de seguridad programadas con políticas de copia de seguridad personalizables.<br> - Supervisar el uso de las cuotas de almacenamiento para realizar un seguimiento óptimo del espacio disponible. | - Funcionalidades accesibles desde Horizon y el área de cliente de OVHcloud.<br> - Integración y automatización mediante scripts (Infrastructure as Code) para una gestión fluida.<br> - Configuración avanzada de recursos compartidos de red (NFS, CIFS) para una mayor flexibilidad en la organización de los archivos.<br> - Gestión precisa de los metadatos de los objetos en Object Storage para un control óptimo de los datos.<br> - Configuración avanzada de replicación y control de versiones de objetos para alta disponibilidad y control de versiones completo.<br> - Acceso directo a la API de Swift para una integración sin problemas con herramientas de terceros.<br> - Creación de flujos de trabajo personalizados para automatizar y administrar de forma eficaz los procesos de copia de seguridad. |

## Más información

[Crear y conectarse a una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
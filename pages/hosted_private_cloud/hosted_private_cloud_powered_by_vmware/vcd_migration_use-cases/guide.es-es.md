---
title: 'Caso de migration a VCD on OVHcloud'
excerpt: 'Este documentatión explica cómo migrar a VMware Cloud Director on OVHcloud, y los casos particulares y complejos a garantizar para la seguridad'
updated: 2024-07-17
---
<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> El VCD on OVHcloud está actualmente en fase alfa. Esta documentation puede estar incompleta. Nuestro equipo sigue disponible en nuestro canal [Discord](https://discord.gg/ovhcloud)dedicado.
>

## Objetivo

**Esta documentación explica cómo realizar las comprobaciones necesarias para migrar un servicio vSphere/Vcenter (HPC o PCC) a VMware Cloud Director on OVHcloud, así como los casos específicos que son bloqueantes.**

## Requisitos

- Haber completado los pasos de comprobación de la siguiente documentación antes de iniciar la migración a VCD.

## En práctica

> [!primary]
>
> Antes de migrar a VCD, es necesario de realizar estas verificaciónes.
>

Bienvenido a la guía completa sobre la migración a VMware Cloud Director en el ecosistema VMware on OVHcloud.

Esta guía explica los casos de uso más complicados y matizados que pueden surgir durante un proceso de migración en caliente.

Las cargas de trabajo migradas aquí son entornos vSphere administrados on OVHcloud (Hosted Private Cloud VMware on OVHcloud) que deben migrar a una infraestructura VMware Cloud Director (VCD). Esta guía explica paso a paso cómo crear una vMotion de sus máquinas virtuales en caliente entre las redes públicas y privadas sin perder la conectividad.

Nuestro objetivo también es de abordar a este casos de migración y los escenarios difíciles que a menudo complican la migración (caliente vMotion ), ofreciendo perspectivas y estrategias basadas en la experiencia real.

De este modo, estará listo para navegar por las complejidades de las migraciones de VMware Cloud Director on OVHcloud con total confianza y eficacia.

## Paso 1 - Requisitos de migración a VCD (obligatorio)

// detalles | ¿Cuáles son los pasos de verificación antes de migrar a VCD?

Antes de migrar a VCD, es necesario realizar algunos pasos y requisitos. En efecto, muchos conceptos y casos de uso de Dedicated Cloud no están disponibles con VCD y deben tenerse en cuenta.

Como propietario de la migración de VCD, queremos configurar vCenter y ESXi en el vSphere administrado de OVHcloud y el router en el VCD para poder realizar una migración cruzada entre vCenter (cross vCenter).

### Tabla de migración - Todos los casos de uso

Antes de la migración, asegúrese de haber completado todos los 12 pasos (pre-check) que se indican a continuación antes de la migración.

| Steps   | Done     | Warning | Use cases                                               | Requirements                                                                                                         | Comments                                                                                                                                                                                                                                                                                        | Référence to external documentation                                                                                                           |
|---------|----------|--------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Step 1  | Yes/No ? | ✅      | **Multi vDC**                                           | No multi-vDC                                                                                                         | - Can only be migrated if it has only one datacentre in a PCC. <br/> - If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                                           | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).    |                                                                                                                                                                                                                                                                                                                                                  
| Step 2  | -        |        | **FT (fault tolerance)**                                | No fault tolerance                                                                                                   | - Have my PCC fault tolerance ?                                                                                                                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                            
| Step 3  | -        |        | **DRS Affinity/Anti affinity**                          | No DRS Affinity/Anti affinity rules                                                                                  | - Between VMs can be migrated, but between VM and host cannot be migrated (warning, be carefull with migration). <br/> - Make shur to adapt or remove them for this use case for VCD.                                                                                                           |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                               
| Step 4  | -        |        | **Special devices (CD, DVD etc..)**                     | No special devices plugged into to migrated pcc                                                                      | - All special devices (CD, DVD etc..) must be deleted or removed before migration, otherwise they will be deleted (lost) after migration.                                                                                                                                                       |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 5  | -        |        | **Datastore  clusters**                                 | Make shur all clustering rules are deleted                                                                           | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                                   |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 6  | -        |        | **Memory over-commitment**                              | Scale up VCD                                                                                                         | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. <br/> Because this notion is not usable with VCD, it consume more ressources.                                                                                                         |                                                                                                                                               |                                                                                                                                            |    
| Step 7  | -        |        | **Ressource pools** (sharing)                           | Do not need ressource pools                                                                                          | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                                            |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 8  | -        |        | **Security options (certifications PCI-DSS, HDS, SNC)** | Do not need security options in VCD                                                                                  | - Cannot be migrated with certified PCIDSS, HDS, SNC PCC. <br/>- If migrated certifications will be lost on VCD side instances.                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                    
| Step 9  | -        | ✅      | **KMS (Encrypted data)**                                | Decipher VM on PCC                                                                                                   | - Not possible to migrate with vSphere encrypted KMS related data. <br/>- It depend what kind of KMS you are using (vNKP, OKMS, external KMS). <br/> Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 10 | -        | ✅      | **Zerto**                                               | No Zerto                                                                                                             | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                                         |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 11 | -        |        | **Hosts / Zpool**                                       | Release ressources (hosts + zpool) freespare and hourly before migration. <br/> Or convert it in monthly ressources. |                                                                                                                                                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 12 | -        | ✅      | **HCX**                                                 | No HCX usage on pcc                                                                                                  | - If so it can not be migrated to VCD.                                                                                                                                                                                                                                                          |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                

///

### FAQ

#### En qué orden debo realizar las comprobaciones para migrar a VCD?

Si observa la tabla anterior, verá que usted debe realizar una serie de comprobaciones antes de considerar la posibilidad de cambiar a VCD. Le recomendamos que lance estas pre-revisiones para su Private Cloud de arriba a abajo como sugiere la columna etapa. Puede imprimir esta guía y marcar la casilla de verificación realizada (done) para los pasos realizados.

Le invitamos a plantearse las siguientes preguntas:

1. Mi infraestructura VMware on OVHcloud (PCC) utiliza multi-vDC?

Sí, tengo que migrar todos mis datos a un único datacenter para poder migrar a VCD.
No, paso al siguiente paso.

2. Mi infraestructura VMware on OVHcloud utiliza FT (fault-tolerance)?

Sí, debo desactivarla antes de migrar, de lo contrario no podría migrar a VCD.
No, paso al siguiente paso.

3. Y así, y asi...

#### Es VCD compatible con las certificaciones PCI-DSS, SNC, HDS?

No VCD on OVHcloud todavía no esta compatible con las opciones de seguridad PCI-DSS, SNC o HDS. Por lo tanto, no podrá conservar sus certificaciones de seguridad hasta la fecha en el VCD.

#### Qué tipo de migración se utilizará?

En la mayoría de los casos, el tipo de migración que se utiliza es en caliente en vCenter vMotion. No utilizamos las herramientas de migración clásicas de VMware.

#### Se conservarán los Dedicated Cloud tras la migración?

No, todas las configuraciones, datos de PCC, se eliminarán después de la migración. Ya no tendrá acceso a sus recursos de Dedicated Cloud, únicamente al panel de control de VCD.

#### Tengo acceso a el "VCD control panel" después de la migración?

Sí, la acción la realiza OVHcloud, que le permite acceder a los datos tras la migración desde la consola VCD on OVHcloud a máquinas virtuales, por ejemplo.

#### Por quién se realiza la migración VCD?

OVHcloud realiza la migración en su totalidad, pero usted deberá realizar los pasos necesarios antes de realizarla. Estos pasos se adaptarán a los avances del VCD y ayudarán a reducir los requisitos

## Ir más allá

Si necesita formación o asistencia técnica para la implementación de nuestras soluciones, póngase en contacto con su Technical Account Manager o [haga clic aquí] (/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Professional Services.

Haga preguntas e interactúe directamente con el equipo que construye nuestros servicios Hosted Private Cloud en el [Discord] (<https://discord.gg/ovhcloud>) dedicado.

Únase e intercambie datos con nuestra [comunidad de usuarios de OVHcloud](/links/community).

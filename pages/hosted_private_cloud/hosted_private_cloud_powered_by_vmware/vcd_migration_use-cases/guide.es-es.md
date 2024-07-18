---
title: 'Auditoría casos de uso difíciles de la migración a VCD'
excerpt: 'Descubra los métodos de análisis de los complicados escenarios de sus flujos de servicios vSphere/vCenter managed on OVHcloud, como preparación para una migración a VCD'
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
> El VCD on OVHcloud está actualmente en fase alfa. Esta documentation puede estar incompleta y una actualización esta possible en el futuro.
> 

## Objetivo

**El objetivo de esta documentation es de auditar los casos especiales de vSphere managed HPC que pueden plantear problemas para la migración a VCD on OVHcloud.**

## Requisitos

- Haber completado los pasos de comprobación de la siguiente documentación antes de iniciar la migración a VCD.

## En práctica

> [!warning]
>
> Antes de migrar a VCD, es necesario de realizar estas verificaciónes.
>

Le damos la bienvenida a esta guía práctica que explica cómo migrar sus servicios Hosted Private Cloud vSphere/vCenter administrados a un ecosistema VMware Cloud Director on OVHcloud.

Este documento también detalla los requisitos de migración y, si procede, le explica cómo cumplirlos.

## Paso 1 - Requisitos y casos especiales (obligatorio)

/// details | Cuáles son los requisitos y las etapas de verificación para su uso de HPC antes de poder migrar a VCD?

Una vez verificados estos requisitos, el equipo de OVHcloud migrará sus máquinas virtuales en caliente y las completará.

Esta migración en caliente permitirá limitar al mínimo los cortes de sus redes públicas o privadas. Las redes privadas son las que tienen más probabilidades de verse afectadas, por lo que se cortan en unos minutos.

### Tabla - Casos especiales

La tabla siguiente muestra cada uno de los bloqueos de migración, junto con su nivel de criticidad, que debe cumplir antes de iniciar la migración.

| **Steps**   | **Done** | **Warning** | **Use-cases**                                           | **Requirements**                                                                                                         | **Comments**                                                                                                                                                                                                                                                                                    | **Référence to external documentation**                                                                                                                                      |
|-------------|----------|-------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Step 1**  | ?        | ❌           | **Multi-vDC**                                           | **No multi-vDC (multiple datacenters, only one possible).**                                                              | - Can only be migrated if it has only one datacentre in a vSphere managed on OVHcloud. <br/> - If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                   | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).                                   |                                                                                                                                                                                                                                                                                                                                                  
| **Step 2**  | ?        | ❎           | **FT (fault-tolerance)**                                | **No fault tolerance.**                                                                                                  | - Does my vSphere managed on OVHcloud service have VMs with FT (fault tolerance) activated ?                                                                                                                                                                                                                    | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance).                                                                                 |                                                                                                                                                                                                                                                                                                                                                            
| **Step 3**  | ️?       | ❎           | **DRS affinity/anti-affinity**                          | **No DRS Affinity/Anti affinity rules.**                                                                                 | - Between VMs migration (pcc to vcd) can be migrated to VCD, but between VMs and hosts cannot be migrated. <br/> - Make shur to adapt or remove them for this use case for VCD.                                                                                                                 | [VMware DRS (Distributed Ressource Scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_ressource_scheduler).                                        |                                                                                                                                                                                                                                                                                                                                               
| **Step 4**  | ?        | ❎           | **Special devices (CD, DVD etc..)**                     | **No special devices must be plugged into to migrated vSphere managed datacenter.**                                      | - All special devices (CD, DVD etc..) must be removed before migration, otherwise they will be forcely removed (lost) by the process migration and lost.                                                                                                                                        |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 5**  | ?        | ❎           | **Datastore  clusters**                                 | **Make shur all clustering rules are deleted in vSphere on OVHcloud.**                                                   | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                                   |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 6**  | ?        | ❎           | **Memory over-commitment**                              | **Scale up VCD.**                                                                                                        | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. <br/> Because this notion is not usable on VCD. VCD consume more ressources and so it won't be acceptable.                                                                            | [Modifying virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm).                               |                                                                                                                                                
| **Step 7**  | ?        | ❎           | **Ressource pools** (sharing)                           | **Do not need ressource pools.**                                                                                         | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                                            |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 8**  | ?        | ❎           | **Security options (certifications PCI-DSS, HDS, SNC)** | **Do not need security options in VCD.**                                                                                 | - Cannot be migrated with certified PCIDSS, HDS, SNC vSphere managed on OVHcloud. <br/>- If migrated certifications will be lost on VCD side instances.                                                                                                                                         |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
| **Step 9**  | ?        | ❌           | **KMS (Encrypted data)**                                | **Decipher VM in vSphere on OVHcloud.**                                                                                  | - Not possible to migrate with vSphere encrypted KMS related data. <br/>- It depend what kind of KMS you are using (vNKP, OKMS, external KMS). <br/> Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 10** | ?        | ❌           | **Zerto**                                               | **No Zerto.**                                                                                                            | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                                         | [Setting up Zerto Virtual Replication between two OVHcloud datacenters](hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service). |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 11** | ?        | ❎           | **Hosts / Zpool**                                       | **Release ressources (hosts + Zpool) freespare and hourly before migration. <br/> Or convert it in monthly ressources.** |                                                                                                                                                                                                                                                                                                 | [Hosted Private Cloud billing information](account_and_service_management/managing_billing_payments_and_services/facturation_private_cloud).                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 12** | ?        | ❌           | **HCX**                                                 | **No HCX usage in vSphere  on OVHcloud.**                                                                                | - If so it can not be migrated to VCD.                                                                                                                                                                                                                                                          |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

///

### FAQ - Preguntas más frecuentes

#### En qué orden debo realizar las comprobaciones para migrar a VCD?

Si observa la tabla anterior, verá que usted debe realizar una serie de comprobaciones antes de considerar la posibilidad de cambiar a VCD. Le recomendamos que lance estas pre-revisiones para su Private Cloud de arriba a abajo como sugiere la columna etapa. Puede imprimir esta guía y marcar la casilla de verificación realizada (done) para los pasos realizados.

Le invitamos a plantearse las siguientes preguntas:

1. Mi infraestructura vSphere managed on OVHcloud utiliza multi-vDC?

Sí, tengo que migrar todos mis datos a un único datacenter para poder migrar a VCD.
No, paso al siguiente paso.

2. Mi infraestructura vSphere managed on OVHcloud utiliza FT (fault-tolerance)?

Sí, debo desactivarla antes de migrar, de lo contrario no podría migrar a VCD.
No, paso al siguiente paso.

3. Y así, y asi...

#### Es VCD compatible con las certificaciones PCI-DSS, SNC, HDS?

No VCD on OVHcloud todavía no esta compatible con las opciones de seguridad PCI-DSS, SNC o HDS. Por lo tanto, no podrá conservar sus certificaciones de seguridad hasta la fecha en el VCD.

#### Qué tipo de migración se utilizará?

En la mayoría de los casos, el tipo de migración que se utiliza es en caliente en vCenter vMotion. No utilizamos las herramientas de migración clásicas de VMware.

#### Se conservarán los Dedicated Cloud tras la migración?

No, todas las configuraciones, datos de vSphere managed on OVHcloud, se eliminarán después de la migración. Ya no tendrá acceso a sus recursos de Dedicated Cloud, únicamente al panel de control de VCD.

#### Tengo acceso a el "VCD control panel" después de la migración?

Sí, la acción la realiza OVHcloud, que le permite acceder a los datos tras la migración desde la consola VCD on OVHcloud a máquinas virtuales, por ejemplo.

#### Por quién se realiza la migración VCD?

OVHcloud realiza la migración en su totalidad, pero usted deberá realizar los pasos necesarios antes de realizarla. Estos pasos se adaptarán a los avances del VCD y ayudarán a reducir los requisitos

## Ir más allá

Si necesita formación o asistencia técnica para la implementación de nuestras soluciones, póngase en contacto con su Technical Account Manager o [haga clic aquí] (/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Professional Services.

Haga preguntas e interactúe directamente con el equipo que construye nuestros servicios Hosted Private Cloud en el [Discord] (<https://discord.gg/ovhcloud>) dedicado.

Únase e intercambie datos con nuestra [comunidad de usuarios de OVHcloud](/links/community).

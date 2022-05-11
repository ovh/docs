---
title: 'Verificar y mitigar el fallo L1TF'
slug: verificar-mitigar-fallo-l1tf
excerpt: 'Cómo protegerse de la vulnerabilidad L1TF'
section: Seguridad
---

**Última actualización: 15/04/2019**

## Objetivo

Tras hacerse pública la vulnerabilidad L1TF («L1 Terminal Fault» o «Foreshadow»), se han comunicado diferentes procedimientos y parches para minimizar la exposición ante este tipo de amenaza.

**Esta guía explica cómo protegerse de esta vulnerabilidad.**

## Requisitos

- Tener un usuario que pueda conectarse a vSphere.
- Utilizar la tecnología hyperthreading en las máquinas virtuales.

## Procedimiento

A continuación recordamos las distintas variantes de L1 Terminal Fault:

|Variante|Vulnerable|¿Solucionado por el parche?|
|:---|:---:|:---:|
|L1 Terminal Fault: VMM (CVE-2018-3646)| Sí | No (aunque mitigado) |
|L1 Terminal Fault: OS (CVE-2018-3620)| No | - |
|L1 Terminal Fault: SGX (CVE-2018-3615)| No | - |

> [!primary]
> 
> L1 Terminal Fault: SO (CVE-2018-3620) [no afecta a los hipervisores de VMware](https://kb.vmware.com/s/article/55807) y [requiere acceso local al vCenter/VCSA.](https://kb.vmware.com/s/article/52312)
>

> [!primary]
> 
> L1 Terminal Fault: SGX (CVE-2018-3615) [no afecta a los hipervisores de VMware](https://kb.vmware.com/s/article/54913).
> 

En lo que respecta a la solución **Private Cloud**, la gama SDDC es la única que puede verse afectada por esta vulnerabilidad.

En [este artículo](https://www.ovh.es/noticias/articulos/al516.l1-terminal-fault-l1tf-o-foreshadow-ultima-vulnerabilidad){.external-link} explicamos el fallo en profundidad.

## Mitigación de la vulnerabilidad

> [!primary]
>
> Tenga en cuenta que las acciones que se describen a continuación no permiten corregir el fallo, sino únicamente desactivar el hyperthreading en los hosts ESXi.
> 
> Debido a que la vulnerabilidad L1TF necesita el hyperthreading para poder funcionar, desactivarlo previene que el fallo sea explotado en su infraestructura.
>

El procedimiento de mitigación se describe en el siguiente artículo de VMware: [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

Consta de tres fases, que se explican a continuación.

### 1. Actualización

Aunque OVHcloud actualiza el vCenter, usted deberá encargarse de actualizar los hosts ESXi. El parche está disponible en el [Update Manager](https://docs.ovh.com/es/private-cloud/utilizar_vmware_update_manager/){.external-link}.

Puede consultar la lista de parches para los hosts ESXi en las [recomendaciones de seguridad de VMware](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Tras la actualización, aparecerá el siguiente mensaje de alerta en el resumen del host:

![Mensaje de alerta host](images/warningMsg.png){.thumbnail}

### 2. Evaluación del entorno

Los hosts ESXi ya están actualizados, pero el parche todavía no se ha aplicado.

Antes de hacerlo, debe considerar los posibles problemas que se explican en el [artículo de VMware](https://kb.vmware.com/s/article/55806){.external-link} anteriormente citado, así como la disminución del rendimiento observada, que se detalla en [este artículo](https://kb.vmware.com/s/article/55767){.external-link}.

### 3.  Activación

Una vez que haya consultado la documentación anterior, podrá activar el parámetro que permite desactivar el hyperthreading en la configuración avanzada del sistema.

![Activar mitigación](images/enableMitigation.png){.thumbnail}

Puede utilizar el filtro situado en la parte superior derecha de la pantalla.

Realice esta operación en cada host.

Para más información, consulte el apartado «Resolution», punto 3, de [este artículo de VMware](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Si, teniendo en cuenta todo lo anterior, no desea desactivar el hyperthreading, puede eliminar el mensaje de alerta siguiendo los pasos que se indican en [este artículo](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![Borrar mensaje de alerta](images/deleteWarning.png){.thumbnail}
> No obstante, OVHcloud no lo recomienda y no podrá ser considerada responsable de las consecuencias que de ello se deriven.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
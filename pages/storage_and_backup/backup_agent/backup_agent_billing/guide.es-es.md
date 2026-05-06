---
title: "Backup Agent - Facturación"
excerpt: "Facturación del producto Backup Agent"
updated: 2026-01-09
---

## Objetivo

Esta página detalla las condiciones de facturación del producto Backup Agent.

## La facturación

El producto se basa en dos elementos para ofrecer su servicio:

- El Backup Agent instalado en sus servidores Bare Metal.
- El [OVHcloud Object Storage](/links/public-cloud/object-storage).

No facturamos el Backup Agent en sus servidores, es decir, puede desplegarlo en uno o varios servidores Bare Metal, esto no le costará nada.

Sin embargo, el uso del OVHcloud Object Storage sí se le facturará, a escala del gigabyte por mes. Por lo tanto, se le facturará al inicio de cada mes por su uso del mes anterior.

Encontrará el precio del GB por mes en nuestro [sitio web](/links/storage/backup-agent).

Tiene a su disposición un tableau de bord `Facturación` en su [área de cliente de OVHcloud](/links/manager) para visualizar su consumo actual y así predecir la factura final al final del mes.

- Ejemplo 1: Ha desplegado el Backup Agent en 3 servidores Bare Metal y estos envían sus datos a sus Vaults respectivos. La capacidad total utilizada por sus datos de copia de seguridad en los Vaults es de 600 GB. Por lo tanto, se le facturará al final del mes por 600 GB.

- Ejemplo 2: Ha desplegado el Backup Agent en 10 servidores Bare Metal y estos envían sus datos a sus Vaults respectivos. La capacidad total utilizada por sus datos de copia de seguridad en los Vaults es de 600 GB. Después de algunas copias de seguridad, retira el Backup Agent de 4 servidores, eliminando los datos después de 14 días. La capacidad total utilizada por los Vaults disminuye a 400 ≈. Se le facturará al final del mes por 600 GB.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
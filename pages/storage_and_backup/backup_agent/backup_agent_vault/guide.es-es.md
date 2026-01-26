---
title: "Backup Agent - Funcionamiento del Vault"
excerpt: "Descubra cómo funciona el sistema de Vault y la localización de sus datos de copia de seguridad"
updated: 2026-01-23
---

## Objetivo

Este guía le explica cómo funciona el sistema de Vault en el producto Backup Agent y cómo se localizan y almacenan sus datos según la ubicación de sus servidores Bare Metal.

## Requisitos
- Haber pedido un servicio Backup Agent al momento de la compra de su servidor Bare Metal o posteriormente a través del menú `Agente de copia de seguridad`{.action} de su área de cliente.

## Procedimiento
### Presentación del Vault

Un Vault es su espacio de almacenamiento donde se envían sus datos de copia de seguridad en cada copia de seguridad. Los Vaults se crean automáticamente por OVHcloud para garantizar que sus datos no estén alojados en el mismo centro de datos que su servidor Bare Metal.

Esto se basa en nuestros buckets Object Storage, que puede encontrar en este [enlace](/links/public-cloud/object-storage)

Puede encontrar sus Vaults en su área de cliente, en la sección Vaults.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Principio de localización

**Regla importante:** Los datos de copia de seguridad siempre se envían a un Vault ubicado en un centro de datos diferente al de su servidor Bare Metal. Esto garantiza la resiliencia y la seguridad de sus datos.

### Casos de uso

Aquí hay diferentes escenarios que ilustran cómo funciona el sistema de Vault:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Caso de uso 1: Un servidor Bare Metal en RBX

Si tiene un servidor Bare Metal localizado en **Roubaix (RBX)** y solicita el Backup Agent:

- Su servidor Bare Metal con el Backup Agent instalado se encuentra en **RBX**.
- Sus datos de copia de seguridad se envían automáticamente a un Vault creado en **Gravelines (GRA)**, denominado **backup-vault-gra1**.
- Esto garantiza que sus datos se almacenen en un centro de datos diferente al de su servidor.

### Caso de uso 2: Dos servidores Bare Metal en RBX y GRA

Si tiene dos servidores Bare Metal, uno en **Roubaix (RBX)** y el otro en **Gravelines (GRA)**:

- El servidor Bare Metal en **RBX** envía sus datos a **backup-vault-sbg-1** en **Gravelines**.
- El servidor Bare Metal en **GRA** envía sus datos a **backup-vault-gra-1** en **Estrasburgo (SBG)**.
- Cada servidor utiliza un Vault en un centro de datos diferente al suyo.

### Caso de uso 3: Tres servidores Bare Metal en RBX, GRA y LIM

Si tiene tres servidores Bare Metal en diferentes centros de datos:

- El servidor en **RBX** envía sus datos a **backup-vault-gra-1** en **GRA**.
- El servidor en **GRA** envía sus datos a **backup-vault-sbg-1** en **SBG**.
- El servidor en **Limburg (LIM)** envía sus datos a **backup-vault-sbg-1** en **SBG**.
- Cada servidor garantiza que sus datos se almacenen en un centro de datos distante.

### Caso de uso 4: Servidor Bare Metal en BHS con NIC EU

Si tiene un servidor Bare Metal en **Beauharnois (BHS)** con una interfaz de red europea:

- Su servidor Bare Metal se encuentra en **BHS**.
- Sus datos de copia de seguridad se envían a **backup-vault-tor-1** en **Toronto (TOR)**.
- La localización del Vault se determina en función de la configuración de red de su servidor.

## Puntos importantes

- Los Vaults se crean automáticamente por OVHcloud, no puede crearlos manualmente.
- No puede cambiar el Vault de un agente una vez que está configurado.
- La localización del Vault siempre es diferente a la de su servidor Bare Metal para garantizar la resiliencia.
- El nombre del Vault generalmente sigue la convención: `backup-vault-<localización>-<número>`.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).


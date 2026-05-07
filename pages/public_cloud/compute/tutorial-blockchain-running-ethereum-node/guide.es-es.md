---
title: 'Ejecutar un nodo Ethereum en una instancia Public Cloud'
excerpt: 'Despliegue un nodo Ethereum completo con Nethermind (EL) y Lighthouse (CL) en una instancia Public Cloud de OVHcloud utilizando Block Storage para los datos de la cadena'
updated: 2026-03-12
---

## Objetivo

Ethereum es una de las redes blockchain más utilizadas, ya que impulsa contratos inteligentes para los ecosistemas de finanzas descentralizadas (DeFi) y NFT. Operar su propio nodo Ethereum le permite interactuar directamente con la red sin depender de servicios de terceros.

Un nodo Ethereum completamente funcional requiere dos componentes de software clave que funcionan de forma coordinada:

1. **Execution Client (EL)** — responsable de procesar las transacciones y mantener el estado de Ethereum.
2. **Consensus Client (CL)** — responsable de alcanzar el consenso con el resto de la red a través del protocolo de prueba de participación (proof-of-stake) de Ethereum.

Estos dos componentes deben ejecutarse en paralelo y comunicarse de forma segura para mantener la sincronización con la red principal (mainnet) de Ethereum.

El ecosistema Ethereum admite múltiples implementaciones de clientes, cada una desarrollada de forma independiente pero conforme a la especificación de Ethereum. Las opciones más utilizadas son:

**Execution Clients (EL):**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Consensus Clients (CL):**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

Para este tutorial, utilizaremos la siguiente combinación:

- **Execution Client**: Nethermind
- **Consensus Client**: Lighthouse

**Este tutorial le guiará a través del despliegue de un nodo Ethereum completamente funcional en una instancia Public Cloud de OVHcloud.**

> [!warning]
>
> Las medidas de refuerzo de seguridad y las mejores prácticas operativas necesarias para proteger completamente un nodo Ethereum están fuera del alcance de este tutorial. Se recomienda encarecidamente implementar medidas de seguridad adicionales, como la configuración del firewall, la gestión de claves y la monitorización, de acuerdo con los requisitos de su organización y las mejores prácticas del sector.
>

## Requisitos

- Un [proyecto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) en su cuenta de OVHcloud
- Una [instancia Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) con al menos 2 vCores y 30 GB de RAM (p. ej., R2-30), con **Ubuntu 24.04 LTS**
- Un [volumen Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) de al menos 2 TB, de tipo **High-Speed Gen2**, asociado a su instancia
- Acceso de administrador (sudo) a la instancia a través de SSH

> [!primary]
>
> Según la documentación de la Ethereum Foundation, un nodo Ethereum requiere como mínimo:
>
> - **Execution client**: 2 núcleos de CPU, 16 GB de RAM y 1 TB de almacenamiento SSD rápido
> - **Consensus client**: 2 núcleos de CPU, 8 GB de RAM y acceso al mismo almacenamiento
>
> Para entornos de producción y estabilidad a largo plazo, se recomienda encarecidamente utilizar especificaciones superiores.
>

## Procedimiento

### Paso 1 - Montar el volumen Block Storage

Una vez que haya [creado y asociado su volumen Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) a la instancia, conéctese a su instancia a través de SSH:

```bash
ssh -i <ruta-clave-privada> ubuntu@<IP_address>
```

Liste todos los dispositivos de bloques disponibles para identificar el volumen asociado:

```bash
lsblk
```

![Salida de lsblk mostrando el volumen asociado](images/lsblk_output.png){.thumbnail}

Esto muestra una vista en árbol de todos los dispositivos de almacenamiento. Identifique el dispositivo (p. ej., `/dev/sdb`) que corresponde a su volumen de 2 TB. Se formateará y montará para almacenar los datos de la cadena de bloques Ethereum.

Cree una partición en el volumen recién asociado. Sustituya `/dev/sdb` por el nombre del dispositivo identificado en el paso anterior si es diferente:

```bash
sudo fdisk /dev/sdb
```

![Particionado con fdisk](images/fdisk_partition.png){.thumbnail}

Esto abre la utilidad de particionado para el dispositivo de bloques seleccionado. Cree una nueva partición primaria que abarque todo el disco y, a continuación, escriba los cambios. Una vez completado, la partición estará normalmente disponible como `/dev/sdb1`.

Formatee la nueva partición con el sistema de archivos ext4, que es una opción estable y ampliamente compatible para almacenar los datos de la cadena Ethereum:

```bash
sudo mkfs.ext4 /dev/sdb1
```

![Formateo ext4](images/mkfs_ext4.png){.thumbnail}

Cree un directorio dedicado que sirva como punto de montaje para el volumen formateado, móntelo y compruebe que se ha asociado correctamente al sistema de archivos:

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` crea el directorio de montaje (el uso de `-p` garantiza que no se produzca ningún error si faltan directorios intermedios).
- `mount /dev/sdb1 /mnt/chaindata` monta la partición formateada en el directorio.
- `df -h` muestra todos los sistemas de archivos montados en un formato legible, lo que le permite confirmar que `/dev/sdb1` está correctamente montado en `/mnt/chaindata` con la capacidad esperada (aproximadamente 2 TB).

![Verificar montaje](images/mount_verify.png){.thumbnail}

El disco ya está montado, pero la configuración **no es persistente**: si el servidor se reinicia, el volumen deberá montarse manualmente. Para que se monte automáticamente en cada arranque, añada una entrada a `/etc/fstab`.

Obtenga el **UUID (Universally Unique Identifier)** de su volumen:

```bash
sudo blkid
```

![Salida de blkid](images/blkid_output.png){.thumbnail}

Este comando lista todos los dispositivos de bloques y sus atributos asociados. Identifique la entrada correspondiente a su nueva partición (p. ej., `/dev/sdb1`) y copie el valor del campo `UUID`.

Edite el archivo `/etc/fstab` para configurar el montaje automático:

```bash
sudo nano /etc/fstab
```

```text
UUID=<your-uuid-here> /mnt/chaindata ext4 nofail 0 0
```

La opción `nofail` permite que el sistema continúe arrancando aunque el dispositivo no esté disponible.

### Paso 2 - Crear un usuario dedicado

Cree una **cuenta de usuario dedicada** para gestionar todas las operaciones del nodo Ethereum. Esta práctica mejora la seguridad al separar los procesos del nodo del usuario del sistema por defecto.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` crea un nuevo usuario llamado `node_admin`, con un directorio de inicio, shell bash y pertenencia al grupo `sudo`.

Establezca una contraseña para el nuevo usuario (sustitúyala por una contraseña segura o configure un inicio de sesión basado en claves):

```bash
echo 'node_admin:<strong_password>' | sudo chpasswd
```

Configure la **autenticación SSH basada en claves** para el nuevo usuario añadiendo su clave pública SSH al archivo `authorized_keys`. Sustituya el marcador de posición por su clave pública real:

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<your-public-ssh-key>' > /home/node_admin/.ssh/authorized_keys"
```

Esto crea el archivo `authorized_keys` en `/home/node_admin/.ssh/` y escribe su clave pública en él, lo que permite un inicio de sesión seguro y sin contraseña como usuario `node_admin`.

### Paso 3 - Instalar Nethermind (Execution Client)

Nethermind es un cliente de ejecución de Ethereum responsable de procesar las transacciones y mantener el estado de Ethereum.

Añada el repositorio APT oficial de Nethermind:

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Añadir el repositorio de Nethermind](images/nethermind_add_repo.png){.thumbnail}

Actualice el índice de paquetes:

```bash
sudo apt-get update
```

![Actualización de paquetes](images/nethermind_apt_update.png){.thumbnail}

Instale Nethermind:

```bash
sudo apt-get install nethermind -y
```

![Instalación de Nethermind](images/nethermind_install.png){.thumbnail}

### Paso 4 - Instalar Lighthouse (Consensus Client)

Lighthouse es un cliente de consenso de Ethereum responsable de alcanzar el consenso a través del protocolo de prueba de participación (proof-of-stake).

Descargue la última versión estable desde la [página de versiones de Lighthouse en GitHub](https://github.com/sigp/lighthouse/releases):

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Descarga de Lighthouse](images/lighthouse_download.png){.thumbnail}

Extraiga el archivo:

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Extracción de Lighthouse](images/lighthouse_extract.png){.thumbnail}

Verifique el binario y muévalo a una ubicación accesible en todo el sistema:

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Versión de Lighthouse](images/lighthouse_version.png){.thumbnail}

### Paso 5 - Crear el archivo de secreto JWT

Se requiere un secreto JWT compartido para la comunicación segura entre los clientes de ejecución y de consenso.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![Secreto JWT creado](images/jwt_secret.png){.thumbnail}

### Paso 6 - Instalar screen para la persistencia de sesiones

En un servidor remoto, al desconectarse de SSH se terminan los procesos en ejecución. `screen` los mantiene en ejecución en segundo plano, independientemente de su sesión.

```bash
screen --version
```

![Versión de screen](images/screen_version.png){.thumbnail}

Si no está instalado:

```bash
sudo apt-get install screen -y
```

### Paso 7 - Establecer la propiedad del directorio

Los clientes de Ethereum necesitan acceso de escritura al directorio de datos. Asigne la propiedad del punto de montaje a su usuario actual:

```bash
sudo chown $USER:$USER /mnt/chaindata
```

Esto concede a su usuario la propiedad total de `/mnt/chaindata`, de modo que los clientes de Ethereum puedan leer y escribir datos en él.

### Paso 8 - Iniciar Nethermind

Cree una sesión de screen e inicie Nethermind:

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

Debería ver registros (logs) que indican que el cliente se está ejecutando. Finalmente, aparecerá el siguiente mensaje:

```text
Waiting for Forkchoice message from Consensus Layer
```

Esto indica que el cliente de ejecución está esperando emparejarse con el cliente de consenso.

![Nethermind en ejecución](images/nethermind_running.png){.thumbnail}

Desconecte la sesión pulsando `Ctrl+A` y, a continuación, `D` para volver al shell principal.

Puede listar las sesiones activas con `screen -ls` y volver a conectarse posteriormente con `screen -r nethermind`.

![Sesiones de screen](images/screen_list.png){.thumbnail}

### Paso 9 - Iniciar Lighthouse

Cree una nueva sesión de screen e inicie Lighthouse:

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Inicio de Lighthouse](images/lighthouse_start.png){.thumbnail}

Tras la configuración inicial, Lighthouse debería comenzar a sincronizarse con la red.

![Sincronización de Lighthouse](images/lighthouse_syncing.png){.thumbnail}

Desconecte la sesión pulsando `Ctrl+A` y, a continuación, `D`.

### Paso 10 - Verificar la sincronización

En este punto, tanto el **cliente de ejecución** (Nethermind) como el **cliente de consenso** (Lighthouse) deberían estar ejecutándose en sesiones de screen separadas. Para confirmar que están correctamente conectados y que la sincronización está en curso, vuelva a conectarse a la sesión de Nethermind e inspeccione los registros:

```bash
screen -r nethermind
```

Si Lighthouse está conectado correctamente, el mensaje "Waiting for Forkchoice" debería desaparecer. En su lugar, debería ver la comunicación de la **Engine API** y los registros de procesamiento de bloques:

```text
Received ForkChoice: ...
Syncing...
```

![Sincronización EL y CL](images/el_cl_sync.png){.thumbnail}

Estos registros confirman que Nethermind está recibiendo propuestas de bloques y actualizaciones de fork choice de Lighthouse, y que el nodo se está sincronizando con la red principal de Ethereum.

Aunque este tutorial se centró en el despliegue técnico, es importante complementar la configuración con medidas adecuadas de refuerzo de seguridad, monitorización y mantenimiento para garantizar la estabilidad a largo plazo. Con las bases ya establecidas, puede ampliar la funcionalidad de su nodo, integrarlo en infraestructuras más grandes o utilizarlo como base para investigación, desarrollo y operaciones de staking.

## Más información

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Documentación de Nethermind](https://docs.nethermind.io/)
- [Documentación de Lighthouse](https://lighthouse-book.sigmaprime.io/)

[Crear una instancia Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Crear y configurar un disco adicional en una instancia](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Interactúe con nuestra [comunidad de usuarios](/links/community).

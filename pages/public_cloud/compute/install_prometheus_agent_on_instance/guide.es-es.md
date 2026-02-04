---
title: "Instalar el agente Prometheus en una instancia Public Cloud"
excerpt: "Descubra cómo instalar Prometheus Node Exporter o Windows Exporter en una instancia Public Cloud de OVHcloud para recopilar métricas"
updated: 2026-01-28
---

## Objetivo

Prometheus es un sistema de supervisión y una base de datos de series temporales. Puede instalar y utilizar su agente en instancias Public Cloud de OVHcloud para recopilar métricas desde sus servidores y aplicaciones.

**Descubra cómo instalar Prometheus Node Exporter o Windows Exporter en una instancia Public Cloud de OVHcloud.**

> [!warning]
> 
> OVHcloud pone a su disposición servicios cuya responsabilidad recae en usted. En efecto, al no tener acceso a estas máquinas, no somos sus administradores y no podremos brindarle asistencia. Por lo tanto, le corresponde a usted gestionar y asegurar el software de estas diariamente.
>
> Pusimos a su disposición esta guía para ayudarle en las tareas habituales. Sin embargo, le recomendamos encarecidamente que acuda a un [proveedor especializado](/links/partner) si experimenta dificultades o dudas sobre la administración, el uso o la seguridad de un servidor. No dude en visitar nuestro [foro comunitario](/links/community) para intercambiar opiniones con otros usuarios.
>

## Requisitos

- [Crear una instancia desde el área de cliente de OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Disponer de un acceso administrador a la instancia](/pages/public_cloud/compute/public-cloud-first-steps).
- Un servidor Prometheus en funcionamiento y accesible desde la instancia.

## Procedimiento

Siga estos pasos para instalar el agente Prometheus **Node Exporter** o **Windows Exporter** en su instancia Public Cloud de OVHcloud para recopilar métricas.

### Paso 1: Conectarse a la instancia

Conéctese a su instancia mediante SSH:

```bash
ssh root@<INSTANCE_IP>
```

Reemplace `<INSTANCE_IP>` por la dirección IP pública de su instancia.

> [!primary]
>
> En Windows, utilice PowerShell con SSH o un cliente SSH como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) si prefiere utilizar una interfaz de línea de comandos.
>
> Para Windows Server con interfaz gráfica, también puede utilizar el RDP (Remote Desktop).
>

### Paso 2: Actualizar el sistema

Asegúrese de que los paquetes de su sistema estén actualizados:

> [!tabs]
> Para Debian / Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Para CentOS / RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Para Windows
>>
>> No se requiere ninguna actualización específica para Windows Exporter. Puede asegurarse opcionalmente de que el sistema esté actualizado a través de Windows Update.
>>

### Paso 3: Crear un usuario Prometheus (opcional)

La creación de un usuario dedicado para Node Exporter mejora la seguridad en Linux, pero es opcional para Windows Exporter en Windows.

> [!tabs]
> Para Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Esto crea un usuario con permisos limitados para ejecutar Node Exporter.
>> - Recomendado en producción para reducir los riesgos de seguridad.
>> - Puede luego iniciar Node Exporter bajo este usuario a través de systemd.
>>
> Para Windows
>>
>> > [!primary]
>> >
>> > **Nota**: Ejecute estos comandos de PowerShell dentro de la VM a través de SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Windows Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Nota**: Windows Exporter puede ejecutarse con el usuario actual. La creación de un usuario dedicado es opcional para un control de acceso más estricto.
>>

### Paso 4: Descargar Node Exporter / Windows Exporter

> [!tabs]
> Para Linux
>>
>> ```bash
>> # Reemplace VERSION por la última versión, por ejemplo 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Para Windows (a través de SSH / PowerShell en la VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` requiere PowerShell 3.0 o superior.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Todo se realiza directamente dentro de la VM, no es necesario transferir archivos desde su máquina local.
>>

### Paso 5: Iniciar Node Exporter / Windows Exporter

> [!tabs]
> Para Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Opcional**: configure un servicio systemd para ejecutar Node Exporter automáticamente.
>> - Si utiliza el usuario dedicado prometheus, asegúrese de que el servicio se ejecute bajo este usuario.
>>
> Para Windows (a través de SSH / PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> En Windows Desktop o Core, puede ejecutarlo directamente en PowerShell o configurarlo como servicio de Windows.
>> 
>> Es posible personalizar los collectors; consulte la [documentación oficial](https://github.com/prometheus-community/windows_exporter#collectors) para obtener la lista completa.
>>

### Paso 6: Verificar Node Exporter / Windows Exporter

> [!primary]
>
> Node Exporter escucha por defecto en el puerto 9100.
>
> Windows Exporter escucha por defecto en el puerto 9182.
>
> Reemplace `<PORT>` por 9100 para Linux o 9182 para Windows.
>

El siguiente comando permite observar métricas como el uso del CPU, la memoria, el disco y la red:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> En Windows Desktop, también puede abrir un navegador para verificar. Sin embargo, a través de SSH / PowerShell, utilice `curl` o `Invoke-WebRequest`.
>

### Paso 7: Reglas de firewall / seguridad (OVHcloud)

Asegúrese de que el puerto utilizado por el exporter esté abierto tanto en el firewall de la VM como en su Security Group de OVHcloud.

Limite el acceso únicamente al servidor Prometheus para mayor seguridad.

> [!tabs]
> Para Linux (Debian / Ubuntu con UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Nota**: si UFW indica **Status: inactive**, significa que el firewall no está activado en la VM. La regla del puerto se añade pero no se aplica.
>>
>> La seguridad se gestiona principalmente a través de su Security Group de OVHcloud.
>>
>> Si desea activar UFW, comience por autorizar SSH para evitar bloquear su conexión:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Para Windows
>>
>> Abra el puerto 9182 en el firewall de Windows:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> También puede verificar las reglas con:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Paso 8: Conectar Node Exporter / Windows Exporter a Prometheus

1\. Edite el archivo de configuración de Prometheus en su servidor Prometheus (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # o 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # o 9182 para Windows Exporter
```

2\. Recargue Prometheus:

> [!tabs]
> Para Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Para Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Las métricas de Node Exporter o Windows Exporter de su instancia de OVHcloud deberían aparecer ahora en Prometheus.

## Más información

[Documentación oficial de Node Exporter](https://github.com/prometheus/node_exporter)

[Crear y configurar un grupo de seguridad en Horizon](/pages/public_cloud/compute/setup_security_group)

Interactúe con nuestra [comunidad de usuarios](/links/community).
---
title: 'Instalar Plesk en una instancia'
slug: instalar-plesk-en-una-instancia
excerpt: 'Cómo instalar Plesk en una instancia de Public Cloud'
section: Tutoriales
---

**Última actualización: 27/03/2019**

## Objetivo

Plesk es un panel de control de servidores fácil de usar que puede instalarse en las instancias del Public Cloud de OVH.

**Esta guía explica cómo instalar Plesk en una instancia de Public Cloud.** 

> [!warning]
> 
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. No dude en participar en nuestro [foro comunitario](https://community.ovh.com/en/){.external} para solicitar ayuda a otros usuarios.
>

## Requisitos

- [Crear una instancia desde el área de cliente de OVH](../crear_una_instancia_desde_el_area_de_cliente_de_ovh/).
- [Conectarse como usuario root y establecer una contraseña](../conectarse_como_usuario_root_y_establecer_una_contrasena/).

## Procedimiento

### 1. Instalar Plesk

Instalar Plesk desde una conexión SSH es bastante sencillo. Para ello, descargue y ejecute el script de instalación de Plesk utilizando uno de los siguientes comandos:

- **Instalación por defecto**

```bash
# sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Instalación personalizada**

```bash
# sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Espere mientras se instala Plesk. 

### 2. Configurar Plesk

Conéctese a Plesk para configurarlo. Para ello, utilice la dirección **https://IP.de.la.instancia:8443** en su navegador de internet.

Introduzca su usuario y contraseña root en la pantalla de conexión.

![Public Cloud](images/3301.png){.thumbnail}

Una vez conectado, aparecerá un asistente que le permitirá configurar la apariencia del panel Plesk en función de su actividad.

![Public Cloud](images/3302.png){.thumbnail}

Seleccione el tipo de vista de la interfaz de Plesk que desee.

![Public Cloud](images/3303.png){.thumbnail}

A continuación, introduzca los datos de conexión a su instancia:

- hostname
- dirección IP
- contraseña root



![Public Cloud](images/3304.png){.thumbnail}

Por último, introduzca la información de la cuenta de administrador.

![Public Cloud](images/3305.png){.thumbnail}

### 3. Añadir una licencia

Para añadir su licencia de Plesk, necesitará la clave que le haya comunicado su proveedor.

> [!primary]
>
> OVH no comercializa licencias de Plesk para la solución Public Cloud. No obstante, puede adquirir una desde la web de [Plesk](https://www.plesk.com/){.external}.
> 

La primera vez que se conecte a la interfaz, se abrirá automáticamente una página que le permitirá instalar su licencia de Plesk.

![Public Cloud](images/3306-2.png){.thumbnail}

Si quiere cambiar su licencia para, por ejemplo, sustituir la de prueba o cambiar de tipo, puede hacerlo desde el panel de Plesk. En **Administración del servidor**, haga clic en `Herramientas y configuración`{.action}. En el apartado **Plesk**, haga clic en `Administración de licencias`{.action}.

Una vez que haya añadido la nueva clave, puede ver el tipo de licencia instalado en la barra superior, junto al logo de Plesk.

![Public Cloud](images/3322-2.png){.thumbnail}

## Más información

[Documentación oficial de Plesk](https://docs.plesk.com/es-ES/onyx/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.
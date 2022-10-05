---
title: Utilizar SVN
slug: utilizar-svn
excerpt: Cómo utilizar SVN por SSH en un alojamiento web
section: FTP y SSH
order: 09
---

**Última actualización: 28/10/2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

SVN, abreviación de "subversion", es un sistema de gestión de versiones. 

**Cómo utilizar SVN por SSH en un alojamiento web**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener contratado un plan de [hosting](https://www.ovhcloud.com/es/web-hosting/) que permita conectarse por SSH (**a partir del plan Profesional**).
- Conectarse a su alojamiento web por SSH (consulte nuestra guía [Utilizar el acceso SSH de su alojamiento web](../web_hosting_ssh_en_alojamiento_compartido/)).

## Procedimiento

### Creación del repositorio

Una vez conectado en [SSH al alojamiento](../web_hosting_ssh_en_alojamiento_compartido/){.external}, cree el directorio raíz de los repositorios SVN y el repositorio.

Para ello, introduzca el siguiente comando:

```bash
mkdir svn
```

y

```bash
svnadmin create svn/depot_test
```

Compruebe que se han creado los directorios con el siguiente comando:

```bash
ls -la
```

Es necesario que los directorios se muestren en la siguiente imagen:

![hosting](images/3078.png){.thumbnail}

### Creación de llaves públicas/privadas

Antes de continuar, deberá crear un par de llaves SSH desde el equipo que utilizará para conectarse al repositorio SVN.

Para más información, consulte la guía [Crear llaves SSH](https://docs.ovh.com/us/es/public-cloud/crear-llave-ssh/). No es necesario seguir el progreso de la operación [Importar la llave SSH al área de cliente de OVHcloud](https://docs.ovh.com/us/es/public-cloud/crear-llave-ssh/#importacion-de-una-clave-ssh-en-el-area-de-cliente-de-ovhcloud_1) en esta guía.

### Adición de la clave pública al alojamiento

Una vez que haya obtenido la llave, puede añadirla al alojamiento en el archivo .ssh/authorized_keys2. Para ello, introduzca la siguiente línea de comandos:

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Una vez abierto el archivo, inserte la siguiente línea:

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

A continuación de la clave creada anteriormente, todo ello en la misma línea.

> [!primary]
>
> Sustituya "/home.XXX/loginFTP" y "john" por sus claves SSH.
> Para consultar los símbolos utilizados para sustituir "/home.XXX/loginFTP", introduzca el comando "pwd" en SSH.
>
> Consulte nuestra guía [Utilizar el acceso SSH de un alojamiento web](../web_hosting_ssh_en_alojamiento_compartido/){.external}.
> 

![hosting](images/3080.png){.thumbnail}

Podrá recuperar el contenido del repositorio sin conectarse directamente por SSH a la máquina.

> [!warning]
>
> Atención: Una misma llave no debe utilizarse para SVN y SSH en
> línea de comandos
> 

### Ejemplos

#### En Linux

Puede hacer un test desde el ordenador que se conecta al depot SVN introduciendo la línea :

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### Windows con TortoiseSVN

- Descargue e instale TortoiseSVN ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads){.external})
- Haga clic derecho en la clave privada. Un icono aparece en la parte inferior derecha y la clave se carga en el agente de autenticación.
- Cree un directorio, haga clic derecho en él y seleccione "SVN Checkout". 
- Introduzca `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` en el campo "URL of repository" y haga clic en `OK`.

![hosting](images/3081.png){.thumbnail}

Existe una muy buena documentación en inglés para Subversion: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Casos específicos

#### Crear varias cuentas

En primer lugar, es necesario haber creado varias llaves SSH. A continuación, añade la clave pública al alojamiento:

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Debe modificar el siguiente parámetro añadiendo los distintos usuarios:

```bash
—túnel-user
```

Tenga en cuenta que también es posible dar acceso de solo lectura añadiendo el parámetro:

```bash
--read-only.
```

#### Comprobar localmente desde el servidor

Cuando quiera realizar una comprobación local, los ejemplos proporcionados no funcionarán. Utilice:

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Más información

[Utilizar el acceso SSH de un alojamiento web](../web_hosting_ssh_en_alojamiento_compartido/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

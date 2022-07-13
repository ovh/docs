---
title: 'Activar la doble autenticación mediante llave de seguridad'
slug: activar-la-doble-autenticacion-por-llave-de-seguridad
excerpt: 'Cómo proteger su área de cliente de OVHcloud activando la doble autenticación por llave de seguridad U2F'
section: Seguridad
hidden: true
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 08/07/2022**

## Objetivo

La doble autenticación por llave de seguridad U2F (Universal Second Factor) es uno de los métodos que propone OVHcloud para que proteja el acceso a su cuenta. Esta técnica de protección mediante una memoria USB —de FIDO Alliance— se utiliza cada vez más para la doble autenticación en numerosos dominios.

**Esta guía explica cómo activar la doble autenticación por llave de seguridad U2F y cómo utilizarla cada vez que inicie sesión en su área de cliente.**

## Requisitos

- Haber consultado los [diferentes métodos de doble autenticación que ofrece OVHcloud](https://docs.ovh.com/us/es/customer/proteger-su-cuenta-con-una-2FA/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Disponer de una llave de seguridad U2F.
- Disponer de un puerto USB libre en su ordenador.

## Procedimiento

> [!warning]
> **Añadir una nueva clave U2F con las versiones recientes de Chrome/Chromium**
>
> La adición de una nueva clave U2F ya no es posible en las versiones recientes del navegador Chrome (a partir de Chrome v98) y sus derivados, como Chromium.<br>
> El uso de una llave U2F ya añadida y funcional siempre es posible en estas versiones recientes del navegador, solo es imposible añadir una nueva llave U2F.
>
> Nuestro equipo [trabaja para solucionar este fallo de funcionamiento](https://customer-service.status-ovhcloud.com/incidents/wl6txzgvrym8). A la espera de una resolución definitiva, le invitamos a seguir uno de estos dos métodos de elusión:
>
> - Utilice otro navegador (como Firefox) para añadir su nueva llave U2F y utilice su navegador Chrome/Chromium habitual para conectarse al área de cliente de OVHcloud de forma habitual.
> - Reactive el soporte de la funcionalidad U2F en su navegador Chrome/Chromium. Para ello, como en la siguiente imagen, copie este valor `chrome://flags/#u2f-security-key-api` en la barra de direcciones del navegador, seleccione `Enabled` en el menú desplegable de la derecha y reinicie su navegador.
>
> ![2FA securitykey - Chrome](images/chrome-u2f-support.png){.thumbnail}

### Etapa 1: activar la doble autenticación

Inicie sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, haga clic en su nombre en la esquina superior derecha (1) y, a continuación, haga clic en sus iniciales (2). Luego, haga clic en `«Seguridad»`{.action}(3) y, por último, en`«Activar la doble autenticación»`{.action}(4).

![2FA securitykey](images/hub2FA.png){.thumbnail}

### Etapa 2: elegir el método por llave de seguridad

Elija el método por llave de seguridad y valide.

![2FA securitykey](images/2fakeyeditca.png){.thumbnail

### Etapa 3: aceptar la doble autenticación

Conecte su llave de seguridad cuando el sistema se lo pida. Si la llave cuenta con un botón, púlselo. 

![2FA securitykey](images/2fakey2.png){.thumbnail}

Una vez reconocida la llave, puede añadir, si así lo desea, una descripción. Dicha descripción puede ser muy útil para identificar las personas susceptibles de utilizar este método de autenticación en su cuenta.

![2FA securitykey](images/2fakey3.png){.thumbnail}

### Etapa 4: guardar los códigos de seguridad

Al agregar por primera vez un método de seguridad por doble autenticación, se le comunicarán los códigos de seguridad, que deberá guardar cuidadosamente. En consecuencia, le aconsejamos guardarlos en un gestor de contraseñas. 

![2FA securitykey](images/2facodes.png){.thumbnail}

Podrá eliminarlos o regenerarlos en su área de cliente.

![2FA securitykey](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Le recordamos que es indispensable guardar estos códigos de seguridad y asegurarse de que sean válidos. En caso de indisponibilidad de su/s método/s de seguridad seleccionado/s (debido al robo o pérdida de su teléfono o de su llave de seguridad), el acceso a su área de cliente podría quedar bloqueado.
> 


### Etapa 5: iniciar sesión en el área de cliente con la doble autenticación

Tras activar la autenticación de doble factor, la pantalla de identificación le mostrará uno de sus métodos de seguridad. Si desea utilizar otro, haga clic en el botón `«Intentarlo con otro método»`{.action}.

![2FA securitykey](images/mobile_auth.png){.thumbnail}

Entonces aparecerán todas las opciones que activó.

![2FA securitykey](images/backupcode_auth.png){.thumbnail}

## Más información

El sitio web oficial de la [FIDO Alliance](https://fidoalliance.org/){.external}.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

---
title: "Cómo reaccionar ante una actividad anormal detectada en su alojamiento web"
excerpt: "Descubra los pasos a seguir cuando se detecta una actividad anormal en su alojamiento web OVHcloud"
updated: 2025-10-02
---

## Objetivo

Este guía explica por qué puede detectarse una **actividad anormal** en su alojamiento web, cuáles son las **consecuencias temporales** (bloqueos de seguridad) y **cómo restablecer** las funcionalidades una vez resuelto el problema.

**Descubra cómo reaccionar ante una actividad inusual en su alojamiento OVHcloud.**

## Requisitos

- Disponer de una oferta de [alojamiento web OVHcloud](/links/web/hosting).
- Estar conectado a su [área de cliente OVHcloud](/links/manager).

## Procedimiento

> [!primary]
> Para proteger su sitio web y sus visitantes, activamos automáticamente medidas de seguridad cuando se detecta una actividad inusual en su alojamiento web. No siempre se trata de un ataque: la causa también puede ser una mala configuración de su sitio web, un script de terceros o una extensión defectuosa.

### ¿Por qué aparece este mensaje?

Hemos detectado una actividad inusual que podría afectar a su servicio:

- Caso 1 – **Detectados malware**: presencia probable de **archivos maliciosos**.
- Caso 2 – **Volumen inusual de envíos de correos electrónicos vía PHP** (scripts/aplicaciones).
- Caso 3 – **Volumen inusual de solicitudes salientes** (conexiones hacia el exterior).

Por medidas de seguridad y según la situación, ciertas funcionalidades pueden bloquearse temporalmente:

- **Acceso al sitio web** (caso 1)
- **Envío de correos electrónicos vía PHP** (caso 1 y caso 2).
- **Solicitudes salientes (TCP OUT)** (caso 1 y caso 3).

### ¿Cuáles son las consecuencias para mi sitio web?

- Dependiendo de la actividad inusual detectada, su **sitio web puede dejar de estar en línea** y no estar accesible para los visitantes.
- Los **envíos de correos electrónicos vía PHP** (formularios, notificaciones, etc.) y/o las **conexiones salientes** (APIs externas, webhooks, actualizaciones vía HTTP, etc.) pueden estar **temporalmente desactivadas**, según el caso.

### Pasos a seguir para resolver la situación

#### Caso 1 — Detectados malware

Su alojamiento contiene probablemente archivos maliciosos. Para comprender y tratar estas anomalías, siga nuestro guía [Caso de uso - Consejos tras un ataque a su sitio web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Una vez finalizada la limpieza**, consulte la sección [Levantar las medidas de seguridad](#lift-security-measures) más abajo.

#### Caso 2 — Volumen inusual de envíos de correos electrónicos vía PHP

Su sitio web ha emitido un número de correos electrónicos vía PHP superior al normal. Esto puede ser **legítimo** (campaña, módulo de newsletter) o **no deseado** (uso abusivo de un formulario, script mal configurado, extensión comprometida). Para comprender y resolver estas anomalías, consulte nuestro guía [Seguir y gestionar los correos electrónicos automatizados de su alojamiento web](/pages/web_cloud/web_hosting/mail_function_script_records).

**Una vez normalizada la situación**, diríjase a la sección [Levantar las medidas de seguridad](#lift-security-measures).

> [!primary]
>
> Esta medida no afecta **al envío de mensajes desde su dirección de correo electrónico** (vía webmail o cliente de correo). Solo se aplica a los **correos electrónicos enviados desde sus scripts** (función `mail()` PHP o envío SMTP activado por una aplicación desde su alojamiento web).

#### Caso 3 — Volumen inusual de solicitudes salientes (TCP OUT)

Su sitio web realiza muchas conexiones externas (APIs, actualizaciones, llamadas HTTP, etc.). Esto puede revelar un mal funcionamiento. Para comprender y resolver estas anomalías, consulte nuestro guía [Caso de uso - Consejos tras un ataque a su sitio web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Una vez finalizada la limpieza**, consulte la sección [Levantar las medidas de seguridad](#lift-security-measures) más abajo.

### Levantar las medidas de seguridad <a name="lift-security-measures"></a>

> [!warning]
>
> Realice este paso **solo después de aplicar las recomendaciones anteriores** (diagnóstico, correcciones/actualizaciones, seguridad). Si se detecta nuevamente una actividad anormal en un próximo escaneo, las **medidas de seguridad se reactivarán automáticamente**. Recibirá una nueva notificación y los bloqueos permanecerán hasta la **resolución definitiva** de la situación.

1. Conéctese a su [área de cliente OVHcloud](/links/manager), vaya a `Web Cloud`{.action} y haga clic en su alojamiento web.
2. Una **ventana de alerta** aparece: `Actividad anormal en su alojamiento`. Si hace clic en el botón `Más tarde`{.action}, una **barrera de alerta** `Actividad anormal detectada` aparece en la parte superior de la página. Haga clic en `Más información`{.action} para reabrir la ventana de alerta.
3. **Marque** la casilla: `Confirmo haber realizado todas las acciones necesarias para resolver el problema`.
4. Haga clic en `Levantar las medidas de seguridad`{.action}.
5. Una **barrera de confirmación** aparece en la parte superior de la página: `Su alojamiento está siendo analizado para levantar las medidas de seguridad.` Siga el progreso haciendo clic en el enlace `Ver tareas en curso`{.action} o directamente desde la pestaña `Tareas en curso`{.action}.

> [!warning]
>
> Asegúrese de que su servicio sea **compatible con el desbloqueo automático** (ciertos estados no permiten levantar inmediatamente las medidas).

## Más información <a name="go-further"></a>

[¿Cómo asegurar un sitio web?](/pages/web_cloud/web_hosting/secure_your_website)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
---
title: "Protección de un servidor de juegos con el firewall de aplicaciones"
excerpt: «Cómo configurar el firewall OVHcloud GAME DDoS»
updated: 2023-12-19
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El objetivo de esta guía es ayudarle a entender mejor nuestra protección DDoS GAME (firewall GAME) y proporcionarle instrucciones sobre cómo configurar una protección eficaz para los servidores que la soportan.

> [!primary]
> Más información sobre la protección DDoS GAME en nuestro sitio web: <https://www.ovhcloud.com/es/security/game-ddos-protection/>.
> 

Nuestros servidores dedicados Bare Metal para juegos incluyen una protección DDoS especialmente diseñada para proteger las aplicaciones de juegos contra ataques dirigidos, garantizando estabilidad y accesibilidad para los jugadores. Esta solución de protección dedicada es sólida y fácil de usar, lo que le permite centrarse en el desarrollo de su negocio sin la distracción de la defensa contra el delito informático.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Diagrama de los servicios de protección de juegos e infraestructuras anti-DDoS en OVHcloud |

## Requerimientos

- Un [servidor dedicado OVHcloud **Game**](https://www.ovhcloud.com/es/bare-metal/prices/#filterType=range_element&filterValue=game#filterType=range_element&filterValue=game)
- Acceso al área de cliente de [OVHcloud](/links/manager)

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los servidores de la [**Eco** línea de productos](https://eco.ovhcloud.com/es/about/).
>
> Visite nuestra [página de comparación](https://eco.ovhcloud.com/es/compare/) para obtener más información.

## Instrucciones

### Introducción

La infraestructura anti-DDoS, junto con el firewall Edge Network, mantiene la red a salvo de amenazas comunes (primarymente centradas en las capas 3 y 4 de ISO OSI). Por otro lado, alojar aplicaciones de juego puede ser una experiencia desafiante en términos de seguridad de red. La protección DDoS GAME está aquí para ayudarle: se trata de un firewall de nivel 7 (aplicación) centrado en proteger protocolos de juegos específicos (normalmente mediante UDP). Sus primaryes ventajas son:

- **Distancia**: Sabemos que la latencia y su estabilidad son cruciales para los juegos. Estas soluciones se sitúan lo más cerca posible de los servidores y funcionan conjuntamente con el hardware dedicado.
- **2-way**: La plataforma analiza el tráfico entrante y saliente para entender mejor la situación de cada jugador.
- **Instantáneo**: permite distinguir los jugadores reales de los ataques dañinos a un servidor de los primeros paquetes de red.
- **Siempre activado**: La capacidad de detectar y detener ataques garantiza una experiencia sin problemas para las aplicaciones de juegos sensibles sin interrupciones ni cambios de latencia.

### Activación de la protección DDoS GAME

> [!primary]
> El firewall GAME protege la IP asociada a un servidor. Como resultado, si tiene un servidor con varias direcciones IP (p.ej. direcciones IP adicionales), deberá configurar cada una de ellas por separado.
>

Para configurar las reglas de juego en el firewall GAME, conéctese al área de cliente de OVHcloud y siga estos pasos:

- Haga clic en la pestaña `Bare Metal Cloud`{.action}.
- Vaya a `Network`{.action} en la columna izquierda.
- Open `IP`{.action}.

| ![servidor-juegos](images/firewall_game_01_blur.png) |
|:--:|
| Haga clic en el botón `...`{.action} situado junto a la dirección IP de su servidor de juegos. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Haga clic en `Configurar el firewall GAME`{.action}. |


| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| En la siguiente pantalla, haga clic en el botón `Añadir una regla`{.action} para añadir una regla al firewall GAME. |


Puede configurar hasta **30 reglas por IP** para proteger uno o más juegos alojados en su servidor detrás del firewall GAME. Puede consultar la lista de perfiles de juego compatibles [aquí](https://www.ovhcloud.com/es/security/game-ddos-protection/).

> [!primary]
> Por defecto, el firewall GAME está preconfigurado con determinadas reglas que OVHcloud ha determinado que funcionan con los juegos más populares. Sin embargo, para los clientes con un servidor dedicado GAME, podemos ir un paso más allá y configurar reglas para los puertos también.
> 

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Active los puertos según sea necesario en la siguiente pantalla y haga clic en el botón `Confirmar`{.action} cuando haya terminado de añadir las reglas. Ya ha configurado correctamente las reglas de firewall GAME. |

> [!primary]
> Es importante tener en cuenta que la protección DDoS GAME no realizará ninguna acción a menos que se configuren reglas.
>
> Además, para una mejor protección, le recomendamos que configure "Default policy = DROP", que eliminará todo el tráfico que no coincida con las reglas definidas. De esta forma, la aplicación que aparece en la lista estará protegida y nada más podrá acceder a su servidor.
> 

> [!warning]
> La protección DDoS GAME se aplica después del [Edge Network firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Para que funcione correctamente, la protección Edge Network no puede ser demasiado estricta y necesita pasar el tráfico a la protección GAME DDoS. Sería óptimo tener una regla en el firewall de Edge Network que permita todo el tráfico UDP, y luego dejar que la protección DDoS GAME filtre los puertos UDP específicos.
>

### Avisos importantes

#### FiveM

FiveM es un mod de GTA V. Actualmente no está totalmente reconocido por Rockstar (editor de juegos).

Debido a esto, no planeamos lanzar un perfil público de firewall FiveM GAME para protección de nivel 7.

#### Rust

El firewall GAME soporta Rust con un perfil detallado. Más información sobre el alojamiento de Rust en los servidores de OVHcloud [aquí](https://www.ovhcloud.com/es/bare-metal/game/rust-server/).

#### Minecraft

Minecraft está bien soportado en las siguientes versiones:

- Minecraft Java edition 
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> Por ahora Minecraft Java Edition está protegido en modo "default" y no se expone ninguna configuración adicional. Si aloja servidores Minecraft más grandes o con requisitos específicos, comuníquese con nuestro soporte técnico mediante el [Centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) con todos los detalles para ajustar el perfil de la aplicación.
>

## FAQ

### ¿Puedo utilizar el firewall GAME en otras gamas que no sean los servidores de juegos Bare Metal?

No, el firewall GAME solo está disponible para nuestros servidores dedicados GAME.

### ¿Puedo desactivar la protección del firewall GAME?

Esto es posible, si no se recomienda. Puede hacerlo eliminando todas las reglas de protocolo de juego de la configuración y desactivando la opción `Default policy: Drop`.

### Mi juego no está en la lista de protocolos admitidos, ¿qué puedo hacer?

Puede proponer sus necesidades en nuestro [plan de desarrollo de soluciones de infraestructura en GitHub](https://github.com/orgs/ovh/projects/16/views/14). Esto nos ayudará a decidir la priorización entre las próximas características que se desarrollarán.

### Aunque he configurado el juego con los puertos adecuados y la política predeterminada para descartarlo, sigo recibiendo ataques que afectan a mi servidor de juegos. ¿Qué hacer?

Para ello, tendrá que compartir volcados de tráfico de red relevantes como ejemplos de dichos ataques (*.pcap* file) y solicitar la optimización de la protección de su perfil. Puede hacerlo en nuestro [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help).

## Más información <a name="go-further"></a>

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
---
title: "Migración de MySQL a Percona Server para MySQL"
excerpt: "Descubra las ventajas de migrar MySQL a Percona Server para MySQL"
updated: 2024-07-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Como parte de nuestro continuo compromiso de ofrecer soluciones potentes y fiables, OVHcloud ha optado por migrar sus servicios de bases de datos compartidas MySQL de Oracle a Percona Server para MySQL.
El objetivo de esta guía es informarle sobre las consecuencias de esta transición y garantizarle que la actualización a Percona Server no tendrá ningún efecto en el uso de su base de datos MySQL.

**Descubra las ventajas de la migración de MySQL de Oracle a Percona Server para MySQL.**

## Requisitos

- Disponer de un [plan de hosting de OVHcloud](/links/web/hosting) con una base de datos compartida de OVHcloud (MySQL) asociada.

## Procedimiento

### Comparativa de Percona Server para MySQL con MySQL por Oracle

Percona Server para MySQL es una versión mejorada y totalmente compatible de MySQL, que ofrece un mejor rendimiento y funcionalidades adicionales sin comprometer la compatibilidad con las aplicaciones MySQL existentes. Para ilustrarlo, a continuación se muestra una tabla comparativa que muestra la correspondencia de las funcionalidades entre MySQL por Oracle y Percona Server para MySQL.

|Funcionalidad|MySQL de Oracle|Percona Server para MySQL|
|---|---|---|
|Compatibilidad con SQL|Completa|Completa|
|Soporte de los motores InnoDB|Sí|Sí|
|Escalabilidad|Estándar|Ámbito|
|Herramientas de gestión y monitorización|Básicas|Avanzadas|
|Seguridad|Standard|Reforzada|

### Impacto en el usuario final

Para usted, usuario final, el cambio a Percona Server para MySQL es transparente:

- **No es necesario modificar el código**: sus aplicaciones funcionarán como antes sin ninguna modificación del código.
- **Rendimiento mejorado**: gracias a la optimización del motor de almacenamiento InnoDB y a las herramientas de monitorización avanzadas, podrá observar una mejora del rendimiento.
- **Soporte ampliado**: Percona ofrece soporte técnico exhaustivo que puede ayudar a resolver los problemas de forma más eficaz.

### Conclusión

La migración de MySQL por Oracle a Percona Server para MySQL tiene como objetivo reforzar el rendimiento y la estabilidad de las bases de datos compartidas en OVHcloud. Esta actualización está diseñada para ser transparente para los usuarios de MySQL, sin interrupciones del servicio ni cambios en la interfaz de usuario. Garantizamos que la transición se realice sin complicaciones, con el fin de mantener la continuidad y la calidad de los servicios de OVHcloud.

## Más información

[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
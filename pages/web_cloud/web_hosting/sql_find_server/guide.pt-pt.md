---
title: "Como identificar o servidor da sua base de dados"
excerpt: "Saiba como encontrar o nome do servidor que aloja a sua base de dados partilhada, acessível com o seu alojamento web"
updated: 2026-02-12
---

## Objetivo

Ao longo da utilização dos seus serviços, pode vir a ter necessidade de conhecer o nome do servidor SQL onde se encontra a sua base de dados (incluída ou adquirida como complemento através do seu [alojamento web](/links/web/hosting)).

> [!warning]
>
> Este guia não se aplica às bases de dados presentes numa solução [Web Cloud Databases](/links/web/databases).

**Saiba como encontrar o nome do servidor que aloja a sua base de dados partilhada, acessível com o seu alojamento web.**

## Requisitos

- Dispor de uma [oferta de alojamento web OVHcloud](/links/web/hosting).
- Utilizar uma base de dados incluída ou [adquirida como complemento](/links/web/hosting-options-startsql) através do seu alojamento web.

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Hosting plans](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

<!-- CP-STEPS-START:find-database-server -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Hosting plans](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Bases de dados`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> No quadro, localize a coluna **Servidor**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Para a base de dados em questão, encontrará, nesta coluna, o nome do servidor SQL (por exemplo: **mysqlXXX.euXXX**) onde a sua base de dados partilhada está alojada.
>>
>> > [!warning]
>> >
>> > Não confunda o **Servidor** com a **Endereço do servidor** :
>> >
>> > - A **Endereço do servidor** faz parte dos identificadores de ligação específicos à sua base de dados e permite ligar o seu site web a esta.
>> > - O **Servidor** representa a infraestrutura que aloja a sua base de dados, bem como outras bases. O nome do servidor permite verificar se está afetado por uma operação de manutenção ou um incidente declarado na nossa página [Web Cloud Status](https://web-cloud.status-ovhcloud.com/).
<!-- CP-STEPS-END:find-database-server -->

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados às bases de dados](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
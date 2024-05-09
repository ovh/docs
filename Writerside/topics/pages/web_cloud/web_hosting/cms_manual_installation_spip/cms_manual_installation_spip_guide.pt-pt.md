---
title: "Tutorial - Instalar manualmente o SPIP"
excerpt: "Saiba como instalar manualmente o seu CMS SPIP"
updated: 2024-03-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O **CMS** (**C**ontent **M**anagement **S**ystem) SPIP é uma solução adaptada aos sites editoriais como revistas online, jornais ou sites institucionais. Graças à sua arquitetura modular e ao seu sistema de esqueletos personalizáveis, SPIP permite criar sites ricos em funcionalidades, oferecendo uma grande liberdade de personalização.

**Saiba como instalar manualmente o CMS Spip no seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](hosting.) que inclua, pelo menos, uma base de dados.
- Dispor de um [domínio](domains.).
- Ter acesso à [Área de Cliente OVHcloud](manager.).

## Instruções

### Preparar a instalação

Para instalar o CMS **Spip** no seu [alojamento web](hosting.), alguns preparativos são necessários.

Siga o **conjunto de passos** descritos no nosso tutorial de [instalação manual de um CMS](cms_manual_installation1.) antes de avançar para o passo seguinte.

### Finalizar a instalação manual

> [!primary]
>
> Antes de continuar a instalação, limpe a cache do browser da Internet para evitar problemas.
>

#### Aceder ao website Spip através do browser

Introduza `your_domain/ecrire` na barra de pesquisa do seu browser para iniciar a instalação do seu website Spip. Surge a seguinte página:

![Spip installation](installation_first_step.png){.thumbnail}

Selecione o idioma do seu website Spip e clique em `Next`{.action} para confirmar. Aparecerá a seguinte janela:

![Spip installation](installation_second_step.png){.thumbnail}

Introduza as informações para se ligar ao seu SGBD (MySQL por exemplo). Quando a conexão com sua base de dados for bem-sucedida, a tela a seguir será exibida:

![Spip installation](installation_third_step.png){.thumbnail}

Selecione a base de dados que pretende utilizar para o seu website ou [crie uma nova](sql_create_database1.). Escolha um prefixo para as tabelas da sua base de dados. Por predefinição, é utilizado o prefixo `spip`. Clique em `Next`{.action} para validar as informações. Aparecerá a seguinte janela:

![Spip installation](installation_fourth_step.png){.thumbnail}

Introduza as informações solicitadas e clique em `Next`{.action} para confirmar. Aparecerá a seguinte janela:

![Spip installation](installation_fifth_step.png){.thumbnail}

O ecrã apresenta a lista dos plugins disponíveis para o seu website e informa-o de que a instalação do Spip decorreu sem problemas.

### Conclusão

Acaba de instalar manualmente o CMS Spip no seu alojamento web da OVHcloud. O seu website Spip está acessível online através do seu nome de domínio. Para aceder ao espaço administrador do seu website Spip, introduza `your_domain/ecrire` na barra de pesquisa do seu browser.

## Quer saber mais? <a name="go-further"></a>

[Tutorial - Instalar manualmente o WordPress](cms_manual_installation_wordpress1.)

[Tutorial - Instalar manualmente o Joomla!](cms_manual_installation_joomla1.)

[Tutorial - Instalar manualmente o Drupal](cms_manual_installation_drupal1.)

[Tutorial - Instalar manualmente o PrestaShop](cms_manual_installation_prestashop1.)

[Tutorial - Instalar manualmente o Pico](cms_manual_installation_pico1.)

[Tutorial - Instalar manualmente o Typo3](cms_manual_installation_typo31.)

[Tutorial - Instalar manualmente o Grav](cms_manual_installation_grav1.)

[Tutorial - Instalar manualmente um CMS no meu alojamento](cms_manual_installation1.)

[Criar uma base de dados num alojamento web](sql_create_database1.)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](partner.).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
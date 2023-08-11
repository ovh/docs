---
title: Delegar projetos
excerpt: "Saiba como delegar direitos de acesso a um projeto Public Cloud noutras contas da OVHcloud"
updated: 2022-04-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 04/04/2022**

## Objetivo

Em função do seu caso de utilização, poderá ter de dar acesso ao seu projeto a outros utilizadores, sem no entanto lhes dar um acesso total aos seus serviços.<br>
Para isso, pode delegar noutras contas de cliente da OVHcloud direitos de leitura apenas ou de leitura/escrita dos seus projetos.

**Este guia explica em pormenor como delegar permissões de acesso a um projeto Public Cloud a partir da Área de Cliente.**

## Requisitos

- Ter uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções 

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e abra o seu projeto `Public Cloud`{.action}. Clique em `Contacts and Rights`{.action} na secção **Project Management**.

Esta página permite-lhe ver os contactos associados ao seu projeto.

![public-cloud-delegate-projects](images/delegatingproject01.png){.thumbnail}

Pode clicar nos botões `Alterar`{.action} para alterar os contactos atuais. Para finalizar esta operação, siga as instruções descritas no nosso manual "[Alterar os contactos de um projeto](/pages/public_cloud/compute/change_project_contacts)".

### Adicionar contactos e permissões

Clique no botão `Adicionar`{.action} para adicionar um utilizador e atribuir-lhe permissões. Na janela que aparecer, indique o identificador do utilizador (sob a forma xx00000-ovh) e selecione `Leitura sozinha` ou `Leitura/Escrita` no menu pendente.

![public-cloud-delegate-projects](images/delegatingproject02.png){.thumbnail}

> [!primary]
>
> Tenha em conta que os direitos de `leitura/escrita` permitem alterações no projeto que podem afetar a faturação futura.
>
 
Clique em `Adicionar`{.action} para validar a delegação de acesso. Receberá então um e-mail de confirmação, bem como ao novo utilizador, que poderá agora abrir o projeto na secção Public Cloud da sua Área de Cliente.

Depois de carregar a página, as contas de cliente OVHcloud adicionadas, bem como os respetivos direitos, estão listadas na tabela.

![public-cloud-delegate-projects](images/delegatingproject03.png){.thumbnail}

Para anular um acesso, clique no botão `...`{.action} e selecione a opção `Eliminar`{.action}.

## Quer saber mais?

[Iniciar com uma instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Informações sobre o método de faturação Public Cloud](/pages/public_cloud/compute/analyze_billing)

[Parâmetros de acesso e de segurança no Horizon](/pages/public_cloud/compute/access_and_security_in_horizon)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
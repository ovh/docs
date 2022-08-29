---
title: Utilizar o VMware Update Manager
excerpt: Utilize a ferramenta VMware para manter os seus hosts atualizados
slug: utilizar_o_vmware_update_manager
legacy_guide_number: g591
section: Funcionalidades VMware vSphere
order: 11
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/12/2021**

## Objetivo

O gestor de atualizações da VMware permite manter os seus hosts atualizados ao instalar os *Bug Fixes* e Patchs de segurança, sem a intervenção das nossas equipas.     

> [!primary]
> As atualizações do vCenter ou as principais atualizações necessitam sempre da nossa participação.

**Este guia explica o funcionamento desta ferramenta**

## Requisitos

- Ter contacto com o administrador do [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), para receber os dados de acesso.
- Ter um identificador de utilizador ativo com as permissões específicas para NSX (criado na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt))

## Instruções

### Maintenance Mode

Antes de trabalhar num host, deve pô-lo em modo de manutenção.    
De facto, a maioria das vezes, o patcher reinicia o host e isso irá limitar o impacto nas suas VMs de produção. 

No menu da interface vSphere, aceda ao painel de controlo `Hosts and Clusters`{.action}.

![Manutenção](images/en01menu.png){.thumbnail}

À esquerda do ecrã, clique com o botão direito do rato. Na secção `Maintenance Mode`{.action}, selecione `Enter Maintenance Mode`{.action}.

![Manutenção](images/en02maintenance.png){.thumbnail}

Certifique-se de que a opção está selecionada na etapa seguinte e clique em `OK`{.action}.

![Manutenção](images/en03enter.png){.thumbnail}

Assumindo que o DRS está ativo, as suas VMs de produção serão migradas para outro host.

> [!primary]
> Se tiver personalizado o seu ambiente, poderá ter de efetuar manualmente as migrações das VMs.
>

Pode aparecer o seguinte aviso:     

![Manutenção](images/en04warning.png){.thumbnail}

O seu host está em modo de manutenção.

![Manutenção](images/en05maintenanced.png){.thumbnail}

### Update Manager

Selecione o host e aceda à secção `Update`{.action}.
Veem os diferentes estados básicos e a conformidade do host.     

Deverá aplicar uma "linha de base" para verificar a conformidade.

![Update](images/en06summary.png){.thumbnail}

Na secção `Attached Baselines`, clique em `Attach`{.action} e `Attach Baseline or Baseline Group`{.action}.

![Update](images/en07attach.png){.thumbnail}

Existem linhas de base predefinidas para os diferentes níveis de correção recomendados.

> [!primary]
> No nosso exemplo, utilizamos correções críticas mas pode utilizar as duas linhas existentes ou criar outras à sua vontade para cobrir as diferentes necessidades do seu ambiente.
>

Selecione a linha de base requerida e clique em `Attach`{.action}.

![Update](images/en08define.png){.thumbnail}

O resumo de conformidade deve então ser atualizado.     

![Update](images/en09noncompliant.png){.thumbnail}

Volte à secção `Attached Baselines`, selecione todas as linhas de base atribuídas e clique em `Stage`{.action}.

![Update](images/en10bisstage.png){.thumbnail}

Selecione o host e clique novamente em `Stage`{.action}.

![Update](images/en10terstagea.png){.thumbnail}

O processo de transferência começa e durará em função do número e do tamanho dos corretivos.

![Update](images/en10terstage.png){.thumbnail}

Ainda na secção `Attached Baselines`, selecione todas as linhas de base atribuídas e clique em `Remediate`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Selecione o host e clique novamente em `Remediate`{.action}.

![Update](images/en11remediate.png){.thumbnail}

O processo de atualização tem início e durará em função do número e da dimensão dos corretivos aplicados.<br>
Se necessário, o host será reiniciado automaticamente.

![Update](images/en12remediating.png){.thumbnail}

No final do processo, a verificação da conformidade será relançada (ou pode ser forçada clicando na ligação) e deverá aparecer uma marca verde.

![Update](images/en13compliant.png){.thumbnail}

O seu host está agora atualizado.    

Não se esqueça de o desativar do modo de manutenção e ele voltará para a produção.

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

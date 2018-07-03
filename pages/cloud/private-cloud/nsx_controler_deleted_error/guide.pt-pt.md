---
title: 'Compreender a mensagem de erro «Controller VM deleted»'
slug: erro-controlador-nsx
excerpt: 'Saiba o que significa a mensagem de erro «Controller VM deleted»'
section: NSX
---

**Última atualização: 03/07/2017**

## Sumário

Na interface do NSX, pode surgir a mensagem 'Controller VM deleted'

**Este guia explica o que isso significa**.


## Requisitos

- Dispor da opção NSX.
- Ter criado um utilizador com as [permissões de acesso ao NSX (FR)](https://docs.ovh.com/fr/private-cloud/changer-les-droits-d-un-utilisateur/){.external}.


## Instruções

Na [interface do NSX (EN)](https://docs.ovh.com/gb/en/private-cloud/accessing-NSX-interface/), secção Instalação, pode surgir sob o nome do controlador a mensagem de erro: *Controller VM deleted*:

![Erro VM do controlador suprimida](images/controllervmdeleted.JPG)

Isto deve-se ao facto de a OVH não armazenar controladores na sua infraestrutura, mas numa infraestrutura de gestão interna distinta, de modo a não consumir recursos na sua.

No funcionamento padrão do NSX, está previsto que os controladores se encontrem no mesmo datacenter que as suas máquinas virtuais, o que explica este erro. O funcionamento da sua máquina não será afetado por esta mensagem.

Na interface NSX, certifique-se simplesmente de que o estado dos controladores é `Conectado`. Se for o caso, a sua máquina encontra-se funcional.

> [!warning]
>
> A resolução deste erro através do botão `Resolver`{.action} provoca a supressão dos controladores da sua infraestrutura, o que vai perturbar a utilização do NSX e da rede da infraestrutura. Portanto, aconselhamos que não efetue esta ação. A gestão dos controladores NSX fica a cargo da OVH.
> 

Isto também explica o alerta no painel de controlo do NSX:

![Alerta na interface NSX](images/controllervmdeleted2.JPG)

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
---
title: 'Verificar e bloquear a falha L1TF'
slug: verificar-bloquear-falha-l1tf
excerpt: 'Saiba como bloquear a vulnerabilidade L1TF'
section: Segurança
---

**Última atualização: 18/04/2019**

## Sumário

No seguimento da divulgação pública da vulnerabilidade L1TF (“L1 Terminal Fault " ou "Foreshadow"), foram publicados diversos procedimentos e patches para minimizar a exposição a este risco.

**Este manual explica como bloquear esta vulnerabilidade.**

## Requisitos

- Dispor de um utilizador com ligação ao vSphere.
- Utilizar o <i>hyperthreading </i>nas suas máquinas virtuais

## Instruções

Lembrete:

|Variável|Vulnerável|Solucionado pelo patch?|
|:---|:---:|:---:|
|Variável 1: L1 Terminal Fault - VMM (CVE-2018-3646)|Sim|Não (mas mitigado)|
|Variável 2: L1 Terminal Fault - OS (CVE-2018-3620)|Não||
|Variável 3: L1 Terminal Fault - SGX (CVE-2018-3615)|Não||

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [não afeta os hipervisores VMware](https://kb.vmware.com/s/article/55807) e [requer um acesso local ao vCenter/VCSA](https://kb.vmware.com/s/article/52312)
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) não afeta os hipervisores VMware: [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/54913)
> 

No que diz respeito ao **Private Cloud**, a gama SDDC é a única a poder ficar afetada por esta vulnerabilidade.

Explicamos esta falha neste [artigo](https://www.ovh.pt/news/artigos/al516.ovh-l1-terminal-fault-l1tfforeshadow-disclosure){.external-link}.

## Processo de mitigação

> [!primary]
>
> Tenha em conta que as ações descritas abaixo não permitem corrigir a falha, servem apenas para desativar o <i>hyperthreading </i>nos hosts ESXi. No entanto, visto que a falha L1TF necessita do <i>hyperthreading </i>para funcionar, a sua desativação irá proteger a sua infraestrutura da exploração desta vulnerabilidade.
>

O processo de mitigação está descrito no seguinte artigo da VMware: [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

Este procedimento divide-se em 3 partes.

### 1 - Atualização

Embora a OVH atualize o vCenter, deverá encarregar-se da atualização dos hosts ESXi. O patch está disponível no [Update Manager](https://docs.ovh.com/pt/private-cloud/utilizar_o_vmware_update_manager/){.external-link}. 

Poderá consultar a lista de patches para os hosts ESXi neste [documento](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Após a atualização, aparecerá a seguinte mensagem de alerta no resumo do host:

![](images/warningMsg.png){.thumbnail}

### 2 - Avaliação do ambiente

Os hosts ESXi já estão atualizados, mas a correção não foi aplicada.

Antes de o fazer, deve considerar os possíveis problemas que são explicados no [artigo da VMware](https://kb.vmware.com/s/article/55806){.external-link} anteriormente referido, assim como a diminuição do rendimento observada, que é detalhada [neste artigo](https://kb.vmware.com/s/article/55767){.external-link}.

### 3 - Ativação

Depois de consultar a documentação anterior, poderá ativar o parâmetro que permite desativar o <i>hyperthreading </i>na configuração avançada do sistema.

![](images/enableMitigation.png){.thumbnail}

Tem à sua disposição um filtro no canto superior direito.

Esta operação deve ser realizada para cada um dos hosts.

Para obter mais informações, pode consultar a secção “Resolution”, artigo n.º 3, deste [artigo da VMware](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Se, tendo em conta a informação referida anteriormente, não pretender desativar o <i>hyperthreading</i>, pode eliminar a mensagem de alerta seguindo os passos indicados [neste artigo](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![](images/deleteWarning.png){.thumbnail}
> A OVH não recomenda esta solução e não se responsabiliza pelas consequências que possam advir.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
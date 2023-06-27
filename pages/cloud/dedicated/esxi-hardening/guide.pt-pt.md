---
title: 'Controle e proteja o seu servidor dedicado ESXi desde o seu primeiro começo'
excerpt: 'Descubra os diferentes meios que lhe permitem proteger eficazmente o seu servidor dedicado ESXi'
updated: 2023-03-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/03/2023**

## Objetivo

Este manual tem como objetivo acompanhá-lo no desenvolvimento da segurança do seu sistema ESXi.

Em particular, este guia explica como:

- limitar o acesso ao seu ESXi a um endereço IP ou a uma gama de rede específica;
- desativar serviços que aumentem a superfície de ataque do seu servidor.

Para isso, utilizaremos as funções de bordo propostas pela VMware, mas também as oferecidas pela OVHcloud.

> [!warning]
> 
> Recentemente, os sistemas ESXi foram vítimas de uma falha que grupos maliciosos exploraram muito rapidamente através das redes públicas.
>
> Para mais informações sobre este ataque, consulte [a FAQ (EN)](/pages/cloud/dedicated/faq-esxi).
>

### Lembrete das boas práticas de segurança:

- Atualize regularmente os seus sistemas ESXi.
- Restrinja o acesso apenas aos endereços IP de confiança.
- Desative as portas e os serviços não utilizados.
- Certifique-se de que os acessos aos seus servidores ou equipamentos de rede são limitados, controlados e protegidos com palavras-passe robustas.
- Guarde os seus dados críticos em discos externos e servidores de backup protegidos e isolados da Internet.

**Opcional**:

- Implemente as soluções de registo necessárias para controlar os acontecimentos ocorridos nos seus servidores críticos e nos seus equipamentos de rede.
- Implemente packs de segurança para a deteção de ações maliciosas, intrusões (IPS / NIDS) e para o controlo da largura de banda do tráfego de rede.

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter um servidor dedicado com a solução ESXi implementada.
- Ter uma oferta compatível com a nossa funcionalidade [Network Firewall](/pages/cloud/dedicated/firewall_network) se pretender utilizá-la para efetuar a filtragem.

## Instruções

### A proteção anti-intrusão nativa

Lembrete da sua definição e do seu princípio de funcionamento:

> [!primary]
> 
> O sistema ESXi está a instalar um mecanismo de segurança associado à conta de administrador.
> Com efeito, em caso de várias tentativas de acesso erradas, a conta administrador está temporariamente bloqueada.
> Este mecanismo permite proteger o seu sistema e, assim, evitar as tentativas de ligações maliciosas.

> [!warning]
> 
> Se este sistema for ativado e pretender conectar-se ao seu ESXi imediatamente, terá de desbloquear manualmente a conta de administrador.
>
> Para isso, será necessário [reiniciar](/pages/cloud/dedicated/getting-started-with-dedicated-server#reinicializacao-do-seu-servidor-dedicado) o seu servidor ESXi através da Área de Cliente OVHcloud.
> 

Pode consultar o histórico dos logs de acesso nos seguintes ficheiros a partir de uma shell SSH:

- `/var/run/log/vobd.log` contém os logs que podem ser utilizados para a supervisão e resolução de problemas:

```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

- `/var/run/log/hostd.log` contém os logs do host ESXi (tarefas, acesso à interface WEB, etc.):

```
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Todas estas informações estão igualmente disponíveis através da interface de administração web. Clique no menu `Host`{.action} e aceda à secção `Monitor`{.action} e clique em `Logs`{.action}.

![interface](images/gui_logs_.png){.thumbnail}

### A solução Network Firewall

> [!primary]
>
> Relembramos que a Network Firewall não é tida em conta na rede OVHcloud. Por conseguinte, as regras configuradas não afetam as ligações provenientes desta rede interna.
>

Propomos-lhe que ative e utilize a nossa solução de filtragem [Network Firewall](/pages/cloud/dedicated/firewall_network).
Esta solução permitir-lhe-á gerir facilmente os acessos legítimos, em complemento dos que terá implementado através do seu sistema ESXi.

Também evitará bloquear inesperadamente a sua conta de administrador em caso de ataque.

Por conseguinte, recomenda - se que os acessos legítimos sejam filtrados desta forma:

- A regra 1 (Priority 0) permite o acesso de redes externas de confiança ao seu sistema ESXi.
- A regra 2 (Priority 1) bloqueia tudo o resto.

![Network_Firewall](images/firewall_network_.png){.thumbnail}

### A filtragem sob ESXi

> [!primary]
>
> Também pode filtrar os acessos ao seu sistema ESXi graças à firewall integrada.
> Também poderá desativar os serviços inúteis, em função da sua utilização.
>

> [!warning]
> 
> A desativação dos serviços **SSH** e **SLP** é fortemente aconselhada.
> Se, apesar de tudo, continuar a utilizar o serviço SSH, restrinja ao máximo a sua utilização e os seus acessos.
> O mesmo se aplica aos acessos ao **shell**.
> Preveja apenas o estritamente necessário para cada uma das suas necessidades.

#### Manipulação através da interface gráfica

**Serviços**

Clique no menu `Host`{.action} e aceda à secção `Manage`{.action} e clique em `Serviços`{.action}.

Encontre na lista o serviço `TSM-SSH` e faça um clique direito na linha associada.

Parem o serviço ao clicar em `Stop`{.action}:

![serviços_ssh](images/stop_service.png){.thumbnail}

Selecione a `Policy` e altere-a conforme indicado no exemplo apresentado.

Escolha a opção `Start and stop manually`{.action} para evitar que o serviço esteja ativo no arranque do servidor.

![serviços_ssh](images/ssh_disabled_.png){.thumbnail} 

Aplicar os mesmos parâmetros para o serviço `slpd`:

![serviços_slp](images/slpd_.png){.thumbnail}

**Regras da firewall**

Clique no menu `Networking`{.action} e, a seguir, na `Firewall rules`{.action} e selecione `Edit settings`{.action} para cada um dos serviços a proteger:

![blocos](images/firewall_web_.png){.thumbnail}

Editar a regra para adicionar apenas os endereços IP ou as redes que devem ter acesso ao seu sistema ESXi.

Exemplo que autoriza apenas ligações a partir do IP 192.168.1.10:

![custom](images/custom_fw_rule.png){.thumbnail}

#### Manipulação através do shell

**Serviços**

Desative os serviços inúteis:

- Serviço SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

- Serviço SSH

```bash
/etc/init.d/SSH stop
esxcli network firewall ruleset set -r sshServer -e 0
chkconfig SSH off
```

Verifique todos os serviços ativos no arranque:

```bash
chkconfig --list | grep on
```
<br/>
<br/>

**Regras da firewall**

Indique as regras de firewall existentes:

```bash
esxcli network firewall ruleset list
esxcli system account list
```

> Explicações sobre as alterações/ajustamentos da regra de acesso: 
> 
> - O serviço `vSphere Client`: este serviço corresponde à interface WEB de administração na porta 443 (HTTPS).
> - O serviço `sshServer`: este serviço corresponde aos acessos em SSH na porta 22.

Exemplo com o serviço vSphere Client:

```bash
esxcli network firewall ruleset list --ruleset-id vSphereClient
```

Certifique-se de que a regra da firewall está ativa:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --enabled true
```

Afixar a lista dos IP autorizados para esta regra:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Resultado:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  All
```

Altere o estado da tag desativando-a:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --allowed-all false
```

Autorize apenas o endereço IP legítimo 192.168.1.10:

```bash
esxcli network firewall ruleset allowedip add --ruleset-id vSphereClient --ip-address 192.168.1.10
```

Verifique a presença do endereço na lista de acesso:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Resultado:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  192.168.1.10
```
<br/>
<br/>

Se pretender utilizar o serviço SSH, explicamos-lhe como implementar um acesso com chave SSH.

Gerar as chaves na máquina que deve ligar-se ao servidor ESXi, o algoritmo **ECDSA** em 521 bits deve ser privilegiado para uma segurança máxima:  

> [!warning]
> A autenticação funciona com um par de chaves: uma pública e outra privada.
> Não partilhe de forma alguma a sua chave **privada**, ela deve permanecer na máquina onde foi gerada.

Execute o seguinte comando:

```bash
ssh-keygen -t ecdsa -b 521 -C "key-ecdsa-esxi-host" -f /path-to-my-key/key-ecdsa
```

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/path-to-my-key/key-ecdsa_rsa):
```

Introduza uma palavra-passe robusta:

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Apenas a chave pública (key-ecdsa.pub) deverá ser comunicada ou colocada nas máquinas às quais deseja ligar-se.

```
Your identification has been saved in /path-to-my-key/key-ecdsa.
Your public key has been saved in /path-to-my-key/key-ecdsa.pub.
The key fingerprint is:
SHA256:******************************************* key-ecdsa-esxi-host
```

Transfira a chave pública para o seu host ESXi para que possa ser declarada como estando de confiança:

```bash
cat /path-to-my-key/key-ecdsa.pub | ssh root@esxi-host-ip 'cat >> /etc/ssh/keys-root/authorized_keys'
```

## Saiba mais

Para mais informações sobre as boas práticas de segurança, consulte [este manual](https://core.vmware.com/security-configuration-guide) da VMware.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
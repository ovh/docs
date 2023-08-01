---
title: Gerir um VPS legacy
excerpt: Saiba como administrar um VPS de uma gama antiga a partir da sua Área de Cliente OVHcloud
updated: 2023-06-29
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Pode identificar se um VPS pertence a uma gama mais antiga graças ao nome de referência apresentado na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt): se esta referência interna estiver no formato *vpsXXXX.ovh.net* (em que *X* representa um algarismo) e não tiver migrado o VPS correspondente para a [nossa gama atual de produtos](https://www.ovhcloud.com/pt/vps/), trata-se de um VPS *legacy*. 

A referência de um VPS da gama atual apresenta-se desta forma: *vps-XXXXXXX.vps.ovh.net* (em que *X* pode ser um algarismo ou uma letra).

Um VPS *legacy* implica algumas diferenças em termos de gestão.

**Este guia explica pormenorizadamente as funcionalidades da Área de Cliente OVHcloud dedicadas à gestão de um VPS *legacy*.**

## Requisitos

- Um [VPS *legacy*](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), abra o separador `Bare Metal Cloud`{.action} e selecione o seu servidor entre os `Servidores privados virtuais`{.action}.

No separador `Página Inicial`{.action}, pode aceder às operações principais do VPS a partir da secção **Atalho**.

![controlpanel](images/legacy_vps_1.png){.thumbnail}

### Eliminar o meu VPS

Esta opção irá abrir uma janela para iniciar o processo de [rescisão do serviço](/pages/account/billing/how_to_cancel_services).

### Reiniciar em Modo de Rescue

Clique para reiniciar o VPS em modo rescue. Encontre todos os detalhes no [nosso guia](/pages/cloud/vps/rescue).

### Reiniciar o meu VPS

Esta opção do espaço cliente efetuará um *hard reboot* do seu VPS se clicar em `Confirmar`{.action} na janela que surgir.

Pode ser necessário reiniciar para aplicar atualizações de configuração ou resolver um problema. Sempre que possível, pode efetuar um *soft reboot* em linha de comandos:

```bash
sudo reboot
```

### Reinstalar o meu VPS

Clique para instalar um novo sistema operativo. Na janela que aparece, ser-lhe-á pedido que escolha:

- um sistema operativo entre os propostos;
- A língua;
- uma [chave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (facultativo)

A escolha dos sistemas operativos pode ser restrita ao seu serviço.

> [!primary]
>
> Alguns sistemas operativos proprietários ou certas plataformas como o Plesk ou cPanel requerem licenças que implicam custos adicionais. As licenças podem ser geridas a partir da Área de Cliente: aceda à secção `Bare Metal Cloud`{.action} e abra as `Licenças`{.action}.

Receberá uma mensagem de correio eletrónico quando a instalação estiver concluída. Este processo pode demorar até 30 minutos.

#### Ligação ao seu VPS após reinstalação

Aquando da reinstalação do seu VPS, ser-lhe-á enviado um e-mail com a palavra-passe root para se ligar ao seu VPS em [SSH](/pages/cloud/dedicated/ssh_introduction), exceto se tiver selecionado uma [chave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) a pré-instalar.

#### Desativar o acesso ao servidor para o utilizador root

O utilizador **root** é criado por predefinição nos sistemas GNU/Linux. Trata-se do nível de acesso mais elevado a um sistema operativo. Pode ser perigoso deixar o VPS acessível através do utilizador root e da respetiva palavra-passe, pois esta conta pode efetuar operações irreversíveis prejudiciais.

É possível desativar as ligações de utilizadores root através do protocolo SSH. Não se esqueça de [criar um utilizador](/pages/cloud/vps/secure_your_vps#createuser) diferente antes de continuar os passos indicados abaixo.

Utilize um editor de texto, como *vim* ou *nano*, para editar este ficheiro de configuração:

```bash
sudo nano /etc/ssh/sshd_config
```

Localize a seguinte linha:

```console
PermitRootLogin yes 
```

Substitua **yes** por **no** após o `PermitRootLogin`. Salve e saia do editor.

Para que esta alteração seja tida em conta, deve reiniciar o serviço SSH com um dos seguintes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Isto deve ser suficiente para implementar as alterações. Caso contrário, reinicie o VPS (`~$ sudo reboot`).

De seguida, as ligações ao servidor através do utilizador root (`ssh root@IPv4_VPS`) serão rejeitadas.

### KVM

Utilize esta opção para se ligar ao seu VPS através do KVM. Encontre todos os detalhes no [nosso guia](/pages/cloud/vps/using_kvm_for_vps).

### Alterar titular

Esta hiperligação irá encaminhá-lo para o formulário a preencher em caso de mudança de proprietário de um VPS. Se precisar de ajuda para efetuar este procedimento, contacte as nossas equipas de suporte através da criação de um ticket na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

### Migrar para a nova gama

O seu VPS pode ser migrado automaticamente para a gama atual. Descubra as vantagens desta oferta na [nossa FAQ dedicada à migração de VPS](https://www.ovhcloud.com/pt/vps/vps-offer-migration/).

## Quer saber mais?

[Consulte o manual Introdução ao SSH](/pages/cloud/dedicated/ssh_introduction)

[Criação e utilização de chaves SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated)

[Como proteger um VPS](/pages/cloud/vps/secure_your_vps)

[Configurar uma nova instalação do Windows Server](/pages/cloud/vps/windows_first_config)

[VPS: primeira utilização](/pages/cloud/vps/starting_with_a_vps)

Junte-se à nossa comunidade de utilizadores no <https://community.ovh.com/en/>.

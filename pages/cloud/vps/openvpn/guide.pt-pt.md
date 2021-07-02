---
title: 'Implementar um servidor OpenVPN'
slug: openvpn
excerpt: 'Saiba como instalar um servidor OpenVPN num VPS'
section: 'Utilização avançada'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/06/2021**

## Objetivo

OpenVPN é um software que lhe permite criar uma rede privada virtual (VPN). Ao utilizar o template VPS OVHcloud para um servidor OpenVPN, poderá instalar e utilizar o seu serviço VPN pessoal em algumas etapas.

**Saiba como criar o seu próprio serviço VPN com um VPS e OpenVPN.**

## Requisitos

- Ter um [VPS](https://www.ovhcloud.com/pt/vps/) na Área de Cliente OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Instalar o servidor OpenVPN

> [!primary]
>
Se pretender utilizar um serviço VPS existente, pode fazê-lo a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), [reinstalando este serviço com o template OpenVPN](../instalar-gerir-vps/#reinstallvps).
>

Encomende o seu VPS na [página do produto](https://www.ovhcloud.com/pt/vps/). Ao selecionar a imagem, selecione a `Distribuição com aplicação`{.action} e, a seguir, `OpenVPN`{.action} como sistema operativo.

![Encomenda VPS](images/order_vps.png){.thumbnail}

Depois de instalar o VPS, receberá um e-mail com os dados de identificação.

![E-mail de instalação](images/opencredent2.png){.thumbnail}

O seu servidor VPN está pronto. Para se conectar, clique no link no e-mail de instalação que abrirá a interface Web OpenVPN Client. Introduza as suas informações de identificação OpenVPN fornecidas no mesmo e-mail.

![Página de ligação](images/login_user.png){.thumbnail}

### Instalação e utilização do cliente OpenVPN

#### Windows

Na interface Web do cliente, selecione o `símbolo Windows`{.action}.

![Interface do utilizador](images/windows_client.png){.thumbnail}

Registe o ficheiro `.msi` e lance-o.

Depois de instalar a aplicação cliente, pode lançá-la através do menu Windows ou a partir da barra de tarefas.

![Win app](images/win_launch.png){.thumbnail}

Conecte-se com as suas credenciais OpenVPN fornecidas no e-mail de instalação.

![Ligação Windows](images/win_login.png){.thumbnail}

A partir de agora, navegará na Internet com o endereço IP da sua VPN.

Para verificar o endereço IP, aceda à página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Linux

##### **Instalar o cliente OpenVPN**

Para instalar o cliente para as distribuições do tipo Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

Para instalar o cliente para as distribuições do tipo Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

Também deve descarregar o ficheiro de configuração de `client.ovpn` a partir da interface Web do cliente OpenVPN.

![Interface do utilizador](images/ovpn.png){.thumbnail}

##### **Lançar o cliente OpenVPN com o seu ficheiro de configuração**

```sh
sudo openvpn --config client.ovpn
```

Deverá introduzir as suas credenciais:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: *************************************
```

A partir de agora, navegará na Internet com o endereço IP da sua VPN.

Para verificar o endereço IP, aceda à página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### MacOS

Depois de se conectar, selecione o `símbolo Apple`{.action}.

![Interface do utilizador](images/mac_client.png){.thumbnail}

Registe o ficheiro e lance-o.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Conecte-se com as suas credenciais OpenVPN fornecidas no e-mail de instalação.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

A partir de agora, navegará na Internet com o endereço IP da sua VPN.

Para verificar o endereço IP, aceda à página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Acesso ao seu servidor OpenVPN

Na interface Web OpenVPN Client (acessível através do URL fornecido no e-mail de instalação), clique no botão `Admin`{.action}.

![Interface do utilizador](images/admin_button.png){.thumbnail}

Também pode adicionar `admin` ao URL OpenVPN para aceder diretamente à página de ligação:

```sh
https://IP_of_your_VPS:943/admin
```

Ligue-se com os mesmos identificadores OpenVPN fornecidos no e-mail e aceite os termos e condições.

Agora tem acesso ao painel de configuração do servidor OpenVPN.

![Servidor de acesso OpenVPN](images/admin_access.png){.thumbnail}

## Quer saber mais?

[VPS - primeira utilização](../instalar-gerir-vps/)

[OpenVPN](https://openvpn.net/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
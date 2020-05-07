---
title: 'Conectar-se a uma instância Public Cloud'
slug: primeira-conexao
legacy_guide_number: 1787
excerpt: 'Descubra como conectar-se a uma instância Public Cloud'
section: Introdução
---

**Última atualização: 6 de dezembro de 2019**

## Sumário

A conexão a uma instância Public Cloud é similar a uma conexão a um Servidor dedicado ou VPS, mas cada instância possui uma conta ou utilizador específico.

**Este guia explica como pode conectar-se a instâncias Public Cloud em Linux ou em Windows.**

## Requisitos

* acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} criada na sua conta

## Instruções

### Conectar-se a uma instância Linux a partir de um ambiente Linux/Mac

Para se conectar à instância Public Cloud execute o seguinte comando SSH, substituindo o “utilizador” e a “instância_IP” com a instância do seu endereço IP.

```sh
ssh user@instance_IP
```

O utilizador Public Cloud será diferente, em função do sistema operativo que estiver a utilizar. A tabela abaixo exibe uma lista (não exaustiva) de utilizadores, por sistema operativo.

|Sistema operativo|Utilizador|
|---|---|
|Arch Linux|arch|
|CentOS 6|centos|
|CentOS 7|centos|
|CoreOS|core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> Ao conectar-se diretamente, são-lhe atribuídos por defeito os direitos de utilizador padrão. Se deseja utilizar os privilégios de utilizador “root” (superutilizador), terá de utilizar o comando sudo-i ou sudo su.
>


**Aviso relativo ao certificado digital do servidor SSH remoto:**

Na primeira conexão, terá de confirmar a autenticidade do host clicando em `sim`.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Conectar-se a uma instância Linux a partir de um ambiente Windows

Para se conectar a uma instância Linux a partir do Windows, basta utilizar um programa de tipo [PuTTY](https://www.putty.org/){.external} ou, para as versões mais recentes do Windows 10, utilizar as funções [já nativas](https://docs.microsoft.com/pt-br/windows/wsl/about){.external}. A seguir, só precisará de seguir as mesmas indicações acima referidas.


### Conectar-se a uma instância Windows

#### Finalizar a instalação

Quando tiver criado a instância, é preciso finalizar o chamado *sysprep*. Para isso, na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, é preciso executar a consola VNC:

![consola VNC](images/vnc_console.png)

Durante a primeira etapa, selecione o seu país, a língua desejada e a configuração do teclado. A seguir, clique em `Seguinte`{.action}:

![Escolha o idioma no sysprep](images/sysprep_first_step.png)

Depois, selecione a palavra-passe para o *administrador*:

![Escolha a palavra-passe no sysprep](images/sysprep_password.png)

Por fim, confirme as alterações efetuadas clicando em `Concluir`{.action}. A instância irá reiniciar e poderá então conectar-se ao seu servidor Windows.


#### Conectar-se a uma instância Windows

A conexão à sua instância Windows é feita diretamente através da função `Área de trabalho remota`, a partir do seu computador Windows: 

![Escolha a palavra-passe no sysprep](images/remote_desktop.png)

Nas etapas seguintes, bastará especificar o IP da sua instância (primeira etapa da conexão através da Área de trabalho remota) e a seguir adicionar o seu nome de utilizador (administrador) e a palavra-passe que definiu:

![Área de trabalho remota - Login](images/remote_desktop_connection_IP.png)

![Área de trabalho remota - Login do utilizador](images/remote_desktop_connection_user.png)

Uma mensagem vai pedir-lhe que valide a informação de login: Clique em `Sim`{.action}:

![Confirmação do login](images/connection_validation.png)

Será então conectado à sua instância.

> [!primary]
>
> Em caso de problemas de conexão à sua instância Windows, verifique se a firewall do Windows autoriza conexões RDP. Se precisar de mais informações, consulte o [guia de configuração do servidor Windows.
> 


## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

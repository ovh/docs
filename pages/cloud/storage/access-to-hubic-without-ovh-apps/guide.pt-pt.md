---
title: 'Como aceder ao hubiC sem usar o website ou as aplicações'
slug: aceder-ao-hubic-sem-aplicacao
excerpt: 'Saiba como aceder a um cluster hubiC de três formas diferentes'
section: hubiC
---

## Introdução 

O serviço hubiC é baseado em clusters de armazenamento OpenStack Swift e , por isso, pode aceder ao mesmo de várias formas diferentes. Embora a utilização do site hubic.com seja o método recomendado, é possível utilizar o seu serviço acedendo através de ferramentas de terceiros.

**Saiba como aceder a um cluster hubiC através de três métodos: Cyberduck (cliente Swift), Mountain Duck (disco de rede) ou uma montagem SVFS.**

> [!warning]
> Este tutorial explica a utilização de uma ou várias soluções da OVH através de ferramentas externas e descreve as operações realizadas num contexto preciso. Deverá adaptá-las consoante a sua situação. 
>
Se necessitar de ajuda, recomendamos que entre em contacto com um fornecedor especializado ou que partilhe as suas dúvidas com o resto da comunidade em https://community.ovh.com/en/. A OVH não lhe poderá fornecer assistência. 
>

## Requisitos

### O que precisa de saber

- Saber instalar uma aplicação na sua máquina local (para as soluções Cyberduck e Mountain Duck).
- Aceder via SSH (para a montagem SVFS).

### O que precisa de ter

- Uma conta hubiC ativa. 
- Um computador com sistema operativo Windows, macOS ou GNU/Linux.
- Uma ligação Internet funcional.
- Uma licença válida para utilizar um software proprietário pago (por exemplo: Mountain Duck).


## Instruções 


### Determine o método de ligação mais adaptado à sua situação

Em função do seu sistema operativo e os seus conhecimentos, pode privilegiar determinados métodos de ligação. 

- Se pretender utilizar uma solução Windows ou macOS e configurá-la você mesmo, pode consultar a parte deste tutorial “[Aceder a um cluster hubiC via Cyberduck](./#aceder-a-um-cluster-hubic-via-cyberduck)” para aceder a um cluster hubiC através do cliente Swift.  

- Se pretender utilizar uma solução integrada para Windows ou macOS com poucas configurações e através de um disco de rede, consulte a parte deste tutorial “[Aceder a um cluster hubiC via Mountain Duck](./#aceder-a-um-cluster-hubic-via-mountain-duck)” para aceder a um cluster hubiC através de um software pago.

- Se estiver a utilizar uma distribuição GNU/Linux, consulte a parte deste tutorial “[Aceder a um cluster hubiC via SVFS](./#aceder-a-um-cluster-hubiC-via-svfs)” para aceder a um cluster hubiC através de uma montagem SVFS.


## Aceder a um cluster hubiC via Cyberduck

Pode ligar-se a um cluster hubiC utilizando um cliente Swift. Neste tutorial, iremos utilizar o Cyberduck, disponível para as plataformas Windows e macOS. 


### 1 - Descarregar e instalar o Cyberduck

Descarregue a versão mais recente do Cyberduck correspondente ao seu sistema operativo (Windows ou macOS) através [desta ligação](https://cyberduck.io/download/){.external}. 

Esta aplicação é gratuita e pode ser utilizada sem limites. Após a instalação, execute o software para verificar que a operação foi bem realizada e **saia do software**.


### 2 - Obter os dados de autenticação 

Deve criar e inserir um perfil de ligação específico para aceder ao hubiC via Cyberduck.

Este perfil é um ficheiro que pode descarregar clicando [aqui](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Abra o ficheiro, que irá executar o Cyberduck assim como uma janela de configuração.


### 3 - Autorizar o Cyberduck a aceder à sua conta hubiC

Na janela anterior, insira o endereço de e-mail de acesso à sua conta hubiC no campo “Email”.

![inserir e-mail](images/hubic_cyberduck_02.png){.thumbnail}

Na aplicação Cyberduck, clique duas vezes no ícone de disco rígido junto do qual se encontra o seu e-mail. 

Uma página deverá aparecer, solicitando-lhe que insira as suas credenciais de acesso ao hubiC. Introduza os elementos solicitados e clique no botão `Accept`{.action}. Esta ação irá autorizar o Cyberduck a ligar-se ao hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

Depois de fazer isto, receberá um código de autorização que valida este acesso.

![token](images/hubic_cyberduck_04.png){.thumbnail}

Copie e cole-o no Cyberduck na parte “Authorization code” e, depois, clique em `Continuar`{.action}. 

![oauth](images/oauth.png){.thumbnail}

Depois de a janela fechar, clique em `Login`{.action}.

### 4 - Aceder ao seu compute hubiC via Cyberduck

Uma vez de volta ao software Cyberduck, poderá ligar-se ao seu cluster hubiC a qualquer momento clicando duas vezes no ícone de disco rígido.

![login](images/hubic_cyberduck_05.png){.thumbnail}

Poderá consultar os seus ficheiros e pastas. 

![navegar](images/hubic_cyberduck_06.png){.thumbnail}

Ao clicar com o botão direito do rato num ficheiro ou numa pasta, poderá aceder a diferentes opções: clicar em `download` permite descarregar o ficheiro ou a pasta, e a opção `delete` irá eliminar o ficheiro ou a pasta.

> [!warning]
> 
> Nunca elimine as secções *Default* ou *Default_segments*, pois isso poderá fazer com que a sua conta hubiC fique indisponível ou poderá perder os seus dados armazenados.
>

## Aceder a um cluster hubiC via Mountain Duck

Mountain Duck é um software disponível em Windows e macOS, que lhe permite aceder facilmente à determinados serviços de armazenamento de dados, tal como o hubiC. Serão apresentados como discos de rede no seu computador e poderão ser usados da mesma forma. 

> [!primary]
>
> Mountain Duck é pago. **Uma versão de teste (*Trial version*) está disponível, mas não permite estabelecer ligações durante mais de 10 minutos**.

### 1 - Descarregar e instalar o Mountain Duck

Descarregue a versão mais recente do Mountain Duck correspondente ao seu sistema operativo [desta ligação](https://mountainduck.io/){.external}. Execute a instalação e insira a chave de registo recebida durante a compra da sua licença.

### 2 - Obter os dados de autenticação 

Deve criar e inserir um perfil de ligação específico para aceder ao hubiC via Mountain Duck.

Este perfil é um ficheiro que pode descarregar clicando [aqui](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Ao abrir este ficheiro, o hubiC deverá ser adicionado à lista de serviços suportados.

### 3 - Abrir um disco rígido de rede hubiC

Verifique que o Mountain Duck está a funcionar corretamente e clique com o botão direito do rato no ícone correspondente na barra de tarefas.

![barra de tarefas](images/hubic_mountainduck_01.png){.thumbnail}

Aparecerá uma janela de configuração. Selecione `hubiC (OVH)`{.action} no menu pendente.

![barra de tarefas](images/hubic_mountainduck_02.png){.thumbnail}

Na nova janela, insira o endereço de e-mail da sua conta hubiC no campo “Email” e clique em `Connect`{.action}.

### 4 - Autorizar o Mountain Duck a aceder à sua conta hubiC

Uma página deverá aparecer, solicitando-lhe que insira as suas credenciais de acesso ao hubiC. Introduza os elementos solicitados e clique no botão `Accept`{.action}. Esta ação irá autorizar o Mountain Duck a ligar-se ao hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

A seguir, aparecerá uma nova página com um código de autorização validando este acesso.

![token](images/hubic_cyberduck_04.png){.thumbnail}

Copie e cole-o na janela correspondente.

![auth md](images/hubic_mountainduck_03.png){.thumbnail}

Depois de inserir este código no Mountain Duck, o seu espaço hubiC será acessível como leitor de rede num computador.

![network drive](images/hubic_mountainduck_04.png){.thumbnail}

## Aceder a um cluster hubiC via SVFS

Se utilizar um computador com uma distribuição GNU/Linux (neste exemplo, Debian), pode aceder ao seu espaço hubiC através de um ponto de montagem SVFS (*Swift Virtual File System*). Para obter mais informações sobre SVFS, consulte o [repositório de projetos GitHub](https://github.com/ovh/svfs).

### 1 - Instalar o SVFS

Estabeleça uma ligação em SSH e obtenha o pacote SVFS compatível com hubiC através do seguinte comando:

```sh
wget https://github.com/ovh/svfs/releases/download/v0.9.1/svfs_0.9.1_amd64.deb
```

A seguir, instale-o:

```sh
dpkg -i svfs_0.9.1_amd64.deb
```

Durante a fase de instalação, poderá encontrar erros de correspondência. A maior parte destes erros podem ser corrigidos através do seguinte comando (sempre em Debian e sistemas derivados):

```sh
apt --fix-broken install
```

A seguir, poderá voltar a executar a instalação, e não deverá encontrar mais erros deste tipo.

### 2 - Configurar o ponto de montagem

Aceda a [hubic.com](https://hubic.com) (página em inglês). Clique em `My account`{.action}, em `Developers`{.action} e, depois, em `Add an application`{.action}. Atribua-lhe um nome e indique-a em “Redirection domain”:

```sh
http://localhost
```

![aplicação](images/hubic_svfs_01.png){.thumbnail}

À direita da aplicação criada, clique em `Details`{.action} e recupere as informações nos campos “Client ID” e “Client Secret”.

![client_secret](images/client_secret.png){.thumbnail}

Ainda ligado em SSH, insira o seguinte comando:

```ssh
hubic-application
```

Insira as informações necessárias:

| Nome do campo              | Informação solicitada               |
|---------------------------|----------------------------------------|
| Application redirect URL  | http://localhost/                      |
| Application Client ID     | O client ID obtido anteriormente.     |
| Application Client Secret | O client secret obtido anteriormente. |

A seguir, preencha os seguintes elementos:

```
1. Setting scope ... OK ~> Email: /o seu mail hubic/ ~> Password: /palavra-passe/
2. Granting access ... OK
3. Getting refresh token ... OK == Your mount options == ~> hubic_auth=xxxxxxxx ~> hubic_token=xxxxxxxx
```

### 3 - Criar o ponto de montagem

Uma vez os elementos inseridos, pode criar um ponto de montagem SVFS através dos elementos que obteve.

```
# sudo mount -t svfs hubic /mountpoint -o hubic_auth=<hubic_auth>,hubic_token=<hubic_token>,container=default
```

## Conclusão

Já pode aceder ao seu espaço de armazenamento hubiC sem utilizar a aplicação oficial ou o site hubic.com (a aplicação web). 

No entanto, tenha em atenção que recomendamos aceder aos seus dados via hubic.com. A OVH não lhe poderá fornecer assistência relativamente às instruções indicadas acima.
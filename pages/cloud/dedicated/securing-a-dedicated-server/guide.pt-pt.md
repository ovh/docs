---
title: 'Proteger um servidor dedicado'
slug: proteger-um-servidor-dedicado
excerpt: 'Saiba como proteger o seu servidor dedicado graças a estas dicas'
section: Introdução
order: 2
---

**Última atualização: 22/08/2018**

## Sumário

Quando encomenda o seu servidor dedicado, não existe nenhum protocolo de segurança implementado de forma nativa. O utilizador é responsável pela proteção do servidor e a OVHcloud não poderá ser responsabilizada por falhas de segurança da sua máquina.

**Saiba como proteger o seu servidor dedicado graças a estas dicas.**

> [!warning]
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este manual fornece as instruções necessárias para usar as funcionalidades básicas de um servidor. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”
>


## Requisitos

- Ter um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.
- Ter uma ligação via SSH (acesso root) em Linux ou enquanto administrador no Windows.


## Instruções

> [!primary]
>
> Manual para utilização geral. Poderá ter de adaptar alguns comandos consoante a distribuição e/ou o sistema operativo que utiliza. Poderá ser-lhe sugerida a utilização de ferramentas de terceiros. Em caso de dúvidas relacionadas com a sua utilização, consulte a documentação oficial.  
>

### Atualizar o sistema

Os programadores de sistemas operativos e de sistemas de distribuição propõem atualizações do software frequentes, muitas vezes por razões de segurança. **Atualizar a sua distribuição e o seu sistema operativo é essencial para proteger o seu servidor.**

Trata-se de um processo composto por duas partes que implica a atualização da lista dos pacotes (a lista das aplicações de software instaladas) e dos próprios pacotes.

#### Atualização da lista de pacotes

Atualize a lista dos pacotes no seu servidor da seguinte forma:

```sh
apt-get update
```

#### Atualização dos pacotes

De seguida, atualize os pacotes no seu servidor da seguinte forma:

```sh
apt-get upgrade
```

Depois de finalizar as atualizações, o seu sistema estará totalmente atualizado. Esta operação deve ser realizada regularmente.


### Alterar a porta de escuta do protocolo SSH

Uma das primeiras ações a realizar no seu servidor é a alteração da porta do serviço SSH. Porta predefinida: porta 22. Sugerimos a alteração do valor por predefinição. A maior parte das tentativas de ataques informáticos aos servidores são realizadas por robôs que têm como alvo a porta 22. Assim, o seu servidor será mais difícil de atingir se esta configuração for modificada.

> [!primary]
>
> Nos exemplos abaixo, utilizaremos o editor de texto Linux **Nano**, mas pode usar qualquer editor de texto que lhe permita editar o ficheiro de configuração.
>

Para modificar o ficheiro de configuração do serviço, poderá usar o seguinte comando:

```sh
nano /etc/ssh/sshd_config
```

De seguida, localize a linha seguinte no ficheiro:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Substitua o número **22** por outro à sua escolha, guarde e saia do ficheiro de configuração. **Certifique-se de que não introduziu um número de porta já existente**. De seguida, reinicie o seu servidor.

A partir de agora, quando solicitar uma ligação SSH na sua máquina, deverá indicar a nova porta:

```sh
ssh root@SeuServidor.ovh.net -p NovaPorta
```

> [!warning]
>
> Lembre-se de que a alteração da porta predefinida do SSH ou de qualquer outro protocolo constitui um risco potencial. Poderá verificar que alguns serviços não podem ser configurados para serem utilizados com portas que não são standard, e não funcionam se a porta predefinida for alterada.
>


### Alterar a palavra-passe do utilizador root

Quando um sistema de distribuição ou um sistema operativo é instalado, é automaticamente criada uma palavra-passe para o acesso root. Recomendamos vivamente que o altere para o personalizar. Para isso, abra uma ligação SSH para o seu servidor e introduza o comando abaixo:

```sh
passwd root
```

De seguida, deverá inserir a nova palavra-passe duas vezes. Lembre-se de que, por razões de segurança, **a palavra-passe não será apresentada**. Logo, não poderá visualizar os caracteres introduzidos.

Após esta operação, o acesso ao sistema terá que ser efetuado com a nova palavra-passe.


### Criar um utilizador com direitos restritos

Sugerimos a criação de uma conta de utilizador com acesso restrito ao seu servidor para uma utilização diária. Para criar um novo utilizador, execute o seguinte comando:

```sh
adduser Nome_Utilizador_Personalizado
```

De seguida, preencha as informações solicitadas pelo sistema (palavra-passe, nome, etc.).

Este utilizador poderá aceder ao sistema via SSH, usando a palavra-passe definida durante a criação da nova conta. Uma vez ligado ao sistema com os dados de acesso do novo utilizador, poderá efetuar operações com permissões de administrador. Para tal deverá usar o comando:

```sh
su root
```

De seguida, terá que indicar a palavra-passe associada ao utilizador root para validar a ação.


### Desativar o acesso ao servidor através do utilizador root

O utilizador root é criado por predefinição nos sistemas UNIX, como Linux ou MAC OS. Dispõe de todos os direitos de administração sobre o sistema. Por razões de segurança, não é recomendado tornar o servidor dedicado acessível apenas através deste utilizador. Esta conta pode executar operações irreversíveis no seu servidor.

Aconselhamos vivamente que desative o acesso direto dos utilizadores root através do protocolo SSH. Para realizar esta operação, terá que modificar o ficheiro de configuração SSH, através do processo indicado anteriormente para alterar a porta de acesso ao servidor.

Comece por abrir uma ligação SSH para o seu servidor e introduza o comando abaixo:

```sh
nano /etc/ssh/sshd_config
```

De seguida, localize a secção seguinte e substitua o “yes” por “no” na linha `PermitRootLogin`, tal como indicado abaixo:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Depois de guardar e fechar o ficheiro de configuração, reinicie o serviço SSH para aplicar as alterações através do comando abaixo:

```sh
/etc/init.d/ssh restart
```

### Instalar e configurar o pacote Fail2ban

Fail2ban é um framework anti-intrusão que permite bloquear endereços de IP desconhecidos usados para penetrar no seu sistema. Este pacote é recomendado para o proteger contra ataques forçados no seu servidor.

Para instalar o Fail2ban, utilize o seguinte comando:

```sh
apt-get install fail2ban
```

Depois de instalado, altere o ficheiro de configuração do Fail2ban de acordo com definições do seu sistema. Antes de efetuar qualquer alteração, sugerimos que realize uma cópia de segurança do ficheiro de configuração inserindo o comando abaixo:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Agora já pode fazer as modificações ao ficheiro:

```sh
nano /etc/fail2ban/jail.conf
```

Após finalizar essas alterações, reinicie o serviço através do seguinte comando:

```sh
/etc/init.d/fail2ban restart
```

Para saber mais sobre as funcionalidades do Fail2Ban, não hesite em consultar a [documentação oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} (em inglês) deste software.


### Configurar a firewall interna: iptables

A distribuição “básica” inclui uma firewall designada iptables. A configuração inicial não tem nenhuma regra predefinida (ativa). Para confirmar o tipo de configuração, deverá executar o comando:

```sh
iptables -L
```

Como tal, recomendamos a criação e o ajustamento das regras da firewall à sua utilização. Para obter mais informações sobre a configuração dos iptables, consulte o [nosso guia](https://docs.ovh.com/pt/dedicated/firewall-iptables/) e a documentação oficial da distribuição Linux.


### Configurar a Network Firewall da OVHcloud

Os servidores da OVHcloud incluem uma firewall para proteger o acesso à infraestrutura designada Network Firewall. A configuração deste serviço permite o bloqueio de protocolos antes mesmo de chegarem ao servidor.

Poderá também consultar o nosso [manual](https://docs.ovh.com/pt/dedicated/firewall-network/){.external} sobre como configurar a Network Firewall.


### Proteger o sistema e os dados

A segurança de um sistema também inclui a proteção dos dados. A proteção dos seus dados é essencial e, por isso, a OVHcloud oferece-lhe 500 GB de armazenamento gratuito com o seu servidor. É possível ativar este armazenamento na Área de Cliente e aceder ao mesmo através dos protocolos abaixo:

- FTP
- FTPS
- NFS
- CIFS

Será necessária uma solução de armazenamento de terceiros para replicar os seus dados e transferi-los para o seu armazenamento.

Para saber mais sobre as nossas soluções de armazenamento, consulte o nosso [manual](https://docs.ovh.com/gb/en/dedicated/services-backup-storage/){.external} sobre armazenamento (versão inglesa).


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
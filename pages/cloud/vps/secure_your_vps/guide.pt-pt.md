---
title: Como proteger um VPS (Sistema Linux)
slug: como-proteger-vps
section: Primeiros passos
---

**Última Atualização 02/01/2018**

## Sumário

O VPS OVH inclui a instalação do sistema operativo mas não tem nenhum protocolo de segurança predefinido. Cabe ao cliente implementar e configurar as medidas de segurança adequadas ao tipo de utilização do VPS.

**Este guia fornece algumas orientações para proteger o seu servidor virtual.**

 
> [!warning]
>
> A utilização e gestão das soluções VPS da OVH são da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS. O cliente é o único responsável pela segurança do serviço. Este guia explica como implementar algumas de medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste guia intitulada: «Quer saber mais?»
> 


## Requisitos

- Estar ligado ao VPS com protocolo SSH (acesso root).


## Instruções

Atenção: (1) Este guia apresenta procedimentos gerais. Os comandos a executar poderão ter que ser adaptados ao sistema operativo instalado no VPS. (2) Algumas instruções sugerem o recurso a ferramentas desenvolvidas e disponibilizadas por terceiros. Para obter informação adicional, consulte os guias oficiais dessas ferramentas.

### Atualizar o sistema

As equipas de desenvolvimento efetuam inúmeras atualizações aos pacotes dos sistemas operativos, algumas delas por razões de segurança. As atualização regulares são fundamentais para garantir a segurança do seu VPS.

O processo de atualização tem duas etapas:

- Atualização da lista de pacotes. Usar comando:

```sh
apt-get update
```

- Atualização dos pacotes. Usar comando:

```sh
apt-get upgrade
```

Depois de concretizadas estas tarefas, o seu sistema estará atualizado. Esta operação deve ser efetuada com regularidade.


### Alterar a porta «de escuta» do protocolo SSH


A alteração da porta do serviço SSH é uma das primeiras ações de segurança a realizar. Porta predefinida: **port 22**. A maior parte dos ataques informáticos aos servidores (realizados por robots) tem como alvo a porta 22. Com a alteração da porta, será mais difícil piratear o seu servidor.

Para reconfigurar a porta, poderá usar, por exemplo, o comando`nano`:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Também pode usar o comando `vim`, ou outro comando que permita a alteração do ficheiro sshd\_config.
>

De seguida, irá visualizar a seguinte linha:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Substitua o 22 por um número da sua preferência que não esteja a ser usado pelo sistema. **Atenção: só pode usar números de porta que não estejam a ser usados pelo sistema**. Guarde as alterações e feche o ficheiro de configuração.

De seguida, reinicie o serviço SSH:

```sh
/etc/init.d/ssh restart
```

A partir de agora, sempre que efetuar uma ligação SSH ao VPS, terá indicar a nova porta:

```sh
ssh root@seuvps.ovh.net -p NovaPorta
```

### Alterar a palavra-passe do utilizador root

Quando instalar um sistema operativo, será gerada uma palavra-passe de acesso root. Para maior segurança, recomendamos a alteração da mesma. Para tal, aceda ao vps e introduza o comando:

```sh
passwd root
```

O sistema irá solicitar que introduza duas vezes a nova palavra-passe. Atenção: por razões de segurança, os caracteres introduzidos não serão apresentados. Logo, não poderão ser visualizados.

Após esta operação, o acesso ao sistema terá que ser efetuado com a nova palavra-passe.

### Criar um utilizador com permissões limitadas / Aceder ao sistema com permissões root

Para criar um novo utilizador, execute o seguinte comando:

```sh
adduser NomeUtilizadorPersonalizado
```

De seguida, preencha as informações solicitadas pelo sistema (palavra-passe, nome, etc.).

Este utilizador poderá aceder ao sistema via SSH, usando a palavra-passe definida durante a criação da nova conta.

Uma vez ligado ao sistema com os dados de acesso do novo utilizador, poderá efetuar operações com permissões de nível root. Para tal deverá usar o comando:

```sh
su root
```

De seguida, terá que indicar a palavra-passe associada ao utilizador root para validar a ação.

### Desativar o acesso ao servidor através do utilizador root.

O utilizador root é criado automaticamente pelo sistema UNIX. Este tipo de utilizador dispõe do nível mais elevado de acesso (configuração, gestão,...) ao sistema. Para que não sejam realizadas alterações indesejadas e irreversíveis, desaconselhamos vivamente o acesso exclusivo ao servidor com o utilizador root.

A desativação do acesso direto do utilizador root deverá ser efetuada através do protocolo SSH.

Para realizar esta operação, terá que modificar o ficheiro de configuração SSH, através do m�todo indicado anteriormente para alterar a porta de acesso ao VPS:

```sh
nano /etc/ssh/sshd_config
```

A seguir, localize a seguinte secção:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Substitua **yes** por **no** na linha `PermitRootLogin`.

Para que esta alteração produza efeito, terá que reiniciar o serviço SSH:

```sh
/etc/init.d/ssh restart
```

A partir de agora, deverá usar os dados do novo utilizador para aceder ao sistema.


### Instalar e configurar o pacote Fail2ban

Fail2ban é um software anti-intrusão que permite bloquear IP desconhecidos usados para penetrar no seu sistema. Este pacote de software é essencial para prevenir qualquer tentativa de ataque do tipo «brute force» aos seus serviços.

Para instalar este pacote, execute o seguinte comando:

```sh
apt-get install fail2ban
```

Depois de instalado, tem que alterar o ficheiro de configuração do Fail2ban de acordo com definições do seu sistema. Atenção: antes de alterar o ficheiro, deverá fazer um backup do mesmo, usando o comando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Agora já pode fazer as modificações ao ficheiro:

```sh
nano /etc/fail2ban/jail.conf
```

Terminada a operação, reinicie o Fail2ban através do comando:

```sh
/etc/init.d/fail2ban restart
```

Para saber mais sobre o as funcionalidades do Fail2Ban, não hesite em consultar a [informação oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} deste software.

### Configurar firewall interna: Iptables

Os sistemas operativos linux incluem uma firewall designada IPtables. A configuração inicial não tem nenhuma regra predefinida (ativa). Para confirmar o tipo de configuração, deverá executar o comando:

```sh
iptables -L
```

Como tal, recomendamos a criação e ajustamento das regras da firewall ao tipo de utilização do seu VPS. Para mais informação sobre as opções de configuração, consulte informação relativa funcionamento deste serviço nos manuais oficiais do sistema operativo instalado.

### Configurar a Firewall Network da OVH

O serviço OVH inclui uma firewall para proteger o acesso à infraestrutura designada Firewall Network. A configuração deste serviço permite o bloqueio de protocolos antes mesmo de chegarem ao servidor.

Para mais informação, por favor consulte o [Guia Firewall Network](https://docs.ovh.com/pt/dedicated/firewall-network/){.external}.

### Proteger o sistema e os dados.

A segurança de um sistema também inclui a proteção dos dados.

A OVH disponibiliza três opções de backup:

- Opção `Snapshot`: criação manual de uma imagem instantânea (snapshot) da sua máquina virtual (disponível para os serviços VPS SSD. Cloud e Cloud RAM).
- Opção `Backup Automático`: backup diário do VPS (não inclui backup de discos adicionais), exportado e replicado três vezes antes de estar disponível na Área de Cliente (disponível para os serviços VPS Cloud e Cloud RAM);
- Opção `Backup Storage`: espaço partilhado que permite o armazenamento e a recuperação manual dos ficheiros. Protocolos compatíveis com o Backup Storage: FTP, NFS e CIFS. A compatibilidade com estes protocolos permite a utilização do serviço com todos os sistemas operativos. Com este serviço, os dados ficam protegidos em caso de interrupção do serviço (disponível para VPS Cloud e Cloud RAM).

Para mais informações sobre as soluções de backup para VPS, aceda a: <https://www.ovh.pt/vps/backup-vps.xml>.

## Para saber mais

Consulte o [Guia sobre a Firewall Network](https://docs.ovh.com/pt/dedicated/firewall-network/){.external}.

Ou fale com a comunidade de utilizadores OVH: <https://community.ovh.com/en/>
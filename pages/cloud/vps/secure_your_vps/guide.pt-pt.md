---
title: 'Proteger um VPS'
slug: como-proteger-vps
section: 'Primeiros passos'
excerpt: 'Descubra os elementos de base que lhe permitem proteger o seu VPS'
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 15/01/2021**

## Objetivo

Quando encomendar o seu VPS, pode escolher uma distribuição ou um sistema operativo a pré-instalar. O servidor está pronto para ser utilizado após a entrega.  No entanto, na sua qualidade de administrador, tem a responsabilidade de implementar medidas que garantam a segurança e a estabilidade do seu sistema.

**Este guia fornece-lhe alguns conselhos gerais para proteger o seu servidor.**
 
> [!warning]
>
> A OVHcloud fornece-lhe máquinas cuja responsabilidade lhe cabe. De facto, não temos acesso aos dados alojados nestas máquinas e não somos os administradores. o cliente é o único responsável pela gestão e pela segurança do serviço. Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas quanto à administração, utilização ou segurança do seu servidor, recomendamos que recorra a um prestador de serviços especializado. Para mais informações, aceda à secção “Quer saber mais?” deste manual.
> 

## Requisitos

- uma oferta [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- acesso administrativo (root) via SSH ao seu servidor

## Instruções

> [!primary]
>
> Tenha em conta que este é um guia geral. Certos comandos devem ser adaptados à distribuição ou ao sistema operativo que utiliza. Por vezes, recomendamos que utilize ferramentas de terceiros. Se precisar de ajuda, consulte a documentação oficial destas aplicações.
>
> Se configurar o primeiro VPS da OVHcloud, recomendamos que consulte primeiro o nosso manual sobre [a implementação de um VPS](../instalar-gerir-vps/).
>

### Atualizar o sistema

Os programadores das distribuições efetuam numerosas atualizações dos pacotes, muitas vezes por razões de segurança. As atualização regulares são fundamentais para garantir a segurança do seu VPS.

Esta atualização terá duas etapas.

- A atualização da lista dos pacotes:

```sh
apt-get update
```

- A atualização dos pacotes em si:

```sh
apt-get upgrade
```

Esta operação deve ser realizada regularmente para manter um sistema atualizado.


### Alterar a porta de escuta do protocolo SSH

Uma das primeiras ações a realizar no seu servidor é configurar o serviço SSH mudando a porta de escuta. É definido na **porta 22** predefinida. Por conseguinte, as tentativas de pirataria de servidores por robôs visarão esta porta. A alteração deste parâmetro com a ajuda de outra porta é uma medida simples para reforçar a proteção do seu servidor contra ataques automatizados.

Para modificar o ficheiro de configuração do serviço, poderá usar o seguinte comando:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Também pode usar o comando `nano`, `vim` ou outro comando que permita alterar ficheiros de configuração.
>

De seguida, deverá encontrar as seguintes linhas:

```sh
# What ports, IPs and protocols we listen for
Port 22
```

Substitua o número **22** pelo número de porta à sua escolha. **Não introduza um número de porta já utilizado no seu sistema**. Por razões de segurança, utilize um número compreendido entre 49152 e 65535. <br>Registe e saia do ficheiro de configuração.

Reinicie o serviço:

```sh
systemctl restart sshd
```

Tal deverá ser suficiente para aplicar as alterações. Também pode reiniciar o VPS (`~$ reboot`).

Tenha em conta que deve indicar a nova porta sempre que solicitar uma ligação SSH ao seu servidor, por exemplo:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Modificação da password associada ao utilizador "root"

Recomenda-se vivamente que altere a palavra-passe do utilizador root de modo a não a deixar ao valor predefinido num novo sistema. Para mais informações, consulte as informações [deste guia](../root-password/).

### Criação de um utilizador com direitos restritos

Em geral, as tarefas que não requerem privilégios root devem ser realizadas através de um utilizador standard. Para criar um utilizador, utilize o seguinte comando:

```sh
adduser CustomUserName
```

De seguida, preencha as informações solicitadas pelo sistema (palavra-passe, nome, etc.).

O novo utilizador será autorizado a ligar-se através de SSH. Ao ligar, utilize as informações de identificação especificadas.

Depois de aceder ao sistema com os dados de identificação indicados, execute operações com permissões de administrador. Para tal, introduza o seguinte comando:

```sh
su root
```

Introduza a password quando for convidado e a ligação ativa será migrada para o utilizador root.

### Desativação do acesso ao servidor através do utilizador root

O utilizador root é criado por predefinição nos sistemas GNU/Linux. O acesso root significa ter o máximo de autorizações num sistema operativo. Não é recomendável, nem mesmo perigoso, que o seu VPS seja acessível apenas através do acesso root, pois esta conta pode efetuar operações irreversíveis prejudiciais.

Recomendamos que desative o acesso direto ao utilizador root através do protocolo SSH. Não se esqueça de criar outro utilizador antes de seguir os passos abaixo.

Deve modificar o ficheiro de configuração SSH da mesma forma que o acima descrito:

```sh
nano /etc/ssh/sshd_config
```

Localize a seguinte secção:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Substitua **yes** por **no** na linha `PermitRootLogin`.

Para que esta modificação seja tida em conta, deve reiniciar o serviço SSH:

```sh
systemctl restart sshd
```

De seguida, as ligações ao seu servidor através do utilizador root (`ssh root@IPv4_of_your_VPS`) serão rejeitadas.

### Instalação do Fail2ban

Fail2ban é um software anti-intrusão que permite bloquear IP desconhecidos usados para penetrar no seu sistema. Este programa é recomendado, mesmo essencial, para se proteger contra qualquer ataque brutal contra os seus serviços.

Para instalar o pacote de software, utilize o seguinte comando:

```sh
apt-get install fail2ban
```

Uma vez o pacote instalado, é necessário modificar o ficheiro de configuração deste último para o adaptar à sua utilização. Antes de efetuar qualquer alteração, recomendamos que efetue uma cópia de segurança do ficheiro de configuração introduzindo o seguinte comando:

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

Para mais informações sobre o Fail2Ban, não hesite em consultar a documentação oficial desta ferramenta ao clicar [neste link](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configuração da firewall interna (iptables)

As distribuições Linux e UNIX são fornecidas com um serviço de firewall designado iptables. A configuração inicial não tem nenhuma regra predefinida (ativa). Para confirmar o tipo de configuração, deverá executar o comando:

```sh
iptables -L
```

Recomendamos que crie regras para esta firewall e que as adapte à sua utilização. Para mais informações sobre as várias operações, consulte a documentação oficial da distribuição utilizada.

### Configuração da Firewall Network OVHcloud 

As soluções da OVHcloud incluem a possibilidade de ativar uma firewall no ponto de entrada da infraestrutura, designada Firewall Network. Uma configuração correta desta firewall permite bloquear as ligações antes mesmo que estas cheguem ao seu servidor.

Consulte o guia "[Configurar a Firewall Network](../../dedicated/firewall-network/)" se desejar ativá-la.

### Proteger o sistema e os dados

O conceito de segurança não se limita à proteção de um sistema contra ataques.

A segurança dos seus dados é um elemento chave. É por isso que a OVHcloud oferece-lhe várias opções de backup enquanto serviços:

- A opção `Snapshot` que lhe permite criar uma imagem manual.
- A opção de `Backup automático` permite-lhe conservar os backups regulares do seu VPS (à exceção dos discos suplementares).

Na [página do produto](https://www.ovhcloud.com/pt/vps/options/) e nos respetivos [guias](../), poderá encontrar todas as informações sobre as soluções de backup disponíveis para o seu serviço.

## Saiba mais

[VPS: primeira utilização](../instalar-gerir-vps/) 

[Configurar a Firewall Network](../../dedicated/firewall-network/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

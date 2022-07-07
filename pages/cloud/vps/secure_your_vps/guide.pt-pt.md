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

**Última atualização: 05/05/2022**

## Objetivo

Quando encomendar o seu VPS, pode escolher uma distribuição ou um sistema operativo a pré-instalar. O servidor está pronto para ser utilizado após a entrega. No entanto, cabe-lhe a si, enquanto administrador, implementar medidas que garantam a segurança e a estabilidade do seu sistema.

**Este manual fornece-lhe alguns conselhos gerais para proteger um servidor baseado em GNU/Linux.**

> [!warning]
>A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Se encontrar dificuldades para realizar estas ações, contacte um fornecedor de serviços especializado e/ou discuta o problema com a nossa comunidade de utilizadores em https://community.ovh.com/en/. A OVHcloud não lhe pode fornecer apoio técnico a este respeito.
>

## Requisitos

- Um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- Ter acesso de administrador (root) ao seu servidor através de SSH

## Instruções

> [!primary]
>
> Tenha em conta que se trata de um guia geral baseado num sistema operativo Ubuntu Server. Algumas encomendas precisam de ser adaptadas à distribuição que utiliza e certos truques convidam-no a utilizar ferramentas de terceiros. Consulte a documentação oficial destas aplicações caso necessite de ajuda.
>
> Se configurar o primeiro VPS da OVHcloud, recomendamos que consulte primeiro o nosso manual sobre [a implementação de um VPS](../instalar-gerir-vps/).
>

Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas.

### Atualizar o sistema operativo

Os programadores de distribuições e de sistemas operativos propõem atualizações frequentes de pacotes, muitas vezes por razões de segurança.<br>
Assegurar a atualização da sua distribuição ou sistema operativo é um ponto essencial para proteger o seu VPS.

Esta atualização terá duas etapas.

- A atualização da lista dos pacotes:

```bash
sudo apt update
```

- A atualização dos pacotes propriamente dita:

```bash
sudo apt upgrade
```

Esta operação deve ser efetuada regularmente para manter um sistema atualizado.

### Modificar a porta de escuta SSH

Uma das primeiras ações a realizar no seu servidor é a configuração da porta de escuta do serviço SSH. Por predefinição, este é definido na **porta 22**, pelo que as tentativas de hack do servidor por robots vão direcionar esta porta prioritariamente.
A alteração deste parâmetro, em benefício de uma porta diferente, é uma medida simples para reforçar a proteção do seu servidor contra ataques automatizados.

Para isso, altere o ficheiro de configuração do serviço com o editor de texto à sua escolha (`nano` é utilizado neste exemplo):

```bash
~$ sudo nano /etc/ssh/sshd_config
```

Deve encontrar as seguintes linhas ou equivalentes:

```console
# What ports, IPs and protocols we listen for
Port 22
```

Substitua o número **22** pelo número de porta à sua escolha.<br>
**No entanto, certifique-se de que não indica um número de porta já utilizado no seu sistema**.
Para uma maior segurança, utilize um número entre 49152 e 65535.<br>
Registe e saia do ficheiro de configuração.

Reinicie o serviço:

```bash
sudo systemctl restart sshd
```

Isto deveria ser suficiente para aplicar as alterações. Caso contrário, reinicie o VPS (`~$ sudo reboot`).

Lembre-se de que deve indicar a nova porta a cada pedido de ligação SSH ao seu servidor, por exemplo:

```bash
ssh username@IPv4_of_your_VPS -p NewPortNumber
```

### Alterar a palavra-passe do utilizador root

Recomenda-se vivamente que altere a palavra-passe do utilizador root para não a deixar ao valor predefinido num novo sistema. Para mais informações consulte [este guia](../root-password/).

### Criar um utilizador com direitos restritos

Em geral, as tarefas que não exijam privilégios root devem ser realizadas através de um utilizador standard. Para criar um novo utilizador, execute o seguinte comando:

```bash
sudo adduser NomeUtilizadorPersonalizado
```

De seguida, indique as informações pedidas pelo sistema: palavra-passe, nome, etc.

O novo utilizador será autorizado a ligar-se em SSH. Ao estabelecer uma ligação, utilize as informações de identificação especificadas.

Uma vez ligado, introduza o seguinte comando para efetuar operações que requerem autorizações root:

```bash
su root
```

Introduza a password quando for convidado e a ligação ativa será migrada para o utilizador root.

### Desativar o acesso ao servidor através do utilizador root

O utilizador root é criado por predefinição nos sistemas GNU/Linux. Trata-se do nível de acesso mais elevado a um sistema operativo.<br>
É desaconselhado e mesmo perigoso deixar o seu VPS acessível apenas em root, pois esta conta pode efetuar operações irreversíveis prejudiciais.

Recomenda-se a desativação do acesso direto dos utilizadores root através do protocolo SSH. Não se esqueça de criar outro utilizador antes de seguir os passos abaixo.

Deve modificar o ficheiro de configuração SSH da mesma forma que o descrito anteriormente:

```bash
sudo nano /etc/ssh/sshd_config
```

Consulte a secção seguinte:

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Substitua **yes** por **no** na linha `PermitRootLogin`.

Para que esta modificação seja tida em conta, deve reiniciar o serviço SSH:

```bash
sudo systemctl restart sshd
```

De seguida, as ligações ao seu servidor através do utilizador root (`ssh root@IPv4_of_your_VPS`) serão rejeitadas.

### Configurar firewall interna (iptables)

As distribuições GNU/Linux comuns são fornecidas com um serviço de firewall designado iptables. A configuração inicial não tem nenhuma regra predefinida (ativa). Para confirmar o tipo de configuração, deverá executar o comando:

```bash
iptables -L
```

Para mais informações sobre iptables, consulte o nosso [guia dedicado](../../dedicated/firewall-iptables/).

Recomendamos que crie e adapte regras de firewall à sua utilização. Para mais informações sobre as várias operações, consulte a documentação oficial da distribuição utilizada.

### Instalar o Fail2ban

Fail2ban é um framework de prevenção contra as intrusões cujo objetivo é bloquear os endereços IP a partir dos quais bots ou atacantes tentam penetrar no seu sistema.<br>
Este pacote é recomendado, ou mesmo indispensável em certos casos, para proteger o seu servidor contra ataques do tipo *Brute Force* ou *Denial of Service*.

Para instalar o pacote de software, utilize o seguinte comando:

```bash
sudo apt install fail2ban
```

Pode personalizar os ficheiros de configuração Fail2ban para proteger os serviços expostos à Internet pública contra as tentativas de ligações repetidas.

Como recomendado pelo Fail2ban, crie um ficheiro de configuração local dos seus serviços copiando o ficheiro "jail.conf":

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

A seguir, abra o ficheiro com um editor de texto:

```bash
sudo nano /etc/fail2ban/jail.local
```

Leia as informações no topo do ficheiro, nomeadamente as observações em `[DEFAULT]`.

Os parâmetros `[DEFAULT]` são globais e aplicar-se-ão a todos os serviços definidos para serem ativados (`enabled`) neste ficheiro. 

É importante saber que os parâmetros globais só serão tidos em conta se não existirem valores diferentes definidos nas secções de serviços (`JAILS`) mais abaixo do ficheiro.

Tomemos como exemplo estas linhas em `[DEFAULT]`:

```console
bantime  = 10m
maxretry = 5
enabled = false
```

Isto significa que um endereço de IP a partir do qual um host tenta conectar-se será bloqueado durante dez minutos após a quinta tentativa de abertura de sessão falhada.<br>
Além disso, todos os parâmetros especificados pela `[DEFAULT]` e nas secções seguintes permanecem desativados, exceto se a linha `enabled = true` for adicionada para um serviço (listada abaixo `# JAILS`).

A título de exemplo de utilização, o facto de ter as seguintes linhas na secção `[sshd]` só ativará restrições para o serviço OpenSSH:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

Neste exemplo, se uma tentativa de ligação SSH falhar três vezes em cinco minutos, o período de interdição dos IP será de 30 minutos.

Pode substituir "ssh" pelo número de porta real se o alterou.

A melhor abordagem consiste em ativar o Fail2ban apenas para os serviços que são realmente executados no servidor. Cada parâmetro personalizado adicionado sob `# JAILS` será então prioritário relativamente aos valores predefinidos.

Depois de finalizar as suas modificações, registe o ficheiro e feche o editor.

Reinicie o serviço para se certificar de que ele é executado com as personalizações aplicadas:

```bash
sudo service fail2ban restart
```

Fail2ban dispõe de numerosos parâmetros e filtros de personalização, bem como de opções pré-definidas, por exemplo quando deseja adicionar uma camada de proteção a um servidor web Nginx.

Para mais informações e recomendações sobre o Fail2ban, não hesite em consultar [a documentação oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} desta ferramenta.

### Configuração da Network Firewall OVHcloud 

As soluções da OVHcloud incluem a possibilidade de ativar uma firewall no ponto de entrada da infraestrutura, designada Network Firewall. Uma configuração correta desta firewall permite bloquear as ligações antes mesmo que estas cheguem ao seu servidor.

Consulte o guia "[Configurar a Network Firewall](../../dedicated/firewall-network/)" se desejar ativá-la.

### Proteger o sistema e os dados

O conceito de segurança não se limita à proteção de um sistema contra ataques.

A segurança dos seus dados é um elemento chave. É por isso que a OVHcloud oferece-lhe várias opções de backup enquanto serviços:

- A opção `Snapshot` que lhe permite criar uma imagem manual.
- A opção de `Backup automático` permite-lhe conservar os backups regulares do seu VPS (à exceção dos discos suplementares).

Na [página do produto](https://www.ovhcloud.com/pt/vps/options/) e nos respetivos [guias](../), poderá encontrar todas as informações sobre as soluções de backup disponíveis para o seu serviço.

## Quer saber mais?

[VPS: primeira utilização](../instalar-gerir-vps/) 

[Configurar a Network Firewall](../../dedicated/firewall-network/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

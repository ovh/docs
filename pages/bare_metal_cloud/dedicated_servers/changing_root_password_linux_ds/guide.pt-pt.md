---
title: "Configuração das contas utilizadores e do acesso root num servidor"
excerpt: "Descubra como começar a administrar corretamente contas de utilizadores num sistema operativo GNU/Linux"
updated: 2024-02-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Um servidor dedicado ou um VPS OVHcloud fazem-lhe beneficiar de um "**acesso root**" ao seu serviço. Simplificando, você é o administrador do sistema com o nível de permissão mais alto.

Mesmo que o servidor não seja utilizado para fins que requeiram a administração de utilizadores reais, a gestão das **contas utilizadores** é um assumpto ligado à segurança que não deve ser subestimado. Este guia fornece instruções básicas para iniciar os seguintes tópicos:

- Como configurar contas de utilizadores do sistema com diferentes níveis de autorização
- As boas práticas para gerir o acesso ao seu servidor e executar comandos com permissões elevadas


## Requisitos

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) ou um [VPS](https://www.ovhcloud.com/pt/vps/) com um sistema operativo Linux na sua conta OVHcloud
- Ter acesso a credenciais de início de sessão que recebeu por correio eletrónico após a instalação.

## Instruções

Os exemplos seguintes assumem que está ligado ao seu servidor via SSH.<br>
Para obter instruções mais detalhadas sobre este assumpto, consulte o guia "[Primeiros passos com SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

Não se esqueça de consultar também os nossos guias de primeiros passos:

- Para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para um [servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para um [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que recorra a um [fornecedor especializado](/links/partner) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

> [!primary]
>
> As instruções deste manual baseiam-se num sistema operativo de servidor Debian/Ubuntu e não são exaustivas. Os exemplos abaixo destinam-se a fornecer um ponto de partida e a ajudar a prevenir falhas de segurança facilmente exploráveis. Com conhecimentos de base de gestão de contas de utilizadores e das boas práticas associadas, pode ir mais longe com os tópicos mais pertinentes para o seu caso de utilização.
>
> Recomendamos que consulte as **páginas do Manual do sistema** para cada encomenda que efetua. Você pode fazer isso a partir da linha de comando, inserindo `man` seguido de um nome de comando, função ou arquivo do sistema.
>

### Índice

- [Gestão de Contas de Utilizadores](#accounts)
    - [Criação de uma conta de utilizador não privilegiada](#unprivileged)
    - [Criação de uma conta de utilizador com privilégios root](#privileged)
    - [Execução de comandos como administrador ("sudo")](#sudo)
    - [Desativação da conta de utilizador](#disable)
    - [Ativação da conta de utilizador](#enable)
    - [Eliminação de uma conta de utilizador](#delete)
    - [Mudança de Conta de Utilizador](#switch)
    - [Mudar para a conta "root" ("root shell")](#rootshell)
- [Ativação da ligação do utilizador "root"](#enableroot)
    - [Ativar conta "root"](#rootstep1)
    - [Editar ficheiro "sshd_config"](#rootstep2)
    - [Restarting the SSH service](#rootstep3)


<a name="accounts"></a>

### Gestão das contas dos utilizadores

Tenha em conta que as políticas de segurança dos servidores podem ser adaptadas a diferentes casos de utilização e ambientes de utilizador. As etapas descritas abaixo oferecem explicações básicas sobre a gestão das contas de utilizadores, com ênfase na conveniência e segurança, não têm valor de validade universal.

Após uma nova instalação do seu servidor (com um template OVHcloud), comece nestas condições:

- É criada uma conta de utilizador com autorizações elevadas, cujo nome tem por base o sistema operativo, por exemplo "ubuntu", "rocky", etc.
- Recebeu a palavra-passe inicial desta conta através de uma mensagem de correio eletrónico de instalação.
- Pode utilizar um cliente SSH para se ligar ao servidor com estas informações de identificação.

A linha de comandos após a conexão varia em função do seu tipo de serviço e da distribuição instalada. Por exemplo: 

```text
ubuntu@ns9356771:~$
```

Tenha em conta que os exemplos de linha de comandos seguintes continuarão a utilizar "ubuntu" para fazer referência ao `user account` pré-configurado.

Pode verificar que esta conta já foi adicionada ao `sudo group` na saída desta encomenda:

```bash
id
```

```text
27(sudo)
```

Você também pode digitar "groups" para ver apenas os grupos que têm a conta atual como membro.

Isto significa que o utilizador com o qual está atualmente ligado pode executar todos os comandos fazendo-os preceder o comando `sudo` (`root privileges`). Pode encontrar mais informações na [subparte de guia correspondente, abaixo](#sudo).

> [!primary]
> 
> **Definição de termos**
> 
> Para efeitos deste guia, aplicam-se as seguintes definições:
> 
> - `administrator`: pessoa autorizada a executar todos os comandos num servidor (administrador do servidor).
> - `sudo user`: conta de utilizador utilizada por um administrador. Esta conta é membro do `sudo group`. Outros recursos de conhecimento e tutoriais podem dar uma etiqueta diferente a um tal utilizador, por exemplo, `sudoer`, `superuser`, `root user`, `admin`, etc.
> - `sudo group`: o `user group` com as permissões necessárias para executar todos os comandos num servidor (`root privileges`, cujos detalhes são definidos pela política de segurança do sistema operativo).
> - `user group` / `group`: unidade técnica que compartimenta os `user account` para a gestão da segurança.
> - `root` / `root user` / `root account`: conta de utilizador com `root privileges` existente por defeito nos sistemas GNU/Linux e utilizado para fins específicos.
>
> Para conhecer os detalhes e os parâmetros que se aplicam ao seu sistema, pode começar pelas páginas `man` para `sudo` e `sudoers`.
>

<a name="unprivileged"></a>

#### Criação de uma conta de utilizador não privilegiada

Mesmo que não precise de conceder acesso ao servidor a outras pessoas, a criação de uma conta de utilizador sem autorizações especiais (também chamada `normal user` ou `regular user`) pode ser útil para fins de segurança. Por exemplo, não há risco de danos acidentais ao sistema, eliminando ou alterando os arquivos de configuração do servidor ao executar comandos ou processos de uma conta de usuário sem permissões elevadas.

Outro exemplo de boa prática consiste em criar uma conta de utilizador dedicada a uma aplicação alojada no seu servidor. Mesmo que a conta de utilizador seja comprometida por esta aplicação, a ausência de permissões elevadas evitará danos maiores.

Criar uma nova conta de utilizador (substitua `username` pelo nome real da conta de utilizador, por exemplo, o nome de uma aplicação):

```bash
sudo adduser username
```

Tem de fornecer uma palavra-passe para a nova conta. De seguida, ser-lhe-á pedido que indique os detalhes do novo utilizador, o que não é obrigatório.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Nota: Numa distribuição GNU/Linux, **uma linha de comandos de palavra-passe não apresenta as suas entradas de teclado**.

- Páginas `man` pertinentes: `adduser`, `useradd`

<a name="privileged"></a>

#### Criação de uma conta de utilizador com privilégios root

Nesta secção, é criada uma nova conta de utilizador para um `administrator` e são concedidas autorizações elevadas no servidor (`root privileges`).

Criar uma nova conta de utilizador (substitua `username` pelo nome real da conta de utilizador):

```bash
sudo adduser username
```

Adicionar a nova conta de utilizador ao `sudo group`:

```bash
sudo usermod -aG sudo username
```

Pode verificar a associação ao `group` com o seguinte comando: 

```bash
groups username
```

Exemplo:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

A nova conta de utilizador é agora um `sudo user` e pode executar todos os comandos.

Esta configuração está configurada de forma predefinida para o `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Estas configurações podem ser encontradas, respetivamente, em `/etc/sudoers` e no diretório `/etc/sudoers.d`.


> [!primary]
>
> A boa gestão do utilizador, incluindo a forma como os utilizadores são autenticados, depende do ambiente de trabalho e de outros fatores. Se necessitar de gerir contas de utilizadores e grupos num servidor, consulte a documentação oficial do sistema operativo e as bases de dados de conhecimentos adequadas.
>

<a name="sudo"></a>

#### Execução de comandos como administrador ("sudo")

Qualquer ação que exija autorizações elevadas será rejeitada, a menos que o comando `sudo` seja utilizado.

Por exemplo, para alterar uma palavra-passe para **qualquer conta de utilizador**, escreva `sudo passwd` seguido pelo `username`:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

O sistema irá pedir-lhe frequentemente a palavra-passe de `sudo user` ao qual está ligado aquando da execução de `sudo`.

- Páginas `man` pertinentes: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Desativação da conta de utilizador

Para desativar um `user account`, introduza:

```bash
sudo passwd -dl username
```

Esta alteração irá bloquear a conta (impedindo-a de aceder com uma palavra-passe) e defini-la como "*passwordless*", o que irá desativar a conta.

<a name="enable"></a>

#### Ativação da conta de utilizador

Para reativar um `user account` bloqueado sem palavra-passe, utilize os seguintes comandos (substitua `initialpassword` por uma palavra-passe temporária):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Por razões de segurança, altere novamente a palavra-passe inicial deste utilizador:

```bash
sudo passwd username
```

- Páginas `man` pertinentes: `passwd`, `usermod`

<a name="delete"></a>

#### Eliminação de uma conta de utilizador

Um método simples para eliminar uma conta e os seus ficheiros é o seguinte comando:

```bash
sudo userdel -r -f username
```

- Páginas `man` pertinentes: `userdel`, `deluser`

<a name="switch"></a>

#### Alteração da conta de utilizador

Como `sudo user`, pode migrar para qualquer outra conta de utilizador (sem saber a palavra-passe):

```bash
sudo su username
```

A sua linha de comandos será alterada em conformidade:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Para voltar à sua conta de utilizador anterior, mude novamente ou utilize `exit`.

<a name="rootshell"></a>

#### Migrar para a conta "root" ("root shell")

Após uma nova instalação do seu servidor (com um template OVHcloud), pode utilizar-se o `root account` (conta de utilizador denominada `root`), mas não tem uma palavra-passe.

Por razões de segurança, o `root account` só deve ser utilizado quando é necessário e **só pode ser acedido a partir do próprio sistema**.

Pode passar para o `root account` com o seguinte comando:

```bash
sudo -s
```

A sua linha de comandos será alterada em conformidade:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

O caractere `#` no final do prompt de comando indica um `root shell`, em oposição a um prompt que termina com `$`.

Utilize o seguinte comando para voltar à conta de utilizador anterior:

```bash
exit
```

**A execução de comandos como `root user` não é geralmente necessária e pode até ser contraproducente.**

Uma ideia falsamente difundida é a hipótese de que deve utilizar o verdadeiro `root account` para executar comandos que requerem autorizações elevadas (`root privileges`) num sistema.

No entanto, tal como configurado por defeito na política `/etc/sudoers`, o nível de autorização de `root` é idêntico ao do `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Tenha em conta que os tutoriais e a documentação do utilizador podem nem sempre seguir uma terminologia coerente. A menos que tenha verificado que a utilização do `root account` real é necessária para a ação prevista, a melhor prática é executar comandos `sudo` em vez. A manipulação dos ficheiros e dos parâmetros enquanto `root` pode ter consequências inesperadas para o sistema.
>

<a name="enableroot"></a>

### Ativação da ligação do utilizador "root"

> [!warning]
>
> Permitir que o `root account` se ligue em SSH é considerado uma falha de segurança e não é portanto recomendado.
>
> Primeiro tome as medidas necessárias para proteger o seu sistema com a ajuda dos nossos guias: 
>
> - [Tornar seguro um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [Tornar seguro um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

#### Etapa 1: ativar a conta "root"

Introduza o seguinte comando e, em seguida, forneça uma palavra-passe:

```bash
sudo passwd root
```

Pode anular esta ação indicando:

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

#### Etapa 2: editar o ficheiro "sshd_config"

Utilize um editor de texto tal como `vim` ou `nano` para editar este ficheiro de configuração:

```bash
sudo nano /etc/ssh/sshd_config
```

Pode encontrar a seguinte linha:

```text
#PermitRootLogin prohibit-password
```

O caractere inicial `#` transforma toda a linha em uma sequência de "comentário" e, portanto, é ignorado por qualquer aplicativo que lê o arquivo.

Isto significa que, se não houver outras instruções, a ligação à conta de utilizador `root` é **não ativada**.

Adicione a seguinte linha:

```text
PermitRootLogin yes
```

Isto permitirá que se ligue ao servidor com `root` e a respetiva palavra-passe.

Salve o arquivo e saia do editor. Para revogar este tipo de acesso, repita os passos e elimine a linha.

<a name="rootstep3"></a>

#### Etapa 3: reiniciar o serviço SSH

Reinicie o serviço SSH com um dos seguintes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Tal deverá ser suficiente para aplicar as alterações. Caso contrário, reinicie o servidor a partir da linha de comandos (`sudo reboot`).


## Quer saber mais?

[Proteger um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
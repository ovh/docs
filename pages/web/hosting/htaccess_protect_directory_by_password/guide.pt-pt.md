---
title: "Tutorial - Proteger um diretório ou a interface de administração do seu website por ficheiros .htaccess e .htpasswd"
excerpt: "Descruba como proteger um diretório ou o acesso à administração do seu website através de uma autenticação com os ficheiros .htaccess e .htpasswd"
updated: 2023-06-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 01/06/2023**

## Objetivo

Este tutorial explica como implementar uma autenticação "utilizador/palavra-passe" para aceder a todo ou parte do seu website através de um browser. 

Isto utilizando dois ficheiros de configuração (HTTP) Apache que pretende colocar no [espaço FTP](/pages/web/hosting/ftp_connection) do seu alojamento Web: 

- "**.htaccess**": para mais informações sobre as funcionalidades deste ficheiro, consulte o nosso tutorial sobre as ["Operações possíveis com um ficheiro ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**": para além deste tutorial, consulte a [documentação oficial Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a este ficheiro.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>
> Os exemplos que se seguem são implementados em ficheiros denominados ".htaccess" e ".htpasswd". Atenção, as regras que define nestes ficheiros têm consequências diretas no seu website. Verifique sempre as regras que adicionou antes de as aplicar ao seu website. 
> 

**Descubra como proteger um diretório ou o acesso à parte administrador do seu website através de uma autenticação com os ficheiros ".htaccess" e ".htpasswd".**

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor de credenciais de acesso ao [espaço FTP do seu alojamento](/pages/web/hosting/ftp_connection).

## Instruções

> [!primary]
>
> A solução de segurança aqui proposta é apenas uma possibilidade técnica entre outras. 
>
> Tenha em conta, por exemplo, que se utilizar um **C**ontent **M**anagement **S**ystem (**CMS**), existem outras soluções de segurança.
>
> Se utilizar um CMS Wordpress, a OVHcloud também disponibiliza um tutorial sobre como [utilizar o ficheiro htaccess com WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> Para qualquer questão relativa à criação, utilização ou programação do seu website, o suporte da OVHcloud não poderá ajudá-lo nestas questões.
>
> Para isso, contacte a nossa [comunidade de utilizadores](https://community.ovh.com/en/) ou os nossos [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
>

Vamos explicar-lhe as 4 etapas principais a realizar para proteger o acesso a um diretório ou a totalidade ou parte do seu website:

- Criar ficheiros "crypt.php", "htaccess" e "htpasswd";
- Gerar palavras-passe encriptadas com o ficheiro "crypt.php";
- Definir utilizadores e passwords encriptados com o ficheiro ".htpasswd";
- Configurar regras no ficheiro ".htaccess" e suprimir o ficheiro "crypt.php".

> [!warning]
>
> Os passos que se seguirão irão otimizar a segurança dos seus dados alojados.
> Assim, e se os seus websites forem compatíveis, recomendamos vivamente que utilize a versão de PHP mais recente possível.
> 
> Para alterar a versão de PHP dos seus websites no seu alojamento web, consulte os seguintes guias:
> 
> - [Alterar a configuração do alojamento web](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [Mudar a versão de PHP do alojamento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)
>
> De facto, os scripts e informações descritas abaixo neste tutorial apenas funcionam com um ambiente de execução e uma versão PHP recente.
> 
> Caso contrário, recomendamos que otimize o seu website para o tornar compatível antes de implementar o que se segue. Isto reduzirá ainda mais os riscos de pirataria de dados através de falhas de segurança.
>

### Etapa 1: criar os ficheiros "crypt.php", "htaccess" e "htpasswd"

Ligue-se ao [espaço de armazenamento FTP](/pages/web/hosting/ftp_connection) do seu alojamento web. Abra a ["pasta raiz"](/pages/web/hosting/multisites_configure_multisite) para a qual aponta o seu domínio.

Crie um ficheiro "crypt.php" nesta "pasta raiz".

![root_folder](images/root_folder.png){.thumbnail}

Abra ou crie a pasta destinada a ser protegida do seu website. No nosso exemplo, trata-se do dossier "admin". Crie neste diretório um ficheiro ".htpasswd" e um ficheiro ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

Para utilizar corretamente os ficheiros ".htaccess" e ".htpasswd", deve conhecer e respeitar as seguintes regras: 

- **um único** ficheiro ".htaccess" e **um único** ficheiro ".htpasswd" por diretório ou sub-diretório, para evitar os conflitos entre diferentes ficheiros ".htaccess" e diferentes ".htpasswd";
- os ficheiros ".htaccess" e ".htpasswd" são invisíveis para os internautas que visitam o seu website;
- as regras declaradas num ficheiro ".htaccess" aplicam-se a todo o diretório onde o ficheiro ".htaccess" está instalado, bem como a todos os subdiretórios desse mesmo diretório;
- os ficheiros ".htpasswd" e ".htaccess" podem estar em pastas diferentes. Apenas pode ser utilizado um ficheiro ".htpasswd" para vários ".htaccess".

### Etapa 2 : completar o ficheiro "crypt.php"

Volte para a pasta raiz onde criou o ficheiro "crypt.php". Clique em `Editer`{.action} e coloque as seguintes linhas:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Substitua apenas `plain_text_password` pela palavra-passe **em claro** que deseja encriptar.

**Pode adaptar o script em função do número de palavras-passe que deseja encriptar.**

- Exemplo em que o script PHP vai encriptar 3 palavras-passe numa única operação:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Substitua apenas `plain_text_password1`, `plain_text_password2` e `plain_text_password3` pelas palavras-passe **em claro** que deseja encriptar.

> [!primary]
>
> Os dois scripts acima utilizam, na data, o método de encriptação mais seguro com recurso ao algoritmo **bcrypt** recomendado pelo Apache.
>
> Para mais informações sobre o assumpto, consulte a [documentação oficial Apache](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Se dispõe de um alojamento [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), aceda em [SSH](/pages/web/hosting/ssh_on_webhosting) ao seu alojamento web. Desça à "**pasta raiz**" onde está o script "crypt.php".

Para isso, utilize o seguinte comando SSH:

```bash
cd Name_of_your_root_folder
```

Substitua `Name_of_your_root_folder` pelo nome da sua "pasta raiz" para descer onde fica o script "crypt.php".

Se, por exemplo, o seu ficheiro "crypt.php" estiver numa subpasta da sua "pasta raiz", utilize o seguinte comando SSH:

```bash
cd Name_of_your_root_folder/sub_folder
```

Substitua `Name_of_your_root_folder` pelo nome da sua "pasta raiz" e `sub_folder` pela sub-pasta onde está o script "crypt.php".

Quando estiver presente no nível onde está o script "crypt.php", execute o seguinte comando:

```bash
php crypt.php
```

> [!warning]
>
> Por razões de segurança, recomenda-se a utilização de SSH. No entanto, se dispõe de uma oferta **Starter** ou [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) em que o SSH está indisponível, também pode executar o ficheiro "crypt.php" através do seu browser.
>
> Para isso, introduza o seguinte URL: `https://domain.tld/crypt.php` para alterar o seu `domain.tld`. Isto diretamente na barra de endereço do seu browser.
>

Obtenha as palavras-passe encriptadas **sem copiar** para "&#60;br />" se executar o comando "*php crypt.php*" em SSH:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Os valores `encrypted_password1`, `encrypted_password2` e `encrypted_password3` devem ser semelhantes, por exemplo, ao formato da seguinte linha:

```text
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Verifique apenas que a(s) sua(s) palavra(s)-passe(s) encriptada(s) começa(m) bem por `$2y$`. Confirmar-lhe-á que a(s) sua(s) password(s) foi(foram) encriptada(s) com o algoritmo seguro **bcrypt**.

### Etapa 3 : definir os utilizadores e as palavras-passe encriptadas com o ficheiro ".htpasswd"

O ficheiro ".htpasswd" contém as palavras-passe numéricas correspondentes a cada um dos utilizadores declarados no ficheiro. Apenas estes utilizadores poderão aceder ao diretório cujo acesso pretende proteger.

Para isso, para **cada utilizador**, inscreva uma linha que indica o seu ID de utilizador e a sua palavra-passe encriptada:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Substitua os valores `user1`, `user2` e `user3` do nosso exemplo pelos seus próprios nomes de utilizadores.

Substitua também os `encrypted_password1`, `encrypted_password2` e `encrypted_password3` pelas suas palavras-passe predefinidas.

### Etapa 4 : configurar as regras no ficheiro ".htaccess"

#### Bloquear o acesso a um diretório completo

No diretório a proteger, crie um ficheiro ".htaccess" com o seguinte código:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

No script acima, substitua os seguintes elementos pelos seus próprios valores:

- `"Indicates your login(s)"`: corresponde ao(s) utilizador(es) autorizado(s) a aceder ao diretório completo. Se tiver vários utilizadores, separe-os apenas por um *espaço*.
- `your_ftp_login`: o login FTP que utiliza para se ligar ao seu espaço de armazenamento FTP. Para obter o seu login FTP, consulte o nosso guia sobre a [ligação ao seu espaço FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: caminho de acesso diretório desde a raiz FTP do seu alojamento web até ao ficheiro ".htpasswd" que deve ser utilizado para autenticar os utilizadores autorizados pela regra presente no seu ficheiro ".htaccess".

#### Bloquear o acesso a um ou vários ficheiros

Para bloquear o acesso a um ou vários ficheiros precisos, adicione uma [Direction "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} no ficheiro ".htaccess":

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

No script acima, substitua os seguintes elementos pelos seus próprios valores:

- `test.php`: nome do ficheiro específico ou grupo de ficheiros contendo, no nosso exemplo, o termo **test.php** (termo ao qual a restrição de acesso deve ser aplicada).
- `"Indicates your login(s)"`: corresponde ao(s) utilizador(es) autorizado(s) a aceder aos ficheiros cujos nomes contêm **test.php**. Se tiver vários utilizadores, separe-os por um *espaço*.
- `your_ftp_login`: o login FTP que utiliza para se ligar ao seu espaço de armazenamento FTP. Para obter o seu login FTP, consulte o nosso guia sobre a [ligação ao seu espaço FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: caminho de acesso diretório da raiz FTP do seu alojamento web até ao ficheiro ".htpasswd" que deve ser utilizado para autenticar os utilizadores autorizados pela diretiva do ficheiro ".htaccess".

> [!warning]
>
> Deverá indicar uma [diretiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} para **cada ficheiro** a proteger.
>
> As diretivas "Files" aplicam - se a todos os ficheiros com o mesmo nome ou que terminem com o nome especificado. Isto desde que estejam contidos no mesmo diretório que o ".htaccess" ou num dos seus sub-diretórios.
>
> Na configuração acima indicada, como "new_test.php" contém **test.php** no seu nome, a diretiva "Files" aplicar-se-ia igualmente a um ficheiro "new_test.php" contido num sub-diretório do dossier "admin".
>
> Além disso, enquanto não se autenticou para aceder aos ficheiros abrangidos pela diretiva, estes podem não aparecer e não podem, portanto, ser "listáveis" através de uma página "index of".
>

> [!alert]
>
> Quando terminar a implementação dos seus ficheiros ".htaccess" e ".htpasswd", elimine o ficheiro de encriptação "crypt.php" do seu alojamento web.
>

## Quer saber mais? <a name="go-further"></a>

[Documentação oficial Apache](https://httpd.apache.org/docs/2.4/) {.external}

[Aceder ao espaço FTP do alojamento web](/pages/web/hosting/ftp_connection)

[Tutorial - Operações realizáveis com um ficheiro ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do)

[Bloquear o acesso ao meu website para determinados endereços IP através de um ficheiro .htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Reescrever o URL de acesso ao meu website graças ao mod_rewrite através do ficheiro .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 

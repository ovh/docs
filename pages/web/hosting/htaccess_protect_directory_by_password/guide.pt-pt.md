---
title: "Proteger a interface de administração do seu site com um ficheiro .htaccess"
slug: partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao
excerpt: "Encontre aqui como proteger o acesso à administração do seu site com um ficheiro .htaccess"
section: Reescrita e autenticação
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/09/2021**

## Objetivo

Por vezes, poderá ser necessário proteger o acesso a uma parte do seu site com identificadores. Em particular, poderá implementar um ficheiro ".htaccess" para proteger o acesso à sua interface de administração.

**Saiba como proteger o acesso à parte administrador do seu site através de uma autenticação através de um ficheiro ".htaccess".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#gofurther).
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor das credenciais necessárias para aceder ao espaço [de armazenamento do alojamento](../aceder-espaco-de-armazenamento-ftp-alojamento-web/).

## Instruções

> [!primary]
>
> A solução proposta aqui é apenas uma possibilidade técnica entre outras para implementar um espaço de administrador no seu site. Também pode utilizar a funcionalidade [Módulo 1 clique](../partilhado_guias_dos_modulos_dos_alojamentos_partilhados/) proposta pela [OVHcloud](https://www.ovhcloud.com/pt/).
>
> Para qualquer pedido sobre a criação ou a programação do seu site, contacte a nossa [comunidade de utilizadores](https://community.ovh.com/en/) ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/). Não poderemos proporcionar-lhe assistência técnica.
>

### Etapa 1: criar a arborescência

Ligue-se ao [espaço de armazenamento](../aceder-espaco-de-armazenamento-ftp-alojamento-web/) do seu alojamento. Abra a ["Pasta raiz"](../multisites-configurar-um-multisite-no-meu-alojamento-web/#etapa-21-adicionar-um-dominio-registado-na-ovhcloud) do seu site.<br>
Crie um ficheiro "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Abra ou crie a pasta destinada a conter a parte "admin" do seu site. Crie neste diretório um ficheiro ".htpasswd" e um ficheiro ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> Os ficheiros ".htpasswd" e ".htaccess" podem estar em pastas diferentes. Apenas pode ser utilizado um ficheiro ".htpasswd" para vários ".htaccess".
>
> Os parâmetros definidos por um ficheiro ".htaccess" aplicam-se ao diretório onde está instalado, bem como a todos os seus sub-diretórios.
>

### Etapa 2: completar o ficheiro "crypter.php"

Introduza no ficheiro "crypter.php" criado anteriormente as seguintes linhas (a repetir consoante o número de palavras-passe a gerar):

```php
<?php
$string_1 = crypt('password_não_encriptada_1');
$string_2 = crypt('password_não_encriptada_2');
$string_3 = crypt('password_não_encriptada_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Se dispõe de um alojamento [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), aceda ao seu alojamento em [SSH](../partilhado_o_ssh_nos_alojamentos_partilhados/). Execute o seguinte comando:

```bash
php crypter.php
```

> [!warning]
>
> Por razões de segurança, recomenda-se a utilização de SSH. No entanto, se dispõe de uma oferta [Kimsufi Web](https://www.kimsufi.com/pt/) ou [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) e não deseja passar para uma oferta [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), pode também executar o ficheiro "crypter.php" através do seu browser Web (Ao aceder a um URL do tipo https://o_seu_domíni.ovh/crypter.php).
>
> Para mais informações sobre o método de encriptação das palavras-passe, contacte a nossa [comunidade de utilizadores](https://community.ovh.com/en/) ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/directory/). Não poderemos prestar-lhe assistência técnica.
>

Obtenha as palavras-passe encriptadas (Não copie o "&#60;br />" se executar o comando "php crypter.php" em SSH):

```bash
password_encriptada1
password_encriptada2
password_encriptada3
```

### Etapa 3: completar o ficheiro ".htpasswd"

O ficheiro ".htpasswd" contém a lista dos utilizadores autorizados a ligar-se à interface de administração do seu site e a respetiva palavra-passe encriptada.

Introduza neste ficheiro, para **cada utilizador**, uma linha que indica o seu ID de utilizador e a sua palavra-passe encriptada:

```bash
utilizador1:password_encriptada1
utilizador2:password_encriptada2
utilizador3:password_encriptada3
```

### Etapa 4: preencher o ficheiro ".htaccess"

#### Bloquear o acesso a um diretório completo

No diretório a proteger, crie um ficheiro ".htaccess" com o seguinte código:

```bash
AuthName "Indique o seu identificador de administrador e a sua password"
AuthType Basic
AuthUserFile "/home/o_seu_login_ftp/pasta_raiz/admin/.htpasswd"
Require valid-user
```

> [!warning]
>
> Neste exemplo, é necessário substituir "o_login_ftp" pelo seu [identificador FTP](../aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-recuperar-as-informacoes-de-acesso). Na secção `Alojamentos`{.action}, poderá encontrá-lo no separador `FTP-SSH`{.action} do alojamento correspondente.
>
> Substitua, se necessário, no exemplo abaixo "pasta_raiz" pelo nome da [pasta que contém os ficheiros do seu site](../multisites-configurar-um-multisite-no-meu-alojamento-web/#etapa-21-adicionar-um-dominio-registado-na-ovhcloud).
>

#### Bloquear o acesso a um ou vários ficheiros

Para bloquear o acesso a um ou vários ficheiros precisos adicione uma [diretiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} no ficheiro ".htaccess":

```bash
<Files test.php>

AuthName "Indique os seus identificadores"
AuthType Basic
AuthUserFile "/home/o_seu_login_ftp/pasta_raiz/admin/.htpasswd"
Require valid-user

</Files>
```

> [!warning]
>
> Deverá indicar uma [diretiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} para **cada ficheiro** a proteger.
>
> As diretivas "Files" aplicam-se a todos os ficheiros com o mesmo nome ou que terminem com o nome especificado. Isto desde que estejam contidos no mesmo diretório que o ".htaccess" ou num dos seus sub-diretórios (Na configuração indicada aqui, a diretiva "Files" aplicar-se-ia, por exemplo, a um ficheiro "novo_test.php" contido num sub-diretório do processo "admin").
>

## Quer saber mais? <a name="gofurther"></a>

[Partilhado: Tudo sobre o ficheiro .htaccess](../partilhado_tudo_sobre_o_ficheiro_htaccess/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

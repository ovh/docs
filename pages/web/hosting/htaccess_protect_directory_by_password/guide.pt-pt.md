---
title: "Proteger a interface de administração do seu site com um ficheiro .htaccess"
slug: partilhado-htaccess-como-proteção-lacces-a-um-diretório-por-autenticação
legacy_guide_number: 1968
excerpt: "Encontre aqui como proteger o acesso à administração do seu site com um ficheiro .htaccess"
section: Reescrita e autenticação
---

**Última atualização: 20/09/2021**

## Objetivo

Por vezes, poderá ser necessário proteger o acesso a uma parte do seu site com identificadores. Em particular, poderá implementar um ficheiro ".htaccess" para proteger o acesso à sua interface de administração.

**Saiba como proteger o acesso à parte administrador do seu site através de uma autenticação através de um ficheiro ".htaccess".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#aller-plus-loin)?
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovh.com/fr/hebergement-web/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Dispor das credenciais necessárias para aceder ao espaço [de armazenamento do alojamento](../connexion-espace-stockage-ftp-hebergement-web/).

## Instruções

> [!primary]
>
> A solução proposta aqui é apenas uma possibilidade técnica entre outras para implementar um espaço de administrador no seu site. Também pode utilizar a funcionalidade [Módulo 1 clique](../modules-en-1-clic/) proposta pela [OVHcloud](https://www.ovh.com/fr/).
>
> Para qualquer pedido sobre a criação ou a programação do seu site, contacte a nossa [comunidade de utilizadores](https://community.ovh.com) ou os [parceiros OVHcloud](https://partner.ovhcloud.com/fr/). Não poderemos proporcionar-lhe assistência técnica.
>

### Etapa 1: criar a arborescência

Ligue-se a >
Crie um ficheiro "encripter.php".

![root_folder](images/root_folder.png){.thumbnail}

Abra ou crie a pasta destinada a conter a parte "admin" do seu site. Crie neste diretório um ficheiro ".htpasswd" e um ficheiro ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> Os ficheiros ".htpasswd" e ".htaccess" podem estar em pastas diferentes. Apenas pode ser utilizado um ficheiro ".htpasswd" para vários ".htaccess".
>
> Os parâmetros definidos por um ficheiro ".htaccess" aplicam-se ao diretório onde está instalado, bem como a todos os seus sub-diretórios.
>

### Etapa 2: completar o ficheiro "encriypter.php"

Introduza no ficheiro "crypter.php" criado anteriormente as seguintes linhas (a repetir consoante o número de palavras-passe a gerar):

```php
<?php
$string_1 = crypt('motdepasse_en_clair_1');
$string_2 = crypt('motdepasse_en_clair_2');
$string_3 = crypt('motdepasse_en_clair_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Se dispõe de um alojamento [Pro](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) ou [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml), aceda ao seu alojamento em [SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/). Execute o seguinte comando:

```bash
php crypt.php
```

> [!warning]
>
> Por razões de segurança, recomenda-se a utilização de SSH. No entanto, se dispõe de uma oferta [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml) ou [Perso](https://www.ovh.com/fr/hebergement-web/hebergement-perso.xml) e não deseja passar para uma oferta [Pro](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) ou [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml), pode também executar o ficheiro "crypter.php" através do seu browser Web (Ao aceder a um URL do tipo https://votre-domaine.ovh/crypter.php).
>
> Para mais informações sobre o método de encriptação das palavras-passe, contacte a nossa [comunidade de utilizadores](https://community.ovh.com) ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/fr/). Não poderemos prestar-lhe assistência técnica.
>

Obtenha as palavras-passe encriptadas (Não copie o "<br />" se executar o comando "php crypter.php" em SSH):

```bash
palavra-passe_encriptado1
palavra-passe_encriptado2
palavra-passe_encriptado3
```

### Etapa 3: completar o ficheiro ".htpasswd"

O ficheiro ".htpasswd" contém a lista dos utilizadores autorizados a ligar-se à interface de administração do seu site e a respetiva palavra-passe encriptada.

Introduza neste ficheiro, para **cada utilizador**, uma linha que indica o seu ID de utilizador e a sua palavra-passe encriptada:

```bash
utilizador1:palavra-passe_encriptado1
utilizador2:motdépasse_encriptado2
utilizador3:motdepasse_encriptado3
```

### Etapa 4: preencher o ficheiro ".htaccess"

#### Bloquear o acesso a um diretório completo

No diretório a proteger, crie um ficheiro ".htaccess" com o seguinte código:

```bash
AuthName "Indique o seu identificador de administrador e a sua password"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Pedido válido-user
```

> [!warning]
>
> Neste exemplo, é necessário substituir "o_login_ftp" pelo seu [identificador FTP](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter). Na secção `Alojamentos`{.action}, poderá encontrá-lo no separador `FTP-SSH`{.action} do alojamento correspondente.
>
> Substitua, se necessário, no exemplo abaixo "pasta_raiz" pelo nome da [pasta que contém os ficheiros do seu site](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud).
>

#### Bloquear o acesso a um ou vários ficheiros

Para bloquear o acesso a um ou vários ficheiros precisos adicione uma [diretiva "Files"](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} no ficheiro ".htaccess":

```bash
<Files test.php>

AuthName "Indique os seus identificadores"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Pedido válido-user

</Fios>
```

> [!warning]
>
> Deverá indicar uma [diretiva "Files"](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} para **cada ficheiro** a proteger.
>
> As diretivas "Files" aplicam-se a todos os ficheiros com o mesmo nome ou que terminem com o nome especificado. Isto desde que estejam contidos no mesmo diretório que o ".htaccess" ou num dos seus sub-diretórios (Na configuração indicada aqui, a diretiva "Files" aplicar-se-ia, por exemplo, a um ficheiro "novo_test.php" contido num sub-diretório do processo "admin").
>

## Quer saber mais? <a name="aller-plus-loin"></a>

[Tudo sobre o ficheiro .htaccess](../mutualise-tout-sur-le-fichier-htaccess/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/fr/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/>.

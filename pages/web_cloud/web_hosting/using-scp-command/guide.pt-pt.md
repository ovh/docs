---
title: "Alojamento Web - Copiar ficheiros com o comando SCP"
excerpt: "Saiba como utilizar o comando Secure Copy Protocol (SCP) em SSH para copiar ficheiros de ou para o seu alojamento web"
updated: 2024-01-30
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O Secure Copy Protocol (SCP) permite a cópia segura (através do protocolo SSH) de dados entre dois dispositivos. Pode assim copiar conteúdos:

- presente localmente a partir do seu computador para um dispositivo remoto;
- um dispositivo remoto para o computador;
- de um servidor para outro servidor (indisponível entre dois alojamentos web da OVHcloud).

Permite, a partir de um terminal e graças a um comando Linux, copiar um ficheiro ou uma pasta que contenha um ou vários ficheiros.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção ["Ir mais longe"](#go-further) deste guia.
>

**Saiba como utilizar o comando Secure Copy Protocol (SCP) em SSH para copiar ficheiros de ou para o seu alojamento web.**

## Requisitos

- Dispor de um terminal compatível com os comandos Linux e SSH (por exemplo, o *terminal* do MacOS ou o emulador *Ubuntu* no Windows)
- Estar familiarizado com os comandos Linux e SSH
- Ter um serviço de [alojamento web](/links/web/hosting) com acesso em SSH
- Ter acesso à sua [Área de Cliente OVHcloud](/links/manager){.external}

## Instruções

Este guia explica de forma não exaustiva as funcionalidades disponíveis com o comando `scp`. Não hesite em trocar impressões com nossa [comunidade de utilizadores](/links/community). se desejar aprofundar os seus conhecimentos sobre esta encomenda.

### Etapa 1 - Recuperar os acessos SSH do seu alojamento web

Para encontrar os acessos SSH do seu alojamento web, consulte o guia "[Utilizar o acesso SSH do alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".

### Etapa 2 - Recuperar o caminho completo para o espaço de armazenamento FTP do seu alojamento web<a name="step2"></a>

Abra o seu terminal e ligue-se ao seu alojamento web em SSH.

Depois de aceder ao alojamento web em SSH, execute o seguinte comando: 

```ssh
cd ..
```

Valide o comando através da tecla `enter`(↲) do seu teclado e insira o seguinte comando:

```ssh
ls
```

Valide este segundo comando através da tecla `enter`(↲) do seu teclado.

No seu terminal, aparecerá um resultado semelhante ao seguinte:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

No nosso exemplo:

- `FTP-login` : nome de um dos utilizadores FTP (principal ou não) do seu alojamento web.
- `/homez.XXX`: *filer* no qual se encontra o seu alojamento web.
- `FTP-main-login`: caminho diretório do espaço de armazenamento FTP do seu alojamento web. Este diretório é geralmente nomeado de forma idêntica ao login FTP principal do seu alojamento web.

No nosso exemplo, o caminho completo de acesso ao espaço de armazenamento FTP para aceder à raiz FTP do alojamento web é o seguinte: `/homez.XXX/FTP-main-login`.

Só a partir de um diretório equivalente ao diretório `FTP-main-login` do nosso exemplo poderá utilizar o comando `scp`.

Quando se liga de forma clássica ao espaço FTP de um alojamento web, a ligação efetua-se diretamente posicionando-se no interior da pasta equivalente à pasta `FTP-main-login` do nosso exemplo.

É a este nível que se encontra, por predefinição, a pasta `www` e o ficheiro `.ovhconfig` do seu alojamento web.

### Etapa 3 - Utilizar o comando "scp" com o seu alojamento web

> [!success]
>
> Todos os comandos abaixo são efetuados a partir do terminal do seu dispositivo/computador **localmente**. Por isso, não deve estar conectado ao seu terminal no alojamento web.
>
> O caminho de acesso ao ficheiro utilizado com o comando `scp` diz respeito ao diretório local corrente. Para transferir dados para o seu alojamento web ou alojamento web para o seu dispositivo local, certifique-se de que executa os seus comandos a partir do diretório pai local, tal como indicado nos exemplos abaixo.
>

Não se esqueça de substituir todas as seguintes definições gerais pelos seus próprios parâmetros:

- `FTP-login`: login FTP do seu alojamento web.
- `ssh.cluster0XX.hosting.ovh.net`: substitua os `XX` pelo número do cluster onde se encontra o seu alojamento web. Se necessário, consulte o guia "[Utilizar o acesso SSH do alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)" para encontrar esta informação.
- `/homez.XXX/FTP-main-login/` : altere os `XXX` pelo número do *filer* e o `FTP-main-login` pelos parâmetros recuperados durante a [etapa 2](#step2) deste guia.
- "source_folder" : nome da pasta de origem para copiar ou na qual se encontra o ficheiro a copiar. *Se a árvore corresponder a uma sucessão de pastas aninhadas, será preciso especificar todos os nomes das pastas separando-as por `/`*.
- "target_folder" : nome da pasta de destino que irá receber a pasta ou o ficheiro local que pretende copiar. *Se a árvore corresponder a uma sucessão de pastas aninhadas, será preciso especificar todos os nomes das pastas separando-as por `/`*.
- `file`: nome do ficheiro a copiar através do comando `scp`. Não se esqueça também de especificar a extensão deste ficheiro (exemplos: *.html*, *.css*, *.php*, *.txt*, etc.).

#### Copiar conteúdo presente localmente no seu dispositivo para o seu alojamento web

Para copiar um único ficheiro local para o seu alojamento web, utilize o comando seguinte:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Para copiar uma pasta local bem como a integralidade do seu conteúdo para o seu alojamento web, utilize o seguinte comando:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Copiar conteúdo presente no seu alojamento web para o seu dispositivo local

Para copiar um único ficheiro presente no seu alojamento web para o seu dispositivo local, utilize o comando seguinte:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Para copiar uma pasta presente no seu alojamento web, assim como a integralidade do seu conteúdo para o seu dispositivo local, utilize o seguinte comando:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Copiar conteúdo presente no seu alojamento web da OVHcloud para outro alojamento web da OVHcloud

Por razões de segurança, o comando `scp` é, à data, recusado em SSH pela infraestrutura de alojamentos web da OVHcloud quando dois alojamentos web tentam copiar conteúdos entre si.

### Etapa 4 - Certifique-se de que o conteúdo foi copiado com êxito

Para verificar se algum conteúdo presente localmente no seu computador foi copiado para o alojamento web, pode [aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection) e, de seguida, dirigir-se ao diretório de destino onde o conteúdo é suposto ser copiado.

Para verificar se algum conteúdo do seu alojamento web foi copiado localmente para o computador, aceda ao diretório de destino no dispositivo/computador e verifique se o conteúdo que pretende copiar está presente.

## Quer saber mais? <a name="go-further"></a>

[Utilizar o acesso SSH do alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Ligar-se ao espaço de armazenamento FTP do seu alojamento web](/pages/web_cloud/web_hosting/ftp_connection)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).
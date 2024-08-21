---
title: "Utilizar SVN"
excerpt: "Saiba como utilizar o SVN em SSH no seu alojamento web"
updated: 2023-12-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

SVN, que é a abreviação de "subversion", é um sistema de gestão de versões. 

**Saiba como utilizar o SVN em SSH no seu alojamento web**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "[Quer saber mais?](#go-further)" deste guia.
> 

## Pré-requisitos

- Ter um [plano de alojamento web](/links/web/hosting) que permite uma ligação SSH (**a partir da oferta Pro**)
- Aceder via SSH ao seu alojamento Web (pode consultar o nosso guia [Utilizar o acesso SSH do alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting))

## Instruções

### Criação do depósito

Depois de aceder ao [SSH no seu alojamento](/pages/web_cloud/web_hosting/ssh_on_webhosting), crie a pasta raiz dos depósitos SVN e, a seguir, o depósito.

Para isso, basta introduzir o comando:

```bash
mkdir svn
```

e

```bash
svnadmin create svn/depot_test
```

De seguida, pode verificar que os diretórios foram criados com o comando:

```bash
ls -la
```

Deve obter os diretórios conforme indicado na seguinte imagem:

![alojamento](/pages/assets/screens/other/web-tools/terminal/terminal-ls-la-svn.png){.thumbnail}

### Criação das chaves públicas / privadas

Antes de prosseguir, terá de criar um par de chaves SSH a partir do posto que utiliza para se ligar ao depósito SVN.

Sugerimos que siga o guia [Criar chaves SSH](/pages/public_cloud/compute/public-cloud-first-steps#1o-passo-criacao-de-chaves-ssh). Neste guia, não é necessário seguir o passo [Importar a chave SSH para a Área de Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#1o-passo-criacao-de-chaves-ssh/#como-importar-a-sua-chave-ssh-para-a-area-de-cliente-ovh).

### Adicionar chave pública ao alojamento

Depois de obter a sua chave, adicione-a ao seu alojamento no ficheiro .ssh/authorized_keys2. Para isso, introduza a linha de comando abaixo:

```bash
mkdir .ssh
chmod 700.ssh
vi.ssh/authorized_keys2
```

Depois de abrir o ficheiro, insira a seguinte linha:

```bash
comandos="/usr/bin/svnserve —root=/homez.XXX/loginFTP/svn —túnel —user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Seguir a chave criada anteriormente, tudo na mesma linha.

> [!primary]
>
> Substitua "/home.XXX/loginFTP" e "john" pelos seus ID SSH.
> Para conhecer os números a utilizar para substituir "/home.XXX/loginFTP" introduza o comando "pwd" em SSH.
>
> Também poderá consultar estas informações consultando o nosso guia [Utilizar o acesso SSH do seu alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting).
> 

![alojamento](/pages/assets/screens/other/web-tools/terminal/terminal-homez-folder.png){.thumbnail}

Poderá recuperar o conteúdo do depósito sem no entanto se ligar diretamente através de SSH na máquina.

> [!warning]
>
> Atenção, uma mesma chave não deve ser utilizada para SVN e para SSH em
> linha de comandos
> 

### Exemplos

#### Em Linux

Pode efetuar um teste a partir do computador que se liga ao depot SVN introduzindo a seguinte linha:

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### Windows com TortoiseSVN

- Faça o download e instale a [TortoiseSVN](https://tortoisesvn.net/downloads.html){.external}.
- Clique com o botão direito do rato na chave privada. Um ícone aparece no canto inferior direito, e a chave é carregada no agente de autenticação.
- Crie um diretório, clique com o botão direito e selecione "SVN Checkout". 
- Introduza `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` no campo "URL of repository" e clique em `OK`:

![alojamento](/pages/assets/screens/other/web-tools/tortoisesvn/checkout.png){.thumbnail}

Existe uma excelente documentação em inglês para a Subversion: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Casos específicos

#### Criar várias contas

Primeiro, é preciso ter criado várias chaves SSH. A seguir, ao adicionar a chave pública para o alojamento:

```bash
comandos="/usr/bin/svnserve —root=/home.XXX/loginFTP/svn —túnel —user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Deve modificar o parâmetro abaixo adicionando os seus diferentes utilizadores:

```bash
—túnel
```

note que também é possível dar acessos de leitura apenas adicionando o parâmetro :

```bash
--read-only.
```

#### Verificar localmente a partir do servidor

Quando deseja efetuar uma verificação local, os exemplos fornecidos não funcionarão. Deverá utilizar:

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Quer saber mais? <a name="go-further"></a>

[Utilizar o acesso SSH do seu alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).
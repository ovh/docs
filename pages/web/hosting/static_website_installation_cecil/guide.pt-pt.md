---
title: "Tutorial - Instalação e configuração de Cecil, um gerador de sites estáticos (SSG) em PHP"
slug: instalar-configurar-cecil
excerpt: "Descubra como Cecil lhe permite criar o seu site estático com a ajuda de um motor de template moderno (Jamstack)"
section: 'Tutoriais'
order: 04
---

**Última atualização: 19/01/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial explica-lhe como instalar e configurar [Cecil](https://cecil.app/){.external}. Trata-se de uma aplicação escrita em PHP que permite gerar e administrar páginas web estáticas.

Um website composto essencialmente por páginas web estáticas garante um melhor tempo de carregamento para os seus visitantes e uma maior segurança. Sem conteúdo dinâmico, as suas páginas são mais robustas face aos ataques informáticos. A geração de um website estático permite dispor de uma maior liberdade para criar um website à sua escolha. Também ganhará tempo, pois não terá a partir do zero.

**Descubra como Cecil lhe permite criar o seu site estático com a ajuda de um motor de template moderno (Jamstack).**

## Requisitos

- Ter um [plano de alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) que inclui um acesso SSH. Este acesso permite instalar em linha de comandos uma ou várias soluções alternativas às que são propostas por predefinição nas nossas ofertas de alojamento web.
- estar familiarizado com a introdução em linha de comandos.
- Ter capacidade para transferir ficheiros em FTP com um cliente como [FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/).
- Parametrizar a sua zona DNS para apontar o seu nome de domínio (ou subdomínio) para o seu alojamento web partilhado. Isto é particularmente útil se deseja alojar vários sites em [multi-sites](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/) no seu alojamento web partilhado.
- Instalar previamente [Composer](https://getcomposer.org/){.external} com o ficheiro `composer.phar` na raiz do seu alojamento web partilhado ou na pasta alvo do seu domínio.

## Instruções

Os [alojamentos web partilhados](https://www.ovhcloud.com/pt/web-hosting/) permitem declarar domínios ou subdomínios em multi-sites. Um domínio ou um subdomínio é necessário para implementar o seu website realizado com **Cecil**.

Para o ajudar a declarar um domínio ou um subdomínio em multi-site no seu alojamento, consulte a nossa página "[Partilhar o alojamento entre vários sites](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/)".

### Criar o diretório no qual serão os seus ficheiros

Depois de aceder ao seu alojamento web através de SSH, crie um diretório root com o seguinte comando:

```sh
mkdir mystaticwebsite
```

Substitua `mystaticwebsite` pelo nome de pasta que escolheu (sem acentos e sem espaços).

De seguida, aceda a este diretório:

```sh
cd mystaticwebsite
```

Substitua `mystaticwebsite` pelo seu nome de pasta.

### Descarregamento

No diretório que acaba de criar, descarregue Cecil:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Instalação

Execute a instalação de Cecil com o seguinte comando:

```sh
php cecil.phar new:site
```

Introduza os elementos solicitados;

- o título do seu site _ (title)_
- _baseline_
- o URL do seu website (por exemplo, `https://mywebsite.ovh`)
- uma descrição do seu website

![Instalação Cecil](images/static_website_installation_cecil01.png){.thumbnail}

Depois de inserir estes elementos, deverá implementar o website utilizando o seguinte comando:

```sh
php cecil.phar build
```

Ao visualizar o conteúdo do diretório, verificará a presença de um diretório `_site`. Este diretório deve conter todos os ficheiros HTML e bases de dados;

![Instalação Cecil](images/static_website_installation_cecil02.png){.thumbnail}

Agora pode ver o resultado ao aceder ao seu domínio:

![Instalação Cecil](images/static_website_installation_cecil03.png){.thumbnail}

#### Configuração do apontamento do domínio ou subdomínio

Para visualizar o resultado do seu website no seu browser, modifique o apontamento do seu nome de domínio ou de subdomínio no diretório `_site` criado anteriormente aquando da instalação de **Cecil**.

Se o seu domínio ou subdomínio estiver alojado na OVHcloud, consulte os nossos guias relativos à [configuração DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) e à implementação de um [multisite no seu alojamento web](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/).

### Configurar o seu site

As informações gerais do seu site podem ser configuradas no ficheiro `config.yml`;

```sh
nano config.yml
```

Substitua as informações predefinidas pelos seus e guarde o ficheiro.

![Ficheiro de configuração YAML](images/static_website_installation_cecil04.png){.thumbnail}

### Criar uma nova página

A criação das páginas que conterão os dados do seu site faz-se através de ficheiros no formato _Markdown_. Estas páginas são personalizáveis. **Cecil** integra o motor de _template_ [Twig](https://twig.symfony.com/){.external} que é utilizado de forma padrão com _framework_ [Symfony](https://symfony.com/){.external}.

Os ficheiros e ficheiros são organizados da seguinte forma:

- `assets`: contém elementos gráficos, áudio e vídeo, scripts JavaScript e estilos (CSS, Sass) 
- `layouts`: diretório no qual serão o ou os _templates_
- `pages` local onde serão os seus ficheiros _Markdown_
- `_site` diretório que contém os ficheiros gerados e que é apontado pelo seu nome de domínio
- `static`: todos os ficheiros estáticos do tipo PDF

#### Criar um ficheiro _Markdown_ em linha de comandos

Na raiz do website, introduza o seguinte comando:

```sh
php cecil.phar new:page mypage.md
```

Um ficheiro `mypage.md` é criado na raiz do diretório `/pages`.

Substitua `mypage por um nome próprio.

![Instalação Cecil](images/static_website_installation_cecil05.png){.thumbnail}

#### Gerar os ficheiros estáticos

Na raiz, introduza o seguinte comando:

```sh
php cecil.phar build
```

O seu ficheiro encontra-se no diretório `_site/mypage/`;

![Instalação Cecil](images/static_website_installation_cecil06.png){.thumbnail}

Pode visualizá-lo no seu servidor introduzindo o URL do seu site, seguido de `/mypage/`:

![Resultado browser](images/static_website_installation_cecil07.png){.thumbnail}

### Personalizar os ficheiros do seu site

#### Modificação no servidor

A edição dos ficheiros _Markdown_ pode ser feita diretamente no servidor de alojamento web. Na sua oferta de [alojamento Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), o seu acesso SSH permite utilizar indiferentemente [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} ou [vim](com){.external}.
As capturas de ecrã do presente tutorial foram realizadas sob **GNU nano**.

Editar o ficheiro `mypage.md` situado no diretório `pages` o seguinte comando se estiver na raiz do seu site:

```sh
 nano pages/mypage.md
```

Substitua `mypage por um nome próprio.

![Edição do ficheiro em GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Adicione algumas linhas respeitando a syntaxe _Markdown_;

![Adicionar conteúdo ao ficheiro](images/static_website_installation_cecil09.png){.thumbnail}

Elimine os ficheiros na cache através do seguinte comando:

```sh
php cecil.phar clear
```

Reconstrua as suas páginas após ter guardado o seu ficheiro;

```sh
php cecil.phar build
```

De seguida, volte à página para ver o resultado:

![Página atualizada](images/static_website_installation_cecil10.png){.thumbnail}

#### Modificação do seu posto de trabalho

Se preferir utilizar o seu editor de código habitual, ligue-se com um cliente FTP no seu servidor para recuperar os ficheiros no seu computador:

![Descarregamento com FileZilla](images/static_website_installation_cecil11.png){.thumbnail}

Pode agora editar os ficheiros no seu I.D.E.:

![Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

Basta-lhe reencaminhar os seus ficheiros alterados ou os seus novos ficheiros para o seu servidor e de *rebuilder* para ter as suas páginas online.

### Adicionar a página gerada ao menu do seu site

Para adicionar esta nova página ao menu do website, modifique manualmente o cabeçalho do ficheiro `.md`, adicionando a seguinte linha:

```sh
menu: main
```

### Conclusão

**Cecil** é uma ferramenta que permite construir um site estático de forma eficiente a partir de ficheiros *Markdown*, linguagem de balizagem mais simples de implementar que o HTML. A organização dos ficheiros Markdown condiciona a hierarquia das suas páginas web.<br/>
A utilização de um motor de template, muito utilizado na comunidade de programadores web, permitir-lhe-á encontrar facilmente várias fontes na Internet para conceber uma interface de aspeto profissional.

## Quer saber mais?

O [site oficial da aplicação Cecil](https://cecil.app/){.external}

Um [guia sobre o formato Markdown](https://www.markdownguide.org/){.external}

Nosso [guia sobre a utilização do FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/)

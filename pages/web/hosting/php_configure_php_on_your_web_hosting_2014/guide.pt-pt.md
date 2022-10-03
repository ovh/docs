---
title: "Mudar a versão de PHP do alojamento web"
slug: configurar_o_php_num_alojamento_web_alojamentos_2014_ovh
excerpt: "Saiba como mudar a versão de PHP do seu alojamento web da OVHcloud"
section: PHP
order: 01
---

**Última atualização: 19/09/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O seu [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} permite alojar o site que deseja, desde que este seja compatível com a [configuração das nossas infraestruturas](https://webhosting-infos.hosting.ovh.net){.external}. Neste sentido, poderá querer alterar a versão de PHP utilizada pelo seu alojamento web.

**Descubra como alterar a versão de PHP do seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}, com exceção de um serviço de alojamento Cloud Web.
- Ter acesso ao alojamento web a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) ou conhecer as informações que lhe permitem aceder ao [espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/). 

## Instruções

Existem várias versões da linguagem de programação PHP. Os desenvolvimentos nas versões incluem correções diversas, bem como a adição ou a interrupção de funcionalidades. A OVHcloud propõe as últimas versões principais de PHP, cuja lista pode consultar [aqui](https://www.ovhcloud.com/pt/web-hosting/uc-programming-language/). 

> [!primary]
>
> Uma vez que algumas funcionalidades podem não ser mantidas com as novas versões, ***certifique-se de que, antes de efetuar qualquer alteração, a nova versão de PHP é compatível com o seu website.**
>

### Fase 1: certificar-se de que o seu site é compatível

Embora a OVHcloud faça a gestão da instalação das versões mais recentes de PHP nos seus servidores, cabe-lhe a si, enquanto webmaster, assegurar-se de que o seu website está **sempre atualizado** e, portanto, compatível com as últimas versões de PHP. De forma a assegurar que tal não aconteça, existem duas possibilidades, em função do website que utiliza:

**Caso n°1: utiliza um site "chave na mão" como um sistema de gestão de conteúdos (Content Management System ou CMS)** como WordPress, Joomla!, PrestaShop ou Drupal: 

- Consulte a documentação oficial criada pelo editor do CMS que utiliza.
- Tome nota das informações relativas aos requisitos técnicos indispensáveis ao funcionamento do seu CMS, bem como à manipulação que permite atualizá-lo.
- Atualize o CMS para confirmar a compatibilidade da nova versão com o alojamento da OVHcloud.

**Caso n°2: utiliza um site baseado numa solução personalizada**: 

- Aproxime-se do webmaster que criou o website.
- Ajude-se com [documentação oficial PHP](http://php.net/manual/en/appendices.php){.external} que fornece mais informações sobre as migrações de versões.
- Caso seja necessário, atualize o código do seu site garantindo que este é compatível com o alojamento OVHcloud.

Se necessário, pode conhecer a versão de PHP atualmente utilizada pelo seu alojamento de duas formas:

- **através da Área de Cliente OVHcloud**: aceda a [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à parte `Web Cloud`{.action}, clique nos `Alojamentos`{.action} e escolha o alojamento web em causa. No separador `Informações gerais`{.action}, localize a versão abaixo da *Versão global PHP*. 

![phpversion](images/change-php-version-step1.png) {.thumbnail}

> [!primary]
> Se estiver presente um símbolo redondo azul, aguarde alguns minutos para que a versão seja atualizada.
>

- **através de um script** : Crie um script **.php** contendo apenas o código `<?php phpinfo(); ?>` A seguir, coloque-o online no seu [espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) e clique em aceder ao seu endereço/URL completo.

Se não conseguir assegurar-se da compatibilidade do seu website com a nova versão de PHP e **embora desaconselhemos vivamente este método**, pode tentar alterar a versão atual e voltar atrás. No entanto, corre o risco de gerar um potencial problema de funcionamento no seu website. De resto, mesmo que o website continue a aparecer após a mudança, é possível que uma das suas funcionalidades específicas seja afetada e se torne inoperante. 

Assim que estiver pronto para realizar a alteração, consulte o passo 2.

### Fase 2: alterar a versão de PHP do seu alojamento web

Existem duas formas de alterar a versão de PHP do seu alojamento web:

- **através de um assistente de configuração a partir da sua Área de Cliente**: uma vez ligado ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), poderá escolher a nova versão de PHP pretendida entre outros parâmetros. Consulte o nosso manual ["Alterar a configuração do alojamento web"](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external} para realizar esta operação.

- **alterando manualmente um ficheiro no seu espaço de armazenamento**: esta solução é mais técnica e precisa de aceder ao seu [espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) onde deverá modificar o ficheiro ^.ovhconfig`. Consulte o nosso manual [Configurar o ficheiro .ovhconfig do alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external} para o fazer.

> [!primary]
>
> A modificação da versão de PHP através de um ficheiro ".htaccess" já não é possível nas últimas ofertas de[alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.<br>
> O comando que permite alterar a versão de PHP no ficheiro ".htaccess" não permite utilizar as versões recentes de PHP nas nossas infraestruturas.<br>
> Para isso, deverá obrigatoriamente utilizar o ficheiro `.ovhconfig` de dados, o que significa que o utilizador pode utilizar através da nossa documentação ["Configurar o ficheiro .ovhconfig do meu alojamento web"](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.
>

Algumas versões de PHP só funcionam com certos ambientes de execução. Encontrará abaixo as versões de PHP disponíveis nos alojamentos partilhados OVHcloud e [os ambientes de execução](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/) compatíveis:

| Versões PHP | Ambientes de execução|
|---|---|
|5.4, 5.5, 5.6 e 7.0|Legacy, Stable|
|7.1, 7.2 e 7.3|Stable|
|7.4, 8.0 e 8.1 (bêta)|stable64|

## Quer saber mais?

[Modificar a configuração do alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external}

[Configurar o ficheiro .ovhconfig do alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}

[Aceder ao espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/){.external}

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.

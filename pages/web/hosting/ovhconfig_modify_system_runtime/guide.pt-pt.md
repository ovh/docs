---
title: 'Alterar a configuração do alojamento web'
excerpt: 'Saiba como alterar a configuração do seu alojamento web da OVH'
slug: modificar_o_ambiente_de_execucao_do_meu_alojamento_web
section: 'Configuração do alojamento'
order: 3
---

**Última atualização: 24/09/2018**

## Sumário

Na Internet, existem inúmeros sites. Quer seja para criar um blogue ou uma loja online, quer seja para partilhar uma paixão ou promover a sua atividade profissional, o seu [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} permite-lhe alojar o site Internet que quiser, na medida em que seja compatível com a [configuração das nossas infraestruturas](http://pro.ovh.net/infos/){.external}.

**Saiba como alterar a configuração do seu alojamento web da OVH a partir da Área de Cliente.**

## Requisitos

- Ter um serviço de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} (excluindo o Cloud Web).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager).

## Instruções

**Alterar a configuração do seu alojamento web é uma operação delicada**. Uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website. Iremos explicar o que acontece quando se altera a configuração de um alojamento web para que compreenda as consequências.

Ao alterar a configuração do seu alojamento, estará a alterar a configuração que o seu website utiliza. Embora as nossas infraestruturas ponham várias configurações à sua disposição, certifique-se de que a configuração selecionada é tecnicamente compatível com o seu website.

> [!warning]
>
> Antes de realizar qualquer alteração, assegure-se de que a modificação não fará com que o seu website deixe de funcionar. Todavia, se precisar de ajuda, recomendamos que recorra a um prestador de serviços especializado. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”. 
> 

### Alterar a configuração do alojamento web a partir da Área de Cliente

#### 1 - Aceder à gestão da configuração do alojamento

Para iniciar esta operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o alojamento web em causa. Na janela `Informações gerais`{.action}, clique em `Alterar configuração`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

Se o botão `Alterar configuração`{.action} estiver cinzento, é possível que esteja a decorrer uma verificação da **versão PHP global**. Se for o caso, aparecerá um símbolo redondo azul junto da versão, indicando que a verificação está em curso. Aguarde alguns minutos para que o botão `Alterar configuração`{.action} volte a ficar acessível.

![hostingconfiguration](images/change-hosting-configuration-step2.png){.thumbnail}

#### 2 - Alterar a configuração do alojamento web

Aparecerá uma janela com duas opções possíveis. Selecione a operação que deseja realizar e clique em `Seguinte`{.action}.

|Escolha|Detalhes|
|---|---|
|Voltar a uma configuração anterior|Depois de selecionar esta opção, escolha a configuração que deseja restaurar junto da opção `Escolha histórica`. Esta opção não estará disponível se não tiver efetuado nenhuma alteração anteriormente.|
|Modificar a configuração atual|Escolha as alterações que pretende aplicar à configuração. Para obter mais informações sobre as várias opções de configuração, aceda à secção [Descobrir as configurações disponíveis](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#descobrir-as-configuracoes-disponiveis){.external} deste manual.|

> [!primary]
>
> Alterar o motor de execução do seu alojamento web reinicializa automaticamente as sessões PHP.
> 

Clique em `Validar`{.action} para aplicar a modificação e aguarde até que a operação seja finalizada.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Descobrir as configurações disponíveis

Ao alterar a configuração de um alojamento web, poderá escolher entre várias opções. Consulte a informação relativa à opção escolhida:

- [Ambiente de execução](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#ambiente-de-execucao){.external}.
- [Versão de PHP](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#versao-de-php){.external}.
- [Motor PHP](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#motor-php){.external}.
- [Modo](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#modo){.external}.

#### Ambiente de execução

Alterar o ambiente de execução permite modificar determinados valores técnicos do alojamento web. **Antes de efetuar qualquer alteração, certifique-se de que o ambiente que vai aplicar é compatível com o seu website.** 

|Ambientes|Legacy|stable|testing|jessie.i386|
|---|---|---|---|---|
|Imagem associada|Legacy|jessie.i386|jessie.i386|jessie.i386|
|Versão PHP mínima|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatível)|1.0.1k (TLS1.2 compatível)|1.0.1k (TLS1.2 compatível)|
|Extensão php imagick| - | Sim | Sim | Sim |
|Extensão php memcache (PHP 5.6)| Sim | Sim | Sim | Sim |
|Extensão php memcached (PHP 5.6)| - | Sim | Sim | Sim |
|Extensão php mongo (PHP 5.4, 5.5, 5.6)| - | Sim | Sim | Sim |
|Extensão mysqlnd (apenas em utf-8)| - | Sim | Sim | Sim |
|Extensão redis| - | Sim | Sim | Sim |
|Opcache| Sim | Sim | Sim | Sim |
|Python|2.6|2.7 e 3.4|2.7 e 3.4|2.7 e 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

> [!primary]
>
> O ambiente “legacy” pode ser útil para sites antigos que ainda utilizam versões anteriores de PHP. No entanto, recomendamos fortemente que utilize um ambiente “stable” com atualizações mais recentes. **Certifique-se de que o seu site é compatível antes de realizar qualquer alteração.**
> 

Existem duas possibilidades para realizar esta alteração:

- **através da Área de Cliente**: utilize as instruções indicadas na secção [Alterar a configuração do alojamento web a partir da Área de Cliente](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#alterar-a-configuracao-do-alojamento-web-a-partir-da-area-de-cliente){.external} deste manual;
- **alterando manualmente o ficheiro “.ovhconfig**”: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento. Caso pretenda alterar o ficheiro “**.ovhconfig**”, consulte as instruções do nosso manual [Configurar o ficheiro .ovhconfig do meu alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.

#### Versão de PHP

Atualmente, existem várias versões da linguagem de programação PHP. As versões mais recentes incluem correções, e incorporam ou dispensam determinadas funcionalidades. A OVH propõe as principais versões mais recentes de PHP que poderá consultar na seguinte ligação: <https://www.ovh.pt/alojamento-partilhado/php.xml>. 

Uma vez que as novas versões podem não incluir determinadas funcionalidades, **certifique-se de que a nova versão de PHP é compatível com o seu website antes de realizar qualquer alteração.**

Existem várias formas de alterar a versão de PHP do seu alojamento web:

- **através da Área de Cliente**: utilize as instruções indicadas na secção [Alterar a configuração do alojamento web a partir da Área de Cliente](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#alterar-a-configuracao-do-alojamento-web-a-partir-da-area-de-cliente){.external} deste manual;
- **alterando manualmente um ficheiro no seu espaço de armazenamento**: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento. 

Para mais informações sobre a alteração de uma versão de PHP, consulte o nosso manual [Alterar a versão de PHP de um alojamento web da OVH](https://docs.ovh.com/pt/hosting/configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/){.external}.

#### Motor PHP

A escolha do motor PHP permite ativar ou desativar o acelerador PH (PHP-FPM), que foi adaptado à nossa infraestrutura para acelerar a velocidade de execução dos scripts PHP. Por outro lado, o acelerador PHP (PHP-FPM) permite obter um desempenho até sete vezes mais rápido que um motor “phpcgi”. 

Pode alterar o motor PHP utilizado pelo seu alojamento web de duas formas:

- **através da Área de Cliente**: utilize as instruções indicadas na secção [Alterar a configuração do alojamento web a partir da Área de Cliente](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#alterar-a-configuracao-do-alojamento-web-a-partir-da-area-de-cliente){.external} deste manual. Para ativar o acelerador PHP (PHP-FPM), selecione a opção “php” enquanto motor. Para o desativar, escolha a opção “phpcgi”;
- **alterando manualmente o ficheiro “.ovhconfig**”: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento. Caso pretenda alterar o ficheiro “**.ovhconfig**”, consulte as instruções do nosso manual [Configurar o ficheiro .ovhconfig do meu alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.

#### Modo

A escolha do modo permite gerir o comportamento da cache dos ficheiros estáticos do seu website (as imagens, por exemplo) e o tratamento dos erros PHP (úteis quando o seu site apresenta uma página branca, por exemplo). Pode ativar dois tipos de modos:

|Modo|Cache dos ficheiros estáticos|Tratamento dos erros PHP|
|---|---|---|
|*Produção*|Maximiza o armazenamento em cache dos ficheiros estáticos em browsers.|Os erros PHP não aparecem no seu site.|
|*Desenvolvimento*|Não se aplica nenhuma cache.|Os erros PHP aparecem no seu site.|

Pode alterar o modo utilizado pelo seu alojamento web de duas formas:

- **através da Área de Cliente**: utilize as instruções indicadas na secção [Alterar a configuração do alojamento web a partir da Área de Cliente](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#alterar-a-configuracao-do-alojamento-web-a-partir-da-area-de-cliente){.external} deste manual;
- **alterando manualmente o ficheiro “.ovhconfig**”: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento. Caso pretenda alterar o ficheiro “**.ovhconfig**”, consulte as instruções do nosso manual [Configurar o ficheiro .ovhconfig do meu alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}
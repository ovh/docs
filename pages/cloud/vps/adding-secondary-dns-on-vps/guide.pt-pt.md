---
title: 'Configurar um DNS secundário OVHcloud num VPS'
slug: dentro-secundario-vps
excerpt: Saiba como adicionar um servidor DNS secundário ao seu domínio
section: Utilização avançada
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 12/01/2022**

## Objetivo

Se configurar o VPS como servidor DNS, pode utilizar o serviço DNS secundário da OVHcloud para alojar uma zona DNS secundária. Desta forma, os servidores DNS do seu domínio ficarão disponíveis mesmo que o servidor DNS primário não responda.

**Saiba como adicionar um domínio à Área de Cliente para utilizar um servidor DNS secundário da OVHcloud.**

## Requisitos

- Um domínio ao qual terá acesso enquanto administrador
- Um servidor [VPS](https://www.ovhcloud.com/pt/vps/) na sua Área de Cliente OVHcloud
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

> [!warning]
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de um serviço num servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/).
>

## Instruções

### Etapa 1: recuperação do código de validação <a name="retrievecode"></a>

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

Migre para o separador `DNS secundário`{.action} e clique no botão `Adicionar domínio`{.action}.

![DNS Secundário](images/sec-01.png){.thumbnail}

Introduza o domínio que pretende adicionar e clique em `Validar`{.action}.

![DNS Secundário](images/sec-02.png){.thumbnail}

Aparecerá uma mensagem relativa ao processo de verificação na sua Área de Cliente.

![DNS Secundário](images/sec-03.png){.thumbnail}

É necessário validar a sua autorização de gestão do nome de domínio antes de poder adicioná-la aos DNS Secundários da OVHcloud. Para isso, deverá efetuar-se uma pesquisa DNS automatizada no subdomínio *ownercheck.oseutrenomdedominio*. Para este efeito, é gerada uma cadeia de caracteres individual que é apresentada na zona de notificação vermelha. Copie este código de validação para o utilizar na etapa seguinte.

### Etapa 2: verificação da autorização do nome de domínio <a name="verifyingdomain"></a>

A ação a efetuar é diferente consoante o local onde os DNS do domínio são geridos.

- Se o domínio for gerido por um agente de registo externo **ou** for utilizado servidores DNS externos, aceda à Área de Cliente do seu prestador DNS e adicione, na zona DNS, uma entrada do tipo TXT com o subdomínio "ownercheck", bem como o valor fornecido ao executar a [etapa 1](#retrievecode).

- Se o domínio é gerido pela OVHcloud como registar **e** utiliza os servidores DNS da OVHcloud, adicione o registo TXT à secção `Web Cloud`{.action} da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). De seguida, siga as instruções descritas no nosso manual "[Editar a zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)".

![DNS Secundário](images/sec-04.png){.thumbnail}

### Etapa 3: adição do domínio

Quando o registo TXT estiver presente na zona DNS do domínio, repita os [passos descritos na primeira parte deste guia](#retrievecode) para adicionar o domínio ao servidor DNS secundário da OVHcloud.

Clique em `Confirmar`{.action} para lançar a verificação automática do proprietário interrogando o campo TXT. Uma mensagem na sua Área de Cliente irá confirmar-lhe a validação DNS correta. Já pode eliminar a entrada TXT.

Os domínios adicionados aparecem neste separador com o **nome correspondente ao servidor DNS secundário**. Atualize a página no seu browser depois de adicionar um domínio.

![DNS Secundário](images/sec-05.png){.thumbnail}

É possível eliminar um domínio ao clicar no botão `...`{.action} da tabela.

> [!primary]
>
> Podem ser necessárias outras ações para configurar o seu servidor DNS nos seus nomes de domínio:
>
> - a configuração de um serviço DNS (como *BIND*)
> - a configuração dos registos GLUE
> - autorização das transferências de zona DNS
>
> Recorra à documentação externa caso necessite de informações suplementares para estas tarefas administrativas.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

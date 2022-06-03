---
title: Transferir um domínio para outro agente de registo
excerpt: Saiba como transferir um domínio da OVHcloud para o agente de registo da sua escolha
slug: transferencia_de_saida_de_um_nome_de_dominio_generico_ou_geografico
legacy_guide_number: g1869
section: Transferência
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/01/2021**

## Objetivo

**Transferência de domínio** refere-se à transferência de um domínio de um agente de registo para outro. Por exemplo, se encomendou um domínio para o nosso website, a OVHcloud é o seu agente de registo atual. O novo agente registador deve iniciar uma transferência de domínio para fora.

De modo a impedir as transferências de domínio não autorizadas, os nomes de domínio são geralmente bloqueados por um estatuto de *clientTransferProhibited*. Esta proteção deve ser levantada na Área de Cliente OVHcloud antes de começar qualquer transferência.

**Este manual explica-lhe como preparar o seu domínio para uma transferência de saída.**

## Requisitos

- Ter um [domínio](https://www.ovhcloud.com/pt/domains/) registado na OVHcloud
- Ter o direito de solicitar a transferência do nome de domínio: o proprietário e/ou os administradores devem ser informados do pedido de transferência.
- Ter acesso à secção de gestão do domínio na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- O registo do nome de domínio em questão data de há pelo menos 60 dias e não foi transferido ou trocado (ou seja, a mudança de proprietário) durante os últimos 60 dias

> [!primary]
>
> Se é o **proprietário** do domínio mas a sua gestão na Área de Cliente OVHcloud está indisponível, seja através do seu próprio acesso ou através do contacto administrativo do domínio, consulte [este guia](../../customer/gestao_dos_contactos/#caso-especifico-de-um-proprietario-de-dominio) antes de continuar.
>

## Instruções

> [!warning]
>
> As instruções que se seguem descrevem a forma mais comum de transferir um nome de domínio, válido para a maioria dos domínios de primeiro nível (top-level domain, ou TLD). No entanto, as regras específicas de procedimentos aplicáveis aos TLD são definidas apenas pela autoridade competente, ou seja, pelo **registo**. Os agentes de registo, como a OVHcloud, devem respeitar estas regras e não têm qualquer influência sobre as decisões dos registos.
>
> Assim, o procedimento exato para as transferências de domínio pode variar, em particular no caso de certos TLD de código de país (ccTLD, tais como .lu, .uk, .hk, .ro) e de alguns TLD especiais (.am, .fm, etc..). As transferências podem igualmente ser proibidas por diversas razões, por exemplo, em caso de pagamento pendente, de abuso ou de bloqueio do registo.
>
> Em caso de dúvida, recomendamos que consulte os seguintes recursos:
>
> - O sítio Web do registo TLD correspondente;
> - a [lista dos TLD disponíveis na OVHcloud](https://www.ovhcloud.com/pt/domains/tld/);
> - [Explicações do ICANN sobre os códigos de estado EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (para saber que códigos de estado se aplicam atualmente ao seu nome de domínio, efetue uma pesquisa *Whois*, utilizando de preferência o website do registo TLD correspondente);
> - o website e a interface de gestão do seu novo agente de registo, especialmente para as questões relativas a um processo de transferência pendente.
>

### Etapa 1: eliminar a proteção contra a transferência do nome de domínio

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e selecione o domínio correspondente.

No separador `Informações gerais`{.action}, encontrará o cursor `Proteção contra a transferência` sob **Segurança**. Por predefinição, esta proteção está `Ativada`{.action}.

![proteção ativada](images/outgoing-transfer-step1.png){.thumbnail}

Clique no cursor e confirme, na nova janela, que pretende eliminar esta proteção. Aguarde alguns minutos para que o estado passe para `Desativado`{.action}.

![desativação proteção](images/outgoing-transfer-step2.png){.thumbnail}

> [!primary]
>
> Uma vez levantada a proteção, o domínio ficará desbloqueado durante sete dias. Após este período, a proteção será automaticamente reativada. Se não solicitar a transferência de domínio para o novo agente de registo durante este período, será necessário levantar novamente a proteção do domínio.
>

### Etapa 2: recuperar o código de transferência

Uma vez levantada a proteção contra a transferência, pode recuperar o código de transferência do seu nome de domínio. Para isso, ainda no separador `Informações gerais`{.action}, clique em `AUTH/INFO`{.action} situado ao lado de `Proteção contra a transferência`. Não hesite em atualizar a página caso seja necessário.

Aparecerá uma janela com o seu código AUTH/INFO (também conhecido como código de transferência, palavra-passe de domínio, AUTH-CODE ou EPP-Code).

![outgoingtransfer](images/outgoing-transfer-step3.png){.thumbnail}

O código será pedido pelo seu novo agente de registo para concluir o processo de transferência. Pode verificar os detalhes junto do seu novo agente de registo.

Em vez de introduzir manualmente o código, recomendamos que o copie/cole, uma vez que alguns caracteres podem ser facilmente confundidos.

### Etapa 3: iniciar a transferência para o novo agente de registo

Depois de realizar os passos anteriores, pode lançar o processo de transferência, geralmente através de uma encomenda. A transferência pode demorar até 10 dias. 

Para mais informações contacte o seu novo agente de registo.

## Saiba mais

[Transferência de domínio .co.uk de saída](../transferencia_de_saida_de_um_dominio_couk/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
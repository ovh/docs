---
title: "Configurar a reverse DNS de uma instância Public Cloud"
excerpt: Saiba como implementar a resolução reverse DNS
slug: configurar_a_reverse_dns_de_uma_instancia
section: Gestão a partir da Área de Cliente OVHcloud
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 12/11/2021**

## Objetivo

O **Reverse DNS** (*rDNS*) é o complemento da resolução "clássica" dos DNS que permite converter um nome de domínio num endereço IP (registo do tipo **A**). Graças a um pedido deste tipo, um endereço IP pode ser resolvido em nome de domínio (registo do tipo **PTR**). Isto significa que os pedidos DNS no endereço IP em causa irão devolver um domínio.

Configurar a resolução **Reverse DNS** de uma instância é particularmente útil para o envio de e-mails. O risco de as suas mensagens serem rejeitadas por um sistema de proteção contra spam será diminuído se o endereço IP do seu servidor de envio se resolver corretamente em seu nome de domínio.

**Saiba como configurar a reverse DNS para o(s) endereço(s) de IP da sua instância Public Cloud.**

## Requisitos

- Ter uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Um domínio com o seu campo `A` apontando para a instância
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Bare Metal Cloud`{.action} e clique em `IP`{.action} no menu à esquerda.

O quadro desta página apresenta os seus serviços elegíveis. Pode filtrar o ID do seu projeto Public Cloud através do menu pendente do **Serviço**.

![Reverse DNS](images/reversecp01.png){.thumbnail}

Clique em `...`{.action} na linha do endereço IP em causa e selecione `Alterar a reverse`{.action}.

![Reverse DNS](images/reversecp02.png){.thumbnail}

Na nova janela, introduza a sua reverse e clique em `Confirmar`{.action}.

Também pode editar a reverse diretamente através do ícone da coluna **Reverse** da tabela.

> [!primary]
>
Se a alteração não funcionar como previsto, verifique se o campo `A` está corretamente configurado na zona DNS do seu domínio. Atenção, a modificação da [zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) pode demorar até 24 horas se apenas alterou recentemente o campo `A`.
>

## Quer saber mais? <a name="gofurther"></a>

[Criar uma primeira instância Public Cloud e ligar-se a ela](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
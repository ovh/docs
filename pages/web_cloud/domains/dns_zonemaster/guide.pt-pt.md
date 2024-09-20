---
title: 'Tutorial - Utilização de Zonemaster'
updated: 2024-06-18
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
> 

## Objetivo

[Zonemaster](https://zonemaster.net/en/run-test) é uma ferramenta originada pela colaboração entre a [AFNIC](https://www.afnic.fr/en/) (registo francês) e a [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (registo sueco). Permite analisar a configuração DNS (Domain Name System) de um nome de domínio e identificar os elementos que podem ser melhorados ou corrigidos.

> [!primary]
>
> Para compreender melhor a noção de DNS, consulte o guia "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

## Requisitos

- Ter um [domínio](/links/web/domains)

## Instruções

### Campo de introdução

A ferramenta Zonemaster permite verificar uma configuração DNS instalada num nome de domínio ou testar uma zona DNS pré-configurada em futuros servidores DNS.

Para verificar a configuração atual de um nome de domínio, introduza o seu nome de domínio e clique em `Run`{.action}

![Captura de ecrã do formulário de introdução do Zonemaster. O domínio "domain.tld" já foi introduzido e está pronto para ser testado.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test.png){.thumbnail}

Para verificar uma configuração DNS que foi preparada, mas ainda não aplicada ao domínio em causa, selecione a opção `Options`{.action} e introduza as seguintes informações:

- **Nameservers**: introduza as informações do servidor de nome associado a um nome de domínio. Clique em `+`{.action} para poder adicionar um servidor de nome suplementar. A introdução de um endereço IP é facultativa.
- **DS records**: no quadro de uma proteção DNSSEC, introduza os elementos do registo DS. Clique em `+`{.action} para poder adicionar um registo DS suplementar. Se os servidores DNS não utilizarem o protocolo DNSSEC, pode deixar estes campos livres. No caso de uma zona assinada com DNSSEC, esta função permite verificar se a zona funciona corretamente com um resolvedor valioso, com os registos DS que estamos prestes a publicar, antes da sua publicação.

Também pode forçar as verificações num protocolo IP específico através das células `Desativar IPv6` e `Desativar IPv4`

> **Exemplo**:<br><br> Se possui o nome de domínio "domain.tld" que utiliza atualmente os servidores DNS "dnsXX.ovh.net" e "nsXX.ovh.net".
> Configurou uma zona DNS para este domínio nos servidores DNS "dns1.test.tld" e "dns2.test.tld".<br>
> Antes de alterar os servidores DNS, pode efetuar uma pesquisa avançada através da opção `Options`{.action} introduzindo "dns1.test.tld" e "dns2.test.tld" nas casas `Nameservers`.<br>
> Zonemaster realizará um teste como se estivesse a utilizar os servidores "dns1.test.tld" e "dns2.test.tld" em "domain.tld".<br>
> ![Captura de tela das opções avançadas do formulário Zonemaster. Os dois servidores de nomes "dns1.test.tld" e "dns2.test.tld" foram introduzidos na secção "SNameservers" do formulário.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test-nameservers-option.png){.thumbnail}

> [!primary]
>
> Ao introduzir um domínio e ao clicar no botão `Fetch NS from parent zone`{.action} e `Fetch DS from parent zone`{.action}, aparecerão os servidores DNS associados ao domínio, bem como as informações do registo DS (DNSSEC), se este tiver sido configurado.
> ![Captura de ecrã das opções avançadas do formulário Zonemaster. O botão "Fetch NS from parent zone" (Obter NS da zona-mãe) está realçado e os servidores de nomes do domínio "domain.tld" são pré-preenchidos na secção Nameservers (Servidores de nomes) do formulário.](/pages/assets/screens/other/web-tools/zonemaster/fetch-ns-from-parent-zone.png){.thumbnail}

### Resultado

Depois de validado o formulário, os resultados são classificados por código de cor:

- **Error**: esta parte apresenta erros ou elementos em falta que podem causar uma anomalia.
- **Warning**: esta parte é funcional, mas merece uma atenção especial. A ferramenta detetou que este parâmetro apresenta características que não correspondem ao padrão da sua categoria, sem bloquear o seu funcionamento.
- **Notice**: trata-se de uma simples informação, sem consequências particulares sobre o funcionamento do nome de domínio.
- **Info**: esta parte é funcional e cumpre os critérios standard na sua categoria.

Para cada teste, é possível obter mais pormenores, por exemplo para compreender o erro no caso de uma anomalia, ou apenas a título indicativo.

![dominios](/pages/assets/screens/other/web-tools/zonemaster/domain-analysis.png){.thumbnail}

### Informações úteis

Se tiver questões adicionais sobre Zonemaster, consulte a secção [FAQ](https://zonemaster.net/en/faq) em <https://zonemaster.net/>.

## Saiba mais <a name="go-further"></a>

[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_general_information){.external}

[Modificação de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](/links/web/domains-dnssec){.external}

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community)
---
title: "Erros comuns associados à segurança do seu website com SSL"
excerpt: "Descubra como evitar os erros comuns de segurança do seu website com o SSL"
updated: 2024-01-11
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Encontre, neste tutorial, alguns exemplos de situações relativas à segurança do seu website com o SSL.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção ["Quer saber mais?"](#go-further) deste guia.
>

**Descubra como evitar os erros comuns de segurança do seu website com o SSL**

## Requisitos

- Dispor de um [alojamento web OVHcloud](/links/web/hosting){.external}.
- Ter registado, pelo menos, um [nome de domínio](/links/web/domains){.external}.
- Ter acesso à sua [Área de Cliente OVHcloud](/links/manager){.external}, parte "Web cloud".

## Instruções

### Conteúdo misto (mixed content)

O seu website não carrega elementos externos, como os botões *Facebook* e *X/Twitter*? As interações nas páginas web não funcionam como quando acede ao website em "HTTP"? Provavelmente, é o resultado do conteúdo misto do seu website. 

Nos últimos anos, browsers como o Google Chrome*, *Mozilla Firefox* e *Microsoft Edge/Internet Explorer* têm impedido que websites com "HTTPS" carreguem elementos de página se estes estiverem acessíveis através de um URL em "HTTP". Isto é feito para que a confidencialidade fornecida pelo protocolo "HTTPS" não seja comprometida por um elemento carregado em "HTTP". 

Na maioria dos casos, são scripts externos, provenientes de outros websites, como as redes sociais. Neste caso, basta substituir nos seus scripts os URLs em "HTTP" por URLs em "HTTPS" para poder carregar estes scripts.

> [!primary]
>
> Alguns websites utilizam [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) para alojar, por exemplo, bibliotecas *Javascript* (como *JQuery*). 
> Se os CDN entregam a livraria com um URL em "HTTP", o seu website pode ser afetado pelo **mixed content**. 
>

Como saber se o meu site é afetado?

As ferramentas de depuração fornecidas por *Mozilla Firefox* e *Google Chrome* podem indicar se o seu website contém ou não elementos bloqueados devido a um conteúdo misto. A documentação disponível no [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} explica a utilização destas ferramentas para detetar conteúdos mistos.

### Conteúdo duplicado (duplicate content)

"Duplicar conteúdo" significa ter o mesmo conteúdo em vários URLs diferentes. Os motores de busca encaram isto como uma tentativa de melhorar o referenciamento (SEO). Assim, penalizam os websites cujo conteúdo é duplicado.

Para evitar este tipo de situação, sugerimos que, quando o website funciona corretamente em "HTTPS", reencaminhe o conteúdo "HTTP" para "HTTPS". Isto permitirá que os seus visitantes sejam automaticamente reencaminhados para o endereço do seu conteúdo web em "HTTPS" e que apenas um endereço esteja disponível para esse mesmo conteúdo. 

Eis um exemplo de reencaminhamento que pode adicionar num ficheiro "[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)", na raiz do seu website (substituindo o URL *https://www.yourdomain.tld* pelo seu):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Quer saber mais? <a name="go-further"></a>
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).
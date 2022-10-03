---
title: Evitar os erros comuns de SSL no meu website
excerpt: Evitar os erros comuns de SSL no meu website
slug: evitar_os_erros_comuns_de_ssl_no_meu_website
section: SSL
order: 04
---


## O 'mixed content'
O seu website não carrega elementos externos, como os botões Facebook ou Twitter? As iterações da sua página não funciona como em HTTP? Tem, provavelmente, um problema de "mixed content".

Desde há vários anos que os browsers como o Googl Chrome, Mozilla Firefox ou Internet xplorer impedem que os websites em HTTPS carreguem elementos da página se estão sob um URL em HTTP. Isto é efetuado desta forma de forma a evitar que a confidencialidade aportada por HTTPS não sofra impacto por um elemento carregado em HTTP.

Na maioria dos casos tratam-se de scripts externos provenientes de outros websites como as redes sociais, e basta que substitua http por https para chamar esses scripts.

No entanto, atenção. Existem alguns websits que utilizem o CDM para alojar librarias "Javascript (como JQuery por exemplo). Se esses CDN fornecem as librarias com um URL em HTTP, o funcionamento do website pode sofrer impacto.

Como saber se o meu website poderá sofrer impacto?

As ferramentas de "debugging" fornecidas pela Mozilla Firefox e Google Chrome indiquem quando um website contém elementos bloqueados por mixed content. A documentação disponível em [le Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content) permite saber mais sobre estas ferramentas caso haja mixed content.


## O "duplicated content"
O "duplicate content", é o fenómeno de ter o mesmo conteúdo entregue por vários urls distintos. Os motores de pesquisa não apreciam este fenómeno que, segundo eles, tem como tentativas melhorar o seu posicionamento. Desta forma, eles penalizam os websites que os utilizam.

Para evitar este tipo de problemas, é recomendado, se o seu webstie funciona corretamente em HTTPS, que adicione um reencaminhamento do conteúdo HTTP em HTTPS. Assim, os seus visitantes serão reencaminhados automaticamente para o endereço HTTPS e um só endereço será disponível para o mesmo conteúdo.

Deixamos um exemplo de reencaminhamento a colocar no seio do ficheiro .htaccess na raiz do seu website.


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```




## Passar de HTTPS para HTTP
Caso pretenda restringir o seu website a funcionar apenas por HTTP e não deseja utilizar o protocolo HTTPS, deve forçá-lo através do ficheiro .htaccess.

Desta forma, os seus visitantes serão automaticamente reencaminhados para o endereço HTTPS e um só endereço estará disponível para o mesmo conteúdo, mesmo que acedam por HTTPS.

Deixamos um exemplo de reencaminhamento a colocar no seio do ficheiro .htaccess na raiz do seu website de forma a poder reencaminhar HTTPS para HTTP:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.oseudominio.pt/$1 [R,L]
```




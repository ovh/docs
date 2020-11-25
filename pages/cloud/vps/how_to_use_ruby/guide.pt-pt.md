---
title: How to Ruby
excerpt: Gerneralidades sobre a distribuição ruby
slug: how_to_ruby
legacy_guide_number: g1370
hidden: true
---


## 
Aquando da criação da distribuição Ruby ficamos o mais perto possíveis da configuração padrão. Isto para que possa personalizar livremente a sua VPS.
Instalámos as dependências que teria necessidade para instalar/compilar os seus rubygems e utilizar RubyOnRails.

Veja os componentes da sua VPS:

- Debian Wheezy
- rbenv (permite utilizar a versão ruby à sua escolha)
- Passenger (Apache ou Nginx)
- Base de dados (MySQL, PostgreSQL ou MongoDB)




## 
root: utilizado para a administração geral do servidor (atualizações, criação de bases de dados, etc.).
webmaster: utilizado para a gestão da sua aplicação (instalação de ruby, implementação da aplicação, etc.).


## 
A versão de ruby que pediu é instalada via rbenv para o utilizador 'webmaster' e Passenger. O resto do sistema utilizada a versão de ruby instalada por defeito no Debian Wheezy (1.9.3p194 no momento em que foi redigido este artigo).

Para alterar a versão de ruby ligue-se com o utilizador webmaster e introduza:


```
rbenv update (atualizar o rbenv e e os seus plugins)
rbenv install --list (para conhecer todas as versões de ruby disponíveis)
rbenv install <version>
rbenv global <version>
```




## 
O Passenger é instalado a partir dos repositórios oficiais do Phusion. Como tal, dispõe da última versão estável do Phusion Passenger. Passenger utiliza a mesma versaõ de ruby que o utilizador 'webmaster'.

A sua VPS é entregue com um virtuahost por defeito com o nome (vpsXXXXX.ovh.net).
Pode utilizá-lo diretamente ao implementar a sua aplicação em /var/www/vpsxxxx.ovh.net
Pode porém personalizar ou copiá-lo para implementar várias aplicações.

Para conhecer o estado e o consumo de memória do Passenger:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
A configuração da sua aplicação encontra-se em /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Reiniciar o servidor: 
```
service apache2 restart (root)
```

Reiniciar apenas a aplicação: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Para uma documentação detalhada do Passenger : [Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
A configuração da sua aplicação encontra-se em /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Reiniciar o servidor: 
```
service nginx restart (root)
```

Reiniciar apenas a aplicação: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Para uma documentação detalhada do Passenger: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
A sua base de dados é instalada com os parâmetros padrão e configurada para ser apenas acedida a partir da sua VPS.


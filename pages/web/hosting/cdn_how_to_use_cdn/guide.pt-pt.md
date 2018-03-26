---
title: Guia de utilização do Acelerador GeoCache num Alojamento Web
excerpt: Guia de utilização do Acelerador GeoCache incluído nas ofertas de Alojamento Web
slug: guia_de_utilizacao_do_acelerador_geocache_num_alojamento_web
legacy_guide_number: g1290
---


## 
Ligue-se ao [Espaço Cliente](https://www.ovh.com/manager/web) com o seu identificador OVH (Nic) e a password.

Selecione de seguida o seu alojamento web na secção "Alojamento".

![](images/img_2904.jpg){.thumbnail}


## Limpar a cache do Acelerador GeoCache
O TTL (Time to Live = tempo de vida de um ficheiro em cache num PoP) vai de 5 a 60 minutos (geridos pelos nossos servidores para uma maior otimização). Após este prazo, o ficheiro em cache é eliminado. É então necessário aguardar que um novo utilizador peça novamente o elemento, para que este seja colocado novamente em cache no PoP em questão.

Para forçar a substituição de um ficheiro em cache nos PoP, após a modificação do seu site por exemplo, é necessário limpar a cache. A recolocação em cache num PoP efetua-se quando um utilizador pede novamente o ficheiro a partir da zona que depende desse PoP.

Para purgar manualmente a sua cache dos PoP da rede OVH, basta clicar em "Limpar a cache CDN de base"

![](images/img_2957.jpg){.thumbnail}


## Desativar a utilização do Acelerador GeoCache
se não deseja utilizar o Acelerador GeoCache incluído com a sua oferta de alojamento Web tem à sua disposição várias soluções:


- Não utiliza o IP (campo A) do seu alojamento que está anexado ao Acelerador GeoCache.
- Modifica o ficheiro de regras na raiz do seu alojamento (ver a secção seguinte)


Explicaremos aqui a solução que consiste na modificação do IP utilizado pelo seu alojamento.

Para tal deverá aceder à secção "Domínio & DNS" do nome de domínio anexado ao alojamento que beneficia do Acelerador GeoCache. Aceda de seguida à "Zona DNS".

Deve então procurar o "campo A", associado a um IP do tipo 213.xxx.xxxx.xxx *

* Este IP é o IP do Acelerador GeoCache associado ao seu alojamento. Para restabelecer o Acelerador GeoCache deverá substitui-lo mais tarde aqui. A lista dos IPs está disponível mais abaixo. Pode ainda pedir ao suporte esta lista. Guarde esta lista caso pretenda consultá-lo mais tarde.

Clique de seguida no botão "Editar" (ícone com uma folha de papel e um lápis em cima) ao lado do campo A para aceder ao formulário de edição.

Na página do formulário em questão encontrará os seguintes campos:


- Subdomínio: campo A selecionado por defeito (não o modifique)
- Selecionar um IP: escolher "Alojamento partilhado"
- Selecionar um alojamento: Escolha o nome de domínio anexado ao seu alojamento
- Selecionar um país: escolher a geolocalização do IP de saída que deseja


Confirme de seguida a sua seleção ao clicar em "Validar". O seu IP será modificado e esta atualização levará alguns instantes.

NB : Lista dos IPs anexados ao Acelerador GeoCache 3 PoP / 17 PoP

Poderá encontrar o cluster ao qual o seu Alojamento Web corresponde no seu Espaço Cliente (Manager) separador "Alojamento" opção "FTP" ou no e-mail de instalação que recebeu aquando da ativação da sua oferta.

|Cluster|sem GeoCache|3 PoP (Basic)|17 PoP (Business)|
|002|37.187.184.2|213.186.33.2 ou 213.186.33.68|213.186.33.69|
|003|37.187.184.4|213.186.33.4 ou 213.186.33.84|213.186.33.85|
|005|37.187.184.16|213.186.33.16 ou 213.186.33.94|213.186.33.95|
|006|37.187.184.17|213.186.33.17 ou 213.186.33.96|213.186.33.97|
|007|37.187.184.18|213.186.33.18 ou 213.186.33.104|213.186.33.105|
|010|37.187.184.19|213.186.33.19 ou 213.186.33.106|213.186.33.107|
|011|37.187.184.40|213.186.33.40 ou 213.186.33.150|213.186.33.151|
|012|37.187.184.48|213.186.33.48 ou 213.186.33.152|213.186.33.153|
|013|37.187.184.24|213.186.33.24 ou 213.186.33.82|213.186.33.83|
|014|37.187.184.87|213.186.33.87 ou 213.186.33.168|213.186.33.169|
|015|37.187.184.3|213.186.33.3 ou 213.186.33.170|213.186.33.171|
|017|37.187.184.50|213.186.33.50 ou 213.186.33.172|213.186.33.173|




## 
Para aceder ao ficheiro em questão ligue-se por FTP ao seu espaço de alojamento.

Pode utilizar o software FileZilla para tal.


## Ativar/Desativar a utilização do Acelerador GeoCache
Após efetuar o login no FTP do seu alojamento será, de forma padrão, encaminhado para a raiz do mesmo. Encontrará certamente vários ficheiros e várias pastas mas o que nos interessa é o ficheiro ".ovhconfig".

Deverá efetuar o download desse ficheiro para o seu Computador (duplo clique no mesmo deve funcionar) e depois deverá abrir/editar o ficheiro com a ajuda de um editor de texto, por exemplo, Bloco de notas/Notepad. Caso seja necessário, renomeie o ficheiro em ovhconfig.txt.

Nas linhas que compõem o ficheiro, modifique na linha "environment", "production" por "development" (deixe em inglês).

Volte a nomear o renomear o ficheiro em .ovhconfig e faça o upload do mesmo para a raiz do FTP, substituindo o ficheiro atual.

Para reativar a utilização do Acelerador GeoCache, basta que volte a efetuar esta opação, modificando o parâmetro "environment" por "production".

![](images/img_1207.jpg){.thumbnail}
Pode igualmente adicionar a seguinte linha no ficheiro .htaccess:

```
Header set Cache-Control "no-cache"
```




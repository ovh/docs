---
title: 'Partilhado: Erro 500 Internal Server Error'
excerpt: Erro 500 Internal Server Error
id: '1987'
slug: partilhado_erro_500_internal_server_error
legacy_guide_number: g1987
---


## .htaccess
Se a sintaxe do .htaccess não for a correta, o servidor web apresentará o erro 500. É necessário renomear o ficheiro .htaccess por .htaccess_bak, por exemplo. Se o seu website funcionar corretamente, o .htaccess será a causa para o problema.

Clique aqui para mais informações: []({legacy}1967)


## Permissões/direitos
Deverá respeitar algumas regras quando dá permissões aos seus scripts:

- a raiz do seu website deverá estar obrigatoriamente em 705 (as permissões padrão da OVH). Trata-se da pasta / ou .(ponto) do seu servidor FTP, não as modifique.
- as outras pastas deverão estar no máximo em 755,
- is scripts php/cgi deverão estar no máximo em 755.


Como modificar os direitos de um ficheiro ou pasta: [Clique aqui](https://docs.ovh.com/pages/releaseview.action?pageId=12225474)


## Erro de script
Se programa em perl, por exemplo, um erro no seu script poderá levar a um erro 500. Não poderá, por questões de segurança, obter mais detalhes. Para verificar essa situação, terá de utilizar uma ligação telnet/ssh (apenas disponível a partir da oferta Pro).

Clique aqui para saber mais informações: []({legacy}1962)


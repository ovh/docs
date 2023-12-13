```sh
webpaas environment:routes

Routes on the project Website1 (7nbhqo4xy2ino), environment Master (master):
+------------------------+----------+---------------------------------------------------------+
| Route                  | Type     | To                                                      |
+------------------------+----------+---------------------------------------------------------+
| https://{default}/     | upstream | app                                                     |
| https://www.{default}/ | redirect | https://master-7rqtwti-7nbhqo4xy2ino.ovhcloud-fr-1/     |
| http://{default}/      | redirect | https://master-7rqtwti-7nbhqo4xy2ino.ovhcloud-fr-1/     |
| http://www.{default}/  | redirect | https://www.master-7rqtwti-7nbhqo4xy2ino.ovhcloud-fr-1/ |
+------------------------+----------+---------------------------------------------------------+
```
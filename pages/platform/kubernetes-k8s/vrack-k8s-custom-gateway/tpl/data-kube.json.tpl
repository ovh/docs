{
  "region": "GRA9",
  "name": "demo",
  "version": "1.23",
  "nodepool": {
    "flavorName": "b2-7",
    "antiAffinity": false,
    "monthlyBilled": false,
    "autoscale": false,
    "desiredNodes": 3
  },
  "privateNetworkId": "@privateNetworkId@",
  "privateNetworkConfiguration" :{
	"privateNetworkRoutingAsDefault": true,
	"defaultVrackGateway": "192.168.0.1"
  }
}

{
  "flavorId": "@rtrFlavorId@",
  "imageId": "@rtrImageId@",
  "monthlyBilling": false,
  "name": "demo-router",
  "networks": [
    {
      "networkId": "@vlanId@",
      "ip": "192.168.0.1"
    },
    {
      "networkId": "@pubnwGRA9Id@"
    }
  ],
  "region": "GRA9",
  "sshKeyId": "@sshKeyGRA9Id@",
  "userData": "#!/bin/sh\n \n# Inhib Cloud-init network configuration\necho \"network: {config: disabled}\" > /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg\n \n# Build new netplan (remove cloud-init one)\nrm /etc/netplan/*.yaml\n \ncat <<EOF > /etc/netplan/config.yaml\nnetwork:\n  version: 2\n  ethernets:\n        ens3:\n        dhcp4: true\n        ens4:\n        dhcp4: true\n        dhcp4-overrides:\n        use-routes: false\nEOF\n \nnetplan apply\n \n# Enable routing\necho \"net.ipv4.ip_forward = 1\" >> /etc/sysctl.conf\nsysctl -p\n \n# Enable persistance on iptables\necho iptables-persistent iptables-persistent/autosave_v4 boolean true | debconf-set-selections\necho iptables-persistent iptables-persistent/autosave_v6 boolean true | debconf-set-selections\napt update && apt install -y iptables-persistent\nsystemctl enable --now iptables.service\n \n# Enable NAT on public interface\niptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE\n \n# Disable public network to be routed in the private network\niptables -P FORWARD DROP\niptables -A FORWARD -i ens4 -j ACCEPT\niptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT\n \n# Persist rules\niptables-save > /etc/iptables/rules.v4"
}

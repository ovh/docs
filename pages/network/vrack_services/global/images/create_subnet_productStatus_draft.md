classes: {
  readyTag: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 1
      shadow: true
      fill: "#82E0AA"
      opacity: 1
    }
  }
  draftTag: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 1
      shadow: true
      fill: "#D7DBDD"
      opacity: 1
    }
  }
  whiteTag: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 3
      fill: white
      opacity: 1
    }
  }
  whiteTagDash: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 3
      fill: white
      opacity: 1
      stroke-dash: 5
    }
  }
}

cadre-01: "" {
  vrs-1: vrs-1 {
    state: DRAFT
    explanation: |json
      "id": "vrs-1234567",
      "vrackId": null,
      "zone": "rbx"
    |
  }
}

cadre-01.vrs-1.state.class: draftTag
cadre-01.vrs-1.class: readyTag
cadre-01.class: whiteTag

cadre-02: "" {
  sub-01: sub-01 {
    explanation: |json
      "id": "sub-9876543",
      "range": "172.16.0.0/26",
      "serviceRange": "172.16.0.0/27",
      "vlan": 0
    |
  }
}

cadre-02.sub-01.class: readyTag
cadre-02.class: whiteTagDash

cadre-01 -> cadre-02

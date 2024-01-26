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
      stroke-width: 1
      shadow: true
      fill: white
      opacity: 1
    }
  }
}

cadre: "" {
  vrs-1: vrs-1 {
    state: DRAFT
    explanation: |json
      "vrackId": null,
      "zone": "rbx"
    |
  }
}

cadre.vrs-1.state.class: draftTag
cadre.vrs-1.class: readyTag
cadre.class: whiteTag

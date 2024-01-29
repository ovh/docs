direction: down

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
  yellowTag: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 1
      shadow: true
      fill: "#F7DC6F"
      opacity: 1
    }
  }
  errorTag: {
    style: {
      stroke: "#53C0D8"
      stroke-width: 1
      shadow: true
      fill: "#F1948A"
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

cadre-01: "Infrastructure configuration of the ressource PUSHED to the OneAPI"

cadre-01.class: whiteTag

cadre-02: "Infrastructure configuration of the ressource NOT PUSHED to the OneAPI"
cadre-02.class: whiteTagDash

states: RESOURCE STATUS {
  ready: READY
  creating: CREATING
  updating: UPDATING
  deleting: DELETING
  error: ERROR
}

states.ready.class: readyTag
states.error.class: errorTag
states.creating.class: yellowTag
states.updating.class: yellowTag
states.deleting.class: yellowTag

cadre-01 -- cadre-02 -- states

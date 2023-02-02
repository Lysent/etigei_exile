Events.on(ContentInitEvent, e => {
    Vars.content.block("etigeum-gas-deposit").attributes.set(Attribute.get("gas-deposit"), 1);
});
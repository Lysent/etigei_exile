Events.on(ContentInitEvent, e => {
    Vars.content.block("etigeum-gas-deposit").attributes.set(Attribute.get("gas-deposit"), 1);
    Vars.content.block("etigeum-fracker").attribute = Attribute.get("gas-deposit");
});
Events.on(ContentInitEvent, e => {
    Vars.content.block("gas-deposit").attributes.set(Attribute.get("gas-deposit"), 1);
});

Vars.content.block("fracker").attribute = Attribute.get("gas-deposit");
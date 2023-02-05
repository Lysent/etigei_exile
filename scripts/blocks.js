Events.on(ContentInitEvent, e => {
    Vars.content.block("etigeum-gas-deposit").attributes.set(Attribute.get("gas"), 1);

    Vars.content.block("etigeum-fracker").attribute = Attribute.get("gas");
    Vars.content.block("etigeum-hydrotherm").attribute = Attribute.get("gas");
});
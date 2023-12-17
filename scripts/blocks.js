Events.on(ContentInitEvent, e => {
    Vars.content.block("etigeox-gas-deposit").attributes.set(Attribute.get("gas"), 1);

    Vars.content.block("etigeox-fracker").attribute = Attribute.get("gas");
    Vars.content.block("etigeox-hydrotherm").attribute = Attribute.get("gas");
});
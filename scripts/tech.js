// Tech tree node attacher ripped off from the ContentParser
const addTechNode = (research) => {
    const node = new TechTree.TechNode(null, research.unlock, research.requirements || ItemStack.empty);

    log("etigeox", "created tech node")

    if (research.planet) node.planet = Vars.content.getByName(ContentType.planet, research.planet);

    log("etigeox", "updated planet")

    const parent = TechTree.all.find(t => t.content == research.parent && (t.planet !== null ? t.planet == node.planet : true));

    log("etigeox", "(potentially) found parent")

    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }

    log("etigeox", "childed node")

    //reparent the node
    node.parent = parent;

    log("etigeox", "reparented node")
};

Events.on(ContentInitEvent, () => {
    // Serpulo
    addTechNode({
        parent: Vars.content.item("etigeox-refined-etigeum"),
        unlock: Vars.content.item("etigeox-smart-compound"),
        requirements: ItemStack.with(
            Items.silicon, 100,
            Items.surgeAlloy, 75
        ),
        planet: "serpulo"
    });
    addTechNode({
        parent: Vars.content.item("etigeox-refined-etigeum"),
        unlock: Vars.content.item("etigeox-uu-matter"),
        requirements: ItemStack.with(
            Items.silicon, 5000
        ),
        planet: "serpulo"
    });

    // Rubiginosus
    // Nothing :/

    // Neoulandia
    addTechNode({
        parent: Vars.content.item("etigeox-timber"),
        unlock: Items.sand,
        planet: "Neoulandia"
    });
    addTechNode({
        parent: Items.sand,
        unlock: Items.silicon,
        planet: "Neoulandia"
    });
});
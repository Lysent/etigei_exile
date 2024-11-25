// Tech tree node attacher ripped off from the ContentParser
const chainNode = (parent, research) => {
    const node = new TechTree.TechNode(null, research.unlock, research.requirements || ItemStack.empty);

    log("etigeox", "created tech node");

    if (research.planet) node.planet = Vars.content.getByName(ContentType.planet, research.planet);

    log("etigeox", "updated planet");

    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }

    log("etigeox", "childed node");

    //reparent the node
    node.parent = parent;

    log("etigeox", "reparented node");

    return node;
};

const addTechNode = (research) => {
    const parent = TechTree.all.find(t => t.content == research.parent && (t.planet !== null ? t.planet == node.planet : true));

    log("etigeox", "(potentially) found parent");

    const node = chainNode(parent, research);

    return node;
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
    const neoulandia_sand = addTechNode({
        parent: Vars.content.item("etigeox-timber"),
        unlock: Items.sand,
        planet: "etigeox-Neoulandia"
    });
    const neoulandia_coal = chainNode(neoulandia_sand, {
        unlock: Items.coal,
        planet: "etigeox-Neoulandia"
    });
    chainNode(neoulandia_coal, {
        unlock: Items.silicon,
        planet: "etigeox-Neoulandia"
    });
});
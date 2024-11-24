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

addTechNode({
    parent: Vars.content.item("etigeox-refined-etigeum"),
    unlock: Vars.content.item("etigeox-alumin"),
    requirements: ItemStack.with(
        Items.copper, 100,
        Items.lead, 75
    ),
    planet: "serpulo"
});
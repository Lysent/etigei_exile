// Tech tree node attacher ripped off from the ContentParser
const addTechNode = (research) => {
    const node = new TechTree.TechNode(null, research.unlock, research.requirements || ItemStack.empty);

    if (research.planet) node.planet = Vars.content.getByName(ContentType.planet, research.planet);

    const parent = TechTree.all.find(t => t.content == research.parent && (t.planet !== null ? t.planet == node.planet : true));

    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }

    //reparent the node
    node.parent = parent;
};

addTechNode({
    parent: Items.copper,
    unlock: Items.tungsten,
    requirements: ItemStack.with(
        Items.copper, 100,
        Items.lead, 75
    ),
    planet: "serpulo"
});
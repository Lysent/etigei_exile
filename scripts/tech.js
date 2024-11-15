const Vars = require("mindustry.Vars");
const TechTree = require("mindustry.content.TechTree");
const Items = require("mindustry.content.Items");
const Blocks = require("mindustry.content.Blocks");

const erekirItem = Items.tungsten;

TechTree.node(Items.copper, erekirItem, () => {
    this.requirements = ItemStack.with(
        Items.copper, 100,
        Items.lead, 75
    );
});

// Buildable Core
Blocks.coreShard.buildVisibility = BuildVisibility.shown;

// Toxopid Build
UnitTypes.toxopid.buildSpeed = 0.5;

// Bullets
const scrapBulletSalvo = extend(FlakBulletType, {
    speed: 4,
    lifetime: 65,
    damage: 14,
    shootEffect: Fx.shootSmall,
    ammoMultiplier: 2,
});

Blocks.salvo.ammoTypes.put(Vars.content.item("scrap"), scrapBulletSalvo);
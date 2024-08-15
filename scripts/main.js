// Vanilla Block Changes
Blocks.coreShard.buildVisibility = BuildVisibility.shown;
Blocks.beamLink.maxNodes = 2;

// Vanilla Unit Changes
UnitTypes.toxopid.buildSpeed = 0.5;

// Vanilla Bullet Changes
const scrapBulletSalvo = extend(FlakBulletType, {
    speed: 4,
    lifetime: 65,
    damage: 14,
    shootEffect: Fx.shootSmall,
    ammoMultiplier: 2,
});

Blocks.salvo.ammoTypes.put(Vars.content.item("scrap"), scrapBulletSalvo);
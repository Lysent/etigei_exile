Events.on(ContentInitEvent, e => {
    Vars.content.planet("Rubiginosus").generator = new ErekirPlanetGenerator();
});
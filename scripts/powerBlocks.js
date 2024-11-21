const solarSpin = extend(SolarGenerator, "solar-windturbine", {
    drawer: new DrawMulti(
        new DrawDefault(),
        new DrawRegion("-rotator", 0.3, {
            x: 4,
            y: -4,
            rotateSpeed: 2
        })
    )
});
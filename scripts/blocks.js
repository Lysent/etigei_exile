const fuelGenerator = Vars.content.block("fuel-generator");

fuelGenerator.consume.add(new ConsumeItemFlammable());
fuelGenerator.consume.add(new ConsumeItemExplode());
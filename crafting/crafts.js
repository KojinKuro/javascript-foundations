function createMaterial(name,unit,costPerUnit) {
  return {name,unit,costPerUnit}
}

function calculateMaterialCost(material,amount) {
  return `${amount} ${material.unit}s of ${material.name} costs $${amount*material.costPerUnit}.`;
}

// var myCloset = createSupplyCloset([fabric, paint, yarn]);

// assert.deepEqual(myCloset, { supplies: ['fabric', 'paint', 'yarn'] });

function createSupplyCloset(items) {
  var closet = { supplies: [] };
  if (arguments.length) items.map((item) => closet.supplies.push(item.name));

  return closet;
}

function addSupply(closet,item) {
  closet.supplies.push(item.name);
  return closet.supplies;
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  // createNewProject,
  // compareMaterials
}
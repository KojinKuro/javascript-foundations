function createMaterial(name,unit,costPerUnit) {
  return {name,unit,costPerUnit}
}

function calculateMaterialCost(material,amount) {
  return `${amount} ${material.unit}s of ${material.name} costs $${amount*material.costPerUnit}.`;
}

function createSupplyCloset(items) {
  var closet = { supplies: [] };
  if (arguments.length) items.map((item) => closet.supplies.push(item.name));

  return closet;
}

function addSupply(closet,item) {
  if (closet.supplies.includes(item.name)) return `You already have ${item.name} in your closet!`;

  closet.supplies.push(item.name);
  return closet.supplies;
}

function createNewProject(materialsNeeded, status = 'not started') {
  return {materialsNeeded, status};
}

function compareMaterials(project, supplies) {
  const SUCCESS_MSG = 'Yay! You can start this project!';
  const FAILURE_MSG = 'Oh no! You need to go shopping before you can start this project!';

  
  return 
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}
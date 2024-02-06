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

function compareMaterials(project, closet) {
  const SUCCESS_MSG = 'Yay! You can start this project!';
  const FAILURE_MSG = 'Oh no! You need to go shopping before you can start this project!';

  for(let i=0; i < project.materialsNeeded.length;++i) {
    var nameSearch = project.materialsNeeded[i].name;
    if(!closet.supplies.includes(nameSearch)) { return FAILURE_MSG; }
  }

  return SUCCESS_MSG;
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}
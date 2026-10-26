let servicios = [
  { id: 1, name: "Tratamiento de conducto", description: "Conducto completo", duration: 60, price: 300000, category: "Endodoncia", available: true },
  { id: 2, name: "Extracción", description: "Extracción simple", duration: 60, price: 200000, category: "OdontologíaGeneral", available: true },
  { id: 3, name: "Prótesis remobible", description: "Prótesis dental", duration: 60, price: 1300000, category: "ortodoncia", available: true },
  { id: 4, name: "Blanqueamento láser", description: "Blanqueamiento completo", duration: 60, price: 80000, category: "OdontologíaGeneral", available: true },
  { id: 5, name: "Incrustación", description: "Incrustación Pieza", duration: 60, price: 300000, category: "Endodoncia", available: true }
];


const validateServiceData = (data, isUpdate = false) => {
 
  return true; 
};

export const getServices = () => {
  return servicios;
};

export const getServiceById = (id) => {
  return servicios.find(service => service.id === Number(id)) || null;
};

export const addService = (serviceData) => {
  validateServiceData(serviceData, false);
  
  const nuevoId = servicios.length > 0 ? servicios[servicios.length - 1].id + 1 : 1;
  
  const nuevoServicio = { id: nuevoId, ...serviceData };
  servicios.push(nuevoServicio);
  return nuevoServicio;
};

export const updateService = (id, updatedData) => {
  const indice = servicios.findIndex(service => service.id === Number(id));
  if (indice === -1) return null;
  
  validateServiceData(updatedData, true);
  
  servicios[indice] = { ...servicios[indice], ...updatedData, id: Number(id) };
  return servicios[indice];
};

export const deleteService = (id) => {
  const indice = servicios.findIndex(service => service.id === Number(id));
  if (indice === -1) return false;
  
  servicios.splice(indice, 1);
  return true;
};
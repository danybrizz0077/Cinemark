const clientsController = {};
import clientsModel from "../models/Clients.js";

// S E L E C T
clientsController.getClients = async (req, res) => {
  const clients = await productsModel.find();
  res.json(clients);
};

// I N S E R T
clientsController.insertClients = async (req, res) => {
  const { name, email, password, telephone, address, status } = req.body;
  const newClient = new clientsModel({ name, email, password, telephone, address, status });
  await newClient.save();
  res.json({ message: "cliente guardado" });
};

// D E L E T E
clientsController.deleteClients = async (req, res) => {
  await clientsModel.findByIdAndDelete(req.params.id);
  res.json({ message: "cliente eliminado" });
};

// U P D A T E
clientsController.updateClients = async (req, res) => {
  const { name, email, password, telephone, address, status  } = req.body;
  const updateClient = await clientsModel.findByIdAndUpdate(
    req.params.id,
    {  name, email, password, telephone, address, status  },
    { new: true }
  );

  if(!updateClient){
    res.json({ message: "client not found" });
  }else {
    res.json({ message: "client updated" });
  }
};

export default clientsController;
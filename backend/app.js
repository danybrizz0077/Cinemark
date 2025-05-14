// Importo todo lo de la libreria express
import express from "express";
import clientsRoutes from "./src/routes/clients.js";
import employeesRoutes from "./src/routes/employees.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js";
import loginRoutes from "./src/routes/login.js";
import cookieParser from "cookie-parser";
import logoutRoutes from "./src/routes/logout.js"
import registerClientsRoutes from "./src/routes/registerClients.js";
import moviesRoutes from "./src/routes/movies.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

// Creo una constante que es igual
// a la libreria que importé y la ejecuta
const app = express();

// Uso un middleware para que acepte datos Json
app.use(express.json());

// que acepte cookies
app.use(cookieParser());

// Definir la ruta
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes); 

app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

app.use("/api/registerClients", registerClientsRoutes)
app.use("/api/movies", moviesRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

// Exporto la constante para poder usar express en otros lados
export default app;

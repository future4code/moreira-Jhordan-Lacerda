import { app } from "./app";
import { getAllUsersByName } from "./endpoints/getAllUsers";
import { getAllUsersByOrder } from "./endpoints/getAllUsersByOrder";
import { getAllUsersByType } from "./endpoints/getAllUsersByType";

app.get("/users", getAllUsersByName);
app.get("/users/:type", getAllUsersByType);
app.get("/users/search", getAllUsersByOrder);

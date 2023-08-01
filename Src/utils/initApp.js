import connectionDB from "../../DB/connection.js";
import * as AllRouters from '../index.routes.js';
import { globalResponseError } from "./errorHandling.js";
import cors from 'cors';

export const initApp=(app, express)=>{
    // running port
    const port = process.env.PORT||5000;
    // buffering data
    app.use(express.json({}));
    // cors policy
    app.use(cors());
    // connect DB 
    connectionDB();

 //Setup API Routing

app.use("/api/auth",AllRouters.authRoutes);
app.use("/api/user",AllRouters.userRoutes);
// app.use("/api/post",AllRouters.);
// app.use("/api/comment",AllRouters.);
// app.use("/api/category",AllRouters.);

// in-valid routings
app.all('*', (req, res, nxt) => {
    res.send("In-valid Routing Please check url  or  method")
});

// fail response
app.use(globalResponseError);
// server running
app.listen(port, () => console.log(`Server Is Running On Port ${port}!!!`));
}
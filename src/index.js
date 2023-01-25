import app from "./app";

const principal=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

principal();
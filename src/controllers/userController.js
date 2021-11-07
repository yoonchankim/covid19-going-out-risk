export const main =(req,res)=>{
    res.send("main")
};
export const analysis =(req,res)=>res.send("analysis");
export const home =(req,res)=>{
    res.status(200).sendFile(process.cwd()+"/index.html");
};

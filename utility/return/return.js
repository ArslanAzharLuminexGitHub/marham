module.exports =  function ret(res,status,msg){
    return res.status(status).json({ "ALERT" :`${msg}` });
}
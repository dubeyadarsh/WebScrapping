const url="https://www.shiksha.com/engineering/colleges/b-tech-colleges-mumbai-all"
const request=require("request")
const cheerio=require("cheerio")
const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors()); 
app.use(express.json());

app.get("/",async(req,res)=>{
     await request(url,cb)
    let list=[]
    function cb(err,response,html){
        if(err){
            console.log(err)
        }else{
            extractHtml(html);
        }
    }

    function extractHtml(html){
        let $=cheerio.load(html);
        //full page searching
       let clgArr=$(".elipsysBox");
       for(let i=0;i<clgArr.length;i++){
           list[i]= ($(clgArr[i]).text());
           
     
       }
       res.send(list);
    }
    
    
});
app.listen(3001,()=>{
        console.log("Server running at port 3001");
});
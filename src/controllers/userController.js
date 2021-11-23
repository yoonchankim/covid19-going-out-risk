import { parse } from "@babel/core";
import Value from "../models/covidValue"
let parseString=require('xml2js').parseString;
var request = require('request');
var date1Case;
let dateCase1=0;
var a=0;
var b=0;
const confirmedCase=async(date)=>{
    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=vAxz6OKqJFy2Va7FLF%2BFXIC5Y8gIfj2FvbuNosfomKkyEa5bL4cV9BD%2FDU7p9SuKnxMLbD2gjQWLxaWNMHxDiw%3D%3D';
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
    queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(date);
    queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(date); 
    return new Promise(resolve=>{
         request({
             url: url + queryParams,
             method: 'GET'
         }, function (error, response, body) {
             if(error) throw error;
             parseString(body,(err,result)=>{
                 if(err) throw err;
                 let parseData=result
                 date1Case=parseData.response.body[0].items[0].item[0].decideCnt[0];
     			resolve(date1Case); 
             })
         });
     })      
}

async function confirmedCase2(date1,date2){
   await confirmedCase(date1)
     .then(function(result){
         a=result
  });
     await confirmedCase(date2).then(function(result){
         b=result;
     });
    return parseInt(a)-parseInt(b);
 }

 a = confirmedCase("20211123");
 b = confirmedCase("20211122");
confirmedCase2("20211123","20211122");
 
 console.log(a);
 console.log(b);
export const main =(req,res)=>{
};
export const analysis =(req,res)=>res.send("analysis");
export const home =(req,res)=>{
    res.status(200).sendFile(process.cwd()+"/index.html");
};
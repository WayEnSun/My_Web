var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'web'
}); 
connection.connect();
app.use(express.static("./"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var USER;
app.post("/ajaxjs.js", function(request, response){
  var sql;
  var ss=request.body;
  console.log(ss);
  if(ss.work!==undefined) 
  {
  if(ss.completed==true){	  
	  ss.completed=1;
  }else{
	   ss.completed=0;
  }
  sql='insert into '+USER+' (work,date,EndDate,endYear,endMonth,endDay,endHour,endMinute,urgency,completed) values('+
  "'"+ss.work+"'"+','+
  "'"+ss.date+"'"+","+
  "'"+ss.EndDate+"'"+","+
  ss.endYear+","+
  ss.endMonth+","+
  ss.endDay+","+
  ss.endHour+","+
  ss.endMinute+","+
  ss.urgency+","+
  ss.completed+')' ;
   console.log(sql);
  }
  else if(ss.idd!==undefined){	  
	  sql='delete from '+ USER+' where id='+(ss.idd+1);
	   console.log(sql);
  }
  else if(ss.oo!==undefined){	  
	  sql='update '+ USER+' set completed=1 where id='+(ss.num+1);
	  console.log(sql);
  }
  else if(ss.id!==undefined){
	  sql='update '+ USER+' set '+"List='"+ss.Belong+"' where id="+(ss.id+1);
	  console.log(sql);	  
  }
  else if(ss.Reg!==undefined){	  
	  sql='create table '+ss.Account
	  +'(id bigint(200) not null auto_increment,' 
      +'work varchar(20) not null,'
      +'date  Date,'
      +'EndDate varchar(100) not null,'
      +'endYear SMALLINT,'
      +'endMonth SMALLINT,'
      +'endDay  SMALLINT,'
      +'endHour SMALLINT,'
      +'endMinute SMALLINT,'
      +'urgency SMALLINT,'
      +'completed boolean,'
	  +'List varchar(20),'
      +'primary key(id))';	  
	  console.log(sql);	  
  }
  else
  {
	  USER=ss.str;
      sql='select* from '+ss.str;
      console.log(sql);
  }
  var object;
  connection.query(sql,function (err, result) 
  {  
         console.log('--------------------------SELECT----------------------------');
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
		  var error={err:"ERROR"};
		  response.send(error);		  
          return;
        }
        else{
			   console.log('修改成功');		 
			   result = JSON.stringify(result);
               result = JSON.parse(result);
			   object=result;
			   response.send(object);			
		}        
       console.log('------------------------------------------------------------\n\n');  
  });
});
app.listen(3000, function() {   
    console.log("server start");
});

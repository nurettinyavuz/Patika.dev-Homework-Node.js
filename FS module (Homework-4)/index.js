const fs = require('fs');

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}',"utf-8",(err) => {
    if(err) console.log(err)
    console.log("VERİLER EKLENDİ");
});

fs.readFile("employees.json","utf-8",(err,data)=>{
    if(err) console.log(err)
    console.log("VERİLER OKUNDU")
});

fs.appendFile("employees.json",'\n{"name": "Employee 2 Name", "salary": 5000}',"utf-8",(err)=>{
    if(err) console.log(err)
    console.log("VERİLER GÜNCELLENDİ");
});
 
fs.unlink("employees.json",(err)=>{
    if(err) console.log(err)
    console.log("DOSYA SİLİNDİ");
}); 
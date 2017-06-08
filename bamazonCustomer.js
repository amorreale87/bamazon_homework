var columnify = require('columnify');
var inquirer=require('inquirer');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazonDB'
});
var custBid;
var getChoice;


connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+ connection.threadId);
});


function getProductList() {
var queryString='SELECT item_id,product_name, department_name, price, stock_quantity from products';
connection.query(queryString, function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  else {
      var columns = columnify(results, {
  config: {
    item_id: {
      minWidth: 20
    },
    itemname: {
        minWidth: 50
    },
    currentbid: {
        minWidth:10
    }
  }
})
     console.log(columns); 
}
});
}



function getProductId() {
    inquirer.prompt([
        {
    type: "input",
   name: "id",
   message: "What is the name of the item?"
 },
       {
        type: "input",
   name: "stock",
   message: "What is the stock of item?"
 }

    
        
        ]).then(function(data) {
        console.log("Starting DB write");
        //console.log(postItem)
        querystring = 'SELECT item_id, stock_quantity from products where item_id="' + data.id + '"';
        connection.query(querystring, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            else {
                if(data.stock > results[0].stock_quantity)
                {
                    console.log("Insufficient quantity!");
                }
                else{
                    console.log("Valid purchase");
                }
                /*var sufficient = false
                for(var i in results){
                    if(data.id == results[i].item_id && data.stock > results[i].stock_quantity){
                        sufficient = true;
                        break;
                    }
                    if(sufficient == false){
                        console.log("Insufficient quantity!");
                    }
                    else{
                        console.log("Valid Purchase");
                    }
                }*/
            }
    })
     //console.log(columns); 
})
         //connection.query("INSERT INTO products SET ?", {
  //itemname: postItem.postitem,
    //currentbid: parseFloat(postItem.startingbid)
//}, function(err, res) {
 //           console.log("DB Result: "+res);
 // });
  
}



function customerOptions() {
    
    /*inquirer.prompt([
        {
   type: "rawlist",
   name: "action",
   message: "What do you want to do?",
   choices: ["Post an item", "Place a bid on an item"]
 }
    
        
        ]).then(function(validateSelection) {
         
            getChoice=validateSelection.action;
               console.log(getChoice);
            if(getChoice=="Place a bid on an item") {
                getBidList();
            }
            if(getChoice=="Post an item") {
                postItem();
            }    
            else {
                console.log("Pick a valid selection");
                customerOptions();
            }
  
});*/

getProductList();
getProductId()


}  





  


customerOptions();
// console.log("Finished Running Function customerOptions()");

// function updateQuantity() {
// var queryString="UPDATE products SET stock_quantity=(stock_quantity-"+custQuantity+") where item_id="+custSelectedID;
// console.log(queryString);
// connection.query(queryString, function (error, results, fields) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       console.log("Update completed!");
//     }         
// });
// }
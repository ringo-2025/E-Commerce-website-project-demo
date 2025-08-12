import express, { response } from "express";
import dotenv from "dotenv";
import { request } from "http";
import mysql from "mysql";

//Load variables
dotenv.config();

//Start server
const app = express();

app.use(express.static("public"));
app.use(express.json());

//Hone Route
app.get("/", function(req, res){
    res.sendFile("Guitar Galaxy.html", {root: "public"});
});

app.get("/Guitar_Galaxy", function(req, res){
    res.sendFile("Guitar Galaxy.html", {root: "public"});
});


app.get("/Company_Information", function(req, res){
    res.sendFile("Company Information.html", {root: "public"});
});

app.get("/Guitar_Galaxy_Online_Shop", function(req, res){
    res.sendFile("Guitar Galaxy Online Shop.html", {root: "public"});
});

app.get("/Guitar1_Info", function(req, res){
    

    let responseText = "<!DOCTYPE html>";
    responseText += "<html lang='en'>";
    responseText += "<head>"
    responseText += "<meta charset='utf-8'>"
    responseText += "<title>Guitar1 Info</title>"
    responseText += "<link rel='stylesheet' href='styles.css'>"
    responseText += "</head>"
    responseText += "<body style='background-color: #fffce7; margin: 0;'>"
    responseText += '<div class="page-title-inner container align-top text-center flex-row-col medium-flex-wrap">'

    responseText +=	'<div style="background-color:black;"><font color="white"><a href="/Guitar_Galaxy" style="color: white;">首頁</a> <span class="divider">/</span> <a href="/Company_Information" style="color: white;">關於我們</a> <span class="divider">/</span> <a href="/Guitar_Galaxy_Online_Shop" style="color: white;">線上商店</a></font></div>'
    responseText += '</div>'

    responseText += '<a href="/Guitar_Galaxy_Online_Shop" class="photo-link">'
    responseText +='<img src="reverse-button.svg" class="reverse">'
    responseText += '</a>'

    responseText += '<img src="guitar_1.png" height="700px" width="auto" style=" margin: 200px; float: left; border: 1px solid #555;">'

    responseText +='<br>'
	responseText +='<br>'
	responseText +='<br>'
	responseText +='<br>'
	responseText +='<br>'
	responseText +='<br>'
	responseText +='<br>'
	responseText +='<h2 style="position: absolute; left: 650px;">'
    responseText +="<u>Taylor 50th Anniversary Builder's Edition 314ce LTD - Kona Burst</u></h1>"
	responseText +='<p style="position: absolute; left: 650px;"><font size="5"><b>'
	responseText +='<br><br><br>'
	responseText +='尺寸：41吋GA缺角桶身<br><br>'
	responseText +='	面板：西卡雲杉 (Sitka Spruce)<br><br>'
	responseText +='	背側板：梣木(Urban Ash)<br><br>'
	responseText +='	琴頸：桃花心木(Tropical Mahogany)<br><br>'
	responseText +='	琴碼：西非烏木(West African Crelicam Ebony )<br><br>'
	responseText +='	拾音器：ES-2 (新款拾音器)<br><br>'
	responseText +='	琴盒：原廠硬盒(Taylor Deluxe Hardshell Brown)<br><br>'
	responseText +="	琴弦：D'Addario XS Coated Phosphor Bronze Light (.012 - .053)<br><br>"
	responseText +='	切角：Beveled Cutaway<br><br>'
	responseText +='	立木系統：V-Bracing<br><br>'
	responseText +='	產地：美國'
	responseText +='</b> '
	responseText +='</font>'
	responseText +='</p>'

	responseText +='<div class="container">'
	responseText +='	<img width="1903" height="100" style="margin:0%;" src="black.jpg" />'
	responseText +='	<p style="position: absolute; bottom: 50px; right: 900px;"><font size = "3">email: abcd@gmail.hk</font></p>'
	responseText +='	<p style="position: absolute; bottom: 15px; right: 920px;"><font size = "3">contact: 12345678 </font></p>'
	responseText +='</div>'

responseText +='</body>'


responseText +='</html>'
res.send(responseText);
});


app.get("/Guitar2_Info", function(req, res){

    let responseText = "<!DOCTYPE html>";
    responseText += "<html lang='en'>";
    responseText += "<head>"
    responseText += "<meta charset='utf-8'>"
    responseText += "<title>Guitar2 Info</title>"
    responseText += "<link rel='stylesheet' href='styles.css'>"
    responseText += "</head>"
    responseText += "<body style='background-color: #fffce7; margin: 0;'>"
    responseText += '<div class="page-title-inner container align-top text-center flex-row-col medium-flex-wrap">'

    responseText +=	'<div style="background-color:black;"><font color="white"><a href="/Guitar_Galaxy" style="color: white;">首頁</a> <span class="divider">/</span> <a href="/Company_Information" style="color: white;">關於我們</a> <span class="divider">/</span> <a href="/Guitar_Galaxy_Online_Shop" style="color: white;">線上商店</a></font></div>'
    responseText += '</div>'

    responseText += '<img src="guitar_2.png" height="700px" width="auto" style=" margin: 200px; float: left; border: 1px solid #555;">'
    responseText += '<a href="/Guitar_Galaxy_Online_Shop" class="photo-link">'
    responseText += '<img src="reverse-button.svg" class="reverse">' 
    responseText += "</a>"

    responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
    responseText += '<h1 style="position: absolute; left: 550px;"><u>ESP Exhibition 2024 EX24-11 HORIZON CTM FR</u></h1>'
    responseText += '<p style="position: absolute; left: 550px;"><font size="5"><b>'
    responseText += '<br><br><br><br><br>'
    responseText += 'BODY: (Top)Quilted Maple w/Natural Binding, (Center)Chestnut, (Back)Flamed Walnut (Total Thickness 50mm)<br><br><br>'
    responseText += 'NECK:	Flamed Maple,Purple Heart,Walnut 7-Piece<br><br><br>'
    responseText += 'HEAD ANGLE:	14 degrees<br><br><br>'
    responseText += 'GRIP SHAPE:	Thin U<br><br><br>'
    responseText += 'RADIUS:	305R<br><br><br>'
    responseText += 'SCALEL	648mm<br><br><br>'
    responseText += 'NUT	Locknut(42mm/R2)<br><br><br>'
    responseText += 'INLAY:	(Top)Yaksha Skull(夜叉髑髏), (Side)Pearl Dot w/Brass Ring'
    responseText += '</b>'
    responseText += '</font>'
    responseText += '</p>'

    responseText +='<div class="container">'
	responseText +='	<img width="1903" height="100" style="margin:0%;" src="black.jpg" />'
	responseText +='	<p style="position: absolute; bottom: 50px; right: 900px;"><font size = "3">email: abcd@gmail.hk</font></p>'
	responseText +='	<p style="position: absolute; bottom: 15px; right: 920px;"><font size = "3">contact: 12345678 </font></p>'
	responseText +='</div>'

    responseText +='</body>'


    responseText +='</html>'
    res.send(responseText);
});

app.get("/Guitar3_Info", function(req, res){

    let responseText = "<!DOCTYPE html>";
    responseText += "<html lang='en'>";
    responseText += "<head>"
    responseText += "<meta charset='utf-8'>"
    responseText += "<title>Guitar3 Info</title>"
    responseText += "<link rel='stylesheet' href='styles.css'>"
    responseText += "</head>"
    responseText += "<body style='background-color: #fffce7; margin: 0;'>"
    responseText += '<div class="page-title-inner container align-top text-center flex-row-col medium-flex-wrap">'

    responseText +=	'<div style="background-color:black;"><font color="white"><a href="/Guitar_Galaxy" style="color: white;">首頁</a> <span class="divider">/</span> <a href="/Company_Information" style="color: white;">關於我們</a> <span class="divider">/</span> <a href="/Guitar_Galaxy_Online_Shop" style="color: white;">線上商店</a></font></div>'
    responseText += '</div>'

    responseText += '<img src="guitar_3.png" height="700px" width="auto" style=" margin: 200px; float: left; border: 1px solid #555;">'
    responseText += '<a href="/Guitar_Galaxy_Online_Shop" class="photo-link">'
    responseText += '<img src="reverse-button.svg" class="reverse">' 
    responseText += "</a>"

    responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
    responseText += '<h1 style="position: absolute; left: 700px;"><u>Boden Singularity NX 7 True Temperament</u></h1>'
    responseText += '<p style="position: absolute; left: 700px;"><font size="5"><b>'
    responseText += '<br><br><br><br><br>'
    responseText += 'Model #: 9236091427<br><br><br>'
    responseText += 'Serial #: LXX0197<br><br><br>'
    responseText += 'Series: 70th Anniversary Stratocasters<br><br><br>'
    responseText += 'Color: Aged Black over 2-Color Sunburst<br><br><br>'
    responseText += 'Weight : 7.40 lb'
    responseText += '</b>'
    responseText += '</font>'
    responseText += '</p>'

    responseText +='<div class="container">'
	responseText +='	<img width="1903" height="100" style="margin:0%;" src="black.jpg" />'
	responseText +='	<p style="position: absolute; bottom: 50px; right: 900px;"><font size = "3">email: abcd@gmail.hk</font></p>'
	responseText +='	<p style="position: absolute; bottom: 15px; right: 920px;"><font size = "3">contact: 12345678 </font></p>'
	responseText +='</div>'

    responseText +='</body>'


    responseText +='</html>'
    res.send(responseText);
});

app.get("/Guitar4_Info", function(req, res){

    let responseText = "<!DOCTYPE html>";
    responseText += "<html lang='en'>";
    responseText += "<head>"
    responseText += "<meta charset='utf-8'>"
    responseText += "<title>Guitar4 Info</title>"
    responseText += "<link rel='stylesheet' href='styles.css'>"
    responseText += "</head>"
    responseText += "<body style='background-color: #fffce7; margin: 0;'>"
    responseText += '<div class="page-title-inner container align-top text-center flex-row-col medium-flex-wrap">'

    responseText +=	'<div style="background-color:black;"><font color="white"><a href="/Guitar_Galaxy" style="color: white;">首頁</a> <span class="divider">/</span> <a href="/Company_Information" style="color: white;">關於我們</a> <span class="divider">/</span> <a href="/Guitar_Galaxy_Online_Shop" style="color: white;">線上商店</a></font></div>'
    responseText += '</div>'

    responseText += '<img src="blue_lava_original.png" height="700px" width="auto" style=" margin: 200px; float: left; border: 1px solid #555;">'
    responseText += '<a href="/Guitar_Galaxy_Online_Shop" class="photo-link">'
    responseText += '<img src="reverse-button.svg" class="reverse">' 
    responseText += "</a>"

    responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
    responseText += '<br>'
	responseText += '<br>'
	responseText += '<br>'
    responseText += '<h1 style="position: absolute; left: 700px;"><u>Blue LAVA Original</u></h1>'
    responseText += '<p style="position: absolute; left: 700px;"><font size="5"><b>'
    responseText += '<br><br><br><br><br>'
    responseText += '->CNC 高精度接柄琴頸，堅固穩定<br><br>'
    responseText += '->隱藏式磁吸蓋片設計，隨心調節琴頸<br><br>'
    responseText += '->切割利落的鏡面火標，時尚經典Logo<br><br>'
    responseText += '->精工 45 度細膩邊緣，舒適掌握<br><br><br><br><br><br>'

    responseText += '<b>銷售重點</b><br><br>'
    responseText += '<font color="red"><b>BlUE LAVA 繽紛色彩設計，全新上市！</b></font>'
    responseText += '</b>'
    responseText += '</font>'
    responseText += '</p>'

    responseText +='<div class="container">'
	responseText +='	<img width="1903" height="100" style="margin:0%;" src="black.jpg" />'
	responseText +='	<p style="position: absolute; bottom: 50px; right: 900px;"><font size = "3">email: abcd@gmail.hk</font></p>'
	responseText +='	<p style="position: absolute; bottom: 15px; right: 920px;"><font size = "3">contact: 12345678 </font></p>'
	responseText +='</div>'

    responseText +='</body>'


    responseText +='</html>'
    res.send(responseText);
});

app.get("/add_cart", function(req, res){
    
    let responseText = '';

    if(req.query.f_username1 != null){
        responseText += 'Thank you for your order! ' + req.query.f_username1 + '<br>';
		responseText += 'The following items have been added to your shopping cart. <br><br>';
    }
    else if(req.query.f_username2 != null){
        responseText += 'Thank you for your order! ' + req.query.f_username2 + '<br>';
		responseText += 'The following items have been added to your shopping cart. <br><br>';
    }
    else if(req.query.f_username3 != null){
        responseText += 'Thank you for your order! ' + req.query.f_username3 + '<br>';
		responseText += 'The following items have been added to your shopping cart. <br><br>';
    }
    else if(req.query.f_username4 != null){
        responseText += 'Thank you for your order! ' + req.query.f_username4 + '<br>';
		responseText += 'The following items have been added to your shopping cart. <br><br>';
    }

    if(req.query.prod_id1 != null){
        responseText += 'Prod_id1: ' + req.query.prod_id1 + '<br>';
		responseText += 'Qty1: ' + req.query.qty1 + '<br>';
		responseText += 'Price1: ' + req.query.price1 + '<br>';
		responseText += 'Username1: ' + req.query.f_username1 + '<br><br>';
    }
    if(req.query.prod_id2 != null){
        responseText += 'Prod_id2: ' + req.query.prod_id2 + '<br>';
		responseText += 'Qty2: ' + req.query.qty2 + '<br>';
		responseText += 'Price2: ' + req.query.price2 + '<br>';
		responseText += 'Username2: ' + req.query.f_username2 + '<br><br>';
    }
    if(req.query.prod_id3 != null){
        responseText += 'Prod_id3: ' + req.query.prod_id3 + '<br>';
		responseText += 'Qty3: ' + req.query.qty3 + '<br>';
		responseText += 'Price3: ' + req.query.price3 + '<br>';
		responseText += 'Username3: ' + req.query.f_username3 + '<br><br>';
    }
    if(req.query.prod_id4 != null){
        responseText += 'Prod_id4: ' + req.query.prod_id4 + '<br>';
		responseText += 'Qty4: ' + req.query.qty4 + '<br>';
		responseText += 'Price4: ' + req.query.price4 + '<br>';
		responseText += 'Username4: ' + req.query.f_username4 + '<br><br>';
    }

    let now = new Date();
	let cur_date_yyyy_mm_dd = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
	console.log("cur_date_yyyy_mm_dd is: " + cur_date_yyyy_mm_dd);
	let con = mysql.createConnection({
		host: "localhost",
		user: "user99",
		password: "user99",
		database: "com3105"
	});

    con.connect(function(err) {
        if (err) throw err;
        let sql = "";
        let check = false;

        if(req.query.prod_id1 != null){
            sql = "INSERT INTO cart (cust_username, cart_order_date, prod_id, cart_qty, cart_price) VALUES (" +	"'" + req.query.f_username1 + "'," + "'" + cur_date_yyyy_mm_dd + "'," + req.query.prod_id1 + "," + req.query.qty1 + "," + req.query.price1 + ");";
            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
    
                if (result.affectedRows > 0) {
                    check = true;
                } else {
                    responseText += 'MySQL ERROR: Item1 not added!<br>';
                }
                
            });
        }
        if(req.query.prod_id2 != null){
            sql = "INSERT INTO cart (cust_username, cart_order_date, prod_id, cart_qty, cart_price) VALUES (" +	"'" + req.query.f_username2 + "'," + "'" + cur_date_yyyy_mm_dd + "'," + req.query.prod_id2 + "," + req.query.qty2 + "," + req.query.price2 + ");";
            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
    
                if (result.affectedRows > 0) {
                    check = true;
                } else {
                    responseText += 'MySQL ERROR: Item2 not added!<br>';
                }
                
            });
        }
        if(req.query.prod_id3 != null){
            sql = "INSERT INTO cart (cust_username, cart_order_date, prod_id, cart_qty, cart_price) VALUES (" +	"'" + req.query.f_username3 + "'," + "'" + cur_date_yyyy_mm_dd + "'," + req.query.prod_id3 + "," + req.query.qty3 + "," + req.query.price3 + ");";
            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
    
                if (result.affectedRows > 0) {
                    check = true;
                } else {
                    responseText += 'MySQL ERROR: Item3 not added!<br>';
                }
                
            });
        }
        if(req.query.prod_id4 != null){
            sql = "INSERT INTO cart (cust_username, cart_order_date, prod_id, cart_qty, cart_price) VALUES (" +	"'" + req.query.f_username4 + "'," + "'" + cur_date_yyyy_mm_dd + "'," + req.query.prod_id4 + "," + req.query.qty4 + "," + req.query.price4 + ");";
            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
    
                if (result.affectedRows > 0) {
                    check = true;
                } else {
                    responseText += 'MySQL ERROR: Item4 not added!<br>';
                }
                
            });
        }


        responseText += '<br><br>';
		responseText += '<input type="button" value = "Close this page" onclick="self.close();" />';
		res.send(responseText);

        con.end();
    });
});

app.get('/check_out', function(req, res){

    let responseText = '<!DOCTYPE html>';
	responseText += '<head><meta name="viewport" content="width=device-width, initial-scale=1">';
	responseText += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
    responseText += '<link rel="stylesheet" href="stylesShop.css">'
    responseText += '</head>';
	responseText += '<body style="background-color: #fffce7; margin: 0;"> <div class="page-title-inner container align-top text-center flex-row-col medium-flex-wrap">'

	responseText +='<div style="background-color:black;">'
	responseText +='<font color="white">'
	responseText += '<a href="/Guitar_Galaxy" style="color: white;">首頁</a>'
	responseText += '<span class="divider">/</span>'
	responseText += '<a href="/Company_Information" style="color: white;">關於我們</a>'
	responseText += '<span class="divider">/</span> <a href="/Guitar_Galaxy_Online_Shop" style="color: white;">線上商店</a>'
	responseText += '</font>'
	responseText += '</div>'
	responseText += '</div>'
    responseText += '<div style="margin-left:350px; margin-top:50px">'
    responseText +='<script src="https://www.paypal.com/sdk/js?client-id=ATSWa9vavLRPYABa5DAFOb7d6xFXlYIfpC4eE0ML-fo4wvxD7MhswAQkklI625Mqnbudf6psDaPUC5mj">';
	responseText += '</script>';

    let con = mysql.createConnection({
        host: "localhost",
		user: "user99",
		password: "user99",
		database: "com3105"
    });

    con.connect(function(err){
        if (err) throw err;
		var sql = "SELECT DATE_FORMAT(cart.cart_order_date, '%Y-%m-%d') AS order_date, ";
		sql += "cart.prod_id, product.prod_desc, cart.cart_qty, cart.cart_price ";
		sql += "FROM cart ";
		sql += "INNER JOIN product ON cart.prod_id = product.prod_id ";
		sql += "WHERE cart.cust_username = '" + req.query.f_check_out_username + "'";
		sql += "ORDER BY order_date ASC, prod_id DESC;";		
		console.log(sql);
		con.query(sql, function (err, result) {
			if (err) throw err;	
			console.log(result);
			responseText += 'Thank you for your order! ' + req.query.f_check_out_username + '<br>';
			responseText += 'Your order details: <br><br>';
			responseText += '<table border="2">';
			responseText += '<tr><th>Original Order Date</th><th>Product ID</th><th>Product Description</th><th>Quantity</th><th>ItemTotalPrice</th></tr>';
			var total_due = 0;
			for (var i = 0; i < result.length; i++) {
				total_due += result[i].cart_price;
				responseText += '<tr><td>' + result[i].order_date + '</td><td>' + result[i].prod_id + '</td><td>' + result[i].prod_desc + '</td><td>' + result[i].cart_qty + '</td><td>' + result[i].cart_price + '</td></tr>';

				
			}
			responseText += '</table>';
            responseText += '<button onclick="window.location.href=\'/empty_cart?username=' + req.query.f_check_out_username + '\'">Empty Cart</button>';
			responseText += '<br>Total Due: $' + total_due;
			responseText += '<br><br>';

/* paypal information 2 */

			responseText += '<div id="paypal-button-container"></div>';
			responseText += '<p id="txt1"></p>';
			responseText += '<script>';
			responseText += 'paypal.Buttons({';
			responseText += 'createOrder: function(data, actions) {';
			responseText += 'return actions.order.create({';
			responseText += 'purchase_units: [{';
			responseText += 'amount: {';
			responseText += 'value: ' + total_due + '}';
			responseText += '}]';
			responseText += '});';
			responseText += '},';
			responseText += 'onApprove: function(data, actions) {';
			responseText += 'return actions.order.capture().then(function(details) {';
			responseText += 'alert("Transaction completed by " + details.payer.name.given_name);';
			responseText += 'document.querySelector("#txt1").innerHTML = "Payment has completed! This web page can be closed now!";';
			responseText += 'document.querySelector("#txt1").style.backgroundColor = "yellow";';
			responseText += 'document.querySelector("#txt1").style.color = "red";';
			responseText += '});';
			responseText += '}';
			responseText += '}).render("#paypal-button-container");';
			responseText += '</script>';
            responseText += '</div>'
			responseText += '</body></html>';	
			res.send(responseText);
		}); //end of con.query()

        
		con.end();
    });


});

app.get('/empty_cart', function(req, res) {
    let username = req.query.username;
    
    let con = mysql.createConnection({
        host: "localhost",
        user: "user99",
        password: "user99",
        database: "com3105"
    });

    con.connect(function(err) {
        if (err) throw err;

        // Delete all items from the cart for the specified username
        let sql = "DELETE FROM cart WHERE cust_username = " + "'" + username + "'";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Cart emptied for user: " + username);

            // After emptying the cart, redirect back to the check_out page
            res.redirect('/check_out?f_check_out_username=' + username);
        });
    });
});

app.listen(80, function(){

    console.log("Guitar Galaxy.html listening on http://localhost/Guitar_Galaxy or http://127.0.0.1:80/Guitar_Galaxy");
});

console.log("End of Program.")
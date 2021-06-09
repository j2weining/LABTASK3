document.getElementById('form2').hidden = true;
function calmessage() {
    let selection1 = confirm('Are you sure to calculate?');
    if (selection1 == true) {

        document.getElementById('form1').hidden = true;
        document.getElementById('form2').hidden = false;
        var custname = document.getElementById("name").value;
        var itemname1 = document.getElementById("iname").value;
        var price1 = parseFloat(document.getElementById("price").value);
        var quantity1 = parseInt(document.getElementById("quantity").value);
        var itemname2 = document.getElementById("iname2").value;
        var price2 = parseFloat(document.getElementById("price2").value);
        var quantity2 = parseInt(document.getElementById("quantity2").value);

        if (custname && itemname1 && price1 && quantity1 && itemname2 && price2 && quantity2) {
            document.getElementById("displayName").innerHTML = custname;
            document.getElementById("inameDis").innerHTML = itemname1;
            document.getElementById("priceDis").innerHTML = "RM " + (price1.toFixed(2));
            document.getElementById("quantityDis").innerHTML = quantity1;
            document.getElementById("iname2Dis").innerHTML = itemname2;
            document.getElementById("price2Dis").innerHTML = "RM " + (price2.toFixed(2));
            document.getElementById("quantity2Dis").innerHTML = quantity2;

            var totalprice1 = price1 * quantity1;
            document.getElementById("totalprice").innerHTML = "RM " + (totalprice1.toFixed(2));

            var totalprice2 = price2 * quantity2;
            document.getElementById("totalprice2").innerHTML = "RM " + (totalprice2.toFixed(2));

            var grandtotal = totalprice1 + totalprice2;
            document.getElementById("grand").innerHTML = "RM " + (grandtotal.toFixed(2));

            if (document.getElementById("IsMember").checked) {
                var membership = document.getElementById("IsMember").value;
                document.getElementById("memberDis").innerHTML = membership;
            }
            else if (document.getElementById("NotMember").checked) {
                var membership = document.getElementById("NotMember").value;
                document.getElementById("memberDis").innerHTML = membership;
            }

            if (IsMember.checked) {
                var discount = grandtotal * (5 / 100);
                document.getElementById("discount").innerHTML = "RM " + (discount.toFixed(2));
                var fprice = grandtotal - discount;
                document.getElementById("finalprice").innerHTML = "RM " + (fprice.toFixed(2));
            }
            else {
                var nodiscount = 0.00;
                document.getElementById("discount").innerHTML = "RM " + (nodiscount.toFixed(2));
                var fprice2 = grandtotal;
                document.getElementById("finalprice").innerHTML = "RM " + (fprice2.toFixed(2));
            }
        }
        else {
            alert("Please fill in all fields !");
            document.getElementById('form2').hidden = true;
            location.reload();
        }
        return false;
    } else {
        alert('Sorry, Please try again.');
    }
}


var tFname = new Array();
        var tLname = new Array();
        var tAmount = new Array();
        var sum=0;
    
        function add() {
            
            var fname = document.getElementById("FNAME").value;
            var lname = document.getElementById("LNAME").value;
            var amount = document.getElementById("amount").value;

            if(fname != "" && lname != "" && amount != ""){

                sum+=Number(amount);
        
                document.getElementById("ftotal").value = sum;         
        
                var table = document.getElementById("work");
                var numRow = document.getElementById('work').rows.length;
        
                var row = table.insertRow();
                row.id = numRow;
        
                row.insertCell(0).innerHTML = fname;
                row.insertCell(1).innerHTML = lname;
                row.insertCell(2).innerHTML = amount;
        
                tFname.push(fname);
                tLname.push(lname);            
            }else{
                alert("No data is feed or your data is incomplete.")
            }
        }   
    
        function generate() {
            var ran = Math.floor(Math.random() * tAmount.length);
            var printM = `<div>
                  <div class=row>
    <div class="col-4 border fw-bold">name</div>
    <div class="col-4 border fw-bold">father name</div>
    <div class="col-4 border fw-bold">amount</div>
                  </div> 
                  <div class=row style="margin-top:0px">
                    <div class="col-4 border ">${tFname[ran]}</div>
                    <div class="col-4 border ">${tLname[ran]}</div>
                    <div class="col-4 border ">${sum}</div>
                                  </div> 
                </div>`
    
                document.getElementById("win").innerHTML = printM;
        }   
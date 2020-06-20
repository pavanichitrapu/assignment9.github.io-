var table_data = document.getElementById('table-data');
var datarow = document.getElementsByClassName('data-row');

function creattable (){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        var responseData;
        if(xhttp.readyState === 4){
            var response = JSON.parse(xhttp.responseText);
            responseData = response;
            var table = '<table id="tble_data">';
            for (var i = 0; i < response.length; i++) 
            {
               table +='<tr class="data-row" id="'+ response[i].id +'">'
                                            +'<td class="column1">'+response[i].id+'</td>'
                                            +'<td class="column2">'+response[i].firstName+'</td>'
                                            +'<td class="column3">'+response[i].lastName+'</td>'
                                            +'<td class="column4">'+response[i].email+'</td>'
                                            +'<td class="column5">'+response[i].phone
                                            +'</td></tr>';
           
              console.log(response[i].id);
            }
                
              table += "</table>"
             table_data.innerHTML= table

              }

    var table = $('#tble_data');    
    table.on('click', 'tr', function() {
    var g = $(this).attr('id')
    for (i=0; i<responseData.length; i++){
        if(responseData[i].id == g){
  var infoContent = document.getElementById('info-content');
        infoContent.style.display='block';
        infoContent.innerHTML='';
        
        var div = document.createElement('div');
        div.innerHTML = "<b> User selected: </b>" + responseData[i].firstName+' '+responseData[i].lastName;
        
        var divDesc =  document.createElement('div');
        divDesc=document.createTextNode('Description');
        //divDesc.style.fontWeight ='bold';
        var textarea = document.createElement('textarea');
        textarea.cols = "50";
        textarea.rows = "5";
        textarea.setAttribute('readonly', 'readonly');
        textareatxt = document.createTextNode(responseData[i].description);
        //textareatxt.style=('font-weight','bolder');
        textarea.appendChild(textareatxt);
        
        var divSt = document.createElement('div');
        divSt.innerHTML = "<b> Street: </b>" + responseData[i].address.streetAddress;
        
        var divCity = document.createElement('div');
        divCity.innerHTML = "<b> City: </b>" + responseData[i].address.city;
        
        var divAddState = document.createElement('div');
        divAddState.innerHTML = "<b> State: </b>" + responseData[i].address.state;
        
        var divZip = document.createElement('div');
        divZip.innerHTML = "<b> Zip: </b>" + responseData[i].address.zip;
        
        infoContent.appendChild(div);
        infoContent.appendChild(divDesc);
        infoContent.appendChild(textarea);
        infoContent.appendChild(divSt);
        infoContent.appendChild(divCity);
        infoContent.appendChild(divAddState);
        infoContent.appendChild(divZip);
        
    }
}
$('tr.active').removeClass('active');
                $(this).addClass('active');
          });
          }     
    }
    creattable();
   
                

   


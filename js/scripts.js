$(document).ready(function(){
  console.log('scripts loaded');

/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/
  var url = '../NEH_Grants2010s.xml';
  var grants; 
  var title = '';
  var year;
  var amount;
  var description = '';
  var html = '';

  $.ajax({
      type:'GET',
      url: url,
      data: grants,
      dataType: 'xml',
      async: true,
      success: function(grants){
          //console.log(grants);
          var table = document.getElementById('results');
           html += "<tr> " +
              "<th>Project Title</th>" +
              "    <th>Year Awarded</th> " +
              "    <th>Original Amount</th>" +
              "<th>Description</th>" +
              "  </tr>";



          $(grants).find('Grant').each(function(){
              title = $(this).find('ProjectTitle').text();
              year = $(this).find('YearAwarded').text();
              amount = $(this).find('OriginalAmount').text();
              description = $(this).find('ToSupport').text();
              if ($(this).find('ToSupport').text() != "None") {
                  html += "<tr><td>" + title + "</td>" +
                      "<td>" + year + "</td>" +
                      "<td>" + amount + "</td>" +
                      "<td>" + description + "</td></tr>";
              }


          })
          $('#results').append(html);
      }
      
      
  });
    

});

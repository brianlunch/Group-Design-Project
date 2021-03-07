<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script>
$.getJSON('https://spreadsheets.google.com/feeds/cells/1W2YifW1P675zIKGgF2hrcwq678gzzeX_qEDpxQvvOS4/od6/public/basic?alt=json', function(data) {
   
    //console.log(Object.keys(data));
    //console.log(Object.keys(data.feed));
    //console.log(Object.keys(data.feed.entry));
    
    // Entries are indexed from top left to bottom right of all non null cells in the spreadsheet
    
    //console.log(data.feed.entry[0].content.$t);
    for (i = 0; i < data.feed.entry.length; i++) {
    	console.log(data.feed.entry[i].content.$t);
		}
});


</script>
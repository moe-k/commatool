# commatool

This tool helps to create a quick list of items to query for SQL. 

For example let's say you have a list of 1000 upcs (or whatever you may need to query using sql)

UPC1 <br>
UPC2 <br>
.... <br>
UPC1000 <br>

You can take that list and dump it into this quick tool then generate either a quoted list like this

('UPC1',<br>
 'UPC2', <br>
 .... <br>
 'UPC1000')
 
 also, it can generate no quoted list like below. 
 
 (UPC1,<br>
 UPC2, <br>
 .... <br>
 UPC1000)
 
 -- To generate no quoted list select the button 'Comma'
 -- To generate a quoted list select the button 'String & Quote'
 -- To clear both txt boxes select the button 'Clear Both'
 -- To clear the right text box select the button 'Clear Right' 
 -- To clear the left text box select the button 'Clear Left'
 
 If you want to generate a list with semicolon seperating it then select the button 'SemiColon'. Note, that when you select 'SemiColon' the list will be created 
 without any carriage returns.
 
 This tool automatically copies the items to the clipboard if your browser allows that so you can easy cut and paste.

function onEdit(e) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var range = e.range;
  var value = e.value;
  var prev = e.oldValue
  var row = range.getRow();        // Row of the cell where cmd was issued
  var col = range.getColumn();     // Col of the cell where cmd was issued
  var name = sheet.getRange(row, col - 2).getValue();   // Name should be 2 cells to the left of cmd
  var uid = sheet.getRange(row, col + 4).getValue();     // UID should be for now 4 cells to right of cmd !!!   
  
  // type 'v'to make row's data visible
  // type 'u'to make row's data invisible
  if ( value == "v" ) {
    range.setValue("<");
    makeVisible(row, col);
    
  } else if ( value == "u" ) {
    range.setValue(">");
    makeInvisible(row, col + 1);
    
  } else if ( value == "o" ) {
    openTab (row, col, name, uid);
    Logger.log(name);
    Logger.log(uid);
  }
  
}

// turn font and background white
function makeInvisible(row, col) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var lastCol = sheet.getLastColumn();
  
  sheet.getRange(row, col, 1, lastCol).setFontColor('white');
  sheet.getRange(row, col, 1, lastCol).setBackground('white');
  
}

// turn font black and background alternatively grey 
function makeVisible(row, col) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var lastCol = sheet.getLastColumn();
  
  sheet.getRange(row, col, 1, lastCol).setFontColor('black');
  
  for (var c = 1; c <= lastCol; c++) {
    // ToDo - to read into an array
    var celVal = sheet.getRange(row, col + c).getValue();
    if ((celVal != '') && (c%2 === 1)) {
      sheet.getRange(row, col + c).setBackground('lightgrey');
    }
    
  }
  
}

function openTab(row, col, name, UID) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();         // ToDo - can we have global vars ss & sheet
  var sheet = ss.getActiveSheet();
  
  // ToDo - Cont - for now just show not yet opening the tab - to comment or delete
  sheet.getRange(3, 10).setValue(name);
  sheet.getRange(3, 11).setValue(UID);
  
}

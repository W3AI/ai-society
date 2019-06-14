// © Ianta Labs / MIT License
// W3AI.net - rGlobal github
function onOpen(e) {    
  // netApp();  // Open the Business Priorities sidebar - Equivalent to click on the Priorities > Office
  SpreadsheetApp.getUi() // On Spreadsheet Open - include the Priorities Menu
      .createMenu('ai Economy')
      .addItem('Friends','orgApp')
      .addItem('Office','netApp')
      .addItem('PMO & COE','pmoApp')
      .addItem('Student','studentApp')
      .addItem('Banking','netApp')
      .addItem('Jobs','recruiterApp')
      .addItem('Research','researchApp')
      .addItem('Innovation','innovationApp')
      .addItem('Programming','programmingApp')
      .addItem('Entrepreneur','entrepreneurApp')
      .addItem('my Interests', 'myInterests')
      .addItem('my Network','myNetwork')
      .addItem('Jobs & Projects','myJobs')
      .addItem('Skills & Services','mySkills')
      .addItem('Command Line','CLI')
      .addItem('local Dev','localDevServer')
      .addItem('sidebar Browser','sidebarMirror')
      .addItem('Help', 'w3aiHelp')
      .addItem('Setup', 'setupAI')
      .addItem('About', 'w3aiAbout') 
      .addToUi();
}
function orgApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AIorg').setTitle("w3ai.org - ai society");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function netApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - ai economy");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function studentApp() {
  var template = HtmlService.createHtmlOutputFromFile('ai-intro').setTitle("ai student");
  SpreadsheetApp.getUi().showSidebar(template);  
}
// [ ToDo ] - add ...politics/research/innovations/entertainment routes to w3ai.net and replace in W3AInet.html file 
function pmoApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - aiPMO & aiCOE");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function techApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Tech Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function bankingApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Banking Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function recruiterApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Job Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function creativeApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Creative Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function politicsApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Political Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function researchApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Research Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function innovationApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("Innovation Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function programmingApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Programming Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function entrepreneurApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Entrepreneur Priorities");
  SpreadsheetApp.getUi().showSidebar(template);  
}
function entertainmentApp() {
  var template = HtmlService.createHtmlOutputFromFile('W3AInet').setTitle("w3ai.net - Fun Priorities :-)");
  SpreadsheetApp.getUi().showSidebar(template);  
}

function localDevServer() {

  var localDev = HtmlService.createHtmlOutputFromFile('local-Dev-AI')
    .setTitle("local Dev Server");
  
    SpreadsheetApp.getUi()
     .showSidebar(localDev);  
}

function sidebarMirror() {
  var html = HtmlService.createTemplateFromFile('sidebar');
  
  html.data = SpreadsheetApp
      .openById('144mXQiESayJN7egzQTs5yjR7VLWcPc38tG1W9vq6ZD0')
      .getActiveSheet()
      .getDataRange()
      .getValues();
  
  //html.evaluate();
  
  SpreadsheetApp.getUi()
     .showSidebar(html.evaluate()); 
}

// var logRow = 3;  // Log Row
var logCol = 3;  // Log Column

var cmdRow = 3;  // Command Row Cell
var cmdCol = 2;  // Command Column Cell
var cmdRowPos = 'F1';  // Command Row Position
var cmdColPos = 'H1';  // Command Column Position
var cursorPosition = 'D1';

  // Get Current Tab data
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab = ss.getActiveSheet();
  var tabName = tab.getName();
  var lastRow = tab.getLastRow();
  var lastCol = tab.getLastColumn();

function myInterests() {
}

function myNetwork() {
}

function myJobs() {
}

function mySkills() {
}

// To Fix after the changes in header Nov 2018
function CLI() {
  
  var prompt = 'Global $> ';  //
  var position = 'B3';        // 
  var nrCliLines = 40;        // 
  
  //var activeCell = tab.getActiveCell();
  //var aRow = activeCell.getRow();
  //var aCol = activeCell.getColumn();
  
  // if (tab.getRange(cursorPosition).getValue() == 'R3C2') {
  // Style the first 2 columns under header as Console
  // tab.getRange(3, 1, nrCliLines, 2).setBackground('black').setFontColor('#40ff50').setFontSize(18).setFontWeight('bold');
  // tab.getRange(3, 1).setValue(prompt);
  // tab.getRange(3, 2).activateAsCurrentCell();
  // }
  
  
  // Read position of the cursor
  cmdRow = tab.getRange(cmdRowPos).getValue();
  // cmdRow = Number(cmdRow);
  cmdCol = tab.getRange(cmdColPos).getValue();
  // cmdCol = Number(cmdCol);
  var cmd = tab.getRange(cmdRow, cmdCol).getValue();
  
  var cmdArgs = cmd.split(' ');
  // Logger.log(cmdArgs);
  
  // Parse and execute command
  interpreter(cmd);
  
  cmdRow++;
  tab.getRange(cmdRow, cmdCol-1).setValue(prompt);
  tab.getRange(cmdRowPos).setValue(cmdRow);
  // tab.getRange(cmdRow, cmdCol).activateAsCurrentCell();
  tab.getRange(cursorPosition).setValue('R' + cmdRow + 'C' + cmdCol);
  log('cmd: ' + cmd);
  
  // var cmds = cmd.split('\n');
  // Logger.log(cmds);og
  
  // Read the last cmd / line
  // var lastCmdIndex = cmd.lastIndexOf('\n') + 1;
  // Logger.log('-- lastCmdIndex: ' + lastCmdIndex);
  // var lastCmd = cmd.slice(lastCmdIndex, cmd.length);
  // Logger.log('-- lastCmd: ' + lastCmd);
  
  
}

function w3aiHelp() {
   var html = HtmlService.createHtmlOutputFromFile('w3aiHelp')
  .setTitle('W3AI.net Help')
      .setWidth(550);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function setupAI() {
}

function log(value) {
  tab.getRange(cmdRow - 1, logCol).setValue(' -- ' + value);
  // logRow++;
}

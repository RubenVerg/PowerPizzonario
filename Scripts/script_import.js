
// Importa il Nickzionario
window.addEventListener('load', function(){
	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	// Il valore dopo gid= indica quale sheet prendere. In questo caso è il Nickzionario
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=1251584737";

	var tabella = document.getElementById("nick");

	$(tabella).sheetrock({
		url: mySpreadsheet,
		rowTemplate: HRTemplate,
	});
});

// Importa il VocaboLorro
window.addEventListener('load', function(){
	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	// Il valore dopo gid= indica quale sheet prendere. In questo caso è il VocaboLorro
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2102162270";

	// Load top five HR leaders.
	$('#lorro').sheetrock({
		url: mySpreadsheet,
		rowTemplate: HRTemplate,
	});
});

// Importa il DiSionario
window.addEventListener('load', function(){
	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=546890516";

	$('#sio').sheetrock({
		url: mySpreadsheet,
		rowTemplate: HRTemplate,
	});
});

// Importa il TheZionario
window.addEventListener('load', function(){
  // Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());

	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=546890516";

	$('#community').sheetrock({
		url: mySpreadsheet,
		rowTemplate: HRTemplate,
	});
});

// Importa le Nickquotes
window.addEventListener('load', function(){
	var HRTemplate = Handlebars.compile($('#hr-template').html());

	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2023529327";
	var testoquery = "select B,C";

	$('#nickquotes').sheetrock({
		url: mySpreadsheet,
		query: testoquery,
	});
});

// Importa le Nickquotes random
window.addEventListener('load', function(){
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2023529327";

	// Cambiare questo valore se vengono aumentate le Nickquotes
	var numQuotes = 72;
	var quoteScelta = Math.floor((Math.random() * numQuotes)+1);

	var testoquery = "select B,C where A = ";
	testoquery += quoteScelta;

	// Carica la nickquote random
	$('#randomNick').sheetrock({
		url: mySpreadsheet,
		query: testoquery,
		rowTemplate: HRTemplate,
	});
});

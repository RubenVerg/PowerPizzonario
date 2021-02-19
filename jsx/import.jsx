
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
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2125024679";

	$('#community').sheetrock({
		url: mySpreadsheet,
		rowTemplate: HRTemplate,
	});
});

// Importa le Pizzaquotes
window.addEventListener('load', function(){
	var HRTemplate = Handlebars.compile($('#hr-template').html());

	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2023529327";
	var testoquery = "select B,C,D";

	$('#pizzaquotes').sheetrock({
		url: mySpreadsheet,
		query: testoquery,
		rowTemplate: HRTemplate,
	});
});

// Importa le Pizzaquotes random
window.addEventListener('load', function(){
	var HRTemplate = Handlebars.compile($('#hr-template-random').html());
	var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1LS-6HtyDrVj-kFU_eVI9DP_210kMRwzgjqR74MmLlM4/edit#gid=2023529327";

	// Cambiare questo valore se aumentano le Pizzaquotes
	var numQuotes = 72;
	var quoteScelta = Math.floor((Math.random() * numQuotes)+1);

	var testoquery = "select B,C,D where A = ";
	testoquery += quoteScelta;

	// Carica la nickquote random
	$('#randomPizza').sheetrock({
		url: mySpreadsheet,
		query: testoquery,
		rowTemplate: HRTemplate,
	});
});

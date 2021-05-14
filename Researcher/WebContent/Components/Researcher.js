$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
		{ 
		// Clear alerts---------------------
		 $("#alertSuccess").text(""); 
		 $("#alertSuccess").hide(); 
		 $("#alertError").text(""); 
		 $("#alertError").hide(); 
		// Form validation-------------------
		var status = validateResearcherForm(); 
		if (status != true) 
		 { 
		 $("#alertError").text(status); 
		 $("#alertError").show(); 
		 return; 
		 } 
		// If valid------------------------
		var type = ($("#hidResIDSave").val() == "") ? "POST" : "PUT"; 
		 $.ajax( 
		 { 
		 url : "ResearcherAPI", 
		 type : type, 
		 data : $("#formResearcher").serialize(), 
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		   onResearcherSaveComplete(response.responseText, status); 
		 } 
		 }); 
		}); 
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
		{ 
		 $("#hidResIDSave").val($(this).closest("tr").find('#hidResIDUpdate').val()); 
		 $("#resName").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#resAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#resEmail").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#resDesc").val($(this).closest("tr").find('td:eq(3)').text()); 
		}); 

//DELETE==========================================
$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "ResearcherAPI", 
		 type : "DELETE", 
		 data : "resID=" + $(this).data("resid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
			 onResearcherDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
// CLIENT-MODEL================================================================
function validateResearcherForm() 
{ 
// CODE
if ($("#resName").val().trim() == "") 
 { 
 return "Insert Researcher Name."; 
 } 
// NAME
if ($("#resAddress").val().trim() == "") 
 { 
 return "Insert Address."; 
 } 
// PRICE-------------------------------
if ($("#resEmail").val().trim() == "") 
 { 
 return "Insert Email."; 
 } 

// DESCRIPTION------------------------
if ($("#resDesc").val().trim() == "") 
 { 
 return "Insert Research Description."; 
 } 
return true; 
}


function onResearcherSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 $("#hidResIDSave").val(""); 
 $("#formResearcher")[0].reset(); 
}


function onResearcherDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 }
}

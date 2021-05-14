<%@page import="com.PAF.Researcher"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Researcher Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Researcher.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6"> 
<h1>Researcher Management</h1>
<form id="formResearcher" name="formResearcher">
 Researcher Name: 
 <input id="resName" name="resName" type="text" 
 class="form-control form-control-sm">
 <br> Researcher Address: 
 <input id="resAddress" name="resAddress" type="text" 
 class="form-control form-control-sm">
 <br> Researcher Email: 
 <input id="resEmail" name="resEmail" type="text" 
 class="form-control form-control-sm">
 <br> Research description: 
 <input id="resDesc" name="resDesc" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidResIDSave" name="hidResIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Researcher resObj = new Researcher(); 
 out.print(resObj.readResearchers()); 
 %>
</div>
</div> </div> </div> 


</body>
</html>
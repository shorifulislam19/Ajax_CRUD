
jQuery(document).ready(function(){

	forshow();
	jQuery("#submit").click(function(){
		forinsert();
	});
	
	jQuery(document).on("click","#deleteid", function(e){
		var id=jQuery(this).val();
		jQuery("#modalDelete").val(id);
	});
	jQuery(document).on("click","#modalDelete", function(e){
		var id=jQuery(this).val();
		forDelete(id);
		jQuery("#delete").modal("hide");
	});

	jQuery(document).on("click","#btnEdit", function(e){
		var id=jQuery(this).val();
		foreditShow(id);
	});

	jQuery("#update").click(function(){
		Update();
	})

});


function Update(){
	var check = "update";
	var id = jQuery(".id").val();
	var fName = jQuery(".fName").val();
	var uName = jQuery(".uName").val();
	var email = jQuery(".email").val();
	var status = jQuery(".status").val();
	$.ajax({
		url:'process.php',
			type:'POST',
			data:{
				id:id,
				check:check,
				fName:fName,
				uName:uName,
				email:email,
				status:status
			},
			success:function(data){

				jQuery("#editmodal").modal("hide");
				jQuery(".fName").val("");
				jQuery(".uName").val("");
				jQuery(".email").val("");
				jQuery(".status").val("");
				jQuery(".id").val("");
				forshow();
				jQuery("#output").html(response);
				jQuery(".alert").fadeOut(1000);
			}
	});
}

function foreditShow(id){
	var check = "finedData";
	$.ajax({
		url:'process.php',
			type:'POST',
			dataType:"JSON",
			data:{
				id:id,
				check:check
			},
			success:function(data){
				jQuery(".fName").val(data.fName);
				jQuery(".uName").val(data.uName);
				jQuery(".email").val(data.email);
				jQuery(".status").val(data.status);
				jQuery(".id").val(data.id);
			}
	});
}
function forinsert() {
		var check = "insert";
		var fName = jQuery("#fName").val();
		var uName = jQuery("#uName").val();
		var email = jQuery("#email").val();
		var status = jQuery("#status").val();
		var id = jQuery("#id").val();

		$.ajax({
			url:'process.php',
			type:'post',
			data:{
				fName:fName,
				uName:uName,
				email:email,
				status:status,
				check:check,
				id:id
			},
			success:function(response){
				forshow();
				jQuery("#output").html(response);
				jQuery(".alert").fadeOut(1000);
				jQuery("#fName").val("");
				jQuery("#uName").val("");
				jQuery("#email").val("");
				jQuery("#status").html('<option value="1">-----Select Status------</option><option value="1">Active</option>\
						<option value="2">Inactive</option>');


			}
		});
	}
function forshow(){
		var check="show";
		$.ajax({
			url:'process.php',
			type:'post',
			data:{
				check:check
			},
			success:function(data){
				jQuery(".tbl").html(data);
			}
		});
	}

function forDelete(id){
		var check="delete";
		$.ajax({
			url:'process.php',
			type:'post',
			data:{
				check:check,
				id:id
			},
			success:function(data){
				
				jQuery("#output").html(data);
				forshow();
				jQuery(".alert").fadeOut(1000);
			}
		});
	}

function forUpdate(id){
	var check="update";
	var fName = jQuery(".fName").val();
	var uName = jQuery(".uName").val();
	var email = jQuery(".email").val();
	var status = jQuery(".status").val();
		$.ajax({
			url:'process.php',
			type:'post',
			data:{
				check:check,
				id:id,
				fName:fName,
				uName:uName,
				email:email,
				status:status
			},
			success:function(data){
				jQuery("#output").html(data);
				forshow();
				jQuery(".alert").fadeOut(1000);
			}
		});
}
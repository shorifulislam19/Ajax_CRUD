<?php 
$con = new mysqli("localhost","root","","shakil");
 $check=$_POST["check"];
 $check();

 function insert(){
 	global $con;
 	$fName=$_POST['fName'];
 	$uName=$_POST['uName'];
 	$email=$_POST['email'];
 	$status=$_POST['status'];
 	$id=$_POST['id'];

	if (empty($id)) {
		 	$result = $con->query("INSERT INTO table_user(fName,uName,email,status)VALUES('$fName','$uName','$email','$status')");
	 	if ($result) {
	 		echo '<div class="alert alert-success">Data Saved</div>';
	 	}
	}
	else{
		echo '<div class="alert alert-danger">Only For Update</div>';
	}
 }




 function edit(){
 	echo "this is Edit Section or Function";
 }
 function delete(){
 	global $con;
 	$id=$_POST['id'];
 	if (!empty($id)) {
 		
 		$result = $con->query("DELETE FROM table_user WHERE id='$id'");
 		if ($result) {
 			echo '<div class="alert alert-success">Data Deleted</div>';
 		}
 		else{
 			echo '<div class="alert alert-danger">DataNot Saved</div>';
 		}
 	}
 }
 function update(){
 	global $con;

 	$id=$_POST['id'];
 	$fName=$_POST['fName'];
 	$uName=$_POST['uName'];
 	$email=$_POST['email'];
 	$status=$_POST['status'];

 	if (!empty($id)) {
	 		$result = $con->query("UPDATE table_user SET fName='$fName',uName='$uName',email='$email',status='$status' WHERE id='$id'");
	 	if ($result) {
	 		echo '<div class="alert alert-success">Data Updated</div>';
	 	}
 	}
 	else{
 		echo '<div class="alert alert-danger">Only for Insert</div>';
 	}
 }

 function show(){
 	global $con;

 	$result = $con->query("SELECT * FROM table_user");
 	
 	$sum='<table class="table" id="mytable" border="1"><thead><tr>
						<th>Full Name</th>
						<th>User Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Action</th>
					</tr></thead><tbody>';
 	while($data=$result->fetch_assoc()){
 		$sum .= '<tr>
				<td>'.$data["fName"].'</td>
				<td>'.$data["uName"].'</td>
				<td>'.$data["email"].'</td>
				<td>'.$data["status"].'</td>
				<td>
					<button class="btn btn-info btn-sm" id="btnEdit" data-toggle="modal" data-target="#editmodal" value="'.$data["id"].'">Edit</button>

					<button class="btn btn-danger btn-sm" id="deleteid" data-toggle="modal" data-target="#delete" value="'.$data["id"].'">Delete</button>

				</td>
			</tr>
			';

 	}

 	$sum .= '</tbody></table>';
 	echo $sum;
 }

 function finedData(){
 	global $con;
 	$id=$_POST["id"];
 	$result = $con->query("SELECT *FROM table_user WHERE id='$id'");
 	$data=$result->fetch_assoc();
 	echo json_encode($data);
 }


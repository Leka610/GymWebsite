<?php
    require_once 'Includes/db.php';
	include 'Includes/user.php';

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];

            if (empty($name) || empty($lastName) || empty($email) || empty($password) || empty($confirm_password)) {
        echo "Please fill in all fields.";
        exit; // Stop further execution
    }
        if ($password !== $confirm_password) {
        echo "Passwords do not match.";
        exit; // Stop further execution
    }

        $user = new User($name, $lastName, $email, $password);

        $result = $user->signup($confirm_password);

        echo $result;
}


?>
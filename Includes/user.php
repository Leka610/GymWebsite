<?php
require_once 'db.php';

class User {
    private $name;
    private $lastName;
    private $email;
    private $password;
    private $db;

    // Constructor
    public function __construct($name, $lastName, $email, $password) {
        $this->name = $name;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->db = new Database();
    }

    // Sign up method
    public function signup() {
        // Hash the password
        $hashed_password = password_hash($this->password, PASSWORD_DEFAULT);

        // Connect to the database
        $conn = $this->db->connect();

        // Check if the email already exists
        $sql = "SELECT * FROM users WHERE Email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $this->email);
        $stmt->execute();
        $result = $stmt->get_result();

        // If email already exists
        if ($result->num_rows > 0) {
            $this->db->close();
            return "Email already registered.";
        }

        // Insert the new user into the database
        $sql = "INSERT INTO users (Name, LastName, Email, Password) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $this->name, $this->lastName, $this->email, $hashed_password);

        // Check if insertion was successful
        if ($stmt->execute()) {
            $this->db->close();
            return "Signup successful!";
            //header("Location: transactionpage.php");
        } else {
            $this->db->close();
            return "Error: " . $stmt->error;
        }
    }
}
?>

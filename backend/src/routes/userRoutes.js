const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");

//Validations
const userValidationRules = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2-50 characters"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2-50 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must be 10 digits"),
  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender"),
  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["Active", "Inactive"])
    .withMessage("Invalid status"),
  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Location must be between 2-100 characters"),
];

router.get("/", userController.getAllUsers);
router.get("/export/csv", userController.exportToCSV);
router.get("/:id", userController.getUserById);
router.post("/", userValidationRules, userController.createUser);
router.put("/:id", userValidationRules, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

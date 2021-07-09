const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../model");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.patch("/:contactId", ctrl.updateContact);

module.exports = router;

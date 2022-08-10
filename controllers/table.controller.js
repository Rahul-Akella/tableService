const Table = require("../models/table.model");

exports.table_create = function (req, res, next) {
  let table = new Table({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  });
  table.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Table Created successfully");
  });
};

exports.table_details = function (req, res) {
  Table.findById(req.params.id, function (err, table) {
    if (err) return next(err);
    res.send(table);
  });
};

exports.table_update = function (req, res) {
  Table.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    table
  ) {
    if (err) return next(err);
    res.send("Table is updated.");
  });
};

exports.table_delete = function (req, res) {
  Table.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted table" + req.params.id + "succesfully");
  });
};

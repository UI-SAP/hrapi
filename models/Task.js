var db = require('../db'); //reference of dbconnection.js  
var Task = {
    getAllTasks: function(callback) {  
        return db.query("Select * from task", callback);  
    },  
    getTaskById: function(id, callback) {  
        return db.query("select * from task where Id=?", [id], callback);  
    },  
    addTask: function(Task, callback) {  
        return db.query("Insert into task(title, status) values(?,?)", [Task.title, Task.status], callback);  
    },  
    deleteTask: function(id, callback) {  
        return db.query("delete from task where Id=?", [id], callback);  
    },  
    updateTask: function(id, Task, callback) {  
        return db.query("update task set Title=?,Status=? where Id=?", [Task.title, Task.status, id], callback);  
    }  
};  
module.exports = Task;
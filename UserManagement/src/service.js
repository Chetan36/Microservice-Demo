const repository = require('./repository');

module.exports = {
    getAllUsers: function() {
        return repository.findAll();
    },
    getUserById: function(id) {
        return repository.findById(id);
    },
    getUserByContactNumber: function(contactNumber) {
        return repository.findByContactNumber(contactNumber);
    },
    addNewUser: function(user) {
        let dbUser = {
            fullName: user.fullName,
            emailId: user.emailId,
            contactNumber: user.contactNumber
        }
        return repository.insert(dbUser);
    },
    updateUser: function(UserId, User) {

    },
    deleteUser: function(UserId) {

    }
}
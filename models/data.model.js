const mongoose = require('mongoose');
  
const userPersonalSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    number: Number,
    city: String,
    url: String
})
  
const userTeamSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String
})
  
const UserPersonal = new mongoose.model('userPersonal', userPersonalSchema);
const UserTeam = new mongoose.model('userTeam', userTeamSchema);
  
module.exports = { UserPersonal, UserTeam };

  /*
============================================
Title: Assignment 3
Author: Professor Krasso
Date: 10 June 2022
Modified By: <ANITA TAYLOR>
Description: This program demonstrates the
use of JavaScript types, values, and
and variables in an application.
===========================================
*/
//Imports dependencies.
var team = require("./team.js");
var manager = require("./team-manager.js");

console.log(teams)

//Imports array of team names/getGame string.
import * as findTeams from "./team-manager.js";
import * as getGame from "./team-manager.js";


function findTeams(){
  return teams
}

//Defines team objects
const teams = [
    {
      name: 'California',
      mascot: 'Dodgers',
      playerCount: '33',
      teamColor: 'red',
      rank: '6',
    },
    {      
    name: 'NewYork',
    mascot: 'Yankees',
    playerCount: '37',
    teamColor: 'Blue',
    rank: '9',
    },
    {      
      name: 'Florida',
      mascot: 'Marlins',
      playerCount: '35',
      teamColor: 'brown',
      rank: '4',
    },
    {      
      name: 'Wisconsin',
      mascot: 'Badgers',
      playerCount: '32',
      teamColor: 'green',
      rank: '7',
    },
    {      
      name: 'Georgia',
      mascot: 'Peaches',
      playerCount: '37',
      teamColor: 'greengold',
      rank: '2',
    }
  ];

console.log(findTeams());

//This gets team names.
function findTeam(team){
    return (name, mascot);
}

//Moment declaration for date
var date = moment.js().format('MM DD YY');
console.log(date);

//return string includes date
function getGame(string){
    return (team + mascot + "is playing" + team + mascot + "on" + date + "at 7:00PM CST");
}

//Exports two functions
module.exports = 'findTeams()';
module.exports = 'getGame()';


team.jsclass Team {
    constructor(name, mascot, playerCount, color, rank){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
        this.color = color;
        this.rank = rank;
    }
}

module.exports = 'Team';

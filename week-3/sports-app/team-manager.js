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
    rank: '3',
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
      rank: '5',
    },
    {      
      name: 'Georgia',
      mascot: 'Peaches',
      playerCount: '37',
      teamColor: 'greengold',
      rank: '1',
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
module.exports = findTeams();
module.exports = getGame();

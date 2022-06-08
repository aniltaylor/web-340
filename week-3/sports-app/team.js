class team {
  name;
  mascot;
  playerCount;
  constructor(n,m,p) {
    this.name = n;
    this.mascot = m;
    this.playerCount = p;
  }
  teamDetails() {
    return "name: "+this.name +"mascot : "+this.mascot+"playerCount: "+this.playerCount; 
  }



const skills: string[] = ['bash', 'counter', 'Healing'];




interface Character {
  name: string
  hp: number,
  skills: string[],
  homeTown?: string | undefined;
}


const strider: Character = {
  name: 'strider',
  hp: 100,
  skills: ['bash', 'conuter'],
}

strider.homeTown = 'Rivendell'


console.table(strider);
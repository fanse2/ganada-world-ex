const fs = require('fs')

const names = [
    'Zeus',    'Poseidon',
    'Ares',    'Aphrodite',
    'Hera',    'Demeter',
    'Athena',  'Apollo',
    'Artemis', 'Hephaestus',
    'Hermes',  'Dionysus',
    'Hestia',  'Hades',
    'Cronus',  'Ouranos',
    'Jupiter', 'Juno',
  'Mars',    'Mercury',
  'Neptune', 'Venus',
  'Apollo',  'Diana',
  'Minerva', 'Ceres',
  'Vulcan',  'Vesta',
  'Aegir',    'Aesir',   'Balder',   'Bolverk',   'Bor',
  'Bragi',    'Buri',    'Day',      'Earth',     'Einherjar',
  'Eir',      'Fjorgyn', 'Forseti',  'Freyja',    'Freyr',
  'Frigga',   'Fulla',   'Gangnrad', 'Gefion',    'Grimnir',
  'Gullveig', 'Harbard', 'Heimdall', 'Hel',       'Hermod',
  'Hod',      'Honir',   'Idun',     'Kvasir',    'Lofn',
  'Loki',     'Magni',   'Mimir',    'Modgud',    'Modi',
  'Moon',     'Nanna',   'Narvi',    'Night',     'Njord',
  'Norns',    'Od',      'Odin',     'Ran',       'Rig',
  'Rind',     'Saga',    'Sif',      'Sigyn',     'Sjofn',
  'Skadi',    'Sun',     'Syn',      'Thor',      'Thrud',
  'Tyr',      'Ull',     'Vali',     'Valkyries', 'Vanir',
  'Var',      'Ve',      'Vidar',    'Vili',      'Vor',
  'Sang-je',
  'Mireuk',
  'Seokga',
  'Haemosu',
  'Dalnim',
  'Jacheongbi',
  'Yeomna',
  'Samshin-halmang',
  'Gameunjang-aegi',
  'Jowangshin', 'Dokkaebi',

]

const chars = []

function castPerson(name) {
    this.name = name

    this.gene = []

    for(let i=0;i<24;i++){
        this.gene.push(Math.floor(Math.random()*100))
    }

}

names.forEach(e => {
    chars.push(new castPerson(e))
});



let data = JSON.stringify(chars,null,2)

fs.writeFile('charsOrigin.json', data, (err)=>{
    if(err) throw err;
    console.log('Data writen to file')
})


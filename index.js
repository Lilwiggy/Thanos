const Eris = require(`eris`);
const client = new Eris('');

client.on(`ready`, () => {
    console.log(`Ouch my bones`);
    client.editStatus('online', {
        name: 'the sunset.',
        type: 3,
    });
});

client.on(`messageCreate`, (m) => {
    if (m.author.id === '232614905533038593') {
        if (m.mentions.length > 0 && m.mentions[0].id === client.user.id) {
        if (m.content.includes(`snap`))
        snap(m)
        }
    }
});

client.connect();

function snap(msg) {
    let members = msg.channel.guild.members.filter((u) => u.id !== '471327568411361290' && u.id !== msg.channel.guild.ownerID && !u.bot);
    let count = Math.floor(members.length / 2);
    let shuf = shuffle(members);
    let banees = [];
    let skip = false;
    shuf.forEach((mem) => {
        if (skip) {
            banees.push(mem);
            skip = false;
        } else {
            skip = true;
        }
    });
    if (banees.length !== count)
        getRandomFucker(members, banees);

        // The Timeout doesn't work like it should. No clue why worked before.
        msg.channel.guild.members.forEach((member, i) => {
            if (banees.includes(member)) {
            setTimeout(() => {
            member.addRole(`474810765694730242`, 'They got snapped my doggy.');

            client.getChannel(`476101379971088385`).createMessage(`${member.username}, alas you have become a child of Thanos and have been snapped. Your sacrifice shall not be in vain. I will create a better universe for us all.`);
            client.getChannel(`474267235834134531`).createMessage(`${member.username} has become a child of Thanos`)
            }, i * 5000)
        } else {
            member.addRole(`474810815695028249`);
        }
    });
    client.editStatus('online', {
        name: 'the sunset.',
        type: 3,
    })
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getRandomFucker(users, arr) {
    let user = users[Math.floor(Math.random() * users.length)];
    if (arr.includes(user))
    getRandomFucker(users, arr);
    
     arr.push(user);
}

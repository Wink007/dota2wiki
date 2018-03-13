export default {
    heroes: {
        title: "Герои",
        subtitle: "В данном разделе вы можете ознакомиться и узнать о героях Dota 2:",
        content: [
            "характеристика;",
            "описание героя;",
            "описание способностей;",
            "история.",
        ],
        img: require('image/lich.png'),
        link: '/heroes',
    },
    items : {
        title: "Предметы",
        subtitle: "Предметы неотъемлемая часть игры Dota 2, они могут давать героям дополнительные характеристики, а также и способности. В данном разделе вы узнаете где их можно прибрести и что некоторые предметы низкого разряда складываются в предметы высшего разряда, с помощью рецепта. Если вы новичок и хотите узнать больше, тогда вперед, узнайте больше",
        content: [],
        img: require('image/am.png'),
        link: '/items',
    },
    creeps : {
        title: "Крипы",
        subtitle: 'В мире Dota 2 существуют и крипы (Creeps/мобы) как другая разновидность существ, о них вы узнаете:',
        content: ['тип крипов;', 'взаимодействие с ними;', 'место нахождения;', 'время появления и т.д.'],
        img: require('image/pa.png'),
        link: '/creeps',
    },
}
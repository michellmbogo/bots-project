import React from 'react'

function BotCollection(props) {
    return (
        <section
            id="collection"
            style={{
                width: '50%'
            }}>
            <h2>BotCollection</h2>
            <div
                id="collection-container"
                style={{
                    backgroundColor: 'gainsboro',
                    paddingTop: 20
                }}
            >
                {
                    props.bots.map((bot) => {
                        return (
                            <div
                                onClick={() => props.onClick(bot)}
                                style={{
                                    display: 'flex',
                                    flex: 2,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    columnGap: 20,
                                    backgroundColor: 'white',
                                    margin: 20
                                }}>
                                <img src={bot.avatar_url} height={100} width={100} />
                                <div>
                                    <h3>{bot.name}</h3>
                                    <p>{`Class: ${bot.bot_class}`}</p>
                                    <p>{`Armor: ${bot.armor}`}</p>
                                    <p>{`Health: ${bot.health}`}</p>
                                    <p>{`Damage: ${bot.damage}`}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>)
}

export default BotCollection; 
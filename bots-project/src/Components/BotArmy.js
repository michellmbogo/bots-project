import React from 'react'

function BotArmy(props) {
    return (
        <section
            id="Army"
            style={{
                width: '50%'
            }}>
            <h3>Bot Army</h3>
            <div
                id='army-container'
                style={{
                    backgroundcolor: 'white',
                    paddingTop: 20
                }}
            >
                {
                    props.army.map((bot) => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flex: 2,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    columnGap: 20,
                                    backgroundColor: 'gainsboro',
                                    margin: 20
                                }}
                                onClick={() => props.releaseBot(bot)}
                            >
                                <img src={bot.avatar_url} height={100} width={100} />
                                <div>
                                    <h3>{bot.name}</h3>
                                    <p>{`Class: ${bot.bot_class}`}</p>
                                    <p>{`Armor: ${bot.armor}`}</p>
                                    <p>{`Health: ${bot.health}`}</p>
                                    <p>{`Damage: ${bot.damage}`}</p>
                                    <button id='button' onClick={() => props.onClick(bot)}>X</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
} export default BotArmy;
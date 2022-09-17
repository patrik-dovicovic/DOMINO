import { useParams } from 'react-router-dom';
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import team from "../../../../team.css";

export function links() {
    return [{ rel: "stylesheet", href: team }];
}

export const loader = async () => {
    return json(
        {
            // players: ['adam', 'peter', 'juraj'],
            players: [...Array(100).keys()],
            AllMeasures: ['10m', '20m', '30m', '40m', '50m'],
            options: [
                {
                    team: 'U4',
                    measures: [0, 1]
                },
                {
                    team: 'U5',
                    measures: [0, 1, 4]
                },
                {
                    team: 'U6',
                    measures: [0, 1, 2,]
                },
                {
                    team: 'U7',
                    measures: [2, 3, 4]
                },
                {
                    team: 'U8',
                    measures: [0, 1, 2, 3, 4]
                },
                {
                    team: 'U9',
                    measures: [0, 1, 2, 3, 4]
                }
            ]
        }
    )
}

export default function Team() {
    const params = useParams();
    const data = useLoaderData();

    const inputChange = (e) => {
        document.getElementById(e.target.id).value = e.target.value.replaceAll(/[^0-9\.]+/g, '')

        var id = e.target.id
        var x = id.substr(0, id.indexOf('___'))
        var y = id.substring(id.indexOf('___') + 1).replaceAll("_", "")

        var input

        if (e.key === 'ArrowUp') {
            if (parseInt(x) > 0) {
                input = document.getElementById(`${parseInt(x) - 1}___${y}`)
                const end = input.value.length;
                input.focus()
                input.setSelectionRange(end, end)
            }
        }
        if (e.key === 'ArrowDown') {
            if (parseInt(x) < data.players.length - 1) {
                input = document.getElementById(`${parseInt(x) + 1}___${y}`)
                const end = input.value.length;
                input.focus()
                input.setSelectionRange(end, end)
            }
        }
        if (e.key === 'ArrowLeft') {
            if (parseInt(y) > 0) {
                input = document.getElementById(`${x}___${parseInt(y) - 1}`)
                const end = input.value.length;
                input.focus()
                input.setSelectionRange(end, end)
            }
        }
        if (e.key === 'ArrowRight') {
            if (parseInt(y) < data.options.find(e => e.team === params.team).measures.length - 1) {
                input = document.getElementById(`${x}___${parseInt(y) + 1}`)
                const end = input.value.length;
                input.focus()
                input.setSelectionRange(end, end)
            }
        }
    }
    return (
        <div className='teamTable'>
            <header>
                <Link to='/' >back</Link>{" "}
                <h2>{params.team}</h2>
                <h3>meranie: {params.measure}</h3>
                <h3>pocet hracov: {data.players.length}</h3>
                <h3>pocet disciplin: {data.options.find(e => e.team === params.team).measures.length}</h3>
            </header>
            <main>
                <div className='tableHeaderContainer'>
                    <table>
                        <tbody>
                            <tr>
                                <th className='tableCorner'>{params.team}</th>
                                {
                                    data.options.map(option => {
                                        if (option.team === params.team) {
                                            return (
                                                option.measures.map(option => {
                                                    return (<th key={data.AllMeasures[option]} >{data.AllMeasures[option]}</th>)
                                                })
                                            )
                                        } else {
                                            return ''
                                        }

                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tableMainContainer">
                    <table>
                        <tbody>
                            {
                                data.players.map(player => {
                                    return (
                                        <tr key={player}>
                                            <td className='playerName'>{player}</td>
                                            {
                                                data.options.map(option => {
                                                    if (option.team === params.team) {
                                                        return (
                                                            option.measures.map(i => {
                                                                return (<td key={i} >
                                                                    <input type='text' id={data.players.indexOf(player) + '___' + option.measures.indexOf(i)} onKeyUp={e => inputChange(e)}></input>
                                                                </td>)
                                                            })
                                                        )
                                                    } else {
                                                        return ''
                                                    }

                                                })
                                            }
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>

            </footer>
        </div>

    )

}

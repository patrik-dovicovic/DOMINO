import React, { useState } from 'react';
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import style from "../index.css";

export function links() {
  return [{ rel: "stylesheet", href: style }];
}

export const loader = async () => {
  return json(
    {
      teams:["U5",'U6','U7','U8','U9'],
      measures: ["22",'23','24']
    }
  )
}

export default function Index() {
  const data = useLoaderData();

  const [team, setTeam] = useState('');
  const [measure, setMeasure] = useState('')
  return (
    <div>
      {data.teams.map(t => {
        return (
          <div key={t} style={{ display: 'inline-block' }}>
            <button onClick={e => setTeam(t)} style={team === t ? { backgroundColor: "black", color: '#fff' } : null}>{t}</button>
          </div>
        )
      })}
      <div></div>
      {data.measures.map(m => {
        return (
          <div key={m} style={{ display: 'inline-block' }}>
            <button onClick={e => setMeasure(m)} style={measure === m ? { backgroundColor: "black", color: '#fff' } : null}>{m}</button>
          </div>
        )
      })}
      <div></div>

      {(team !== '' && measure !== '') &&
        <>
          <Link to={'/measure/' + measure + '/team/' + team} >GO</Link>{" "}
        </>
      }



    </div>
  )
}

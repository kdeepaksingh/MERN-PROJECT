import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            // console.log(res);
            // console.log(res);
            const actualData = await res.json();
            // console.log(actualData.statewise);
            setData(actualData.statewise);
        } catch (err) {
            console.log('Error in api Calling' + err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <h1 style={{ textAlign: 'center', background: 'olive', color: 'white' }}> LIVE </h1>
            <h2 style={{ textAlign: 'center', background: 'purple', color: 'white' }}> COVID-19 CORONAVIRUS TRACKAER </h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Active</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Death</th>
                        <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((currEle, index, array) => {
                            return (
                                <tr key={index}>
                                    <td>{currEle.state}</td>
                                    <td>{currEle.active}</td>
                                    <td>{currEle.confirmed}</td>
                                    <td>{currEle.recovered}</td>
                                    <td>{currEle.deaths}</td>
                                    <td>{currEle.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Covid;
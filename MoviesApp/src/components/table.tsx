import React, { useEffect, useState } from "react";
import {getPopularMovies} from "../services/movies";



export default function Table(): JSX.Element {
    const [movies, setMovies] = useState<any>();
    const [page, setpage] = useState<any>();

    const getData = async (page:number) => {
        const { data } =  await getPopularMovies(page);
        setMovies(data);
        setpage(data.page)
    }

    useEffect(() => {
        getData(1)
    }, []);

    console.log(movies);

    var newArr = !movies? null: movies.results.map((item) => {
       return (
        <tr>
            <td>{item.title}</td>
            <td>{item.popularity}</td>
            <td>{item.release_date}</td>
            <td>{item.vote_count}</td>
        </tr>
       );
    })

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Release Date</th>
                    <th scope="col"># Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {newArr}
                </tbody>
            </table>
        </div>
    );
}

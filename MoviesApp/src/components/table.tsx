import React, { useEffect, useState } from "react";
import {getPopularMovies} from "../services/movies"



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

    return (
        <div>
            <p>Hello</p>
        </div>
    );
}

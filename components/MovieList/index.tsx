"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/discover/movie", {
          params: {
            include_adult: false,
            page: 1,
          },
        });

        setMovies(response.data.results ?? []);
        console.log(response.data);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os filmes.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, );

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Filmes</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-xl">
        Aqui você pode encontrar uma lista dos seus filmes favoritos.
      </p>

      {loading && <p>Carregando filmes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && movies.length === 0 && !error && (
        <p>Nenhum filme encontrado para essa keyword.</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {movie.poster_path ? (
              <img
                className="mb-4 h-72 w-full rounded object-cover"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className="mb-4 flex h-72 items-center justify-center rounded bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Sem imagem
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
              {movie.release_date} • {movie.vote_average.toFixed(1)} ⭐
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

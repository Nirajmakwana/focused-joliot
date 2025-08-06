export const dynamic = "force-dynamic";

import { getMovieDetails } from "@/lib/api";
import { MovieDetails } from "@/types/movie";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetailsPage({ params }: PageProps) {
  const movie: MovieDetails = await getMovieDetails(params.id);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.ac-illust.com%2Fclip-art%2F25480354%2Fno-image-thumbnail-1-with-no-image&psig=AOvVaw1pop-yY3LTf1e5OIu8QKE3&ust=1754565224385000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC-_qWH9o4DFQAAAAAdAAAAABAE"
          }
          alt={movie.Title}
          className="w-full md:w-60 rounded shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-500 mb-2">
            {movie.Type.toUpperCase()} • {movie.Year} • {movie.Runtime}
          </p>
          <p className="mb-4">{movie.Plot}</p>

          <ul className="space-y-1 text-sm">
            <li>
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li>
              <strong>Director:</strong> {movie.Director}
            </li>
            <li>
              <strong>Actors:</strong> {movie.Actors}
            </li>
            <li>
              <strong>Language:</strong> {movie.Language}
            </li>
            <li>
              <strong>Country:</strong> {movie.Country}
            </li>
            <li>
              <strong>Awards:</strong> {movie.Awards}
            </li>
            <li>
              <strong>IMDb Rating:</strong> {movie.imdbRating}
            </li>
            <li>
              <strong>Released:</strong> {movie.Released}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

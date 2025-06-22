import { musicData } from "../assets/SpotifyData";

const MusicPage = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Music</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {musicData.map((song) => (
          <div
            key={song.id}
            className="bg-[#1f1f1f] rounded-lg hover:bg-[#2a2a2a] p-2 cursor-pointer transition"
          >
            <img src={song.cover} alt={song.title} className="rounded-md mb-2 w-full h-40 object-cover" />
            <h2 className="font-semibold">{song.title}</h2>
            <p className="text-gray-400 text-sm">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;

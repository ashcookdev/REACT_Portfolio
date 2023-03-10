const items = [
    { id: 1, 
        songTitle: "MYB- Wake Me Up",
    song: './wake3.mp3'},
{   id: 2, 
    songTitle: "MYB- Vibes",
song: './vibes.mp3'}, 
 ]
  
  export default function Example() {
    return (
        
      <ul role="list" className="space-y-3 bg-gradient-to-r from-indigo-50 via-white-300 to-pink-50">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
            <h2>{item.songTitle}</h2>
            <audio src={item.song} controls> Wake Me </audio>
          </li>
        ))}
      </ul>
    )
  }
  
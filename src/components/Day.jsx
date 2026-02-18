export default function Day({ day }) {
  return (
    <section>
      <img src={day.images[0]} />

      <h2>{day.title}</h2>
      <p>{day.subtitle}</p>

      {day.places.map((p,i)=>(
        <div key={i}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>

          <a
            href={`https://www.google.com/maps?q=${p.lat},${p.lng}`}
            target="_blank"
          >
            Open in Maps
          </a>
        </div>
      ))}
    </section>
  );
}

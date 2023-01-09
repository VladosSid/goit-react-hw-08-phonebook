export function contactItem({ id, name, number }) {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
}

export default contactItem;
